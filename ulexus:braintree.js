Braintree = Npm.require('braintree');

// Return a new braintree gateway connection
braintreeConnect = function(opts) {
   if(typeof opts != 'object') {
      throw new Error("Invalid parameter; must be object with connection information");
   }
   return new Braintree.connect(opts);
};

// Wrapper class for braintree, for convenience
BraintreeClient = function(opts) {
   if(typeof opts != 'object') {
      throw new Error("Invalid parameter; must be object with connection information");
   }
   this.client =  new Braintree.connect(opts);

   return this;
};

// createSale makes a sale (new transaction)
BraintreeClient.prototype.createSale = function(opts) {
   var wrapped = Metor.wrapAsync(this.client.transaction.sale,this.client.transaction);
   return wrapped(opts);
};

// createCustomer makes a new customer
BraintreeClient.prototype.createCustomer = function(opts) {
   var wrapped = Meteor.wrapAsync(this.client.customer.create,this.client.customer);
   return wrapped(opts);
};

// getCustomer attempts to retrieve a customer by id
BraintreeClient.prototype.getCustomer = function(id) {
   var wrapped = Meteor.wrapAsync(this.client.customer.find,this.client.customer);
   return wrapped(id);
};

// createCreditCard saves a new credit card
BraintreeClient.prototype.createCreditCard = function(opts) {
   var wrapped = Meteor.wrapAsync(this.client.creditCard.create,thisclient.creditCart);
   return wrapped(opts);
};

// createSubscription makes a new customer subscription
// (recurring payment)
BraintreeClient.prototype.createSubscription = function(opts) {
   var wrapped = Meteor.wrapAsync(this.client.subscription.create,this.client.subscription);
   return wrapped(opts);
};

// cancelSubscription cancels a customer's subscription
BraintreeClient.prototype.cancelSubscription = function(opts) {
   var wrapped = Meteor.wrapAsync(this.client.subscription.cancel,this.client.subscription);
   return wrapped(opts);
};
