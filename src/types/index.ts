export interface FieldObservation {
  id: string;
  title: string;
  category: string;
  groundDescription: string;
  satelliteChallenge: string;
  iconName: string;
  defaultPhotoUrl: string;
  photoPlaceholder: string;
  tags: string[];
}

export interface SatelliteBand {
  band: string;
  name: string;
  centralWavelength: string;
  spatialResolution: '10 m' | '20 m' | '60 m';
  bandwidth: string;
  purpose: string;
  category: 'VNIR' | 'Red Edge' | 'SWIR' | 'Atmospheric';
}

export interface MethodologyStep {
  stepNumber: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  inputs: string;
  outputs: string;
  toolsUsed: string[];
}

export interface ModelComparison {
  name: string;
  category: 'Initial Approach' | 'Future Scope';
  architecture: string;
  strengths: string;
  limitations: string;
  status: string;
}

export interface ValidationMetric {
  name: string;
  fullName: string;
  category: 'Classification' | 'Spatial Fidelity' | 'Perceptual Quality';
  formula: string;
  description: string;
  targetRange: string;
  status: 'Pending Model Training';
}

export interface ApplicationDomain {
  id: string;
  title: string;
  icon: string;
  badge: string;
  summary: string;
  keyUseCases: string[];
  fieldRelevance: string;
}

export interface TechStackItem {
  name: string;
  category: 'Programming' | 'Deep Learning' | 'Image Processing' | 'GIS & Spatial' | 'Backend API' | 'Mapping & UI' | 'Deployment';
  purpose: string;
  versionOrSpec: string;
  icon: string;
}

export interface StudyAreaPreset {
  id: string;
  name: string;
  coordinates: [number, number];
  zoom: number;
  description: string;
  primaryFeatures: string[];
}
