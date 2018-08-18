import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | bus-real-time', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:bus-real-time');
    assert.ok(route);
  });
});
