import { ReactNode } from "react";

export interface ImageCardProps {
  imgSrc: string;
  onClick?: () => void;
  children: ReactNode;
}
