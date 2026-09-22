/*
 * GrowRich Industries
 * Crop Solutions
 *
 * Contains all 40 crop-specific irrigation solutions.
 */

export const cropSolutions = [

  /* =======================================================
     CEREALS
  ======================================================= */

  {
    id: "rice",
    name: "Rice",
    category: "Cereals",
    image: "assets/crops/rice.jpg",

    shortDescription:
      "Efficient irrigation management for rice cultivation.",

    solution:
      "Controlled irrigation and efficient water distribution.",

    irrigation:
      "Controlled irrigation according to soil condition, crop stage and field requirement.",

    fertigation:
      "Fertilizer application can be integrated with irrigation where the farming system supports fertigation.",

    waterManagement:
      "Helps farmers manage water application and reduce unnecessary water movement.",

    benefits: [
      "Controlled water application",
      "Better field water management",
      "Efficient irrigation scheduling"
    ],

    growthStages:
      "Nursery, transplanting, vegetative growth, reproductive stage and grain filling."
  },


  {
    id: "wheat",
    name: "Wheat",
    category: "Cereals",
    image: "assets/crops/wheat.jpg",

    shortDescription:
      "Efficient sprinkler irrigation for wheat cultivation.",

    solution:
      "Sprinkler irrigation for uniform field coverage.",

    irrigation:
      "Sprinkler irrigation can distribute water across the crop area.",

    fertigation:
      "Nutrients can be managed along with irrigation where appropriate.",

    waterManagement:
      "Supports controlled irrigation scheduling during important crop stages.",

    benefits: [
      "Uniform water distribution",
      "Better irrigation control",
      "Suitable for larger crop fields"
    ],

    growthStages:
      "Germination, tillering, stem extension, flowering and grain development."
  },


  {
    id: "maize",
    name: "Maize",
    category: "Cereals",
    image: "assets/crops/maize.jpg",

    shortDescription:
      "Precision irrigation and fertigation for maize.",

    solution:
      "Drip irrigation combined with precision fertigation.",

    irrigation:
      "Drip lines deliver water close to the maize root zone.",

    fertigation:
      "Water-soluble nutrients can be supplied through the drip system.",

    waterManagement:
      "Helps maintain more consistent root-zone moisture.",

    benefits: [
      "Precise water delivery",
      "Efficient nutrient application",
      "Better root-zone moisture control"
    ],

    growthStages:
      "Germination, vegetative growth, tasseling, silking and grain filling."
  },


  /* =======================================================
     COMMERCIAL CROPS
  ======================================================= */

  {
    id: "sugarcane",
    name: "Sugarcane",
    category: "Commercial Crops",
    image: "assets/crops/sugarcane.jpg",

    shortDescription:
      "Precision drip irrigation for long-duration sugarcane crops.",

    solution:
      "Drip irrigation with fertigation.",

    irrigation:
      "Drip irrigation delivers water along the sugarcane rows.",

    fertigation:
      "Fertilizers can be supplied through the irrigation network.",

    waterManagement:
      "Supports controlled water delivery throughout the crop cycle.",

    benefits: [
      "Efficient irrigation",
      "Precision fertigation",
      "Better water distribution"
    ],

    growthStages:
      "Germination, tillering, grand growth and maturity."
  },


  {
    id: "cotton",
    name: "Cotton",
    category: "Commercial Crops",
    image: "assets/crops/cotton.jpg",

    shortDescription:
      "Precision drip irrigation for cotton cultivation.",

    solution:
      "Precision drip irrigation.",

    irrigation:
      "Water is supplied close to the cotton root zone.",

    fertigation:
      "Suitable nutrients can be supplied through fertigation.",

    waterManagement:
      "Helps maintain controlled moisture around the crop root zone.",

    benefits: [
      "Controlled root-zone moisture",
      "Efficient water application",
      "Suitable for fertigation"
    ],

    growthStages:
      "Germination, vegetative growth, flowering, boll formation and maturity."
  },


  {
    id: "soybean",
    name: "Soybean",
    category: "Commercial Crops",
    image: "assets/crops/soybean.jpg",

    shortDescription:
      "Efficient irrigation management for soybean.",

    solution:
      "Drip or sprinkler irrigation based on field conditions.",

    irrigation:
      "Drip or sprinkler irrigation can be selected according to farm layout.",

    fertigation:
      "Nutrient management can be integrated with irrigation where suitable.",

    waterManagement:
      "Supports controlled soil moisture management.",

    benefits: [
      "Efficient water use",
      "Flexible irrigation system",
      "Controlled moisture"
    ],

    growthStages:
      "Germination, vegetative growth, flowering, pod formation and maturity."
  },


  /* =======================================================
     OILSEEDS
  ======================================================= */

  {
    id: "groundnut",
    name: "Groundnut",
    category: "Oilseeds",
    image: "assets/crops/groundnut.jpg",

    shortDescription:
      "Drip and sprinkler solutions for groundnut farming.",

    solution:
      "Drip or sprinkler irrigation.",

    irrigation:
      "Irrigation can be controlled according to crop stage and soil condition.",

    fertigation:
      "Suitable soluble nutrients can be integrated with irrigation.",

    waterManagement:
      "Helps maintain suitable moisture during flowering and pod development.",

    benefits: [
      "Controlled irrigation",
      "Better moisture management",
      "Efficient field coverage"
    ],

    growthStages:
      "Germination, vegetative growth, flowering, pegging and pod development."
  },


  {
    id: "mustard",
    name: "Mustard",
    category: "Oilseeds",
    image: "assets/crops/mustard.jpg",

    shortDescription:
      "Sprinkler irrigation for mustard cultivation.",

    solution:
      "Efficient sprinkler irrigation.",

    irrigation:
      "Sprinklers distribute water across the crop area.",

    fertigation:
      "Nutrient management can be integrated where appropriate.",

    waterManagement:
      "Supports timely irrigation during important growth stages.",

    benefits: [
      "Uniform irrigation",
      "Controlled water application",
      "Better field management"
    ],

    growthStages:
      "Germination, vegetative growth, flowering, pod formation and maturity."
  },


  {
    id: "sesame",
    name: "Sesame",
    category: "Oilseeds",
    image: "assets/crops/sesame.jpg",

    shortDescription:
      "Controlled irrigation for sesame cultivation.",

    solution:
      "Drip or sprinkler irrigation.",

    irrigation:
      "Irrigation can be selected according to field conditions.",

    fertigation:
      "Suitable nutrient application can be integrated with irrigation.",

    waterManagement:
      "Supports controlled soil moisture management.",

    benefits: [
      "Efficient water management",
      "Controlled irrigation",
      "Flexible irrigation options"
    ],

    growthStages:
      "Germination, vegetative growth, flowering, capsule development and maturity."
  },


  {
    id: "sunflower",
    name: "Sunflower",
    category: "Oilseeds",
    image: "assets/crops/sunflower.jpg",

    shortDescription:
      "Drip and sprinkler irrigation for sunflower.",

    solution:
      "Controlled drip or sprinkler irrigation.",

    irrigation:
      "Irrigation can be scheduled according to crop requirements.",

    fertigation:
      "Nutrients can be integrated with irrigation where suitable.",

    waterManagement:
      "Supports root-zone moisture management.",

    benefits: [
      "Efficient irrigation",
      "Better water scheduling",
      "Controlled root-zone moisture"
    ],

    growthStages:
      "Germination, vegetative growth, flowering, seed development and maturity."
  },


  /* =======================================================
     VEGETABLES
  ======================================================= */

  {
    id: "tomato",
    name: "Tomato",
    category: "Vegetables",
    image: "assets/crops/tomato.jpg",

    shortDescription:
      "Precision drip irrigation and fertigation for tomatoes.",

    solution:
      "Drip irrigation with fertigation.",

    irrigation:
      "Drip irrigation supplies water close to the tomato root zone.",

    fertigation:
      "Water-soluble nutrients can be delivered through the drip system.",

    waterManagement:
      "Helps maintain consistent moisture while reducing unnecessary foliage wetting.",

    benefits: [
      "Precise irrigation",
      "Efficient fertigation",
      "Consistent root-zone moisture"
    ],

    growthStages:
      "Nursery, transplanting, vegetative growth, flowering, fruit development and harvesting."
  },


  {
    id: "potato",
    name: "Potato",
    category: "Vegetables",
    image: "assets/crops/potato.jpg",

    shortDescription:
      "Controlled irrigation for potato tuber development.",

    solution:
      "Drip or sprinkler irrigation.",

    irrigation:
      "Water can be distributed according to crop stage and soil condition.",

    fertigation:
      "Nutrients may be supplied through irrigation where suitable.",

    waterManagement:
      "Supports moisture management around the root and tuber zone.",

    benefits: [
      "Better moisture control",
      "Controlled irrigation",
      "Efficient water distribution"
    ],

    growthStages:
      "Sprouting, vegetative growth, tuber initiation, tuber bulking and maturity."
  },


  {
    id: "onion",
    name: "Onion",
    category: "Vegetables",
    image: "assets/crops/onion.jpg",

    shortDescription:
      "Precision drip irrigation for onion cultivation.",

    solution:
      "Precision drip irrigation.",

    irrigation:
      "Drip lines provide water along the onion crop rows.",

    fertigation:
      "Soluble nutrients can be supplied through irrigation.",

    waterManagement:
      "Supports controlled moisture during bulb development.",

    benefits: [
      "Efficient irrigation",
      "Better bulb-zone moisture",
      "Precision nutrient delivery"
    ],

    growthStages:
      "Germination, vegetative growth, bulb initiation, bulb development and maturity."
  },


  {
    id: "chilli",
    name: "Chilli",
    category: "Vegetables",
    image: "assets/crops/chilli.jpg",

    shortDescription:
      "Drip irrigation and fertigation for chilli.",

    solution:
      "Drip irrigation combined with fertigation.",

    irrigation:
      "Controlled water application around the root zone.",

    fertigation:
      "Nutrients can be delivered through the drip network.",

    waterManagement:
      "Helps maintain consistent moisture.",

    benefits: [
      "Precise water delivery",
      "Efficient nutrient delivery",
      "Controlled moisture"
    ],

    growthStages:
      "Nursery, transplanting, vegetative growth, flowering, fruiting and harvesting."
  },


  {
    id: "brinjal",
    name: "Brinjal",
    category: "Vegetables",
    image: "assets/crops/brinjal.jpg",

    shortDescription:
      "Drip irrigation for brinjal cultivation.",

    solution:
      "Drip irrigation.",

    irrigation:
      "Targeted irrigation close to the root zone.",

    fertigation:
      "Suitable nutrients can be supplied through irrigation.",

    waterManagement:
      "Supports consistent moisture management.",

    benefits: [
      "Targeted irrigation",
      "Controlled moisture",
      "Efficient water use"
    ],

    growthStages:
      "Nursery, transplanting, vegetative growth, flowering, fruit development and harvesting."
  },


  {
    id: "cabbage",
    name: "Cabbage",
    category: "Vegetables",
    image: "assets/crops/cabbage.jpg",

    shortDescription:
      "Controlled irrigation for cabbage head development.",

    solution:
      "Drip or sprinkler irrigation.",

    irrigation:
      "Irrigation can be scheduled according to soil moisture.",

    fertigation:
      "Nutrients can be integrated with irrigation where suitable.",

    waterManagement:
      "Supports uniform crop-zone moisture.",

    benefits: [
      "Controlled irrigation",
      "Uniform water application",
      "Efficient field management"
    ],

    growthStages:
      "Nursery, transplanting, vegetative growth, head formation and maturity."
  },


  {
    id: "cauliflower",
    name: "Cauliflower",
    category: "Vegetables",
    image: "assets/crops/cauliflower.jpg",

    shortDescription:
      "Precision irrigation for cauliflower cultivation.",

    solution:
      "Drip irrigation.",

    irrigation:
      "Water is delivered close to the crop root zone.",

    fertigation:
      "Soluble nutrients can be supplied through the irrigation system.",

    waterManagement:
      "Helps maintain suitable moisture during head development.",

    benefits: [
      "Precision water delivery",
      "Better moisture control",
      "Suitable for fertigation"
    ],

    growthStages:
      "Nursery, transplanting, vegetative growth, curd formation and maturity."
  },


  {
    id: "okra",
    name: "Okra",
    category: "Vegetables",
    image: "assets/crops/okra.jpg",

    shortDescription:
      "Drip irrigation and fertigation for okra.",

    solution:
      "Drip irrigation with fertigation.",

    irrigation:
      "Targeted irrigation along crop rows.",

    fertigation:
      "Nutrients can be supplied through drip irrigation.",

    waterManagement:
      "Supports efficient root-zone moisture management.",

    benefits: [
      "Precise water delivery",
      "Efficient fertigation",
      "Better moisture management"
    ],

    growthStages:
      "Germination, vegetative growth, flowering, pod formation and harvesting."
  },


  {
    id: "cucumber",
    name: "Cucumber",
    category: "Vegetables",
    image: "assets/crops/cucumber.jpg",

    shortDescription:
      "Drip irrigation for cucumber cultivation.",

    solution:
      "Drip irrigation.",

    irrigation:
      "Controlled irrigation near the root zone.",

    fertigation:
      "Suitable nutrients can be supplied through irrigation.",

    waterManagement:
      "Helps maintain consistent moisture during fruit development.",

    benefits: [
      "Controlled water delivery",
      "Efficient irrigation",
      "Suitable for fertigation"
    ],

    growthStages:
      "Germination, vegetative growth, flowering, fruit development and harvesting."
  },


  {
    id: "carrot",
    name: "Carrot",
    category: "Vegetables",
    image: "assets/crops/carrot.jpg",

    shortDescription:
      "Controlled irrigation for carrot root development.",

    solution:
      "Drip or sprinkler irrigation.",

    irrigation:
      "Water application can be managed according to soil conditions.",

    fertigation:
      "Nutrients can be incorporated where appropriate.",

    waterManagement:
      "Supports suitable moisture around the root zone.",

    benefits: [
      "Better root-zone management",
      "Controlled irrigation",
      "Efficient water use"
    ],

    growthStages:
      "Germination, root development, enlargement and maturity."
  },


  {
    id: "radish",
    name: "Radish",
    category: "Vegetables",
    image: "assets/crops/radish.jpg",

    shortDescription:
      "Micro irrigation for radish cultivation.",

    solution:
      "Micro irrigation.",

    irrigation:
      "Controlled water delivery around the crop zone.",

    fertigation:
      "Nutrient delivery can be integrated where appropriate.",

    waterManagement:
      "Supports consistent moisture during root development.",

    benefits: [
      "Efficient water delivery",
      "Controlled root-zone moisture",
      "Better irrigation management"
    ],

    growthStages:
      "Germination, leaf development, root enlargement and maturity."
  },


  {
    id: "spinach",
    name: "Spinach",
    category: "Vegetables",
    image: "assets/crops/spinach.jpg",

    shortDescription:
      "Micro irrigation for leafy vegetable production.",

    solution:
      "Micro irrigation.",

    irrigation:
      "Controlled and gentle water application.",

    fertigation:
      "Nutrients can be supplied through the irrigation system where suitable.",

    waterManagement:
      "Supports consistent soil moisture.",

    benefits: [
      "Controlled irrigation",
      "Efficient water use",
      "Suitable for leafy crops"
    ],

    growthStages:
      "Germination, leaf development and repeated harvesting."
  },


  {
    id: "peas",
    name: "Peas",
    category: "Vegetables",
    image: "assets/crops/peas.jpg",

    shortDescription:
      "Drip irrigation for pea cultivation.",

    solution:
      "Drip irrigation.",

    irrigation:
      "Controlled water delivery near the root zone.",

    fertigation:
      "Suitable nutrients can be integrated with irrigation.",

    waterManagement:
      "Helps maintain moisture during flowering and pod development.",

    benefits: [
      "Controlled irrigation",
      "Efficient water application",
      "Better moisture management"
    ],

    growthStages:
      "Germination, vegetative growth, flowering, pod development and harvesting."
  },


  /* =======================================================
     FRUITS
  ======================================================= */

  {
    id: "banana",
    name: "Banana",
    category: "Fruits",
    image: "assets/crops/banana.jpg",

    shortDescription:
      "Drip irrigation and fertigation for banana plantations.",

    solution:
      "Drip irrigation with fertigation.",

    irrigation:
      "Controlled water delivery around individual banana plants.",

    fertigation:
      "Nutrients can be supplied through the irrigation network.",

    waterManagement:
      "Supports regular root-zone moisture management.",

    benefits: [
      "Efficient water delivery",
      "Precision fertigation",
      "Better plantation management"
    ],

    growthStages:
      "Plant establishment, vegetative growth, flowering, fruit development and maturity."
  },


  {
    id: "mango",
    name: "Mango",
    category: "Fruits",
    image: "assets/crops/mango.jpg",

    shortDescription:
      "Precision orchard irrigation for mango trees.",

    solution:
      "Orchard drip irrigation.",

    irrigation:
      "Water can be delivered around individual mango trees.",

    fertigation:
      "Suitable nutrients can be delivered through irrigation.",

    waterManagement:
      "Supports efficient orchard water distribution.",

    benefits: [
      "Targeted tree irrigation",
      "Efficient water use",
      "Suitable for fertigation"
    ],

    growthStages:
      "Vegetative growth, flowering, fruit set, fruit development and maturity."
  },


  {
    id: "grapes",
    name: "Grapes",
    category: "Fruits",
    image: "assets/crops/grapes.jpg",

    shortDescription:
      "Precision drip irrigation for vineyards.",

    solution:
      "Drip irrigation with fertigation.",

    irrigation:
      "Drip lines provide controlled irrigation along vineyard rows.",

    fertigation:
      "Nutrients can be delivered through the irrigation system.",

    waterManagement:
      "Supports controlled moisture management.",

    benefits: [
      "Precision vineyard irrigation",
      "Efficient fertigation",
      "Controlled root-zone moisture"
    ],

    growthStages:
      "Bud break, vegetative growth, flowering, fruit set, berry development and maturity."
  },


  {
    id: "pomegranate",
    name: "Pomegranate",
    category: "Fruits",
    image: "assets/crops/pomegranate.jpg",

    shortDescription:
      "Precision orchard drip irrigation for pomegranate.",

    solution:
      "Orchard drip irrigation.",

    irrigation:
      "Water is delivered around individual trees.",

    fertigation:
      "Fertigation can be integrated where suitable.",

    waterManagement:
      "Supports efficient orchard water management.",

    benefits: [
      "Targeted irrigation",
      "Efficient water use",
      "Suitable for fertigation"
    ],

    growthStages:
      "Vegetative growth, flowering, fruit set, fruit development and maturity."
  },


  {
    id: "orange",
    name: "Orange",
    category: "Fruits",
    image: "assets/crops/orange.jpg",

    shortDescription:
      "Drip irrigation for citrus orchards.",

    solution:
      "Drip irrigation for citrus orchards.",

    irrigation:
      "Targeted water application around individual trees.",

    fertigation:
      "Nutrients can be delivered through irrigation.",

    waterManagement:
      "Supports efficient orchard water distribution.",

    benefits: [
      "Targeted tree irrigation",
      "Efficient water distribution",
      "Better orchard management"
    ],

    growthStages:
      "Vegetative growth, flowering, fruit set, fruit development and maturity."
  },


  {
    id: "lemon",
    name: "Lemon",
    category: "Fruits",
    image: "assets/crops/lemon.jpg",

    shortDescription:
      "Drip irrigation for lemon orchards.",

    solution:
      "Drip irrigation.",

    irrigation:
      "Water is supplied near the lemon tree root zone.",

    fertigation:
      "Suitable nutrients can be supplied through the irrigation system.",

    waterManagement:
      "Supports controlled soil moisture.",

    benefits: [
      "Efficient orchard irrigation",
      "Controlled moisture",
      "Suitable for fertigation"
    ],

    growthStages:
      "Vegetative growth, flowering, fruit set, fruit development and maturity."
  },


  {
    id: "papaya",
    name: "Papaya",
    category: "Fruits",
    image: "assets/crops/papaya.jpg",

    shortDescription:
      "Drip irrigation and fertigation for papaya.",

    solution:
      "Drip irrigation with fertigation.",

    irrigation:
      "Controlled water delivery near individual plants.",

    fertigation:
      "Nutrients can be supplied through the drip system.",

    waterManagement:
      "Supports consistent root-zone moisture.",

    benefits: [
      "Precise water delivery",
      "Efficient nutrient delivery",
      "Controlled moisture"
    ],

    growthStages:
      "Plant establishment, vegetative growth, flowering, fruit development and harvesting."
  },


  {
    id: "guava",
    name: "Guava",
    category: "Fruits",
    image: "assets/crops/guava.jpg",

    shortDescription:
      "Precision drip irrigation for guava orchards.",

    solution:
      "Orchard drip irrigation.",

    irrigation:
      "Targeted water delivery around the tree root zone.",

    fertigation:
      "Fertigation can be integrated where suitable.",

    waterManagement:
      "Supports efficient orchard water management.",

    benefits: [
      "Targeted irrigation",
      "Efficient water delivery",
      "Suitable for fertigation"
    ],

    growthStages:
      "Vegetative growth, flowering, fruit set, fruit development and maturity."
  },


  {
    id: "watermelon",
    name: "Watermelon",
    category: "Fruits",
    image: "assets/crops/watermelon.jpg",

    shortDescription:
      "Drip irrigation for watermelon cultivation.",

    solution:
      "Drip irrigation.",

    irrigation:
      "Controlled water delivery along crop rows.",

    fertigation:
      "Nutrients can be supplied through irrigation.",

    waterManagement:
      "Helps manage moisture around the root zone.",

    benefits: [
      "Efficient irrigation",
      "Controlled root-zone moisture",
      "Suitable for fertigation"
    ],

    growthStages:
      "Germination, vine development, flowering, fruit development and maturity."
  },


  {
    id: "muskmelon",
    name: "Muskmelon",
    category: "Fruits",
    image: "assets/crops/muskmelon.jpg",

    shortDescription:
      "Drip irrigation and fertigation for muskmelon.",

    solution:
      "Drip irrigation with fertigation.",

    irrigation:
      "Targeted water delivery near the root zone.",

    fertigation:
      "Nutrients can be supplied through drip irrigation.",

    waterManagement:
      "Supports controlled moisture during fruit development.",

    benefits: [
      "Precise irrigation",
      "Efficient fertigation",
      "Better moisture management"
    ],

    growthStages:
      "Germination, vine growth, flowering, fruit set, fruit development and maturity."
  },


  {
    id: "strawberry",
    name: "Strawberry",
    category: "Fruits",
    image: "assets/crops/strawberry.jpg",

    shortDescription:
      "Micro drip irrigation for strawberry cultivation.",

    solution:
      "Micro drip irrigation.",

    irrigation:
      "Low-volume irrigation close to the plant root zone.",

    fertigation:
      "Suitable soluble nutrients can be supplied through irrigation.",

    waterManagement:
      "Supports controlled moisture while avoiding unnecessary foliage wetting.",

    benefits: [
      "Precise irrigation",
      "Controlled moisture",
      "Suitable for fertigation"
    ],

    growthStages:
      "Plant establishment, vegetative growth, flowering, fruiting and harvesting."
  },


  {
    id: "coconut",
    name: "Coconut",
    category: "Fruits",
    image: "assets/crops/coconut.jpg",

    shortDescription:
      "Drip irrigation for coconut plantations.",

    solution:
      "Drip irrigation for plantation management.",

    irrigation:
      "Water is delivered around the palm root zone.",

    fertigation:
      "Fertigation can be incorporated where suitable.",

    waterManagement:
      "Supports efficient plantation irrigation.",

    benefits: [
      "Targeted water delivery",
      "Efficient plantation irrigation",
      "Suitable for fertigation"
    ],

    growthStages:
      "Establishment, vegetative development, flowering and nut development."
  },


  /* =======================================================
     SPICES
  ======================================================= */

  {
    id: "turmeric",
    name: "Turmeric",
    category: "Spices",
    image: "assets/crops/turmeric.jpg",

    shortDescription:
      "Controlled irrigation for turmeric rhizome development.",

    solution:
      "Drip or sprinkler irrigation.",

    irrigation:
      "Irrigation can be managed according to crop stage.",

    fertigation:
      "Nutrients can be applied through irrigation where appropriate.",

    waterManagement:
      "Supports suitable soil moisture during rhizome development.",

    benefits: [
      "Controlled moisture",
      "Efficient irrigation",
      "Suitable for fertigation"
    ],

    growthStages:
      "Sprouting, vegetative growth, rhizome development and maturity."
  },


  {
    id: "ginger",
    name: "Ginger",
    category: "Spices",
    image: "assets/crops/ginger.jpg",

    shortDescription:
      "Controlled irrigation for ginger cultivation.",

    solution:
      "Drip or sprinkler irrigation.",

    irrigation:
      "Irrigation can be selected according to farm conditions.",

    fertigation:
      "Nutrients may be integrated with irrigation.",

    waterManagement:
      "Helps maintain suitable soil moisture.",

    benefits: [
      "Controlled irrigation",
      "Better moisture management",
      "Flexible irrigation options"
    ],

    growthStages:
      "Sprouting, vegetative growth, rhizome development and maturity."
  },


  {
    id: "coriander",
    name: "Coriander",
    category: "Spices",
    image: "assets/crops/coriander.jpg",

    shortDescription:
      "Micro irrigation for coriander cultivation.",

    solution:
      "Micro irrigation.",

    irrigation:
      "Controlled water application across the crop area.",

    fertigation:
      "Suitable nutrient application can be integrated.",

    waterManagement:
      "Supports consistent moisture.",

    benefits: [
      "Efficient water management",
      "Controlled irrigation",
      "Suitable for short-duration crops"
    ],

    growthStages:
      "Germination, vegetative growth, flowering and seed development."
  },


  {
    id: "garlic",
    name: "Garlic",
    category: "Spices",
    image: "assets/crops/garlic.jpg",

    shortDescription:
      "Precision drip irrigation for garlic cultivation.",

    solution:
      "Drip irrigation.",

    irrigation:
      "Water can be delivered near the garlic root zone.",

    fertigation:
      "Suitable nutrients can be supplied through irrigation.",

    waterManagement:
      "Supports controlled moisture during bulb development.",

    benefits: [
      "Precision irrigation",
      "Controlled moisture",
      "Efficient nutrient application"
    ],

    growthStages:
      "Germination, vegetative growth, bulb formation, bulb development and maturity."
  },


  {
    id: "fenugreek",
    name: "Fenugreek",
    category: "Spices",
    image: "assets/crops/fenugreek.jpg",

    shortDescription:
      "Controlled irrigation for fenugreek cultivation.",

    solution:
      "Drip or sprinkler irrigation.",

    irrigation:
      "Irrigation can be selected according to farm conditions.",

    fertigation:
      "Nutrients can be integrated where appropriate.",

    waterManagement:
      "Supports consistent crop-zone moisture.",

    benefits: [
      "Efficient irrigation",
      "Controlled moisture",
      "Flexible irrigation options"
    ],

    growthStages:
      "Germination, vegetative growth, flowering and seed development."
  }

];


/* =========================================================
   CROP HELPERS
========================================================= */

export function getCropById(id) {
  return cropSolutions.find(
    (crop) =>
      String(crop.id).toLowerCase() ===
      String(id).toLowerCase()
  );
}


export function getCropsByCategory(category) {
  if (
    !category ||
    category.toLowerCase() === "all"
  ) {
    return cropSolutions;
  }

  return cropSolutions.filter(
    (crop) =>
      crop.category.toLowerCase() ===
      category.toLowerCase()
  );
}


export function searchCropSolutions(query) {
  const search =
    String(query || "")
      .trim()
      .toLowerCase();

  if (!search) {
    return cropSolutions;
  }

  return cropSolutions.filter((crop) => {

    const content = [
      crop.name,
      crop.category,
      crop.shortDescription,
      crop.solution,
      crop.irrigation,
      crop.fertigation,
      crop.waterManagement,
      crop.growthStages,
      ...(crop.benefits || [])
    ]
      .join(" ")
      .toLowerCase();

    return content.includes(search);
  });
}