import { ReactNode } from "react";

export interface CarouselProps {
  autoSlide?: boolean;
  autoSlideInterval?: number;
  children: readonly ReactNode[];
}
