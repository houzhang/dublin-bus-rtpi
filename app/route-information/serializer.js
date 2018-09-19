import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    stop: { embedded: 'always' }
  },

  normalizeArrayResponse(store, primaryModelClass, payload, id) {
    if (payload.errorcode == 0) {
      payload.results.forEach(element => {
        element.id = element.operator + "_" + element.origin + "_" + element.destination
      });
  
      payload.routeInformation = payload.results
  
      delete payload.errorcode
      delete payload.errormessage
      delete payload.numberofresults
      delete payload.timestamp
      delete payload.results      
      
      console.log(payload)
    } else {
      throw new Error(payload.errormessage)
    }    
    return this._super(...arguments);
  }
});
