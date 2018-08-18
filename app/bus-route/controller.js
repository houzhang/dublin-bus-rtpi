import Controller from '@ember/controller';
import {observer} from '@ember/object';
import { isBlank } from '@ember/utils';

export default Controller.extend({
  searchRoute: "",
  
  init() {
    this._super(...arguments);
    this.filteredRoute = [];
  },

  filterRouteChanged: observer('searchRoute', function() {
    const result = this.model.filter(busRoute => busRoute.route.startsWith(this.searchRoute.toUpperCase()));
    if(isBlank(this.searchRoute)) {
      this.set('filteredRoute', this.model)
    } else {
      this.set('filteredRoute', result)
    }
  })
});