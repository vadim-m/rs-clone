import Route from 'route-parser';

export const appConstants = {
  routes: {
    index: '/',
    events: '/events',
    plans: '/plans',
  },
  search: {
    types: {
      event: 'event',
      plan: 'plan',
    },
  },
};

export const routes = {
  Home: new Route(appConstants.routes.index),
  Events: new Route(appConstants.routes.events),
  Plans: new Route(appConstants.routes.plans),
};
