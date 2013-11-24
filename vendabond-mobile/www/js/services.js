angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Carts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var carts = [
    { id: 0, name: 'Thai Fighter', opens:'12:00 am', open:true, closes:'7:00 pm', image:'padthai.jpg', description: 'This is the Thai food you\'re looking for.' },
    { id: 1, name: 'Frozen Cat Grill', opens:'12:00 pm', open:false, closes:'3:00 pm', image:'pizza.jpg', description: 'Pub food on the go.' },
    { id: 2, name: 'Meatitarians', opens:'11:00 am', open:false, closes:'5:00 pm', image:'quesa.jpg', description: 'MEAT!' }
  ];
    
  return {
    all: function() {
      return carts;
    },
    get: function(cartId) {
      // Simple index lookup
      return carts[cartId];
    }
  }
}).factory('Pets', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pets = [
    { id: 0, title: 'Pad Thai', available:true, image:'padthai.jpg', description: 'Thin rice noodles with eggs, bean sprouts, and green onions, topped with ground peanuts', price: '$5.00', rating:'4' },
    { id: 1, title: 'Pad Ped', available:true, image:'padped.jpg',description: 'Stir-fried bamboo shoots, eggplant, Thai squash, green beans and sweet basil in red chili sauce' , price: '$5.50', rating:'5' },
    { id: 2, title: 'Green Curry', available:false, image:'green.jpg',description: 'Sweet curry with green beans, bamboo shoots, Thai eggplants, Thai squash, and basil leaves in coconut milk' , price: '$5.50', rating:'5' },
      { id: 3, title: 'Cashew Stir Fry', available:true, image:'cashew.jpg',description: 'Stir-fried with sweet and spicy chili paste, broccoli, onions, celery and carrots', price: '$6.00', rating:'3' }
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