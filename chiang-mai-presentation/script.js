/* global window, document */

try {

const { Category, Signal, places, sourceNotes, mapPoints } = window.guideData;

const categoryOrder = [
  Category.Food,
  Category.Cafe,
  Category.Nature,
  Category.Adventure,
  Category.Bar,
  Category.Culture,
  Category.Market,
  Category.Stay,
  Category.Wellness,
  Category.Shopping,
  Category.Caution
];

const signalLabel = Object.freeze({
  [Signal.Repeat]: "Repeat",
  [Signal.Strong]: "Strong",
  [Signal.Positive]: "Positive",
  [Signal.Mention]: "Mention",
  [Signal.Mixed]: "Mixed",
  [Signal.Caution]: "Caution"
});

const signalWeight = Object.freeze({
  [Signal.Repeat]: 0,
  [Signal.Strong]: 1,
  [Signal.Positive]: 2,
  [Signal.Mention]: 3,
  [Signal.Mixed]: 4,
  [Signal.Caution]: 5
});

let activeCategory = "All";
let activeMapCategory = "All";
let selectedMapPointId = mapPoints[0] ? mapPoints[0].id : "";

const bySignalThenName = (left, right) => {
  const signalGap = signalWeight[left.signal] - signalWeight[right.signal];
  return signalGap || left.name.localeCompare(right.name);
};

const resolvePath = (path) => new URL(path, document.baseURI).href;

const categoryCounts = () =>
  categoryOrder.reduce((counts, category) => {
    counts[category] = places.filter((place) => place.labels.includes(category)).length;
    return counts;
  }, {});

const createTag = (text, kind = "label") => {
  const tag = document.createElement("span");
  tag.className = `${kind} ${kind}-${String(text).toLowerCase().replace(/\s+/g, "-")}`;
  tag.textContent = text;
  return tag;
};

const createPlaceCard = (place) => {
  const card = document.createElement("article");
  card.className = `place-card signal-${place.signal}`;
  card.dataset.labels = place.labels.join(",");

  const media = document.createElement("figure");
  media.className = "place-media";

  const mainImage = document.createElement("img");
  mainImage.src = resolvePath(place.images[0]);
  mainImage.alt = `${place.name} image from Rednote source`;
  mainImage.loading = "lazy";
  mainImage.addEventListener("error", () => media.classList.add("image-failed"));
  media.appendChild(mainImage);

  if (place.images.length > 1) {
    const thumbRow = document.createElement("div");
    thumbRow.className = "thumb-row";
    const thumbs = place.images.slice(1, 4);
    thumbRow.style.gridTemplateColumns = `repeat(${thumbs.length}, minmax(0, 1fr))`;
    thumbs.forEach((src, index) => {
      const thumb = document.createElement("img");
      thumb.src = resolvePath(src);
      thumb.alt = `${place.name} supporting image ${index + 2}`;
      thumb.loading = "lazy";
      thumb.addEventListener("error", () => thumb.remove());
      thumbRow.appendChild(thumb);
    });
    media.appendChild(thumbRow);
  }

  const body = document.createElement("div");
  body.className = "place-body";

  const labelRow = document.createElement("div");
  labelRow.className = "label-row";
  place.labels.forEach((label) => labelRow.appendChild(createTag(label)));
  labelRow.appendChild(createTag(signalLabel[place.signal], "signal"));

  const title = document.createElement("h3");
  title.textContent = place.name;

  const area = document.createElement("p");
  area.className = "area";
  area.textContent = place.area;

  const reason = document.createElement("p");
  reason.className = "reason";
  reason.textContent = place.reason;

  const source = document.createElement("p");
  source.className = "source-line";
  source.textContent = `Source: ${place.sources.join(" · ")}`;

  body.append(labelRow, title, area, reason, source);
  card.append(media, body);
  return card;
};

const renderCards = (targetId, list) => {
  const target = document.getElementById(targetId);
  target.replaceChildren(...list.map(createPlaceCard));
};

const hasAnyLabel = (place, labels) => labels.some((label) => place.labels.includes(label));
const placeByName = new Map(places.map((place) => [place.name, place]));

const markerCategory = (labels) => {
  const priority = [Category.Nature, Category.Adventure, Category.Food, Category.Cafe, Category.Bar, Category.Culture, Category.Market, Category.Stay];
  return priority.find((category) => labels.includes(category)) || labels[0] || Category.Culture;
};

const mapPointMatches = (point) => activeMapCategory === "All" || point.labels.includes(activeMapCategory);

const mapFilteredPoints = () => mapPoints.filter(mapPointMatches);

const renderMapPanel = (point) => {
  const target = document.getElementById("map-panel");
  if (!point) {
    target.innerHTML = "<p>No mapped places match this filter.</p>";
    return;
  }

  const title = document.createElement("h3");
  title.textContent = point.label;

  const labelRow = document.createElement("div");
  labelRow.className = "label-row";
  point.labels.forEach((label) => labelRow.appendChild(createTag(label)));

  const summary = document.createElement("p");
  summary.className = "map-panel-summary";
  summary.textContent = point.summary;

  const count = document.createElement("p");
  count.className = "source-line";
  count.textContent = `${point.places.length} mapped place${point.places.length === 1 ? "" : "s"}`;

  const list = document.createElement("div");
  list.className = "map-place-list";
  point.places.forEach((name) => {
    const sourcePlace = placeByName.get(name);
    const item = document.createElement("div");
    item.className = "map-place-item";
    const itemName = document.createElement("strong");
    itemName.textContent = name;
    const itemMeta = document.createElement("span");
    itemMeta.textContent = sourcePlace ? `${sourcePlace.area} · ${sourcePlace.labels.join(" / ")}` : "review note";
    item.append(itemName, itemMeta);
    list.appendChild(item);
  });

  target.replaceChildren(labelRow, title, summary, count, list);
};

const renderMapMarkers = () => {
  const target = document.getElementById("map-markers");
  const filtered = mapFilteredPoints();
  if (!filtered.some((point) => point.id === selectedMapPointId)) {
    selectedMapPointId = filtered[0] ? filtered[0].id : "";
  }

  target.replaceChildren(
    ...filtered.map((point) => {
      const primary = markerCategory(point.labels);
      const marker = document.createElement("button");
      marker.type = "button";
      marker.className = `map-marker map-marker-${primary.toLowerCase()}`;
      marker.style.left = `${point.x}%`;
      marker.style.top = `${point.y}%`;
      marker.setAttribute("aria-pressed", String(point.id === selectedMapPointId));
      marker.setAttribute("aria-label", `${point.label}: ${point.places.length} places`);

      const dot = document.createElement("span");
      dot.className = "map-dot";
      const label = document.createElement("span");
      label.className = "map-label";
      label.textContent = point.label;
      const count = document.createElement("span");
      count.className = "map-count";
      count.textContent = String(point.places.length);
      marker.append(dot, label, count);

      marker.addEventListener("click", () => {
        selectedMapPointId = point.id;
        renderMapMarkers();
        renderMapPanel(point);
      });

      return marker;
    })
  );

  renderMapPanel(filtered.find((point) => point.id === selectedMapPointId));
};

const renderMapFilters = () => {
  const target = document.getElementById("map-category-filters");
  const categories = ["All", Category.Food, Category.Cafe, Category.Nature, Category.Adventure, Category.Bar, Category.Culture, Category.Market, Category.Stay, Category.Wellness, Category.Shopping];

  target.replaceChildren(
    ...categories.map((category) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "filter-button";
      button.dataset.category = category;
      button.setAttribute("aria-pressed", String(category === activeMapCategory));
      const count = category === "All" ? mapPoints.length : mapPoints.filter((point) => point.labels.includes(category)).length;
      button.textContent = `${category} ${count}`;
      button.addEventListener("click", () => {
        activeMapCategory = category;
        renderMapFilters();
        renderMapMarkers();
      });
      return button;
    })
  );
};

const renderStats = () => {
  const stats = [
    ["Notes", sourceNotes.length],
    ["Places", places.length],
    ["Labels", categoryOrder.length],
    ["Top picks", places.filter((place) => place.featured).length]
  ];

  const statGrid = document.getElementById("stats");
  statGrid.replaceChildren(
    ...stats.map(([label, value]) => {
      const item = document.createElement("div");
      item.className = "stat";
      item.innerHTML = `<span>${value}</span><small>${label}</small>`;
      return item;
    })
  );
};

const renderCategoryFilters = () => {
  const counts = categoryCounts();
  const target = document.getElementById("category-filters");
  const categories = ["All", ...categoryOrder];

  target.replaceChildren(
    ...categories.map((category) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "filter-button";
      button.dataset.category = category;
      button.setAttribute("aria-pressed", String(category === activeCategory));
      const count = category === "All" ? places.length : counts[category];
      button.textContent = `${category} ${count}`;
      button.addEventListener("click", () => {
        activeCategory = category;
        renderAllPlaces();
        renderCategoryFilters();
      });
      return button;
    })
  );
};

const renderAllPlaces = () => {
  const query = document.getElementById("place-search").value.trim().toLowerCase();
  const filtered = places
    .filter((place) => activeCategory === "All" || place.labels.includes(activeCategory))
    .filter((place) => {
      if (!query) return true;
      return [place.name, place.area, place.reason, ...place.labels, ...place.sources]
        .join(" ")
        .toLowerCase()
        .includes(query);
    })
    .sort(bySignalThenName);

  document.getElementById("result-count").textContent = `${filtered.length} places shown`;
  renderCards("all-grid", filtered);
};

const renderSourceNotes = () => {
  const target = document.getElementById("source-notes");
  target.replaceChildren(
    ...sourceNotes.map((source) => {
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = resolvePath(source.path);
      link.textContent = source.title;
      item.appendChild(link);
      return item;
    })
  );
};

const hydrate = () => {
  renderStats();
  renderCards("featured-grid", places.filter((place) => place.featured).sort(bySignalThenName));
  renderCards(
    "nature-grid",
    places.filter((place) => hasAnyLabel(place, [Category.Nature, Category.Adventure])).sort(bySignalThenName)
  );
  renderCards(
    "food-grid",
    places.filter((place) => hasAnyLabel(place, [Category.Food, Category.Cafe])).sort(bySignalThenName)
  );
  renderCards(
    "culture-grid",
    places
      .filter((place) => hasAnyLabel(place, [Category.Bar, Category.Culture, Category.Market, Category.Shopping, Category.Wellness]))
      .sort(bySignalThenName)
  );
  renderCards("stay-grid", places.filter((place) => place.labels.includes(Category.Stay)).sort(bySignalThenName));
  renderMapFilters();
  renderMapMarkers();
  renderCategoryFilters();
  renderAllPlaces();
  renderSourceNotes();

  document.getElementById("place-search").addEventListener("input", renderAllPlaces);
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", hydrate);
} else {
  hydrate();
}
} catch (error) {
  const report = document.createElement("pre");
  report.className = "runtime-error";
  report.textContent = `Runtime error: ${error && error.stack ? error.stack : error}`;
  document.body.prepend(report);
}
