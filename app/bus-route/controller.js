import Controller from '@ember/controller';
import {observer} from '@ember/object';
import { isBlank } from '@ember/utils';

export default Controller.extend({
  searchRoute: "",
  filteredRoute: [],

  filterRouteChanged: observer('searchRoute', function() {
    const result = this.model.filter(busRoute => busRoute.route.startsWith(this.searchRoute));
    if(isBlank(this.searchRoute)) {
      this.set('filteredRoute', this.model)
    } else {
      this.set('filteredRoute', result)
    }
  })
});