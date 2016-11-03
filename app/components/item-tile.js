import Ember from 'ember';

export default Ember.Component.extend({

  actions: {


    deleteItem(item) {
      if (confirm("you sure?")) {
          console.log('this is the item-tile component')
        this.sendAction("deleteItem", item);
      }
    }
  }
});
