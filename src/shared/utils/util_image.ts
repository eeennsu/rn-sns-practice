import FastImage from '@d11/react-native-fast-image';

/**
 * 이미지 캐시 최적화 유틸리티
 */
export const UtilImageCache = {
  /**
   * 메모리 캐시 정리
   */
  clearMemoryCache: (): void => {
    FastImage.clearMemoryCache();
  },

  /**
   * 디스크 캐시 정리
   */
  clearDiskCache: (): void => {
    FastImage.clearDiskCache();
  },

  /**
   * 모든 캐시 정리
   */
  clearAllCache: (): void => {
    FastImage.clearMemoryCache();
    FastImage.clearDiskCache();
  },

  /**
   * 특정 이미지 URL 프리로드
   */
  preloadImage: (url: string): void => {
    if (url) {
      FastImage.preload([{ uri: url }]);
    }
  },

  /**
   * 여러 이미지 URL 프리로드
   */
  preloadImages: (urls: string[]): void => {
    const validUrls = urls.filter(url => Boolean(url));
    if (validUrls.length > 0) {
      FastImage.preload(validUrls.map(url => ({ uri: url })));
    }
  },
};

import { Platform } from 'react-native';

interface IResizeImageUrlParams {
  width: number;
  url: string;
}

export const utilResizeImageUrl = ({
  width,
  url,
}: IResizeImageUrlParams): string => {
  if (!url) return '';

  // ios는 3배, 안드로이드는 2.5배로 이미지 해상도 대응
  const newWidth = Math.floor(Platform.OS === 'ios' ? width * 3 : width * 2.5);
  const quality = 85;

  return url + `?w=${newWidth}&q=${quality}&f=webp`;
};
