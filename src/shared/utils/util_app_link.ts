import { APP_LINK_RL_MAPPING } from '@consts/app_link';

export const utilParseAppLink = (url: string) => {
  for (const [navigator, routes] of Object.entries(APP_LINK_RL_MAPPING)) {
    console.log('url', url);
    console.log('routes', routes);
    if (url === routes) {
      return {
        navigator,
        screen: url,
      };
    }

    // if (url in routes) {
    //   return {
    //     navigator,
    //     screen: routes[url as keyof typeof routes],
    //   };
    // }
  }
};
