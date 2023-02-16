import Route from 'route-parser';

export const appConstants = {
  routes: {
    index: '/',
    events: '/events',
    plans: '/plans',
    refuel: '/refuel',
    service: '/service',
    schedule: '/schedule',
    other: '/other',
    login: '/signin',
    registration: '/signup',
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
  Schedule: new Route(appConstants.routes.schedule),
  Other: new Route(appConstants.routes.other),
  Login: new Route(appConstants.routes.login),
  Registration: new Route(appConstants.routes.registration),
};
