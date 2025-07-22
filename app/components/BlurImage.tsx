import Image, { ImageProps } from "next/image";

interface BlurImageProps
  extends Omit<ImageProps, "placeholder" | "blurDataURL"> {
  blurDataURL?: string;
  className?: string;
}

export default function BlurImage({
  src,
  alt,
  blurDataURL,
  className,
  ...rest
}: BlurImageProps) {
  const fallbackBlur =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=";

  return (
    <Image
      src={src}
      alt={alt}
      fill
      placeholder="blur"
      blurDataURL={blurDataURL || fallbackBlur}
      className={className}
      {...rest}
    />
  );
}
