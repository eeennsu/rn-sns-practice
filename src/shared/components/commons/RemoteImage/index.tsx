import { utilResizeImageUrl } from '@utils/util_image';
import { FC, useState } from 'react';
import {
  ImageErrorEvent,
  ImageLoadEvent,
  StyleSheet,
  View,
  type ImageProps,
} from 'react-native';
import { Text } from 'tamagui';

interface IProps extends ImageProps {
  width: number;
  height: number;
  minWidth?: number;
  minHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
  isBorder?: boolean;
}

const CommonRemoteImage: FC<IProps> = ({
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  isBorder,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const imageUri = utilResizeImageUrl({
    width,
    url: (source as WithUri)?.uri,
  });

  const handleImageLoaded = (event: ImageLoadEvent): void => {
    setIsLoaded(true);
    props.onLoad?.(event);
  };

  const handleImageError = (event: ImageErrorEvent): void => {
    setIsError(true);
    props.onError?.(event);
  };

  const imageWidth =
    maxWidth > 0 ? (width > maxWidth ? maxWidth : width) : width;
  const imageHeight =
    maxHeight > 0 ? (height > maxHeight ? maxHeight : height) : height;

  return (
    <View
      style={{
        width: imageWidth,
        height: imageHeight,
        borderRadius: isBorder ? 12 : 0,
        overflow: 'hidden',
      }}
    >
      <Text fontStyle></Text>
      <CommonSkeleton
        width={imageWidth}
        height={imageHeight}
        rounded={props.rounded}
        isDone={isLoaded || isError}
      />
    </View>
  );
};

export default CommonRemoteImage;

const styles = StyleSheet.create({
  view: {
    position: 'relative',
  },
});
