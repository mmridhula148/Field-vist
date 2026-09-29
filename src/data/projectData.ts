import {
  FieldObservation,
  SatelliteBand,
  MethodologyStep,
  ModelComparison,
  ValidationMetric,
  ApplicationDomain,
  TechStackItem,
  StudyAreaPreset
} from '../types';

export const PROJECT_METADATA = {
  title: "Land Cover Analysis Using Satellite Imagery and Deep Learning",
  subtitle: "Connecting Ground Observations with Intelligent Satellite-Based Mapping",
  projectType: "College Immersion Field Study & Capstone Research Project",
  academicYear: "2025 – 2026",
  abstract: "During our academic immersion field study, fine-scale terrestrial features—including individual residential structures, narrow rural roadways, distinct crop parcels, and small retention ponds—were systematically observed. However, upon cross-referencing with medium-resolution Sentinel-2 satellite imagery (10 m – 60 m ground sample distance), significant spatial averaging, mixed pixel blurring, and loss of linear boundary definition were identified. This research project proposes a Deep Learning-based Super-Resolution and Semantic Land-Cover Mapping framework to bridge the resolution gap between ground-level reality and open-access satellite data.",
  statusBadge: "Immersion Project Research Framework"
};

export const FIELD_OBSERVATIONS: FieldObservation[] = [
  {
    id: "obs-1",
    title: "Urban & Residential Structures",
    category: "Built Environment",
    groundDescription: "Individual roof profiles, building footprints (approx. 8–15 m span), concrete pavement, and narrow intra-building spaces observed clearly at eye level.",
    satelliteChallenge: "A single 10 m x 10 m Sentinel-2 pixel (100 m²) frequently encloses both a building rooftop and adjacent pavement, producing mixed spectral signatures.",
    iconName: "Building2",
    defaultPhotoUrl: "",
    photoPlaceholder: "Field Observation Photo: Structural Footprints & Alleys [Location to be added]",
    tags: ["Built-up", "Impervious Surface", "100 m² Footprint"]
  },
  {
    id: "obs-2",
    title: "Road & Transportation Networks",
    category: "Infrastructure",
    groundDescription: "Asphalt single-lane roads (3.5–5 m width), unpaved dirt pathways (2–3 m), and drainage trenches flanking transportation corridors.",
    satelliteChallenge: "Road widths are significantly sub-pixel relative to 10 m GSD. Linear continuity is fragmented as road pixels blend into adjacent soil or grassy verges.",
    iconName: "Route",
    defaultPhotoUrl: "",
    photoPlaceholder: "Field Observation Photo: Linear Corridors & Road Segments [Location to be added]",
    tags: ["Sub-pixel Linear", "Transportation", "Corridor"]
  },
  {
    id: "obs-3",
    title: "Vegetation & Tree Canopies",
    category: "Natural Canopy",
    groundDescription: "Dense multi-tiered tree canopies, isolated roadside trees, hedgerows, and heterogeneous shrub vegetation with variable foliage health.",
    satelliteChallenge: "Individual tree crowns cannot be resolved; canopies are aggregated into a single spatial average, masking localized crown dieback or micro-biodiversity.",
    iconName: "Trees",
    defaultPhotoUrl: "",
    photoPlaceholder: "Field Observation Photo: Tree Crown Heterogeneity [Location to be added]",
    tags: ["Canopy", "Red Edge", "Chlorophyll"]
  },
  {
    id: "obs-4",
    title: "Agricultural Parcels & Cropland",
    category: "Agriculture",
    groundDescription: "Smallholder agricultural plots (often under 0.2 hectares), furrow lines, bunds, irrigation ditches, and staggered crop phenology stages.",
    satelliteChallenge: "Field boundary bunds (0.5–1 m wide) disappear completely; spectral response from adjacent plots with differing crops blend at parcel margins.",
    iconName: "Wheat",
    defaultPhotoUrl: "",
    photoPlaceholder: "Field Observation Photo: Agricultural Plot Margins & Bunds [Location to be added]",
    tags: ["Smallholder Plots", "Crop Phenology", "Field Bunds"]
  },
  {
    id: "obs-5",
    title: "Water Bodies & Retention Basins",
    category: "Hydrology",
    groundDescription: "Community retention ponds, shallow ephemeral streams, marshy wetland edges, and drainage culverts with varying turbidity and weed cover.",
    satelliteChallenge: "Narrow channels and water-land interfaces experience spectral contamination from shoreline soil and reeds, leading to misclassified shoreline boundaries.",
    iconName: "Waves",
    defaultPhotoUrl: "",
    photoPlaceholder: "Field Observation Photo: Water Body Margin & Turbidity [Location to be added]",
    tags: ["Hydrology", "Turbidity", "Edge Contamination"]
  },
  {
    id: "obs-6",
    title: "Open & Barren Land",
    category: "Terrestrial Surface",
    groundDescription: "Exposed sandy loam, dry compacted soil, active excavation zones, gravel deposits, and sparse seasonal ground cover.",
    satelliteChallenge: "High spectral similarity between dry bare soil, weathered concrete, and fallow agricultural fields complicates accurate land-use categorization.",
    iconName: "Mountain",
    defaultPhotoUrl: "",
    photoPlaceholder: "Field Observation Photo: Barren Surface & Exposed Soil [Location to be added]",
    tags: ["Soil Matrix", "Spectral Confusion", "Fallow"]
  }
];

export const SATELLITE_BANDS: SatelliteBand[] = [
  { band: "B1", name: "Coastal Aerosol", centralWavelength: "443 nm", spatialResolution: "60 m", bandwidth: "21 nm", purpose: "Atmospheric aerosol correction, coastal bathymetry, water column analysis", category: "Atmospheric" },
  { band: "B2", name: "Blue", centralWavelength: "490 nm", spatialResolution: "10 m", bandwidth: "66 nm", purpose: "True color visualization, soil/vegetation differentiation, atmospheric scattering", category: "VNIR" },
  { band: "B3", name: "Green", centralWavelength: "560 nm", spatialResolution: "10 m", bandwidth: "36 nm", purpose: "True color imaging, peak vegetation reflectance, water turbidity assessment", category: "VNIR" },
  { band: "B4", name: "Red", centralWavelength: "665 nm", spatialResolution: "10 m", bandwidth: "31 nm", purpose: "Chlorophyll absorption peak, vegetation vitality, NDVI calculation", category: "VNIR" },
  { band: "B5", name: "Vegetation Red Edge 1", centralWavelength: "705 nm", spatialResolution: "20 m", bandwidth: "15 nm", purpose: "Vegetation stress, chlorophyll content estimation, crop health tracking", category: "Red Edge" },
  { band: "B6", name: "Vegetation Red Edge 2", centralWavelength: "740 nm", spatialResolution: "20 m", bandwidth: "15 nm", purpose: "Leaf area index (LAI), canopy biochemistry, canopy biomass quantification", category: "Red Edge" },
  { band: "B7", name: "Vegetation Red Edge 3", centralWavelength: "783 nm", spatialResolution: "20 m", bandwidth: "20 nm", purpose: "Canopy structure, senescent vegetation monitoring, edge slope index", category: "Red Edge" },
  { band: "B8", name: "Broad NIR (Near Infrared)", centralWavelength: "842 nm", spatialResolution: "10 m", bandwidth: "106 nm", purpose: "Biomass estimation, land-water boundary delineation, standard NDVI/NDWI", category: "VNIR" },
  { band: "B8A", name: "Narrow NIR", centralWavelength: "865 nm", spatialResolution: "20 m", bandwidth: "21 nm", purpose: "Atmospheric water vapour correction, detailed vegetation spectral analysis", category: "VNIR" },
  { band: "B9", name: "Water Vapour", centralWavelength: "945 nm", spatialResolution: "60 m", bandwidth: "20 nm", purpose: "Atmospheric absorption modeling, column water vapor retrieval", category: "Atmospheric" },
  { band: "B10", name: "SWIR - Cirrus", centralWavelength: "1375 nm", spatialResolution: "60 m", bandwidth: "31 nm", purpose: "High-altitude cirrus cloud detection and scene contamination masking", category: "Atmospheric" },
  { band: "B11", name: "SWIR 1", centralWavelength: "1610 nm", spatialResolution: "20 m", bandwidth: "91 nm", purpose: "Snow/ice/cloud discrimination, canopy moisture content, soil moisture", category: "SWIR" },
  { band: "B12", name: "SWIR 2", centralWavelength: "2190 nm", spatialResolution: "20 m", bandwidth: "175 nm", purpose: "Geological mineral mapping, burned area identification, soil salinity", category: "SWIR" }
];

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    stepNumber: "01",
    title: "Sentinel-2 Imagery Ingestion",
    shortDesc: "Acquisition of Copernicus Sentinel-2 Level-2A surface reflectance tiles.",
    detailedDesc: "Automated retrieval of Bottom-Of-Atmosphere (BOA) corrected Level-2A granules covering the designated study area. The ingestion pipeline extracts all 13 spectral bands alongside sun-sensor geometry metadata.",
    inputs: "Copernicus Open Access Hub / Planetary Computer (SAFE/GeoTIFF format)",
    outputs: "Calibrated 13-band multispectral raster stack (12-bit DN surface reflectance)",
    toolsUsed: ["Sentinel Hub API", "Rasterio", "GDAL"]
  },
  {
    stepNumber: "02",
    title: "Cloud & Shadow Masking",
    shortDesc: "Screening opaque clouds, cirrus formations, and cloud shadows.",
    detailedDesc: "Application of Scene Classification Layer (SCL) masks and Band 10 cirrus thresholds to identify contaminated pixels. Invalid pixels are flagged or filled using multi-temporal compositing algorithms.",
    inputs: "Level-2A SCL quality bands, QA60 cloud bitmask",
    outputs: "Binary cloud/shadow validation mask & cleaned reflectance arrays",
    toolsUsed: ["NumPy", "SCL Classifier", "Rasterio Mask"]
  },
  {
    stepNumber: "03",
    title: "Normalization & Calibration",
    shortDesc: "Radiometric scaling, outlier removal, and spectral index synthesis.",
    detailedDesc: "Min-Max normalization of DN values to standard [0.0, 1.0] float32 tensors. Calculation of derived spectral indices (NDVI, NDWI, NDBI, SAVI) to augment neural network spatial-spectral feature representations.",
    inputs: "13-band BOA reflectance tensors",
    outputs: "Normalized float32 feature tensor + 4 auxiliary spectral index channels",
    toolsUsed: ["NumPy", "SciPy", "TorchVision"]
  },
  {
    stepNumber: "04",
    title: "Band Alignment & Resampling",
    shortDesc: "Harmonizing 20 m and 60 m bands to a shared spatial grid.",
    detailedDesc: "Sub-pixel geometric co-registration and bicubic / cubic-spline interpolation of lower-resolution bands (20 m and 60 m) to match the native 10 m grid coordinate reference system (CRS).",
    inputs: "Mixed resolution bands (10 m, 20 m, 60 m)",
    outputs: "Unified 10 m Ground Sample Distance (GSD) co-registered raster array",
    toolsUsed: ["GDAL Warp", "Rasterio Affine Transformation"]
  },
  {
    stepNumber: "05",
    title: "Image Tiling & Patch Extraction",
    shortDesc: "Subdividing large regional scenes into overlapping sub-patches.",
    detailedDesc: "Extraction of 256x256 pixel tiles with a 25% spatial overlap (stride 192) to maintain contextual coherence across patch boundaries during deep neural network batch processing.",
    inputs: "Full-scene multi-band aligned raster",
    outputs: "Directory of 256x256xN GeoTIFF patches with spatial bounding boxes",
    toolsUsed: ["Custom Python Patch Generator", "GeoPandas"]
  },
  {
    stepNumber: "06",
    title: "Deep Learning Model Processing",
    shortDesc: "Feature extraction across spectral and spatial receptive fields.",
    detailedDesc: "Forward pass through a deep neural architecture (Convolutional / Residual U-Net) designed to extract multi-scale spatial textures while preserving multispectral correlation across channels.",
    inputs: "Batch of normalized multispectral patches (B, C, H, W)",
    outputs: "High-dimensional latent feature representation tensor",
    toolsUsed: ["PyTorch", "TorchVision", "CUDA"]
  },
  {
    stepNumber: "07",
    title: "Super-Resolution Mapping",
    shortDesc: "Reconstruction of 4x finer spatial imagery (~2.5 m equivalent GSD).",
    detailedDesc: "Sub-pixel convolutional upsampling layers reconstruct sharp structural edges, resolving linear road corridors, building outlines, and intra-field boundaries originally blurred in 10 m pixels.",
    inputs: "Latent feature representations from encoder-decoder",
    outputs: "Enhanced fine-resolution 4x multi-channel reconstructed raster",
    toolsUsed: ["PyTorch PixelShuffle", "Sub-pixel Conv2D"]
  },
  {
    stepNumber: "08",
    title: "Land-Cover Semantic Mapping",
    shortDesc: "Pixel-wise classification into standard LULC categories.",
    detailedDesc: "A semantic segmentation head assigns each fine-resolution pixel to one of 6 target classes: Water Bodies, Built-up Structures, Dense Forest, Agricultural Cropland, Shrub/Grassland, and Bare Soil.",
    inputs: "Super-resolved feature maps",
    outputs: "Categorical Land Use / Land Cover (LULC) thematic raster",
    toolsUsed: ["Softmax Classifier", "Cross-Entropy Loss Layer"]
  },
  {
    stepNumber: "09",
    title: "Confidence & Uncertainty Estimation",
    shortDesc: "Quantifying model prediction confidence and epistemic uncertainty.",
    detailedDesc: "Application of Monte Carlo Dropout passes during inference to compute predictive entropy and variance across output classes, producing an interpretable spatial uncertainty map.",
    inputs: "Multi-pass stochastic forward evaluations",
    outputs: "Per-pixel uncertainty raster [0.0 = High Confidence, 1.0 = Ambiguous]",
    toolsUsed: ["Bayesian MC-Dropout", "Shannon Entropy Formula"]
  },
  {
    stepNumber: "10",
    title: "GIS Visualization & Cartography",
    shortDesc: "Tiling, projection conversion, and interactive WebGIS deployment.",
    detailedDesc: "Exporting results as Cloud-Optimized GeoTIFFs (COG) and Slippy Map XYZ tiles, integrated into an interactive WebGIS dashboard with custom colormaps, opacity controls, and vector overlays.",
    inputs: "Enhanced RGB, LULC raster, and Uncertainty GeoTIFFs",
    outputs: "Interactive Leaflet map layers, GIS shapefiles, and web service",
    toolsUsed: ["Leaflet", "PostGIS", "GDAL2Tiles", "React"]
  }
];

export const MODEL_ARCHITECTURES: ModelComparison[] = [
  {
    name: "CNN / ResUNet Backbone",
    category: "Initial Approach",
    architecture: "Residual Convolutional Encoder-Decoder with Skip Connections and Multi-scale Dilated Convolutions.",
    strengths: "Computationally efficient, robust spatial feature preservation, proven convergence on satellite remote sensing benchmarks.",
    limitations: "Local receptive fields can struggle with very long-range contextual dependencies across extensive agricultural zones.",
    status: "Primary Baseline Architecture (Under Evaluation)"
  },
  {
    name: "Vision Transformer (Swin-UNet / SegFormer)",
    category: "Future Scope",
    architecture: "Hierarchical Shifted Window Self-Attention with multi-scale feature aggregation.",
    strengths: "Superior global context modeling, captures regional landscape patterns and heterogeneous urban boundaries.",
    limitations: "Higher computational complexity, requires substantial paired high-resolution pre-training datasets.",
    status: "Proposed Future Enhancement"
  },
  {
    name: "Generative Adversarial Network (ESRGAN / GeoGAN)",
    category: "Future Scope",
    architecture: "Relativistic Average Discriminator paired with Deep Residual-in-Residual Dense Blocks (RRDB).",
    strengths: "Generates ultra-realistic high-frequency textures, sharp building edges, and distinct road boundaries.",
    limitations: "Risk of hallucinating non-existent micro-features; requires strict spectral consistency loss enforcement.",
    status: "Proposed Future Enhancement"
  },
  {
    name: "Latent Diffusion Model (GeoDiffusion)",
    category: "Future Scope",
    architecture: "Denoising Diffusion Probabilistic Model operating in a compressed latent spatial domain.",
    strengths: "State-of-the-art structural generation fidelity with probabilistic uncertainty sampling.",
    limitations: "High inference latency; iterative sampling steps require dedicated GPU clustering for real-time tiling.",
    status: "Proposed Future Enhancement"
  }
];

export const VALIDATION_METRICS: ValidationMetric[] = [
  {
    name: "IoU (Intersection over Union)",
    fullName: "Jaccard Index / Class-wise IoU",
    category: "Classification",
    formula: "IoU = |A ∩ B| / |A ∪ B|",
    description: "Measures spatial overlap agreement between ground-truth field polygons and model predicted land-cover class extents.",
    targetRange: "Target > 0.80 per major class",
    status: "Pending Model Training"
  },
  {
    name: "F1-Score (Dice Coefficient)",
    fullName: "Harmonic Mean of Precision & Recall",
    category: "Classification",
    formula: "F1 = 2 · (Precision · Recall) / (Precision + Recall)",
    description: "Evaluates classification accuracy balancing false positives (misclassified class) and false negatives (missed class).",
    targetRange: "Target > 0.85 macro-average",
    status: "Pending Model Training"
  },
  {
    name: "RMSE",
    fullName: "Root Mean Square Error",
    category: "Spatial Fidelity",
    formula: "RMSE = √ [ (1/N) Σ (y_true - y_pred)² ]",
    description: "Quantifies the radiometric pixel-level difference between super-resolved band reflectance and ground reference data.",
    targetRange: "Lower is better (target < 0.05 normalized)",
    status: "Pending Model Training"
  },
  {
    name: "PSNR",
    fullName: "Peak Signal-to-Noise Ratio",
    category: "Perceptual Quality",
    formula: "PSNR = 10 · log10(MAX² / MSE)",
    description: "Standard super-resolution metric measuring reconstruction fidelity in decibels (dB) relative to noise.",
    targetRange: "Target > 32.0 dB",
    status: "Pending Model Training"
  },
  {
    name: "SSIM",
    fullName: "Structural Similarity Index Measure",
    category: "Perceptual Quality",
    formula: "SSIM(x,y) = [ (2μ_x μ_y + c1)(2σ_xy + c2) ] / [ (μ_x² + μ_y² + c1)(σ_x² + σ_y² + c2) ]",
    description: "Assesses structural luminance, contrast, and structural texture consistency against high-resolution reference images.",
    targetRange: "Target > 0.88",
    status: "Pending Model Training"
  },
  {
    name: "Overall Accuracy & Cohen's Kappa",
    fullName: "Multi-class Agreement & Inter-rater Reliability",
    category: "Classification",
    formula: "κ = (P_o - P_e) / (1 - P_e)",
    description: "Evaluates overall classification correctness adjusted for chance agreement across all 6 land-cover categories.",
    targetRange: "Target κ > 0.82",
    status: "Pending Model Training"
  }
];

export const APPLICATION_DOMAINS: ApplicationDomain[] = [
  {
    id: "app-agri",
    title: "Agriculture & Crop Monitoring",
    icon: "Wheat",
    badge: "Food Security & Agronomy",
    summary: "Empowers agricultural officers and farmers with high-resolution parcel-level intelligence.",
    keyUseCases: [
      "Precision field boundary delineation for fragmented smallholder farms",
      "Early crop stress and chlorophyll anomaly detection using red-edge bands",
      "Monitoring seasonal crop cycles, planting density, and fallow rotation",
      "Irrigation canal mapping and moisture deficit spatial zoning"
    ],
    fieldRelevance: "During field immersion, individual plot boundaries separated by narrow 0.5 m bunds were observed, which standard 10 m imagery cannot isolate."
  },
  {
    id: "app-urban",
    title: "Urban Planning & Infrastructure",
    icon: "Building",
    badge: "Smart Cities & Cadastre",
    summary: "Facilitates sustainable metropolitan expansion, informal settlement mapping, and municipal monitoring.",
    keyUseCases: [
      "Sub-parcel residential building footprint extraction and density tracking",
      "Informal settlement and peri-urban sprawl detection over multi-year intervals",
      "Mapping local unpaved and paved road networks for transit planning",
      "Quantifying impervious surface ratios for stormwater runoff modeling"
    ],
    fieldRelevance: "Field inspection revealed dense residential corridors where buildings are tightly clustered with narrow 3 m alleyways."
  },
  {
    id: "app-disaster",
    title: "Disaster Assessment & Emergency Response",
    icon: "ShieldAlert",
    badge: "Resilience & Risk Mitigation",
    summary: "Provides rapid, high-detail situational maps during and following extreme climatic events.",
    keyUseCases: [
      "High-precision flood inundation boundary demarcation and water recession tracking",
      "Rapid post-event infrastructure damage and road accessibility assessment",
      "Landslide scar mapping and slope failure perimeter identification",
      "Wildfire burn severity zoning and vegetative regrowth tracking"
    ],
    fieldRelevance: "Critical drainage culverts observed in the field can be accurately mapped to forecast local waterlogging risks."
  },
  {
    id: "app-env",
    title: "Environmental & Ecological Conservation",
    icon: "Leaf",
    badge: "Biodiversity & Climate Action",
    summary: "Supports long-term ecological balance, forest conservation, and wetland protection.",
    keyUseCases: [
      "Micro-deforestation and localized tree canopy degradation monitoring",
      "Wetland boundary shrinkage and seasonal water body contraction tracking",
      "Riparian buffer zone monitoring along river courses and reservoirs",
      "Soil erosion susceptibility mapping across degraded hilly terrain"
    ],
    fieldRelevance: "Ground checks identified small wetland patches vulnerable to encroachment that are obscured by mixed-pixel effects."
  }
];

export const TECH_STACK_ITEMS: TechStackItem[] = [
  { name: "Python", category: "Programming", purpose: "Core language for scientific computing, raster manipulation, and neural network training pipelines.", versionOrSpec: "v3.10+", icon: "Code2" },
  { name: "PyTorch & TorchVision", category: "Deep Learning", purpose: "End-to-end framework for super-resolution model architecture, loss functions, and GPU tensor processing.", versionOrSpec: "v2.2+", icon: "Cpu" },
  { name: "Rasterio", category: "Image Processing", purpose: "Geospatial raster I/O built on GDAL, managing coordinate reference systems, multi-band arrays, and windowed reads.", versionOrSpec: "v1.3+", icon: "Layers" },
  { name: "GDAL", category: "Image Processing", purpose: "Geospatial Data Abstraction Library for coordinate warping, format translation, and spatial indexing.", versionOrSpec: "v3.8+", icon: "Database" },
  { name: "NumPy & SciPy", category: "Image Processing", purpose: "High-performance vectorized array mathematics for radiometric normalization and spectral index synthesis.", versionOrSpec: "v1.26+", icon: "Binary" },
  { name: "GeoPandas & Shapely", category: "GIS & Spatial", purpose: "Vector geospatial analysis, bounding box spatial queries, polygon clipping, and shapefile processing.", versionOrSpec: "v0.14+", icon: "MapPin" },
  { name: "PostGIS", category: "GIS & Spatial", purpose: "Spatial database engine for storing field truth GPS vectors, polygon annotations, and spatial index querying.", versionOrSpec: "PostgreSQL 16", icon: "Server" },
  { name: "FastAPI / Flask", category: "Backend API", purpose: "Lightweight asynchronous REST API serving on-demand patch inference, metadata querying, and tile generation.", versionOrSpec: "FastAPI 0.110+", icon: "Send" },
  { name: "Leaflet & React", category: "Mapping & UI", purpose: "Interactive client-side WebGIS mapping interface with dynamic layer blending, opacity sliders, and pixel probing.", versionOrSpec: "Leaflet 1.9 / React 18", icon: "Monitor" },
  { name: "Docker & NVIDIA CUDA", category: "Deployment", purpose: "Containerized reproducible execution environment with hardware-accelerated GPU inference pipeline.", versionOrSpec: "CUDA 12.2 / Docker 26+", icon: "Box" }
];

export const STUDY_PRESETS: StudyAreaPreset[] = [
  {
    id: "tn-agro",
    name: "Demo Study Area: Tamil Nadu Agro-Corridor",
    coordinates: [10.7905, 78.7047],
    zoom: 14,
    description: "Generic demo region in Central Tamil Nadu (Tiruchirappalli / Cauvery Basin) exhibiting mixed cropland, irrigation channels, and rural built settlements.",
    primaryFeatures: ["Agricultural Cropland", "Irrigation Channels", "Rural Built-up", "Fallow Parcels"]
  },
  {
    id: "tn-urban-fringe",
    name: "Demo Study Area: Tamil Nadu Peri-Urban Fringe",
    coordinates: [11.0168, 76.9558],
    zoom: 14,
    description: "Generic demo area in Western Tamil Nadu exhibiting industrial-residential clusters, road networks, and transitional vacant soil plots.",
    primaryFeatures: ["Dense Built-up", "Paved Corridors", "Vegetation Pockets", "Bare Soil"]
  },
  {
    id: "tn-wetland",
    name: "Demo Study Area: Tamil Nadu Coastal/Lake Basin",
    coordinates: [12.9249, 80.1300],
    zoom: 14,
    description: "Generic demo basin in Eastern Tamil Nadu featuring water bodies, wetland vegetation buffers, and surrounding infrastructure.",
    primaryFeatures: ["Water Body", "Wetland Buffer", "Canopy Trees", "Urban Periphery"]
  }
];

export const LAND_COVER_CLASSES = [
  { id: "water", name: "Water Bodies & Streams", color: "#0ea5e9", rgb: "rgb(14, 165, 233)", hex: "#0ea5e9", desc: "Lakes, ponds, perennial channels, retention basins" },
  { id: "builtup", name: "Built-up & Infrastructure", color: "#ef4444", rgb: "rgb(239, 68, 68)", hex: "#ef4444", desc: "Residential buildings, industrial sheds, paved roads, concrete" },
  { id: "forest", name: "Dense Canopy & Forest", color: "#10b981", rgb: "rgb(16, 185, 129)", hex: "#10b981", desc: "Dense tree groves, high-biomass canopy, woodland pockets" },
  { id: "cropland", name: "Agricultural Cropland", color: "#eab308", rgb: "rgb(234, 179, 8)", hex: "#eab308", desc: "Cultivated parcels, irrigated plots, seasonal crops" },
  { id: "shrub", name: "Shrubland & Grassland", color: "#84cc16", rgb: "rgb(132, 204, 22)", hex: "#84cc16", desc: "Sparse scrub vegetation, grassy verges, fallow regrowth" },
  { id: "barren", name: "Barren Land & Bare Soil", color: "#d97706", rgb: "rgb(217, 119, 6)", hex: "#d97706", desc: "Exposed soil, construction excavations, dry uncultivated terrain" }
];
