import { APP_LINK_RL_MAPPING } from '@consts/app_link';
import {
  CommonActions,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { RootStackParamList } from '@typings/navigation';
import { utilParseAppLink } from '@utils/util_app_link';
import { useCallback } from 'react';

const useTypedNavigation = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const replace = useCallback(
    <T extends keyof RootStackParamList>(
      name: T,
      params?: RootStackParamList[T],
    ) => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name,
              params,
            },
          ],
        }),
      );
    },
    [navigation],
  );

  const navigateByUrl = useCallback(
    <T extends keyof RootStackParamList>(
      url: keyof typeof APP_LINK_RL_MAPPING,
      params?: RootStackParamList[T],
    ) => {
      const parsed = utilParseAppLink(url);
      console.log('parsed', parsed);
      if (!parsed) return;

      const { screen } = parsed;

      // 현재 구조는 네스팅된 네비게이터가 없으므로 직접 navigate 호출
      navigation.navigate(screen as any, params);
    },
    [navigation],
  );

  const goBack = useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      replace('Home');
    }
  }, [navigation, replace]);

  return {
    replace,
    navigateByUrl,
    goBack,
  };
};

export default useTypedNavigation;
