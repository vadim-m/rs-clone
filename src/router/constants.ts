import Route from 'route-parser';

export const appConstants = {
  routes: {
    index: '/',
    events: '/events',
    plans: '/plans',
    refuel: '/refuel',
    service: '/service',
    reminder: '/reminder',
    other: '/other',
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
  Refuel: new Route(appConstants.routes.refuel),
  Service: new Route(appConstants.routes.service),
  Reminder: new Route(appConstants.routes.reminder),
  Other: new Route(appConstants.routes.other),
};
