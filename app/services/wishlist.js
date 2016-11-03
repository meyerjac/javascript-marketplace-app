import Ember from 'ember';

export default Ember.Service.extend({
  wishlistItems: [],

  add(item) {
  this.get('items').pushObject(item);
  }
});
