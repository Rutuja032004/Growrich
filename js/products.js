/*
  GrowRich product catalogue demo data.

  The supplied FHYL 2026 brochure was used as the product-content reference.
  For a production website, verify which catalogue items are actually sold
  by GrowRich and replace/expand this dataset with approved company data.

  Image paths intentionally point to local placeholders so the project runs
  immediately without external image dependencies.
*/

const product = (data) => ({
  id: data.id,
  slug: data.slug,
  name: data.name,
  category: data.category,
  subcategory: data.subcategory,
  shortDescription: data.shortDescription,
  description: data.description,
  image: data.image || "assets/images/products/product-placeholder.svg",
  features: data.features || [],
  applications: data.applications || [],
  specifications: data.specifications || {}
});

export const categories = [
  {
    id: "drip",
    name: "Drip Irrigation",
    eyebrow: "01",
    description: "Precision water delivery through drip tapes, hoses, emitters, valves and fittings.",
    icon: "fa-droplet"
  },
  {
    id: "spray",
    name: "Spray Irrigation",
    eyebrow: "02",
    description: "Sprinklers, micro-sprinklers, rain guns and accessories for flexible field coverage.",
    icon: "fa-water"
  },
  {
    id: "mainline",
    name: "Main Line & Pipes",
    eyebrow: "03",
    description: "Layflat hoses, PE pipes, composite pipes, braided hoses and main-line fittings.",
    icon: "fa-grip-lines"
  },
  {
    id: "compression",
    name: "Compression Fittings & PVC Valves",
    eyebrow: "04",
    description: "Pipeline connection, diversion and flow-control components for irrigation systems.",
    icon: "fa-link"
  },
  {
    id: "other",
    name: "Other Agriculture Products",
    eyebrow: "05",
    description: "Seedling trays, filters, air-release valves, vacuum breakers and filtration systems.",
    icon: "fa-seedling"
  }
];

export const products = [
  product({
    id: "DR-001",
    slug: "flat-emitter-drip-tape",
    name: "Drip Tape with Flat Emitter In-Line",
    image: "assets/images/products/drip-tape-flat-emitter-inline.png",
    category: "drip",
    subcategory: "Drip Tape",
    shortDescription: "Precision drip tape designed for controlled and efficient water application.",
    description: "An in-line flat-emitter drip tape for precise, even and continuous small-quantity water delivery. The brochure positions it for fields, greenhouses and orchards.",
    features: ["Uniform water delivery", "Water-saving irrigation", "Suitable for fields, greenhouses and orchards", "Customizable wall thickness, spacing and roll length"],
    applications: ["Open fields", "Greenhouses", "Orchards"],
    specifications: {
      "Diameter": "12 / 16 / 20 / 22 mm",
      "Wall thickness": "Multiple options shown in catalogue",
      "Spacing": "Multiple options shown in catalogue",
      "Working pressure": "0.8–2.0 bar",
      "Roll length": "1000 m / 2000 m / other options"
    }
  }),
  product({
    id: "DR-002",
    slug: "double-color-composite-flat-emitter-drip-tape",
    name: "Double Color Composite Flat Emitter Drip Tape",
    category: "drip",
    subcategory: "Drip Tape",
    shortDescription: "Composite flat-emitter tape with temperature-control and UV-resistant characteristics.",
    description: "A double-colour composite flat-emitter drip tape presented for professional irrigation scenarios including soilless cultivation, orchards and protected cultivation.",
    features: ["Black inner layer helps reduce light exposure", "Temperature-control design", "UV-resistant materials", "Available for different crop scenarios"],
    applications: ["Soilless cultivation", "Orchards", "Protected cultivation"]
  }),
  product({
    id: "DR-003",
    slug: "labyrinth-drip-tape",
    name: "Labyrinth Drip Tape",
    category: "drip",
    subcategory: "Drip Tape",
    shortDescription: "Labyrinth-channel drip tape designed for stable discharge and clogging resistance.",
    description: "The catalogue describes a continuous filter-flow-channel design combined with a water-outlet channel and self-filtering window for improved filtration and stable operation.",
    features: ["Continuous filter-flow channel", "Self-filtering window", "Uniform outlet punching", "Designed to reduce clogging risk"],
    applications: ["Open fields", "Greenhouses", "Orchards"]
  }),
  product({
    id: "DR-004",
    slug: "widened-filter-window-labyrinth-drip-tape",
    name: "Widened Filter Window Labyrinth Drip Tape",
    category: "drip",
    subcategory: "Drip Tape",
    shortDescription: "Upgraded labyrinth tape with a widened filter window and comb-like turbulent flow channel.",
    description: "Designed to improve pressure-compensation effect and stability of water discharge under different pressure conditions.",
    features: ["Widened filter window", "Comb-like turbulent flow channel", "Pressure-compensation effect", "Suitable for varied soil conditions"],
    applications: ["Open fields", "Greenhouses", "Orchards"]
  }),
  product({
    id: "DR-005",
    slug: "pressure-compensating-drip-tape",
    name: "Pressure Compensating Drip Tape",
    image: "assets/images/products/pressure-compensating-drip-tape.jpg",
    category: "drip",
    subcategory: "Drip Tape",
    shortDescription: "PC drip tape designed for stable output and uniform irrigation.",
    description: "Built-in pressure-compensating emitters are presented in the brochure for stable water output and uniform irrigation, including long-distance and sloped-land applications.",
    features: ["Stable water output", "Uniform irrigation", "Anti-drip function", "Suitable for long-distance laying"],
    applications: ["Flat land", "Hilly areas", "Sloped land", "Long-distance irrigation"],
    specifications: {
      "Diameter": "16 / 20 / 22 mm",
      "Spacing": "Multiple options shown in catalogue",
      "Working pressure": "Approximately 1.0–2.5 bar depending on variant",
      "Roll length": "500 / 700 / 800 m depending on variant"
    }
  }),
  product({
    id: "DR-006",
    slug: "drip-hose-cylindrical-emitter",
    name: "Drip Hose with Cylindrical Emitter In-Line",
    category: "drip",
    subcategory: "Drip Hose",
    shortDescription: "In-line cylindrical-emitter drip hose for surface and underground irrigation.",
    description: "The catalogue describes an embedded dripper designed to resist falling off and support surface or underground laying.",
    features: ["Wide maze-flow channel", "Embedded dripper", "Resistant to trampling", "Suitable for surface and underground laying"],
    applications: ["Orchards", "Greenhouses", "Fields", "Long-distance laying"],
    specifications: {
      "Diameter": "6 / 16 / 20 mm variants",
      "Spacing": "15–100 cm depending on variant",
      "Working pressure": "1.0–3.0 bar depending on variant",
      "Roll length": "500 m"
    }
  }),
  product({
    id: "DR-007",
    slug: "positioning-bypass-mini-valve",
    name: "Positioning Bypass Mini Valve",
    category: "drip",
    subcategory: "Mini Valves",
    shortDescription: "Compact irrigation valve for drip-line flow control.",
    description: "A mini-valve option shown in the drip accessories section for controlling irrigation lines.",
    features: ["Compact form", "Line flow control", "Available in different material variants"],
    applications: ["Drip irrigation", "Greenhouses", "Orchards"]
  }),
  product({
    id: "DR-008",
    slug: "drip-lock-coupling",
    name: "Drip Lock Coupling",
    category: "drip",
    subcategory: "Fittings",
    shortDescription: "Lock-style coupling for drip tape and hose connections.",
    description: "A drip-line connection component shown within the accessories and couplings section of the brochure.",
    features: ["Quick connection", "Locking design", "Multiple diameter variants"],
    applications: ["Drip tape", "Drip hose", "Field irrigation"]
  }),

  product({
    id: "SP-001",
    slug: "pe-micro-spray-hose",
    name: "PE Micro Spray Hose",
    category: "spray",
    subcategory: "Spray Hose",
    shortDescription: "PE hose designed for micro-spray irrigation and uniform water distribution.",
    description: "A micro spray hose presented for field crops, orchards and vegetable greenhouse irrigation.",
    features: ["Lightweight construction", "Multiple diameter options", "Multiple hole-spacing options", "Customizable coding and packaging"],
    applications: ["Field crops", "Orchards", "Vegetable greenhouses"],
    specifications: {
      "Diameter": "16–125 mm variants shown",
      "Working pressure": "Approx. 0.3–1.0 bar depending on variant",
      "Roll length": "100 / 200 m depending on variant"
    }
  }),
  product({
    id: "SP-002",
    slug: "swing-arm-sprinkler",
    name: "Swing Arm Sprinkler",
    image: "assets/images/products/swing-arm-sprinkler.jpg",
    category: "spray",
    subcategory: "Sprinklers",
    shortDescription: "Full-circle and adjustable rocker-arm sprinkler options.",
    description: "The catalogue includes full-circle rocker-arm sprinkler heads, adjustable rocker-arm sprayers and mega-nozzle variants.",
    features: ["Multiple interface sizes", "Multiple pressure ranges", "Full-circle options", "Adjustable variants"],
    applications: ["Field irrigation", "Large-area irrigation", "Crop cooling"]
  }),
  product({
    id: "SP-003",
    slug: "micro-sprinkler",
    name: "Micro-Sprinkler",
    category: "spray",
    subcategory: "Micro-Sprinklers",
    shortDescription: "A broad range of micro-sprinklers for controlled spray coverage.",
    description: "The brochure presents multiple micro-sprinkler forms including medium-range, rotating, mosquito-repellent, flywheel and atomizing options.",
    features: ["Multiple spray angles", "Multiple flow ranges", "Multiple interface sizes", "Multiple spray-radius options"],
    applications: ["Orchards", "Greenhouses", "Vegetable crops", "Nurseries"]
  }),
  product({
    id: "SP-004",
    slug: "rain-gun-with-fittings",
    name: "Rain Gun with Fittings",
    category: "spray",
    subcategory: "Rain Guns",
    shortDescription: "High-coverage rain-gun options with multiple nozzle and pressure configurations.",
    description: "The rain-gun section includes metal swing-arm nozzles, turbo spray guns, adjustable turbine spray guns and supporting brackets.",
    features: ["Large-area coverage", "Multiple nozzle sizes", "Adjustable variants", "Supporting bracket options"],
    applications: ["Large fields", "High-flow sprinkling", "Agricultural irrigation"]
  }),
  product({
    id: "SP-005",
    slug: "micro-spraying-fittings",
    name: "Micro-Spraying Fittings",
    category: "spray",
    subcategory: "Fittings",
    shortDescription: "Valves, connectors, elbows, end caps and other micro-spray accessories.",
    description: "A supporting range for assembling and connecting micro-spray irrigation systems.",
    features: ["Elbows", "Four-way connectors", "End caps", "Three-way connectors", "Thread connectors"],
    applications: ["Micro-spray systems", "Greenhouses", "Orchards"]
  }),
  product({
    id: "SP-006",
    slug: "pressure-compensated-online-dripper",
    name: "Pressure-Compensated On-Line Dripper",
    category: "spray",
    subcategory: "On-Line Drippers",
    shortDescription: "On-line dripper options including pressure-compensated and adjustable variants.",
    description: "The catalogue includes double-hook pressure-compensated drippers, pressure-compensated drippers, adjustable drippers, bubbler drippers and related kits.",
    features: ["Pressure-compensated options", "Adjustable variants", "Multiple flow-rate options", "Arrow dripper kits available"],
    applications: ["Orchards", "Potted plants", "Greenhouses", "Nurseries"]
  }),

  product({
    id: "ML-001",
    slug: "pe-layflat-prepunched-flat-hose",
    name: "PE Layflat Hose / Pre-Punched Flat Hose",
    image: "assets/images/products/pe-layflat-hose.jpg",
    category: "mainline",
    subcategory: "Layflat Hose",
    shortDescription: "Flexible main water-delivery hose for irrigation systems.",
    description: "The catalogue describes PE layflat hose as a main water-delivery pipeline connecting the water source with drip or spray irrigation tapes.",
    features: ["Flexible material", "Stable pressure resistance", "Easy laying and storage", "Pre-punched options available"],
    applications: ["Field crops", "Orchards", "Vegetable greenhouses", "Greenhouses"],
    specifications: {
      "Diameter": "50–110 mm variants shown",
      "Working pressure": "1–3 bar depending on variant",
      "Roll length": "100 m"
    }
  }),
  product({
    id: "ML-002",
    slug: "pe-pipe",
    name: "PE Pipe",
    category: "mainline",
    subcategory: "PE Pipes",
    shortDescription: "Polyethylene pipe for agricultural irrigation and greenhouse systems.",
    description: "PE pipe made with polyethylene resin and described for agricultural fields, greenhouses and irrigation layouts.",
    features: ["Anti-UV and anti-aging properties", "Corrosion resistance", "Non-toxic material", "Multiple diameter and thickness options"],
    applications: ["Agricultural irrigation", "Greenhouses", "Main lines"],
    specifications: {
      "Diameter": "16–25 mm variants shown",
      "Wall thickness": "Multiple options",
      "Roll length": "200–500 m depending on variant"
    }
  }),
  product({
    id: "ML-003",
    slug: "ldpe-composite-pipe",
    name: "Outer White / Inner Black LDPE Composite Pipe",
    category: "mainline",
    subcategory: "Composite Pipes",
    shortDescription: "Double-layer LDPE composite pipe with temperature-control and UV-resistant characteristics.",
    description: "The white outer and black inner structure is described as supporting temperature control, water-flow uniformity and anti-aging performance.",
    features: ["Double-layer construction", "Temperature-control design", "UV-resistant", "Flexible customization"],
    applications: ["Greenhouses", "Agricultural irrigation", "Protected cultivation"]
  }),
  product({
    id: "ML-004",
    slug: "pe-braided-hose",
    name: "PE Braided Hose",
    category: "mainline",
    subcategory: "Hoses",
    shortDescription: "Lightweight braided hose designed for pressure-resistant water transmission.",
    description: "A braided hose with high pressure resistance, suitable for high-pressure water transmission and long-distance irrigation.",
    features: ["Lightweight", "Flexible", "High pressure resistance", "Suitable for long-distance transmission"],
    applications: ["Main-line transmission", "Long-distance irrigation"]
  }),
  product({
    id: "ML-005",
    slug: "pvc-coated-hose",
    name: "PVC Coated Hose",
    category: "mainline",
    subcategory: "Hoses",
    shortDescription: "PVC-coated hose with wear resistance and flexible handling.",
    description: "A polyester-yarn hose with double-sided plastic coating for wear resistance, durability and smooth flow.",
    features: ["Wear resistant", "Durable", "Flexible", "Smooth water flow"],
    applications: ["Irrigation water transfer", "Agricultural systems"]
  }),
  product({
    id: "ML-006",
    slug: "pe-pipe-fittings",
    name: "PE Pipe Fittings",
    category: "mainline",
    subcategory: "Pipe Fittings",
    shortDescription: "Barb, coupling, elbow, tee and threaded PE pipe connection components.",
    description: "A broad connection range for PE irrigation pipe layouts, including PP/POM fitting variants.",
    features: ["Multiple connection geometries", "Barb fittings", "Threaded fittings", "Couplings and elbows"],
    applications: ["PE pipe networks", "Irrigation main lines"]
  }),
  product({
    id: "ML-007",
    slug: "main-line-fittings",
    name: "Main Line Fittings",
    category: "mainline",
    subcategory: "Main Line Fittings",
    shortDescription: "Hose fittings, irrigation valves and hole-punching tools.",
    description: "Main-line support components shown in the catalogue include hose fittings, irrigation valves and tools for PE/layflat hose connections.",
    features: ["Hose elbows and tees", "Couplings", "Irrigation valves", "Hole-punching tools"],
    applications: ["Main-line irrigation", "Field installation"]
  }),

  product({
    id: "CP-001",
    slug: "pp-compression-ball-valve",
    name: "PP Compression Ball Valve",
    image: "assets/images/products/pp-compression-ball-valve.jpg",
    category: "compression",
    subcategory: "PP Valves",
    shortDescription: "Compression ball valve for pipeline connection and flow control.",
    description: "A PP compression valve presented for pipeline connection and irrigation flow control.",
    features: ["Compression connection", "Flow control", "Multiple interface sizes"],
    applications: ["Irrigation pipelines", "Greenhouses", "Orchards"]
  }),
  product({
    id: "CP-002",
    slug: "pp-compression-tee",
    name: "PP Compression Tee",
    category: "compression",
    subcategory: "PP Compression Fittings",
    shortDescription: "Compression tee for branching irrigation pipelines.",
    description: "A PP compression fitting used to create branch connections in irrigation pipe networks.",
    features: ["Multiple diameter variants", "Secure compression connection", "Suitable for branch layouts"],
    applications: ["Irrigation pipelines", "Greenhouses", "Orchards"]
  }),
  product({
    id: "CP-003",
    slug: "pp-compression-coupling",
    name: "PP Compression Coupling",
    category: "compression",
    subcategory: "PP Compression Fittings",
    shortDescription: "Straight compression coupling for joining irrigation pipes.",
    description: "A straight PP compression connection component available in multiple interface sizes.",
    features: ["Straight connection", "Multiple sizes", "Simple installation"],
    applications: ["PE pipelines", "Irrigation networks"]
  }),
  product({
    id: "CP-004",
    slug: "pp-compression-elbow",
    name: "PP Compression Elbow",
    category: "compression",
    subcategory: "PP Compression Fittings",
    shortDescription: "Compression elbow for changing irrigation pipeline direction.",
    description: "An elbow connection for routing irrigation pipelines while maintaining a compact connection.",
    features: ["Elbow connection", "Multiple sizes", "Compression design"],
    applications: ["Irrigation pipelines", "Greenhouses"]
  }),
  product({
    id: "CP-005",
    slug: "pvc-ball-valve",
    name: "PVC Ball Valve",
    category: "compression",
    subcategory: "PVC Valves",
    shortDescription: "PVC ball valve range for irrigation flow isolation and control.",
    description: "The catalogue includes PVC ball valves, union valves and other valve configurations.",
    features: ["Multiple interface sizes", "Flow isolation", "Union options"],
    applications: ["Irrigation networks", "Water distribution"]
  }),
  product({
    id: "CP-006",
    slug: "upvc-fittings",
    name: "UPVC Fittings",
    category: "compression",
    subcategory: "UPVC Fittings",
    shortDescription: "UPVC couplings, adapters, tees, elbows, reducers and end caps.",
    description: "A supporting UPVC fitting set shown with multiple connection geometries.",
    features: ["Couplings", "Adapters", "Tees", "Elbows", "Reducers", "End caps"],
    applications: ["Irrigation pipelines", "Water distribution"]
  }),

  product({
    id: "OT-001",
    slug: "seedling-trays",
    name: "Seedling Trays",
    category: "other",
    subcategory: "Seedling Trays",
    shortDescription: "PET, PS, PVC and PP seedling tray options for nursery applications.",
    description: "The brochure includes multiple seedling tray materials and hole configurations for nursery and propagation use.",
    features: ["PET options", "PS options", "PVC options", "PP options", "Multiple hole configurations"],
    applications: ["Nurseries", "Seedling production", "Protected cultivation"]
  }),
  product({
    id: "OT-002",
    slug: "disc-and-screen-filters",
    name: "Disc & Screen Filters",
    category: "other",
    subcategory: "Filters",
    shortDescription: "T-type, H-type and Y-type filtration options for irrigation systems.",
    description: "The filtration section includes T-type disc and screen filters, H-type filters and Y-type disc/screen filter options.",
    features: ["Disc filtration", "Screen filtration", "Multiple interface sizes", "Multiple filter configurations"],
    applications: ["Drip irrigation", "Sprinkler irrigation", "Main-line filtration"]
  }),
  product({
    id: "OT-003",
    slug: "mesh-self-cleaning-filter",
    name: "Mesh Type Self-Cleaning Filter",
    category: "other",
    subcategory: "Filters",
    shortDescription: "Self-cleaning filtration option for irrigation water treatment.",
    description: "A mesh-type self-cleaning filter shown in the brochure for irrigation filtration applications.",
    features: ["Self-cleaning design", "Reduced maintenance", "Multiple interface options"],
    applications: ["Irrigation filtration", "Agricultural water systems"]
  }),
  product({
    id: "OT-004",
    slug: "centrifugation-filter",
    name: "Centrifugation Filter",
    category: "other",
    subcategory: "Filters",
    shortDescription: "Centrifugal filtration option for irrigation water.",
    description: "A centrifugation filter is included in the catalogue's filtration range.",
    features: ["Centrifugal separation", "Agricultural irrigation support"],
    applications: ["Irrigation water filtration"]
  }),
  product({
    id: "OT-005",
    slug: "air-release-valves",
    name: "Air Release & Vacuum Breaker Valves",
    category: "other",
    subcategory: "Valves",
    shortDescription: "Air-release and vacuum-breaker valves for irrigation pipelines.",
    description: "The catalogue includes combined air release valves, air release valves and vacuum breaker valves.",
    features: ["Air release", "Vacuum protection", "Multiple connection options"],
    applications: ["Main lines", "Irrigation pipelines"]
  }),
  product({
    id: "OT-006",
    slug: "automatic-self-cleaning-filter",
    name: "Automatic Self-Cleaning Filter System",
    image: "assets/images/products/automatic-self-cleaning-filter.webp",
    category: "other",
    subcategory: "Automatic Filtration",
    shortDescription: "Automatic backwash filtration system for continuous irrigation-water treatment.",
    description: "The brochure describes an automatic backwash filter supporting dual backwash control via time and differential pressure, with sequential backwashing and automatic switching.",
    features: ["Automatic backwash", "Time and differential-pressure control", "Sequential backwashing", "Continuous filtration"],
    applications: ["Agricultural irrigation", "Large irrigation systems", "Continuous water filtration"]
  })
];

export const featuredProductSlugs = [
  "flat-emitter-drip-tape",
  "pressure-compensating-drip-tape",
  "swing-arm-sprinkler",
  "pe-layflat-prepunched-flat-hose",
  "pp-compression-ball-valve",
  "automatic-self-cleaning-filter"
];

export const cropSolutions = [
  {
    id: "cereals",
    name: "Cereals",
    icon: "fa-wheat-awn",
    description: "Structured irrigation planning for field-scale crop production.",
    tags: ["Drip", "Sprinkler", "Main Line"]
  },
  {
    id: "cotton",
    name: "Cotton",
    icon: "fa-leaf",
    description: "Water-delivery options for efficient field irrigation.",
    tags: ["Drip", "Spray", "Filtration"]
  },
  {
    id: "sugarcane",
    name: "Sugarcane",
    icon: "fa-seedling",
    description: "Irrigation components for high-water-demand field crops.",
    tags: ["Drip", "Main Line", "Valves"]
  },
  {
    id: "horticulture",
    name: "Horticulture",
    icon: "fa-apple-whole",
    description: "Precision delivery options for orchards and horticultural crops.",
    tags: ["Drip", "Micro-Sprinkler", "Filters"]
  },
  {
    id: "protected",
    name: "Protected Cultivation",
    icon: "fa-house",
    description: "Controlled irrigation options for greenhouses and protected growing.",
    tags: ["Drip", "Fogging", "Micro-Spray"]
  }
];

export function getProductBySlug(slug) {
  return products.find((item) => item.slug === slug);
}

export function getProductsByCategory(categoryId) {
  return products.filter((item) => item.category === categoryId);
}

export function searchProducts(query, category = "all") {
  const normalized = query.trim().toLowerCase();

  return products.filter((item) => {
    const categoryMatch = category === "all" || item.category === category;
    if (!normalized) return categoryMatch;

    const haystack = [
      item.name,
      item.category,
      item.subcategory,
      item.shortDescription,
      item.description,
      ...(item.features || []),
      ...(item.applications || [])
    ].join(" ").toLowerCase();

    return categoryMatch && haystack.includes(normalized);
  });
}
