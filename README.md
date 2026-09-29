# Land Cover Analysis Using Satellite Imagery and Deep Learning

An academic immersion research project bridging the gap between ground-level field observations and medium-resolution satellite remote sensing using deep learning super-resolution and semantic land-cover mapping.

---

## 📌 Project Overview

During our college immersion field study, fine-scale terrestrial features—including individual residential structures, narrow rural roadways, smallholder agricultural parcels, and localized water bodies—were systematically observed. However, cross-referencing with open-access medium-resolution satellite imagery (**Copernicus Sentinel-2**, 10 m – 60 m Ground Sample Distance) revealed substantial spatial averaging, mixed-pixel blurring, and loss of linear boundary definition.

This project proposes an end-to-end deep learning framework:
1. **Multispectral Ingestion & Pre-processing**: 13-band Sentinel-2 Level-2A BOA reflectance ingestion, cloud/shadow masking, and sub-pixel grid alignment.
2. **Deep Neural Super-Resolution**: Reconstructing 4x finer spatial detail (~2.5 m equivalent Ground Sample Distance) using convolutional and residual encoder-decoder architectures.
3. **Multi-Class Land-Cover Semantic Segmentation**: Classifying terrain into 6 standard categories (*Water Bodies*, *Built-up Structures*, *Dense Forest*, *Agricultural Cropland*, *Shrubland*, and *Bare Soil*).
4. **Bayesian Uncertainty Quantification**: Estimating pixel-level confidence and entropy to identify mixed-pixel transition boundaries.
5. **Interactive WebGIS Cartography**: Production web dashboard with dynamic layer blending, opacity controllers, and interactive coordinate probes.

> **Academic Note:** This project represents an undergraduate/postgraduate college immersion field study and capstone research project. All models, metrics, and visualization layers adhere to scientific integrity guidelines.

---

## 🚀 Key Features & Narrative Flow

* **01. Field Observations**: Detailed catalog of observed terrestrial features (*Buildings*, *Roads*, *Canopies*, *Cropland*, *Water Bodies*, *Barren Land*) with interactive photograph preview upload capability.
* **02. Problem Identified**: Analysis of spatial resolution constraints, mixed-pixel phenomena, and sub-pixel linear feature loss, paired with an interactive **Ground Reality vs. 10m Satellite Resolution Slider**.
* **03. Proposed Solution**: High-fidelity architectural pipeline detailing Sentinel-2 input to multi-task output products.
* **04. 10-Step Technical Methodology**: Comprehensive step-by-step workflow covering data ingestion, SCL masking, normalization, tiling, deep learning inference, 4x super-resolution, land-cover mapping, MC-Dropout uncertainty estimation, and GIS cartography.
* **05. Sentinel-2 Reference Guide**: Interactive directory of all 13 Sentinel-2 spectral bands across 10m, 20m, and 60m spatial resolution regimes, including standard remote sensing band combinations (True Color RGB, Color Infrared CIR, Agriculture & Moisture).
* **06. Interactive WebGIS Map**: Fully responsive Leaflet-powered GIS dashboard featuring 4 toggleable prototype layers (*Original Sentinel-2*, *Super-Resolution Reconstructed*, *Land-Cover Map*, *Uncertainty Heatmap*), opacity slider, study area presets, and coordinate pixel probe.
* **07. Field Validation Framework**: Ground truth co-registration protocol and standard remote sensing quantitative evaluation metrics (*IoU*, *F1-Score*, *RMSE*, *PSNR*, *SSIM*, *Kappa*).
* **08. Applied Domains**: Real-world application cards for *Agriculture*, *Urban Planning*, *Disaster Assessment*, and *Environmental Conservation*.
* **09. Academic Affiliation Profile**: Formatted metadata section with standardized placeholders for student, department, institution, guide, and coursework details.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend WebGIS** | React 18, TypeScript, Vite, Tailwind CSS, Leaflet, Lucide React |
| **Programming** | Python 3.10+ |
| **Deep Learning** | PyTorch, TorchVision, CUDA |
| **Image & Raster Processing** | Rasterio, GDAL, NumPy, SciPy |
| **Spatial & Vector GIS** | GeoPandas, Shapely, PostGIS / PostgreSQL |
| **Backend & Inference API** | FastAPI / Flask REST Services |
| **Deployment & Containerization** | Docker, NVIDIA Container Toolkit, GitHub Pages, Vercel |

---

## 📂 Project Structure

```text
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages automated CI/CD deployment
├── public/
│   └── satellite.svg           # Application favicon and satellite vector asset
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky glassmorphism header & mobile navigation
│   │   ├── Footer.tsx          # Academic footer with BibTeX citation exporter
│   │   ├── SliderCompare.tsx   # Ground Reality vs 10m Satellite interactive slider
│   │   ├── FieldPhotoUploader.tsx # Field study photo gallery & preview tool
│   │   └── LeafletMapDemo.tsx  # Leaflet WebGIS dashboard with layer controls
│   ├── data/
│   │   └── projectData.ts      # Structured metadata, bands, steps, metrics, and presets
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── FieldObservationsSection.tsx
│   │   ├── ProblemIdentifiedSection.tsx
│   │   ├── ProposedSolutionSection.tsx
│   │   ├── MethodologySection.tsx
│   │   ├── SatelliteDataSection.tsx
│   │   ├── InteractiveMapSection.tsx
│   │   ├── FieldValidationSection.tsx
│   │   ├── ApplicationsSection.tsx
│   │   ├── TechStackSection.tsx
│   │   ├── OutcomesSection.tsx
│   │   ├── ConclusionSection.tsx
│   │   └── AboutSection.tsx
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces and data models
│   ├── App.tsx                 # Main application container with scroll spy
│   ├── main.tsx                # React DOM entry point
│   └── index.css               # Tailwind CSS directives & Leaflet styling
├── index.html                  # HTML5 template with Google Fonts & Leaflet CDN
├── package.json                # Project dependencies and npm scripts
├── postcss.config.js           # PostCSS Tailwind configuration
├── tailwind.config.js          # Customized geospatial & earth tone theme palette
├── tsconfig.json               # TypeScript compiler configuration
└── vite.config.ts              # Vite bundler configuration with relative base path
```

---

## 💻 Getting Started Locally

### Prerequisites
* **Node.js** (v18.0.0 or higher)
* **npm**, **yarn**, or **pnpm**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/land-cover-satellite-deep-learning.git
   cd land-cover-satellite-deep-learning
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

4. **Build production bundle:**
   ```bash
   npm run build
   ```
   The compiled static files will be generated in the `dist/` directory.

---

## 🚢 Deployment Instructions

### Deploy to GitHub Pages

This repository is pre-configured with relative base paths (`./`) in `vite.config.ts` and includes a GitHub Actions workflow:

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial academic immersion project commit"
   git branch -M main
   git remote add origin https://github.com/your-username/land-cover-satellite-deep-learning.git
   git push -u origin main
   ```
2. Navigate to your repository on GitHub &rarr; **Settings** &rarr; **Pages**.
3. Under **Build and deployment** &rarr; **Source**, select **GitHub Actions**.
4. The workflow will automatically build and publish your site at `https://your-username.github.io/land-cover-satellite-deep-learning/`.

### Deploy to Vercel

1. Install the Vercel CLI: `npm i -g vercel` or connect your GitHub repository directly at [vercel.com](https://vercel.com).
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Click **Deploy**.

---

## 🔮 Future Scope & Enhancements

* **Transformer Architectures**: Integrating Swin-UNet / SegFormer backbones for long-range global landscape attention.
* **Generative Adversarial Synthesis**: Investigating ESRGAN / CycleGAN models with spectral fidelity loss constraints to generate realistic high-frequency edge textures.
* **Latent Diffusion**: Exploring GeoDiffusion for probabilistic sub-pixel super-resolution.
* **Multi-Temporal Analysis**: Ingesting multi-date Sentinel-2 time series to map seasonal crop phenology dynamics and urban sprawl rates.

---

## 📜 Academic Citation

```bibtex
@mastersthesis{landcover_dl_2026,
  title  = {Land Cover Analysis Using Satellite Imagery and Deep Learning},
  author = {[Student Name Placeholder]},
  school = {[Department and College Name Placeholder]},
  year   = {2026},
  note   = {Academic Immersion Field Research Project}
}
```

---

## ⚖️ License & Data Access

* **Code**: Open-source research distribution under the MIT License.
* **Satellite Data**: Contains modified Copernicus Sentinel data (2025–2026), processed by European Space Agency (ESA) open access terms.
