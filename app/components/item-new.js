import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addItem() {
      var params = {
        name: this.get('name'),
        price: parseInt(this.get('price')),
        details: this.get('details'),
        category: this.get('category'),
        image: this.get('image'),
        stock: parseInt(this.get('stock'))
      };
      this.set('name', '');
      this.set('price', '');
      this.set('details', '');
      this.set('category', '');
      this.set('image', '');
      this.set('stock', '');
      this.sendAction('addItem', params);
    }
  }
});
