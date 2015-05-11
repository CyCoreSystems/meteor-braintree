Package.describe({
  name: 'ulexus:braintree',
  summary: 'Braintree client library access package for Meteor',
  version: '1.22.1',
  git: 'https://github.com/CyCoreSystems/meteor-braintree.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('client.js','client');

  api.addFiles('ulexus:braintree.js','server');
  api.export('Braintree','server');
  api.export('BraintreeClient','server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ulexus:braintree');
  api.addFiles('ulexus:braintree-tests.js');
});

Npm.depends({
   braintree: '1.22.0'
});
