import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('item');
  },

  actions: {
    deleteItem(item) {
      console.log('this is the index');
      item.destroyRecord();
      this.transitionTo('index');
    }
  }
});
