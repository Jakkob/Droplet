import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('sugar-dial', 'Integration | Component | sugar dial', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sugar-dial}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#sugar-dial}}
      template block text
    {{/sugar-dial}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
