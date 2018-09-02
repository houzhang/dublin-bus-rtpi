import DS from 'ember-data';

export default DS.Model.extend({
  operator: DS.attr('string'),
  route: DS.attr('string')
});
