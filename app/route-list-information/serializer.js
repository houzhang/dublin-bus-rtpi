import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  normalizeArrayResponse(store, primaryModelClass, payload, id) {

    payload.results.forEach(element => {
      element.id = element.operator + "_" + element.route
    });

    payload.routeListInformation = payload.results

    delete payload.errorcode
    delete payload.errormessage
    delete payload.numberofresults
    delete payload.timestamp
    delete payload.results
    
    return this._super(...arguments);
  },

});
