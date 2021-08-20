import EmberRouter from '@ember/routing/router';
import config from 'movie-rating-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about', { path: '/about' });
  this.route('reviews', { path: '/allreviews' });
  this.route('films', { path: '/allfilms' });
  this.route('contact', { path: '/contact' });
});
