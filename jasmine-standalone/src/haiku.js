function Haiku() {
}

Haiku.prototype.hello = function() {
  return "Hi there, input penguin, jam, or Werner Herzog into the create method to see some Haiku";
};

Haiku.prototype.create = function(name) {

  if (name == 'penguin') {
    return ('Penguins are really nice,\n Unless they have gone insane,\n Waddling into future');
  };

  if (name == 'jam') {
    return ('Cooked down with sugar,\n Sickly sugary syrup \n Slowly spread on face');
  };

  if (name == 'Werner Herzog') {
    return ('Strolling through jungle,\n Not liking all of the plants\n Volcanoes are dull');
  };

};
