import * as React from 'react';
import useImage from 'use-image';
import { Image as Img } from 'react-konva';

export default function Image({
  src,
  width,
  height,
  setLoadingImg
}: {
  src: string;
  width: number;
  height: number;
  setLoadingImg: any;
}) {
  let [image, status] = useImage(src);
  React.useEffect(() => {
    setLoadingImg(status === 'loading');
  }, [status]);
  return <Img image={image} width={width} height={height + 200} />;
}
