angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Carts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pets = [
    { id: 0, name: 'Thai Fighter', opens:'10:00 am', closes:'3:00 pm', description: 'This is the Thai food you\'re looking for.' },
    { id: 1, title: 'Pad Ped', available:true, icon:'fork', image:'padped.jpg',description: 'Stir-fried bamboo shoots, eggplant, Thai squash, green beans and sweet basil in red chili sauce' , price: '$5.50' }
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
}).factory('Pets', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pets = [
    { id: 0, title: 'Pad Thai', available:true, icon:'leaf', image:'padthai.jpg', description: 'The classic. Stir fried noodles with pork.', price: '$5.00' },
    { id: 1, title: 'Pad Ped', available:true, icon:'fork', image:'padped.jpg',description: 'Stir-fried bamboo shoots, eggplant, Thai squash, green beans and sweet basil in red chili sauce' , price: '$5.50' },
    
    { id: 2, title: 'Quesadilla', available:true, icon:'fork', image:'quesa.jpg',description: 'Yes, quesadillas are Mexican. We\'re just that out there.', price:'$6.25' },
    { id: 3, title: 'Pizza', available:false, icon:'pizza', image:'pizza.jpg', description: 'Why is a Thai cart selling pizza, this makes no sense', price: '$5.00' }
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
;
