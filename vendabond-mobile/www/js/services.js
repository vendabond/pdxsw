angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Pets', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pets = [
    { id: 0, title: 'Pad Thai', available:true, icon:'leaf', description: 'The classic. Stir fried noodles with pork.', price: '$5.00' },
    { id: 1, title: 'Dogs', available:true, icon:'fork',description: 'Lovable. Loyal almost to a fault. Smarter than they let on.' },
    { id: 2, title: 'Turtles', available:true, icon:'beer',description: 'Everyone likes turtles.' },
    { id: 3, title: 'Sharks', available:true, icon:'coffee',description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.' },
    { id: 4, title: 'Pizza', available:false, icon:'pizza', description: 'Why is a Thai cart selling pizza, this makes no sense', price: '$5.00' }
  ];
    
    var expired = [
  ];

  return {
    all: function() {
      return pets;
    },
    get: function(petId) {
      // Simple index lookup
      return pets[petId];
    }
  }
});
