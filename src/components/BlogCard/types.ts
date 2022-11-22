export type BlogCardProps = {
  id: string;
  image: string;
  date: string;
  title: string;
  tags: string[];
  handleClick: (e: any) => void;
};
