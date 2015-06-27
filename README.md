ulexus:braintree `<deprecated>`
=======

DEPRECATED:  @patrickml has created a more complete, more compliant package which I recommend using instead:
  * Github: [https://github.com/patrickml/braintree/](https://github.com/patrickml/braintree/)
  * Atmosphere:  [https://atmospherejs.com/patrickml/braintree](https://atmospherejs.com/patrickml/braintree)
  * Meteor add:  `patrickml:braintree`


Exposes a few commonly-used methods of the Braintree client for Meteor (wrapped properly on the `BraintreeClient` object).

Also exports the braintree client itself (as `Braintree`)


# Methods exposed on `BraintreeClient`

* `BraintreeClient.createSale(opts)`: create a sale (new transaction).  The opts are identical to those
for the native `transaction.sale` (which is async-wrapped and called by this method)
* `BraintreeClient.createCustomer(opts)`: create a new customer.  The opts are identical to those for
the native `customer.create` (which is async-wrapped and called by this method)
* `BraintreeClient.getCustomer(id)`:  retrieves a customer object by its id.
* `BraintreeClient.createCreditCard(opts)`: create a new credit card.  The opts are identical to those for
the native `creditCard.create` (which is async-wrapped and called by this method)
* `BraintreeClient.createSubscription(opts)`: create a new subscription.  The opts are identical to those for
the native `subscription.create` (which is async-wrapped and called by this method)
* `BraintreeClient.cancelSubscription(opts)`: cancel a subscription.  The opts are identical to those for
the native `subscription.cancel` (which is async-wrapped and called by this method)


