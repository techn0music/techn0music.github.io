/* global window */

/**
 * @typedef {"Food" | "Cafe" | "Nature" | "Adventure" | "Bar" | "Culture" | "Market" | "Stay" | "Wellness" | "Shopping" | "Caution"} Category
 * @typedef {"repeat" | "strong" | "positive" | "mention" | "mixed" | "caution"} Signal
 * @typedef {{ title: string, path: string }} SourceNote
 * @typedef {{ name: string, labels: Category[], signal: Signal, area: string, reason: string, sources: string[], images: string[], featured?: boolean }} Place
 * @typedef {{ id: string, label: string, labels: Category[], x: number, y: number, summary: string, places: string[] }} MapPoint
 */

const Category = Object.freeze({
  Food: "Food",
  Cafe: "Cafe",
  Nature: "Nature",
  Adventure: "Adventure",
  Bar: "Bar",
  Culture: "Culture",
  Market: "Market",
  Stay: "Stay",
  Wellness: "Wellness",
  Shopping: "Shopping",
  Caution: "Caution"
});

const Signal = Object.freeze({
  Repeat: "repeat",
  Strong: "strong",
  Positive: "positive",
  Mention: "mention",
  Mixed: "mixed",
  Caution: "caution"
});

const Folder = Object.freeze({
  EatBig: "在清迈大吃特吃 本人实话大测评",
  OnePlace: "如果清迈只推荐去一个地方",
  VillageLoop: "Chiang Mai🌳l 一半是乡村一半是国际村🏕️",
  Bars: "清迈值得去的小众club和bar",
  Trees: "树的集锦🌳清迈真的是一座大型自然博物馆🌳",
  FiveDays: "清迈5日游",
  Michelin: "清迈最惊艳的平价米其林",
  Drink: "🇹🇭确实是清迈no.1好喝的！！！！！",
  Food21: "🇹🇭清迈21家吃喝合集（不完全记录版）",
  Hotels: "在清迈住的三家酒店 🏨",
  StayAreas: "清迈住哪里好",
  Food17: "清迈20天，17间餐厅真吃感受",
  Food15: "🇹🇭离开清迈后，我念念不忘的15家店（附地址",
  Tourist12: "🇹🇭去清迈很喜欢的12家店！！（游客版）"
});

const image = (folder, index) => `../rednote/unzipped/${folder}/image_${index}.jpg`;
const note = (folder) => `../rednote/unzipped/${folder}/text.txt`;
const mapImage = "../Chiang Mai -- map.png";

/** @type {SourceNote[]} */
const sourceNotes = [
  { title: "在清迈大吃特吃 本人实话大测评", path: note(Folder.EatBig) },
  { title: "如果清迈只推荐去一个地方", path: note(Folder.OnePlace) },
  { title: "清迈20天，17间餐厅真吃感受", path: note(Folder.Food17) },
  { title: "清迈住哪里好", path: note(Folder.StayAreas) },
  { title: "树的集锦：清迈真的是一座大型自然博物馆", path: note(Folder.Trees) },
  { title: "清迈最惊艳的平价米其林", path: note(Folder.Michelin) },
  { title: "Chiang Mai：一半是乡村一半是国际村", path: note(Folder.VillageLoop) },
  { title: "确实是清迈 no.1 好喝的", path: note(Folder.Drink) },
  { title: "清迈21家吃喝合集", path: note(Folder.Food21) },
  { title: "清迈值得去的小众 club 和 bar", path: note(Folder.Bars) },
  { title: "在清迈住的三家酒店", path: note(Folder.Hotels) },
  { title: "清迈5日游", path: note(Folder.FiveDays) },
  { title: "离开清迈后念念不忘的15家店", path: note(Folder.Food15) },
  { title: "去清迈很喜欢的12家店", path: note(Folder.Tourist12) }
];

/** @param {Place} spec @returns {Place} */
const place = (spec) => spec;

/** @type {Place[]} */
const places = [
  place({
    name: "Lanna Traditional House Museum",
    labels: [Category.Culture, Category.Nature],
    signal: Signal.Repeat,
    area: "Near Chiang Mai University",
    reason: "The strongest slow-travel culture pick: quiet Lanna houses under old trees, low crowd pressure, and a clear reason to pause rather than rush.",
    sources: ["如果清迈只推荐去一个地方", "树的集锦", "Chiang Mai 一半是乡村一半是国际村"],
    images: [image(Folder.OnePlace, 1), image(Folder.OnePlace, 2), image(Folder.Trees, 9)],
    featured: true
  }),
  place({
    name: "Skyline Jungle Flight / Sky Line",
    labels: [Category.Adventure, Category.Nature],
    signal: Signal.Repeat,
    area: "Forest day trip",
    reason: "The most enthusiastically reviewed activity: richer than Sticky Waterfall for play value, with helpful guides and photo-friendly forest action.",
    sources: ["清迈5日游", "Chiang Mai 一半是乡村一半是国际村"],
    images: [image(Folder.FiveDays, 1), image(Folder.VillageLoop, 14), image(Folder.VillageLoop, 15)],
    featured: true
  }),
  place({
    name: "Bua Tong Sticky Waterfall",
    labels: [Category.Nature, Category.Adventure],
    signal: Signal.Strong,
    area: "North of Chiang Mai",
    reason: "Beautiful, cool, and unusually interactive because you can climb the limestone waterfall; the review also flags crowding as the main downside.",
    sources: ["清迈5日游"],
    images: [image(Folder.FiveDays, 7), image(Folder.FiveDays, 8), mapImage],
    featured: true
  }),
  place({
    name: "Ekachan",
    labels: [Category.Food],
    signal: Signal.Repeat,
    area: "Chiang Mai city",
    reason: "Repeatedly praised Michelin-listed Thai meal: beef salad, fried wings, tom yum, crab egg roll, and stir-fried greens all landed well.",
    sources: ["在清迈大吃特吃", "清迈5日游"],
    images: [image(Folder.EatBig, 1), image(Folder.EatBig, 2), image(Folder.FiveDays, 9)],
    featured: true
  }),
  place({
    name: "Joost",
    labels: [Category.Cafe, Category.Food],
    signal: Signal.Repeat,
    area: "Nimman",
    reason: "A repeat drink stop: one note says six juices were all good, another still missed it after leaving Chiang Mai.",
    sources: ["清迈5日游", "离开清迈后念念不忘的15家店"],
    images: [image(Folder.FiveDays, 4), image(Folder.Food15, 4), image(Folder.Drink, 1)],
    featured: true
  }),
  place({
    name: "Kat's Kitchen",
    labels: [Category.Food],
    signal: Signal.Repeat,
    area: "Old City",
    reason: "The value Thai-food pick: praised as affordable, generous, and reliably tasty, with fresh squid and sauces singled out.",
    sources: ["清迈最惊艳的平价米其林", "离开清迈后念念不忘的15家店"],
    images: [image(Folder.Michelin, 1), image(Folder.Michelin, 2), image(Folder.Food15, 12)],
    featured: true
  }),
  place({
    name: "Nimman Road",
    labels: [Category.Stay, Category.Cafe, Category.Shopping],
    signal: Signal.Strong,
    area: "Nimman",
    reason: "Best base for a 3-5 day first trip: design shops, cafes, nightlife, and walkable discovery, with some noise as the tradeoff.",
    sources: ["清迈住哪里好", "在清迈住的三家酒店"],
    images: [image(Folder.StayAreas, 1), image(Folder.Hotels, 12), image(Folder.Tourist12, 1)],
    featured: true
  }),
  place({
    name: "Abandon Radio",
    labels: [Category.Bar],
    signal: Signal.Strong,
    area: "City bar scene",
    reason: "Small-party rooftop energy: reggae and hip-hop nights, food and drinks, colored stairwell lights, graffiti, and breezy chill time.",
    sources: ["清迈值得去的小众club和bar"],
    images: [image(Folder.Bars, 1), image(Folder.Bars, 2), image(Folder.Bars, 3)],
    featured: true
  }),
  place({
    name: "Noise",
    labels: [Category.Bar],
    signal: Signal.Strong,
    area: "Near Old City",
    reason: "The pure techno pick, hidden but lively, with weekend parties and a dance atmosphere the reviewer liked a lot.",
    sources: ["清迈值得去的小众club和bar"],
    images: [image(Folder.Bars, 4), image(Folder.Bars, 5), image(Folder.Bars, 6)],
    featured: true
  }),
  place({
    name: "InChala Teahouse",
    labels: [Category.Cafe, Category.Bar, Category.Culture],
    signal: Signal.Strong,
    area: "Behind Chiang Mai University",
    reason: "A handmade, dreamlike rest stop after Doi Suthep: outdoor hut, music, cats, tea, occasional film, meditation, divination, and music events.",
    sources: ["清迈值得去的小众club和bar"],
    images: [image(Folder.Bars, 7), image(Folder.Bars, 8), image(Folder.Bars, 9)],
    featured: true
  }),
  place({
    name: "Warorot Market + Old City",
    labels: [Category.Market, Category.Culture, Category.Shopping],
    signal: Signal.Mixed,
    area: "Old City / Chang Moi",
    reason: "Good for a compact market-and-old-city pass: souvenir bags, jewelry, and portrait ideas, but the review found only a few standout shops.",
    sources: ["清迈5日游", "在清迈住的三家酒店"],
    images: [image(Folder.FiveDays, 11), image(Folder.Hotels, 18), mapImage],
    featured: true
  }),
  place({
    name: "Mae Ngat Dam / Pha Dang Camping",
    labels: [Category.Nature],
    signal: Signal.Positive,
    area: "Mountain reservoir day trip",
    reason: "A road-trip nature stop for water, open views, and camping atmosphere outside the city.",
    sources: ["Chiang Mai 一半是乡村一半是国际村"],
    images: [image(Folder.VillageLoop, 1), image(Folder.VillageLoop, 2)]
  }),
  place({
    name: "Mae Tia Waterfall",
    labels: [Category.Nature],
    signal: Signal.Positive,
    area: "Waterfall route",
    reason: "Included as a mountain-waterfall stop in the countryside loop, useful for travelers building a nature-heavy day.",
    sources: ["Chiang Mai 一半是乡村一半是国际村"],
    images: [image(Folder.VillageLoop, 3)]
  }),
  place({
    name: "Hey Now Chiang Dao",
    labels: [Category.Cafe, Category.Nature],
    signal: Signal.Mention,
    area: "Chiang Dao",
    reason: "Named in the village-and-mountain roundup as a Chiang Dao stop, best treated as part of a slower northern drive.",
    sources: ["Chiang Mai 一半是乡村一半是国际村"],
    images: [image(Folder.VillageLoop, 4)]
  }),
  place({
    name: "The Giant",
    labels: [Category.Cafe, Category.Nature],
    signal: Signal.Mention,
    area: "Forest cafe route",
    reason: "A tree-and-forest cafe entry in the countryside list, useful if the trip theme is green views and destination cafes.",
    sources: ["Chiang Mai 一半是乡村一半是国际村"],
    images: [image(Folder.VillageLoop, 5)]
  }),
  place({
    name: "Maekee Sheep Farm",
    labels: [Category.Nature],
    signal: Signal.Mention,
    area: "Countryside route",
    reason: "A light, pastoral stop from the rural roundup, better as a route add-on than a standalone anchor.",
    sources: ["Chiang Mai 一半是乡村一半是国际村"],
    images: [image(Folder.VillageLoop, 6)]
  }),
  place({
    name: "Giant Trees Alley",
    labels: [Category.Nature],
    signal: Signal.Positive,
    area: "Tree route",
    reason: "Matches the Rednote theme that Chiang Mai's ordinary greenery feels museum-worthy: go for road-scale trees and shade.",
    sources: ["Chiang Mai 一半是乡村一半是国际村", "树的集锦"],
    images: [image(Folder.VillageLoop, 7), image(Folder.Trees, 3), image(Folder.Trees, 4)]
  }),
  place({
    name: "Cypress Lanes",
    labels: [Category.Nature],
    signal: Signal.Mention,
    area: "Tree route",
    reason: "A visual road stop in the countryside list, suited to photo-oriented drives and slow green wandering.",
    sources: ["Chiang Mai 一半是乡村一半是国际村"],
    images: [image(Folder.VillageLoop, 8)]
  }),
  place({
    name: "Lanna Elephant Care",
    labels: [Category.Nature],
    signal: Signal.Mention,
    area: "Elephant care route",
    reason: "Named twice in the countryside list, suggesting it was part of the traveler's animal-care day-trip set.",
    sources: ["Chiang Mai 一半是乡村一半是国际村"],
    images: [image(Folder.VillageLoop, 9), image(Folder.VillageLoop, 18)]
  }),
  place({
    name: "Tarzan World Adventure",
    labels: [Category.Adventure, Category.Nature],
    signal: Signal.Mention,
    area: "Adventure route",
    reason: "Appears twice in the rural adventure list, a good candidate for travelers who want more physical activity beyond cafes.",
    sources: ["Chiang Mai 一半是乡村一半是国际村"],
    images: [image(Folder.VillageLoop, 10), image(Folder.VillageLoop, 17)]
  }),
  place({
    name: "Spiral Coco",
    labels: [Category.Cafe],
    signal: Signal.Mention,
    area: "Countryside cafe route",
    reason: "Listed as one of the rural cafe stops; include it when building a relaxed cafe-hopping drive.",
    sources: ["Chiang Mai 一半是乡村一半是国际村"],
    images: [image(Folder.VillageLoop, 11)]
  }),
  place({
    name: "Huen Inthanin Visitor Center",
    labels: [Category.Culture, Category.Nature],
    signal: Signal.Mention,
    area: "Nature route",
    reason: "A visitor-center stop in the mountain-and-village list, likely best as a practical waypoint for a wider nature loop.",
    sources: ["Chiang Mai 一半是乡村一半是国际村"],
    images: [image(Folder.VillageLoop, 12)]
  }),
  place({
    name: "Mae Wang National Park",
    labels: [Category.Nature, Category.Adventure],
    signal: Signal.Positive,
    area: "Southwest of Chiang Mai",
    reason: "A larger nature anchor in the review bundle, good for travelers who want the trip to move beyond the city.",
    sources: ["Chiang Mai 一半是乡村一半是国际村"],
    images: [image(Folder.VillageLoop, 13), mapImage]
  }),
  place({
    name: "Sky Walk",
    labels: [Category.Adventure, Category.Nature],
    signal: Signal.Mention,
    area: "Viewpoint route",
    reason: "Listed near Skyline in the adventure sequence, useful as a view-oriented add-on.",
    sources: ["Chiang Mai 一半是乡村一半是国际村"],
    images: [image(Folder.VillageLoop, 15)]
  }),
  place({
    name: "Pha Chop",
    labels: [Category.Nature],
    signal: Signal.Mention,
    area: "Viewpoint route",
    reason: "A short named nature stop from the countryside list, best grouped with nearby outdoor points.",
    sources: ["Chiang Mai 一半是乡村一半是国际村"],
    images: [image(Folder.VillageLoop, 16)]
  }),
  place({
    name: "The Valley of Love",
    labels: [Category.Nature, Category.Cafe],
    signal: Signal.Mention,
    area: "Countryside route",
    reason: "A named scenic stop in the countryside list, likely most useful as a relaxed photo-and-view add-on.",
    sources: ["Chiang Mai 一半是乡村一半是国际村"],
    images: [image(Folder.VillageLoop, 18)]
  }),
  place({
    name: "Mae Kampong Village",
    labels: [Category.Culture, Category.Nature, Category.Cafe],
    signal: Signal.Positive,
    area: "East of Chiang Mai",
    reason: "Included as a village stop in the rural Chiang Mai frame: pair it with mountain cafes, cool air, and a slower day out.",
    sources: ["Chiang Mai 一半是乡村一半是国际村"],
    images: [mapImage, image(Folder.VillageLoop, 18)]
  }),
  place({
    name: "Water Tree / 水中大树",
    labels: [Category.Nature],
    signal: Signal.Positive,
    area: "On the Sticky Waterfall route",
    reason: "A scenic stop the reviewer says is worth adding when going to Sticky Waterfall; go around sunset, but expect it to feel cold on the boat.",
    sources: ["清迈5日游", "树的集锦"],
    images: [image(Folder.FiveDays, 13), image(Folder.Trees, 1), image(Folder.Trees, 2)]
  }),
  place({
    name: "Ancient Tree Park / 古树公园",
    labels: [Category.Nature],
    signal: Signal.Positive,
    area: "City tree route",
    reason: "A tree-focused stop from the photography note, aligned with the theme that Chiang Mai rewards simply looking up.",
    sources: ["树的集锦"],
    images: [image(Folder.Trees, 3), image(Folder.Trees, 4), image(Folder.Trees, 8)]
  }),
  place({
    name: "Chiang Mai University",
    labels: [Category.Culture, Category.Nature, Category.Food],
    signal: Signal.Positive,
    area: "CMU",
    reason: "Shows up as both a tree-photo location and a food area; the back gate night market kaprao rice gets especially emotional praise.",
    sources: ["树的集锦", "清迈5日游"],
    images: [image(Folder.Trees, 14), image(Folder.FiveDays, 5)]
  }),
  place({
    name: "Dong",
    labels: [Category.Food],
    signal: Signal.Strong,
    area: "Local Thai restaurant",
    reason: "A hotel-staff recommendation with distinctive dishes: pork sausage, steamed egg with pork, fish roe soup, and pork intestine.",
    sources: ["在清迈大吃特吃"],
    images: [image(Folder.EatBig, 3), image(Folder.EatBig, 4), image(Folder.EatBig, 5)]
  }),
  place({
    name: "So Sood",
    labels: [Category.Food],
    signal: Signal.Strong,
    area: "Chiang Mai city",
    reason: "A confident no-stress food stop in the review: pork noodles, mixed rice noodles, and mango sticky rice were all called good.",
    sources: ["在清迈大吃特吃"],
    images: [image(Folder.EatBig, 6), image(Folder.EatBig, 7), image(Folder.EatBig, 8)]
  }),
  place({
    name: "Meena Rice Based Cuisine",
    labels: [Category.Food, Category.Cafe],
    signal: Signal.Mixed,
    area: "Near craft / market route",
    reason: "Good as a convenient lunch when nearby, especially fried fish, but the signature colorful rice was not treated as a must-go.",
    sources: ["在清迈大吃特吃", "清迈最惊艳的平价米其林"],
    images: [image(Folder.EatBig, 9), image(Folder.Michelin, 3)]
  }),
  place({
    name: "Table to Garden",
    labels: [Category.Food],
    signal: Signal.Positive,
    area: "Old City",
    reason: "Organic, homemade-condiment Thai food with fresh ingredients; nice but not framed as essential.",
    sources: ["在清迈大吃特吃"],
    images: [image(Folder.EatBig, 10)]
  }),
  place({
    name: "Sanae",
    labels: [Category.Food, Category.Caution],
    signal: Signal.Caution,
    area: "Near art village",
    reason: "The review was explicitly underwhelmed; keep it low priority unless another source gives a stronger dish recommendation.",
    sources: ["在清迈大吃特吃"],
    images: [image(Folder.EatBig, 10)]
  }),
  place({
    name: "Kiat Niyom",
    labels: [Category.Food],
    signal: Signal.Strong,
    area: "Near Nimman",
    reason: "A highly rated first-meal Thai restaurant: stir-fried vegetables, fried greens with bacon, and crab fried rice stood out.",
    sources: ["清迈5日游"],
    images: [image(Folder.FiveDays, 8)]
  }),
  place({
    name: "JEAB",
    labels: [Category.Food],
    signal: Signal.Strong,
    area: "Nimman",
    reason: "A Nimman Thai restaurant with Chinese-friendly service; the red curry shrimp was the memorable order.",
    sources: ["清迈5日游"],
    images: [image(Folder.FiveDays, 10)]
  }),
  place({
    name: "Kao Soy Nimman",
    labels: [Category.Food, Category.Caution],
    signal: Signal.Mixed,
    area: "Nimman",
    reason: "A famous curry noodle stop, but the Rednote review found it only average and disliked dishes beyond the khao soi.",
    sources: ["清迈5日游"],
    images: [image(Folder.FiveDays, 12)]
  }),
  place({
    name: "Charlie Thai",
    labels: [Category.Cafe],
    signal: Signal.Positive,
    area: "Chiang Mai city",
    reason: "Worth one drink: the named Thai tea was good, but the review does not frame it as a repeated stop.",
    sources: ["清迈5日游"],
    images: [image(Folder.Drink, 2), image(Folder.Drink, 3)]
  }),
  place({
    name: "Fruit shake stall near BED Nimman",
    labels: [Category.Cafe, Category.Food],
    signal: Signal.Strong,
    area: "Near BED Nimman",
    reason: "Cheap coconut and watermelon shakes with fruit inside; the reviewer says they bought it almost every time they passed.",
    sources: ["确实是清迈 no.1 好喝的"],
    images: [image(Folder.Drink, 1), image(Folder.Drink, 2), image(Folder.Drink, 3)]
  }),
  place({
    name: "Aoyjai Kitchen",
    labels: [Category.Food],
    signal: Signal.Positive,
    area: "Chiang Mai city",
    reason: "Named first in a post about places missed after leaving Chiang Mai, so it belongs high on the food longlist.",
    sources: ["离开清迈后念念不忘的15家店"],
    images: [image(Folder.Food15, 1)]
  }),
  place({
    name: "Neng's Clay Oven Roasted Pork",
    labels: [Category.Food],
    signal: Signal.Repeat,
    area: "Chiang Mai city",
    reason: "Shows up in the missed-after-leaving list and in the Michelin/value note as a roasted pork place worth repeat attempts.",
    sources: ["离开清迈后念念不忘的15家店", "清迈最惊艳的平价米其林"],
    images: [image(Folder.Food15, 2), image(Folder.Michelin, 4)]
  }),
  place({
    name: "Champion Kaprao Rice",
    labels: [Category.Food],
    signal: Signal.Positive,
    area: "Chiang Mai city",
    reason: "A simple, high-craving item in the missed-after-leaving list; pair with the CMU night-market kaprao note if chasing this dish.",
    sources: ["离开清迈后念念不忘的15家店"],
    images: [image(Folder.Food15, 3)]
  }),
  place({
    name: "Yook Samai",
    labels: [Category.Food, Category.Cafe],
    signal: Signal.Positive,
    area: "Chiang Mai city",
    reason: "Listed among the 15 most-missed Chiang Mai shops, with the local export image serving as the main evidence.",
    sources: ["离开清迈后念念不忘的15家店"],
    images: [image(Folder.Food15, 5)]
  }),
  place({
    name: "Baan Kang Wat / Art Village",
    labels: [Category.Culture, Category.Shopping, Category.Cafe],
    signal: Signal.Positive,
    area: "Near university / west side",
    reason: "Appears as an art-village anchor and is paired with cafe mentions, making it a good slow shopping-and-craft block.",
    sources: ["离开清迈后念念不忘的15家店", "清迈21家吃喝合集"],
    images: [image(Folder.Food15, 6), image(Folder.Food15, 7), image(Folder.Food21, 12)]
  }),
  place({
    name: "No.39 Cafe",
    labels: [Category.Cafe, Category.Nature],
    signal: Signal.Positive,
    area: "West side cafe route",
    reason: "A cafe entry in the missed-after-leaving list, likely useful when pairing Baan Kang Wat and university-side wandering.",
    sources: ["离开清迈后念念不忘的15家店"],
    images: [image(Folder.Food15, 8)]
  }),
  place({
    name: "Parkorn's Kitchen",
    labels: [Category.Food],
    signal: Signal.Positive,
    area: "Chiang Mai city",
    reason: "Included in the most-missed list, a reliable longlist candidate when Thai meals are the trip priority.",
    sources: ["离开清迈后念念不忘的15家店"],
    images: [image(Folder.Food15, 9)]
  }),
  place({
    name: "Kaprao Nueanuea / กะเพราเนื้อเนื้อ ช้างม่อย",
    labels: [Category.Food],
    signal: Signal.Repeat,
    area: "Chang Moi",
    reason: "Repeated in the 15-shop and 21-shop food lists; treat it as a strong candidate for kaprao / beef rice.",
    sources: ["离开清迈后念念不忘的15家店", "清迈21家吃喝合集"],
    images: [image(Folder.Food15, 10), image(Folder.Food21, 5)]
  }),
  place({
    name: "Red Basil",
    labels: [Category.Food],
    signal: Signal.Positive,
    area: "Chiang Mai city",
    reason: "Named in the most-missed food list; keep it as a dinner candidate when nearby.",
    sources: ["离开清迈后念念不忘的15家店"],
    images: [image(Folder.Food15, 11)]
  }),
  place({
    name: "Grandma's Kitchen / 奶奶的厨房",
    labels: [Category.Food],
    signal: Signal.Positive,
    area: "Chiang Mai city",
    reason: "Included in the missed-after-leaving list, suggesting comfort-food appeal rather than a one-off novelty.",
    sources: ["离开清迈后念念不忘的15家店"],
    images: [image(Folder.Food15, 13)]
  }),
  place({
    name: "Win",
    labels: [Category.Food],
    signal: Signal.Positive,
    area: "Chiang Mai city",
    reason: "A compact longlist entry from the most-missed post; use the source image to decide whether it fits the food mood.",
    sources: ["离开清迈后念念不忘的15家店"],
    images: [image(Folder.Food15, 14)]
  }),
  place({
    name: "Uncle Kani",
    labels: [Category.Food],
    signal: Signal.Repeat,
    area: "Chiang Mai city",
    reason: "The top-ranked restaurant in the 20-day food note and repeated in the 21-shop roundup.",
    sources: ["清迈20天，17间餐厅真吃感受", "清迈21家吃喝合集"],
    images: [image(Folder.Food17, 1), image(Folder.Food21, 8)]
  }),
  place({
    name: "Patus Pasta",
    labels: [Category.Food],
    signal: Signal.Strong,
    area: "Chiang Mai city",
    reason: "Ranked second in the 20-day restaurant note, useful for breaking up Thai-food fatigue.",
    sources: ["清迈20天，17间餐厅真吃感受"],
    images: [image(Folder.Food17, 2)]
  }),
  place({
    name: "Chiang Mai small hotpot",
    labels: [Category.Food],
    signal: Signal.Strong,
    area: "Chiang Mai city",
    reason: "Tied for third in the 20-day food note, framed as a comfort option when Thai flavors feel too sweet.",
    sources: ["清迈20天，17间餐厅真吃感受"],
    images: [image(Folder.Food17, 3)]
  }),
  place({
    name: "Dai Fu Ban / 带福办",
    labels: [Category.Food],
    signal: Signal.Strong,
    area: "Chiang Mai city",
    reason: "Tied for third in the 20-day food note, another backup for longer stays when variety matters.",
    sources: ["清迈20天，17间餐厅真吃感受"],
    images: [image(Folder.Food17, 4)]
  }),
  place({
    name: "Kitchen Hush",
    labels: [Category.Food],
    signal: Signal.Mention,
    area: "Chiang Mai city",
    reason: "Part of the 21-shop eating-and-drinking list; the source gives a name and image but no detailed review.",
    sources: ["清迈21家吃喝合集"],
    images: [image(Folder.Food21, 1)]
  }),
  place({
    name: "The Baristro Asian Style",
    labels: [Category.Cafe],
    signal: Signal.Mention,
    area: "Chiang Mai cafe route",
    reason: "A cafe in the 21-shop roundup; add it when a polished cafe stop fits the day.",
    sources: ["清迈21家吃喝合集"],
    images: [image(Folder.Food21, 2)]
  }),
  place({
    name: "PARI - ปาริ",
    labels: [Category.Food, Category.Cafe],
    signal: Signal.Mention,
    area: "Chiang Mai city",
    reason: "Named in the 21-shop food-and-drink roundup, with the Rednote image as the main local evidence.",
    sources: ["清迈21家吃喝合集"],
    images: [image(Folder.Food21, 3)]
  }),
  place({
    name: "Mintnimal",
    labels: [Category.Cafe],
    signal: Signal.Mention,
    area: "Chiang Mai cafe route",
    reason: "A cafe-style entry in the 21-shop roundup, best used as a nearby add-on rather than a core destination.",
    sources: ["清迈21家吃喝合集"],
    images: [image(Folder.Food21, 4)]
  }),
  place({
    name: "Magokoro Teahouse",
    labels: [Category.Cafe, Category.Culture],
    signal: Signal.Mention,
    area: "Chiang Mai tea route",
    reason: "A teahouse / matcha entry from the 21-shop list, useful for a calmer cafe break.",
    sources: ["清迈21家吃喝合集"],
    images: [image(Folder.Food21, 6)]
  }),
  place({
    name: "OWL Brasserie",
    labels: [Category.Food, Category.Cafe],
    signal: Signal.Mention,
    area: "Chiang Mai city",
    reason: "Listed in the 21-shop roundup; keep it as a Western-leaning food option if nearby.",
    sources: ["清迈21家吃喝合集"],
    images: [image(Folder.Food21, 7)]
  }),
  place({
    name: "Carrot Coffee CNX",
    labels: [Category.Cafe],
    signal: Signal.Mention,
    area: "Chiang Mai cafe route",
    reason: "A named coffee stop from the cafe-heavy roundup.",
    sources: ["清迈21家吃喝合集"],
    images: [image(Folder.Food21, 9)]
  }),
  place({
    name: "Super Duper",
    labels: [Category.Food, Category.Cafe],
    signal: Signal.Mention,
    area: "Chiang Mai city",
    reason: "A visual-list entry in the 21-shop post, suitable for longlist browsing.",
    sources: ["清迈21家吃喝合集"],
    images: [image(Folder.Food21, 10)]
  }),
  place({
    name: "Artisan Sourdough by Apple Fahey",
    labels: [Category.Food, Category.Cafe],
    signal: Signal.Mention,
    area: "Chiang Mai city",
    reason: "A bread-focused entry in the 21-shop roundup, useful for breakfast or non-Thai-food variety.",
    sources: ["清迈21家吃喝合集"],
    images: [image(Folder.Food21, 11)]
  }),
  place({
    name: "GRAPH Baankangwat",
    labels: [Category.Cafe, Category.Culture],
    signal: Signal.Mention,
    area: "Baan Kang Wat",
    reason: "Pairs the art-village stop with a known coffee name; good if visiting Baan Kang Wat anyway.",
    sources: ["清迈21家吃喝合集"],
    images: [image(Folder.Food21, 12)]
  }),
  place({
    name: "ENOUGH FOR LIFE",
    labels: [Category.Cafe],
    signal: Signal.Mention,
    area: "Chiang Mai city",
    reason: "A cafe entry from the 21-shop list, included as a named option without detailed commentary.",
    sources: ["清迈21家吃喝合集"],
    images: [image(Folder.Food21, 13)]
  }),
  place({
    name: "Gin Udon",
    labels: [Category.Food],
    signal: Signal.Mention,
    area: "Chiang Mai city",
    reason: "A Japanese-food option from the roundup for days when the food plan needs a reset.",
    sources: ["清迈21家吃喝合集"],
    images: [image(Folder.Food21, 14)]
  }),
  place({
    name: "Single Origin Store Tha Pae",
    labels: [Category.Cafe],
    signal: Signal.Mention,
    area: "Tha Pae",
    reason: "A coffee entry in the Tha Pae zone, useful if staying around the gate or old city.",
    sources: ["清迈21家吃喝合集"],
    images: [image(Folder.Food21, 15)]
  }),
  place({
    name: "Rich Mountain BBQ",
    labels: [Category.Food],
    signal: Signal.Mention,
    area: "Chiang Mai city",
    reason: "A BBQ longlist entry from the food-and-drink roundup.",
    sources: ["清迈21家吃喝合集"],
    images: [image(Folder.Food21, 16)]
  }),
  place({
    name: "Shu Homemade",
    labels: [Category.Food, Category.Cafe],
    signal: Signal.Mention,
    area: "Chiang Mai city",
    reason: "A homemade-style food/cafe entry from the 21-shop roundup.",
    sources: ["清迈21家吃喝合集"],
    images: [image(Folder.Food21, 17)]
  }),
  place({
    name: "Khagee",
    labels: [Category.Cafe, Category.Food],
    signal: Signal.Mention,
    area: "Chiang Mai city",
    reason: "A bakery/cafe style stop from the 21-shop roundup, useful for breakfast or coffee.",
    sources: ["清迈21家吃喝合集"],
    images: [image(Folder.Food21, 18)]
  }),
  place({
    name: "North Gate Spirit",
    labels: [Category.Bar, Category.Food],
    signal: Signal.Mention,
    area: "North Gate",
    reason: "Named in the eating-and-drinking roundup; place it with the bar/nightlife longlist.",
    sources: ["清迈21家吃喝合集"],
    images: [image(Folder.Food21, 18), image(Folder.Bars, 11)]
  }),
  place({
    name: "Phithi",
    labels: [Category.Cafe],
    signal: Signal.Mention,
    area: "Chiang Mai cafe route",
    reason: "A named cafe in the 21-shop list; no detailed local note beyond inclusion.",
    sources: ["清迈21家吃喝合集"],
    images: [image(Folder.Food21, 18)]
  }),
  place({
    name: "GAAD Coffee",
    labels: [Category.Cafe],
    signal: Signal.Mention,
    area: "Chiang Mai cafe route",
    reason: "A named coffee shop in the 21-shop list; keep as a route-dependent option.",
    sources: ["清迈21家吃喝合集"],
    images: [image(Folder.Food21, 18)]
  }),
  place({
    name: "SUSHI UMAI",
    labels: [Category.Food],
    signal: Signal.Strong,
    area: "Chiang Mai city",
    reason: "A splurge compared with local Thai meals, but the review found the seafood rice bowl and squid sashimi very good value.",
    sources: ["清迈最惊艳的平价米其林"],
    images: [image(Folder.Michelin, 7), image(Folder.Michelin, 8)]
  }),
  place({
    name: "Chang Klan Night Bazaar stalls",
    labels: [Category.Market, Category.Food],
    signal: Signal.Mixed,
    area: "Chang Klan",
    reason: "Touristy and not the best value, but still framed as something visitors probably should experience once.",
    sources: ["清迈最惊艳的平价米其林", "清迈住哪里好"],
    images: [image(Folder.Michelin, 6), image(Folder.StayAreas, 4)]
  }),
  place({
    name: "PSYSQUARE",
    labels: [Category.Bar],
    signal: Signal.Positive,
    area: "Old City",
    reason: "Tiny open-air psy bar for late listening rather than a full club night; no alcohol, just drinks and music.",
    sources: ["清迈值得去的小众club和bar"],
    images: [image(Folder.Bars, 10), image(Folder.Bars, 11)]
  }),
  place({
    name: "The Square Massage",
    labels: [Category.Wellness],
    signal: Signal.Strong,
    area: "Chiang Mai city",
    reason: "The massage pick from the 5-day review: quieter and more comfortable than Cozy, with better technique.",
    sources: ["清迈5日游"],
    images: [image(Folder.FiveDays, 11)]
  }),
  place({
    name: "Cozy Massage",
    labels: [Category.Wellness],
    signal: Signal.Mixed,
    area: "Chiang Mai city",
    reason: "Decent value but not memorable; keep as a convenient fallback.",
    sources: ["清迈5日游"],
    images: [image(Folder.FiveDays, 11)]
  }),
  place({
    name: "Lantana Massage",
    labels: [Category.Wellness, Category.Caution],
    signal: Signal.Caution,
    area: "Chiang Mai city",
    reason: "Low-priority massage option in the review: simple room and ordinary oil-massage technique.",
    sources: ["清迈5日游"],
    images: [image(Folder.FiveDays, 11)]
  }),
  place({
    name: "Madam CNX",
    labels: [Category.Shopping],
    signal: Signal.Positive,
    area: "Old City / market route",
    reason: "A souvenir-bag stop called out within the Warorot and Old City walk.",
    sources: ["清迈5日游"],
    images: [image(Folder.FiveDays, 11)]
  }),
  place({
    name: "Silver Supplies & Co.",
    labels: [Category.Shopping],
    signal: Signal.Positive,
    area: "Old City / market route",
    reason: "Called out for beautiful flower earrings, useful if shopping for small accessories.",
    sources: ["清迈5日游"],
    images: [image(Folder.FiveDays, 11)]
  }),
  place({
    name: "Yolanda portrait studio",
    labels: [Category.Culture, Category.Shopping],
    signal: Signal.Mention,
    area: "Old City / market route",
    reason: "A portrait idea that was already fully booked in the review, so reserve early if it matters.",
    sources: ["清迈5日游"],
    images: [image(Folder.FiveDays, 11)]
  }),
  place({
    name: "Tha Pae Gate",
    labels: [Category.Stay, Category.Culture],
    signal: Signal.Positive,
    area: "Old City edge",
    reason: "A quieter stay base with easy old-city social energy; breakfast can be awkward for early risers because many nearby places open late.",
    sources: ["清迈住哪里好"],
    images: [image(Folder.StayAreas, 2)]
  }),
  place({
    name: "Chiang Mai Gate",
    labels: [Category.Stay, Category.Caution],
    signal: Signal.Caution,
    area: "South Old City",
    reason: "Not recommended as a stay base in the review because motorcycle noise felt worse than Nimman aircraft noise.",
    sources: ["清迈住哪里好"],
    images: [image(Folder.StayAreas, 3)]
  }),
  place({
    name: "Chang Klan Road",
    labels: [Category.Stay, Category.Market, Category.Food],
    signal: Signal.Positive,
    area: "Night Bazaar area",
    reason: "A balanced stay zone: quiet enough, rich enough, and directly useful for the night market.",
    sources: ["清迈住哪里好"],
    images: [image(Folder.StayAreas, 4)]
  }),
  place({
    name: "South of Chang Klan / Astra Sky River",
    labels: [Category.Stay],
    signal: Signal.Mixed,
    area: "South of Night Bazaar",
    reason: "A high-end apartment zone the reviewer liked for local cheap stalls, but it felt somewhat offset from the main travel core.",
    sources: ["清迈住哪里好"],
    images: [image(Folder.StayAreas, 5)]
  }),
  place({
    name: "Central Festival / The One",
    labels: [Category.Stay, Category.Shopping],
    signal: Signal.Mixed,
    area: "Central Festival",
    reason: "Better for families or long stays than solo short trips; convenient mall access but less lively for wandering.",
    sources: ["清迈住哪里好"],
    images: [image(Folder.StayAreas, 6)]
  }),
  place({
    name: "Book Design Hotel",
    labels: [Category.Stay],
    signal: Signal.Strong,
    area: "Chiang Mai city",
    reason: "Best hotel-value signal in the hotel note: large room, dry/wet separation, makeup desk, pool, and stylish restaurant for a low price.",
    sources: ["在清迈住的三家酒店"],
    images: [image(Folder.Hotels, 2), image(Folder.Hotels, 3), image(Folder.Hotels, 5)]
  }),
  place({
    name: "Hotel Noir",
    labels: [Category.Stay, Category.Shopping],
    signal: Signal.Positive,
    area: "Near Nimman",
    reason: "Beautiful, convenient, and near shops and Joost, but the room can be dark and small.",
    sources: ["在清迈住的三家酒店"],
    images: [image(Folder.Hotels, 6), image(Folder.Hotels, 9), image(Folder.Hotels, 12)]
  }),
  place({
    name: "Changmoi House / Little Village",
    labels: [Category.Stay, Category.Culture],
    signal: Signal.Strong,
    area: "Old City / Chang Moi edge",
    reason: "Large room, pretty plant-filled courtyard, good breakfast, and convenient access to Warorot by motorbike.",
    sources: ["在清迈住的三家酒店"],
    images: [image(Folder.Hotels, 13), image(Folder.Hotels, 16), image(Folder.Hotels, 18)]
  }),
  place({
    name: "Verbena Hotel",
    labels: [Category.Stay, Category.Caution],
    signal: Signal.Caution,
    area: "Chiang Mai city",
    reason: "Avoid signal from the 5-day review: power problems during showering, stained linens, and bathroom odor.",
    sources: ["清迈5日游"],
    images: [image(Folder.FiveDays, 13)]
  })
];

/** @type {MapPoint[]} */
const mapPoints = [
  {
    id: "nimman",
    label: "Nimman",
    labels: [Category.Stay, Category.Cafe, Category.Food, Category.Shopping],
    x: 40.6,
    y: 53.9,
    summary: "Best short-trip base in the reviews, with dense cafes, juice, Thai food, shopping, and convenient hotel notes.",
    places: [
      "Nimman Road",
      "Joost",
      "Fruit shake stall near BED Nimman",
      "Kiat Niyom",
      "JEAB",
      "Kao Soy Nimman",
      "The Baristro Asian Style",
      "Mintnimal",
      "Carrot Coffee CNX",
      "Phithi",
      "GAAD Coffee",
      "Hotel Noir"
    ]
  },
  {
    id: "west-cmu",
    label: "CMU / Art Village",
    labels: [Category.Culture, Category.Nature, Category.Cafe, Category.Bar, Category.Shopping],
    x: 38.1,
    y: 52.2,
    summary: "Slow west-side cluster: old Lanna houses, university trees, handmade tea-house energy, Baan Kang Wat, and destination cafes.",
    places: [
      "Lanna Traditional House Museum",
      "Chiang Mai University",
      "InChala Teahouse",
      "Baan Kang Wat / Art Village",
      "No.39 Cafe",
      "GRAPH Baankangwat",
      "Meena Rice Based Cuisine",
      "Sanae",
      "Magokoro Teahouse",
      "Ancient Tree Park / 古树公园"
    ]
  },
  {
    id: "old-city-chang-moi",
    label: "Old City / Chang Moi",
    labels: [Category.Culture, Category.Market, Category.Food, Category.Bar, Category.Shopping, Category.Stay],
    x: 45.0,
    y: 56.4,
    summary: "Walkable culture, old-city food, market shopping, Tha Pae coffee, North Gate nightlife, and Chang Moi stays.",
    places: [
      "Kat's Kitchen",
      "Warorot Market + Old City",
      "Table to Garden",
      "Kaprao Nueanuea / กะเพราเนื้อเนื้อ ช้างม่อย",
      "Single Origin Store Tha Pae",
      "North Gate Spirit",
      "PSYSQUARE",
      "Madam CNX",
      "Silver Supplies & Co.",
      "Yolanda portrait studio",
      "Tha Pae Gate",
      "Chiang Mai Gate",
      "Changmoi House / Little Village"
    ]
  },
  {
    id: "city-food-wellness",
    label: "City food + massage",
    labels: [Category.Food, Category.Cafe, Category.Wellness, Category.Stay, Category.Caution],
    x: 47.2,
    y: 58.0,
    summary: "A citywide longlist for meals and reset stops whose Rednote notes did not pin a tighter neighborhood.",
    places: [
      "Ekachan",
      "Dong",
      "So Sood",
      "Charlie Thai",
      "Aoyjai Kitchen",
      "Neng's Clay Oven Roasted Pork",
      "Champion Kaprao Rice",
      "Yook Samai",
      "Parkorn's Kitchen",
      "Red Basil",
      "Grandma's Kitchen / 奶奶的厨房",
      "Win",
      "Uncle Kani",
      "Patus Pasta",
      "Chiang Mai small hotpot",
      "Dai Fu Ban / 带福办",
      "Kitchen Hush",
      "PARI - ปาริ",
      "OWL Brasserie",
      "Super Duper",
      "Artisan Sourdough by Apple Fahey",
      "ENOUGH FOR LIFE",
      "Gin Udon",
      "Rich Mountain BBQ",
      "Shu Homemade",
      "Khagee",
      "SUSHI UMAI",
      "The Square Massage",
      "Cozy Massage",
      "Lantana Massage",
      "Book Design Hotel",
      "Verbena Hotel"
    ]
  },
  {
    id: "chang-klan",
    label: "Chang Klan",
    labels: [Category.Stay, Category.Market, Category.Food],
    x: 47.8,
    y: 62.7,
    summary: "Night Bazaar base: convenient, rich enough, and a once-per-trip tourist food market even when value is mixed.",
    places: ["Chang Klan Road", "Chang Klan Night Bazaar stalls", "South of Chang Klan / Astra Sky River"]
  },
  {
    id: "central-festival",
    label: "Central Festival",
    labels: [Category.Stay, Category.Shopping],
    x: 55.5,
    y: 51.0,
    summary: "More practical than atmospheric: useful for families or longer stays, less ideal for a solo short trip.",
    places: ["Central Festival / The One"]
  },
  {
    id: "bua-tong",
    label: "Bua Tong + Water Tree",
    labels: [Category.Nature, Category.Adventure],
    x: 53.6,
    y: 12.8,
    summary: "North-of-city waterfall day: climbable Sticky Waterfall plus the scenic water-tree stop on the same route.",
    places: ["Bua Tong Sticky Waterfall", "Water Tree / 水中大树"]
  },
  {
    id: "mae-ngat-chiang-dao",
    label: "Mae Ngat / Chiang Dao",
    labels: [Category.Nature, Category.Cafe, Category.Culture],
    x: 57.8,
    y: 31.5,
    summary: "Northern water, camping, and Chiang Dao cafe route for travelers stretching beyond Chiang Mai city.",
    places: ["Mae Ngat Dam / Pha Dang Camping", "Hey Now Chiang Dao", "Huen Inthanin Visitor Center"]
  },
  {
    id: "mae-sa-mon-jam",
    label: "Mae Sa / Mon Jam",
    labels: [Category.Nature],
    x: 34.5,
    y: 37.4,
    summary: "Tree-road and countryside scenery cluster: waterfalls, giant-tree corridors, cypress lanes, and pastoral stops.",
    places: ["Mae Tia Waterfall", "Maekee Sheep Farm", "Giant Trees Alley", "Cypress Lanes"]
  },
  {
    id: "mae-kampong-east",
    label: "Mae Kampong",
    labels: [Category.Culture, Category.Nature, Category.Cafe],
    x: 80.4,
    y: 43.6,
    summary: "East-side village/cafe day: cooler air, slow village wandering, forest cafes, and photo stops.",
    places: ["Mae Kampong Village", "The Giant", "Spiral Coco", "The Valley of Love"]
  },
  {
    id: "east-adventure",
    label: "Skyline",
    labels: [Category.Adventure, Category.Nature],
    x: 62.1,
    y: 45.2,
    summary: "The most strongly praised activity route in the reviews: ziplines, guides, forest views, and a richer play value than Sticky Waterfall.",
    places: ["Skyline Jungle Flight / Sky Line", "Sky Walk"]
  },
  {
    id: "mae-wang-southwest",
    label: "Mae Wang",
    labels: [Category.Nature, Category.Adventure],
    x: 25.8,
    y: 91.1,
    summary: "Southwest nature/adventure edge: national park, elephant care, and activity-route add-ons.",
    places: ["Mae Wang National Park", "Tarzan World Adventure", "Pha Chop", "Lanna Elephant Care"]
  },
  {
    id: "bar-nightlife",
    label: "Bar / Club nights",
    labels: [Category.Bar],
    x: 43.8,
    y: 54.9,
    summary: "Nightlife is mostly city-based: rooftop party energy, hidden techno, small psy bar, and North Gate drinking.",
    places: ["Abandon Radio", "Noise", "PSYSQUARE", "North Gate Spirit", "InChala Teahouse"]
  }
];

window.guideData = Object.freeze({
  Category,
  Signal,
  sourceNotes,
  places,
  mapPoints
});
