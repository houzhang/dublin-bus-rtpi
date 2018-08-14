import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | bus-route', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:bus-route');
    assert.ok(route);
  });
});
