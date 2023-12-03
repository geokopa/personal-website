import React from "react";
import { ImageCardProps } from "../../props/ImageCardProps";

const ImageCard: React.FC<ImageCardProps> = ({
  imgSrc,
  children,
  onClick,
  ...props
}) => {
  return (
    <div
      {...props}
      className="relative max-w-xs overflow-hidden rounded-xl shadow-lg group cursor-pointer"
      onClick={onClick}
    >
      <img
        src={imgSrc}
        alt=""
        className="transition-transform group-hover:scale-110 duration-200 h-auto w-full"
      />
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
        <div className="p-4 text-white">{children}</div>
      </div>
    </div>
  );
};

export default ImageCard;
