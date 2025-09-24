import { JSX, CSSProperties } from "react";

export type ProductoType = {
    name: string;
    imageUrl: string;
    categoryId: CategoriaType["id"];
};

export type CategoriaType = {
  id: number;
  name: string;
  isSelected: boolean;
};

export type FeatureType = {
  icon: JSX.Element;
  title: string;
  description: string;
};

export type IconoType = { size: number; color: CSSProperties["color"] };
