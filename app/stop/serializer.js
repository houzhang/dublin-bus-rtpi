import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: 'stopid',

  normalizeArrayResponse(store, primaryModelClass, payload, id) {
    console.log("we are in stop serializer")
    return this._super(...arguments);
  }

});
