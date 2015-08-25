import DS from 'ember-data';

export default DS.Model.extend({
  reading: DS.attr('number'),
  time: DS.attr('date')
});
