import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  heading: Ember.computed('item.name', 'item.details', function() {
    return this.get('item.name') + ' - ' + this.get('item.details');
  }),


  actions : {
    addToCart(item) {
      this.get('shoppingCart').add(item);
    }
  }
});
