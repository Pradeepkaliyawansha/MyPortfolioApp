import { Tag } from "./tags";

export interface Card {
  id: number;
  name: string;
  summary: string;
  projectLink: string;
  tags: Tag[];
}
