import DS from 'ember-data';

export default DS.Model.extend({
  operator: DS.attr('string'),
  origin: DS.attr('string'),
  destination: DS.attr('string'),
  stop: DS.hasMany('stop')
});
