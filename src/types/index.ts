export type ToggleProps = {
  isOpen: boolean;
};

export type BlogPostProps = {
  id: string;
  date: string;
  image: string;
  title: string;
};

export interface IPostCard {
  id: string;
  image: string;
  date: string;
  title: string;
  tags: string[];
  author: string;
  viewsAmount: number;
  category: string;
  previewText: string;
  text: string[];
}
