import Route from 'route-parser';

export const appConstants = {
  routes: {
    index: '/',
    events: '/events',
    plans: '/plans',
    statistic: '/statistic',
    refuel: '/refuel',
    service: '/service',
    reminder: '/reminder',
    other: '/other',
    login: '/signin',
    registration: '/signup',
    settings: '/settings',
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
  Statistic: new Route(appConstants.routes.statistic),
  Refuel: new Route(appConstants.routes.refuel),
  Service: new Route(appConstants.routes.service),
  Reminder: new Route(appConstants.routes.reminder),
  Other: new Route(appConstants.routes.other),
  Login: new Route(appConstants.routes.login),
  Registration: new Route(appConstants.routes.registration),
  Settings: new Route(appConstants.routes.settings),
};
