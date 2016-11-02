import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  price: DS.attr(),
  details: DS.attr(),
  category: DS.attr(),
  image: DS.attr(),
  stock: DS.attr()
});
