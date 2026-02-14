import { RefObject } from 'react';
import {
  FlashList,
  FlashListRef,
  type FlashListProps,
} from '@shopify/flash-list';
import { RefreshControl } from 'react-native-gesture-handler';

interface IProps<T> extends FlashListProps<T> {
  refreshProps?: {
    isRefreshing: boolean;
    onRefresh?: () => void;
  };
  ref?: RefObject<FlashListRef<T>>;
}

const CommonFlashList = <T,>({
  ref,
  refreshProps,
  onEndReachedThreshold = 0.8,
  ...flashListProps
}: IProps<T>) => {
  return (
    <FlashList
      ref={ref}
      overScrollMode="never"
      keyboardShouldPersistTaps="handled"
      refreshControl={
        refreshProps ? (
          <RefreshControl
            refreshing={refreshProps.isRefreshing}
            onRefresh={refreshProps.onRefresh}
          />
        ) : undefined
      }
      onEndReachedThreshold={onEndReachedThreshold}
      {...flashListProps}
    />
  );
};

export default CommonFlashList;
