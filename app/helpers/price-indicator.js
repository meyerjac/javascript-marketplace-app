import Ember from 'ember';

export function priceIndicator(params) {
  var itemPrice = params[0].get('price');

  if (parseInt(itemPrice) > 40 ) {
    return Ember.String.htmlSafe('<span class="dolla-signs">$$$</span>');
  } else if (parseInt(itemPrice)> 10 ) {
    return Ember.String.htmlSafe('<span class="dolla-signs">$$</span')
  } else {
    return Ember.String.htmlSafe('<span class "dolla-signs">$</span>')
  }
}
export default Ember.Helper.helper(priceIndicator);
