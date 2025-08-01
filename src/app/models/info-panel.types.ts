
export type MetadataValueType = 'text' | 'date' | 'boolean' | 'status';


export type RemediationItem = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  expandedText: string;
  icon: string;
  isExpanded: boolean;
};

export type MetadataItem = {
  key: string;
  value: string | boolean | Date;
  type?: MetadataValueType;
  translationKey?: string;
};

export type DescriptionSection = {
  title: string;
  content: string;
  translationKey?: string;
};

export type MetadataSection = {
  title: string;
  content: string;
  items: MetadataItem[];
  translationKey?: string;
  description?: string;
};


export type InfoPanelData = {
  description: DescriptionSection;
  metadata: MetadataSection;
};


export type TranslationFunction = (key: string, fallback?: string) => string;


export type AssetStatus = 'Active' | 'Inactive' | 'Pending' | 'Maintenance' | 'Error';


export type Environment = 'Development' | 'Staging' | 'Production' | 'Testing';


export type Region = 'US-East-1' | 'US-West-1' | 'EU-West-1' | 'AP-Southeast-1';


export type TypedMetadataItem = MetadataItem & {
  status?: AssetStatus;
  environment?: Environment; 
  region?: Region;
};


export type MetadataCategory = 'basic' | 'technical' | 'security' | 'timestamps';


export type GroupedMetadata = {
  [K in MetadataCategory]?: MetadataItem[];
};


export type InfoPanelProps = {
  data: InfoPanelData;
  loading?: boolean;
  error?: string | null;
  className?: string;
};