export interface Page {
  type: string;
  [key: string]: any;
}

export interface ScrapbookConfig {
  recipient: {
    name: string;
  };

  pages: Page[];
}