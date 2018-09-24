import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    stops: { embedded: 'always' }
  },

  extractId(modelClass, resourceHash) {
    return resourceHash.origin + '_' + resourceHash.destination;
  }
});
