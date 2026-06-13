export interface CoverPageConfig {
  type: "cover";
  title: string;
  subtitle: string;
  photos: string[];
}

export interface LetterPageConfig {
  type: "letter";
  heading: string;
  contentTop: string;
  image1?: string;
  contentImgRight?: string;
  image2?: string;
  contentImgLeft?: string;
  contentBottom: string;
  signature: string;
}

export type PageConfig = CoverPageConfig | LetterPageConfig;

export interface ScrapbookConfig {
  recipient: {
    name: string;
  };
  pages: PageConfig[];
}
