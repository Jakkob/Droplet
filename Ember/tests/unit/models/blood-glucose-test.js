import { moduleForModel, test } from 'ember-qunit';

moduleForModel('blood-glucose', 'Unit | Model | blood glucose', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
