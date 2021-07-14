import { ImageLoaderProps } from "next/image";

function imageLoader({ src }: ImageLoaderProps) {
  return src;
}

export default imageLoader;
