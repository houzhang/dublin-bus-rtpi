import DS from 'ember-data';
import { inject } from '@ember/service';
import { Promise } from 'rsvp';


export default DS.Adapter.extend({
  ajax: inject('ajax'),

  query(store) {
    return new Promise((resolve, reject) => {
      this.get('ajax').request('https://data.smartdublin.ie/cgi-bin/rtpi/routeinformation?routeid=16&operator=bac').then((data) => { 
        resolve(data.results);
      }, (jqXHR) => {
        reject(jqXHR);
      });
    });
  }
});
