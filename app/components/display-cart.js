import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  cartTotal: Ember.computed('shoppingCart.items.length', function() {
    var total = 0;
    this.get("shoppingCart.items").forEach(function(item) {
      total += parseFloat(item.get('price'));
    })
    return total.toFixed(2);
  }),

  actions: {
    removeItem(item) {
      this.get('shoppingCart').remove(item);
      });
    }
  }
});
