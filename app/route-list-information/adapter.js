import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://data.smartdublin.ie/cgi-bin/rtpi',

  pathForType(type) {
    // return underscore(type);
    return "routelistinformation"
  }
});