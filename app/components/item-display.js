import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    deleteItem(item) {
      console.log('this is the item-display component');
      this.sendAction("deleteItem", item);
    }
  },

  sortBy: ['price:asc'],
  sortedItems: Ember.computed.sort('items', 'sortBy'),
});
