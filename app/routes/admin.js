import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addItem(params) {
      var newItem = this.store.createRecord('item', params);
      newItem.save();
    }
  }
});
