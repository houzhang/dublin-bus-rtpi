import DS from 'ember-data';

export default DS.Model.extend({
  stopid: DS.attr('string'),
  shortname: DS.attr('string'),
  routeInformation: DS.belongsTo('route-information')
});
