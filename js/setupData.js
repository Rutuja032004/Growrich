/*
  GrowRich Setup / Services data.
  Keep setup information here so the detail UI can be reused for future systems.
  Pricing is intentionally site-assessment based because approved price data is not
  available in the project materials.
*/

export const setupSystems = [
  {
    slug: "drip-irrigation",
    name: "Drip Irrigation",
    image: "assets/images/products/drip-tape-flat-emitter-inline.png",
    shortDescription: "Controlled water delivery close to the crop root zone for efficient, targeted irrigation.",
    suitableFor: ["Vegetables", "Fruits", "Orchards", "Field crops", "Nurseries", "Protected cultivation"],
    overview: "A drip irrigation setup delivers water through a network of main lines, laterals and emitters so irrigation can be distributed close to the crop. The final arrangement depends on the crop, field layout, water source and required flow.",
    howItWorks: "Water moves from the source through filtration and distribution lines before reaching drip tape, drip hose or emitters placed along the crop rows.",
    benefits: ["Targeted water application", "Flexible crop-row layouts", "Supports fertigation planning", "Suitable for many crop types"],
    considerations: "Filter selection, pressure, pipe layout, emitter spacing and the number of irrigation zones should be confirmed during system planning.",
    costLabel: "Site-based quotation",
    costNote: "Final pricing depends on farm area, crop type, water source, pipe and lateral length, number of zones, components and installation requirements.",
    components: ["Main line / sub-main", "Drip tape or drip hose", "Emitters", "Filtration components", "Valves and connectors", "End closures / fittings"],
    companyProvides: [
      ["Site Assessment", "Understand the farm layout, water source, crop requirements and installation conditions."],
      ["System Planning", "Plan the water path, irrigation zones and relevant components around the application."],
      ["Product & Material Selection", "Identify the irrigation products, pipes, fittings and control components required for the planned setup."],
      ["Installation Support", "Support practical installation of the selected irrigation components and connections."],
      ["Testing & Guidance", "Check the installed arrangement and guide the customer on basic operation and adjustment."],
      ["After-Sales Support", "Provide product and system guidance after installation as applicable."]
    ],
    installationSteps: [
      ["Site Assessment", "Review field layout, water source, crop and existing infrastructure."],
      ["Requirement Analysis", "Translate crop and farm requirements into an irrigation need."],
      ["System Planning", "Plan zones, water flow, filtration and distribution lines."],
      ["Material & Component Selection", "Select suitable pipes, laterals, emitters, valves and fittings."],
      ["Installation", "Lay and connect the planned irrigation components."],
      ["Testing & Adjustment", "Check connections, flow and pressure and make required adjustments."],
      ["Customer Guidance", "Explain basic operation, checks and routine care."],
      ["After-Sales Support", "Continue with product or setup guidance as applicable."]
    ],
    customerRequirements: ["Farm/location details", "Approximate farm area", "Crop and planting information", "Water source details", "Existing irrigation infrastructure", "Specific irrigation requirements"]
  },
  {
    slug: "spray-irrigation",
    name: "Spray Irrigation",
    image: "assets/images/products/swing-arm-sprinkler.jpg",
    shortDescription: "Sprinkler and micro-spray solutions for controlled water distribution across crop areas.",
    suitableFor: ["Field crops", "Orchards", "Vegetables", "Nurseries", "Greenhouses", "Large-area irrigation"],
    overview: "A spray irrigation setup distributes water through sprinklers or micro-sprayers selected according to crop, coverage, pressure and field conditions.",
    howItWorks: "Water is carried through the main and distribution lines to sprinkler or micro-spray outlets, which spread water over the planned area.",
    benefits: ["Coverage across larger areas", "Different sprinkler and spray options", "Useful for varied crop layouts", "Flexible outlet configurations"],
    considerations: "Sprinkler type, nozzle, operating pressure, spacing, wind exposure and water availability should be considered during planning.",
    costLabel: "Site-based quotation",
    costNote: "Final pricing depends on coverage area, sprinkler or spray type, pipe network, water source, pressure requirements and installation needs.",
    components: ["Main line / distribution pipe", "Sprinklers or micro-sprayers", "Nozzles", "Valves", "Connectors and fittings", "Filtration where required"],
    companyProvides: [
      ["Site Assessment", "Review field dimensions, crop layout, water source and operating conditions."],
      ["Coverage Planning", "Plan outlet positions and irrigation zones for the intended area."],
      ["Product & Material Selection", "Select suitable sprinklers, nozzles, pipes, valves and fittings."],
      ["Installation Support", "Support connection and positioning of the irrigation components."],
      ["Testing & Guidance", "Check coverage and operating conditions and guide the customer on use."],
      ["After-Sales Support", "Provide product and system guidance after installation as applicable."]
    ],
    installationSteps: [
      ["Site Assessment", "Review field layout, water source, crop and existing infrastructure."],
      ["Requirement Analysis", "Determine required coverage and irrigation application."],
      ["System Planning", "Plan zones, pipe routing and outlet positions."],
      ["Material & Component Selection", "Select sprinklers, nozzles, valves, pipes and fittings."],
      ["Installation", "Install and connect the planned distribution system."],
      ["Testing & Adjustment", "Check coverage, flow and operating conditions."],
      ["Customer Guidance", "Explain basic operation, checks and routine care."],
      ["After-Sales Support", "Continue with product or setup guidance as applicable."]
    ],
    customerRequirements: ["Farm/location details", "Approximate coverage area", "Crop information", "Water source and available pressure", "Existing pipe or irrigation infrastructure", "Specific coverage requirements"]
  },
  {
    slug: "main-line-pipes",
    name: "Main Line & Pipes",
    image: "assets/images/products/pe-layflat-hose.jpg",
    shortDescription: "Water-delivery pipe and hose options that connect the source to the irrigation distribution network.",
    suitableFor: ["Drip systems", "Sprinkler systems", "Field irrigation", "Orchards", "Greenhouses"],
    overview: "Main lines, sub-mains and flexible hose options form the water-delivery backbone of an irrigation system. The right arrangement depends on distance, flow, pressure and site layout.",
    howItWorks: "Water is transferred from the source through the selected main-line or hose network toward irrigation zones and downstream distribution components.",
    benefits: ["Supports different irrigation layouts", "Flexible pipe and hose options", "Useful for source-to-zone water transfer", "Can be planned around field geometry"],
    considerations: "Diameter, pressure, route length, connection points, elevation and required flow should be assessed before selecting the network.",
    costLabel: "Site-based quotation",
    costNote: "Final pricing depends on route length, diameter, pipe or hose type, water source, fittings, valves and installation requirements.",
    components: ["Main line pipe or layflat hose", "Sub-main / distribution lines", "Valves", "Connectors", "Elbows / tees / adapters", "End fittings"],
    companyProvides: [
      ["Site Assessment", "Understand the water source, route, field dimensions and connection points."],
      ["System Planning", "Plan pipe routing and distribution according to the irrigation layout."],
      ["Product & Material Selection", "Select appropriate pipe, hose, fittings and valves for the planned network."],
      ["Installation Support", "Support laying, joining and connecting the water-delivery network."],
      ["Testing & Guidance", "Check connections and flow through the planned network."],
      ["After-Sales Support", "Provide product and setup guidance after installation as applicable."]
    ],
    installationSteps: [
      ["Site Assessment", "Review source location, route, field levels and existing connections."],
      ["Requirement Analysis", "Determine flow, distance and distribution requirements."],
      ["System Planning", "Plan main-line and sub-main routing."],
      ["Material & Component Selection", "Choose suitable pipe, hose, valves and fittings."],
      ["Installation", "Lay, join and connect the planned network."],
      ["Testing & Adjustment", "Check joints, flow and operating conditions."],
      ["Customer Guidance", "Explain basic inspection and routine care."],
      ["After-Sales Support", "Continue with product or setup guidance as applicable."]
    ],
    customerRequirements: ["Farm/location details", "Approximate route length", "Water source details", "Existing pipe network", "Irrigation system to be supplied", "Specific flow or layout requirements"]
  },
  {
    slug: "filters",
    name: "Filtration Systems",
    image: "assets/images/products/automatic-self-cleaning-filter.webp",
    shortDescription: "Filtration options that support cleaner irrigation water before it enters downstream components.",
    suitableFor: ["Drip irrigation", "Sprinkler irrigation", "Greenhouses", "Orchards", "Field irrigation"],
    overview: "Filtration is an important part of many irrigation layouts, helping manage particles in irrigation water before water reaches downstream components.",
    howItWorks: "Water passes through the selected filter before entering the irrigation distribution network. Filter type and capacity should be matched to the water source and system requirements.",
    benefits: ["Supports downstream irrigation components", "Filter options for different applications", "Can be integrated into planned irrigation networks", "Useful where water quality requires filtration"],
    considerations: "Filter type, filtration level, flow capacity, water quality and maintenance access should be confirmed during planning.",
    costLabel: "Site-based quotation",
    costNote: "Final pricing depends on water quality, required filtration, flow rate, filter type, connections and installation requirements.",
    components: ["Selected filtration unit", "Inlet / outlet connections", "Valves", "Pressure or flow-related accessories where required", "Fittings and connectors"],
    companyProvides: [
      ["Site Assessment", "Understand the water source and downstream irrigation requirements."],
      ["Filtration Planning", "Determine where filtration fits into the irrigation network."],
      ["Product & Material Selection", "Select a suitable filtration option and connection components."],
      ["Installation Support", "Support integration of the filtration unit into the irrigation line."],
      ["Testing & Guidance", "Check flow through the filter and explain basic care requirements."],
      ["After-Sales Support", "Provide product and setup guidance after installation as applicable."]
    ],
    installationSteps: [
      ["Site Assessment", "Review source water and the irrigation system being supplied."],
      ["Requirement Analysis", "Understand water-quality and flow requirements."],
      ["System Planning", "Position filtration at the appropriate point in the network."],
      ["Material & Component Selection", "Select the filter and required connection components."],
      ["Installation", "Connect the filtration unit into the planned line."],
      ["Testing & Adjustment", "Check flow and connections and make required adjustments."],
      ["Customer Guidance", "Explain basic inspection and cleaning requirements."],
      ["After-Sales Support", "Continue with product or setup guidance as applicable."]
    ],
    customerRequirements: ["Water source details", "Approximate flow requirement", "Existing irrigation system", "Known water-quality concerns", "Farm/location details"]
  },
  {
    slug: "fittings-valves",
    name: "Fittings & Valves",
    image: "assets/images/products/pp-compression-ball-valve.jpg",
    shortDescription: "Connections, valves and supporting irrigation components used to assemble and control the system.",
    suitableFor: ["Drip systems", "Sprinkler systems", "Main lines", "Greenhouses", "Field irrigation"],
    overview: "Fittings and valves connect irrigation lines, manage flow and help create the practical network needed for an irrigation installation.",
    howItWorks: "Fittings join different sections of the network while valves provide points for isolation or flow control according to the planned system.",
    benefits: ["Supports system assembly", "Provides practical connection options", "Helps organize irrigation zones", "Available for different irrigation layouts"],
    considerations: "Connection size, pipe type, pressure, line layout and required control points should be confirmed before selection.",
    costLabel: "Site-based quotation",
    costNote: "Final pricing depends on the number and type of fittings, valves, pipe sizes, system layout and installation requirements.",
    components: ["Compression fittings", "Ball valves", "Connectors", "Elbows", "Tees / adapters", "End fittings"],
    companyProvides: [
      ["Site Assessment", "Understand the pipe sizes, irrigation layout and control points required."],
      ["System Planning", "Identify connection and isolation points within the planned system."],
      ["Product & Material Selection", "Select compatible fittings, valves and adapters."],
      ["Installation Support", "Support assembly and connection of the selected components."],
      ["Testing & Guidance", "Check connections and basic flow-control operation."],
      ["After-Sales Support", "Provide product and setup guidance after installation as applicable."]
    ],
    installationSteps: [
      ["Site Assessment", "Review pipe sizes, layout and required control points."],
      ["Requirement Analysis", "Determine the connections and valves needed."],
      ["System Planning", "Map joining and isolation points."],
      ["Material & Component Selection", "Select compatible fittings and valves."],
      ["Installation", "Assemble and connect the selected components."],
      ["Testing & Adjustment", "Check joints and flow-control points."],
      ["Customer Guidance", "Explain basic operation and inspection."],
      ["After-Sales Support", "Continue with product or setup guidance as applicable."]
    ],
    customerRequirements: ["Existing pipe sizes", "Irrigation system type", "Farm/location details", "Required control points", "Any existing fittings or valves"]
  }
];

export function getSetupSystem(slug) {
  return setupSystems.find((system) => system.slug === slug) || setupSystems[0];
}
