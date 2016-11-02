import Ember from 'ember';

export default Ember.Service.extend({
  items:[],

  add(item) {
    this.get('items').pushObject(item);
  },

  remove(item) {
    var indexPosition = this.get('items').indexOf(item);
    if (indexPosition > -1) {
      var newItems = this.get('items').slice(0, indexPosition);
      newItems = newItems.concat(this.get('items').slice(indexPosition + 1, this.get('items').length));
      this.set('items', newItems);
    }
  }
});
