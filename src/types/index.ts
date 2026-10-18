export type ProductCategory = 
  | 'tous'
  | 'chaud'
  | 'salades'
  | 'boulangerie'
  | 'sacs'
  | 'gobelets'
  | 'luxe';

export interface ProductItem {
  id: string;
  name: string;
  category: 'chaud' | 'salades' | 'boulangerie' | 'sacs' | 'gobelets' | 'luxe';
  categoryLabel: string;
  subtitle: string;
  description: string;
  image: string;
  dimensions: string[];
  materials: string[];
  moq: string;
  leadTime: string;
  features: string[];
}
