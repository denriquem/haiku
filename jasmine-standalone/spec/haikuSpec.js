describe('Haiku', function(){

  var haiku;
  var penguinHaiku = "Penguins are really nice,\n Unless they have gone insane,\n Waddling into future";
  var jamHaiku = "Cooked down with sugar,\n Sickly sugary syrup \n Slowly spread on face";
  var wernerHaiku = "Strolling through jungle,\n Not liking all of the plants\n Volcanoes are dull";
  var greetingMessage = "Hi there, input penguin, jam, or Werner Herzog into the create method to see some Haiku"

  beforeEach(function() {
   haiku = new Haiku();
  });

  describe('Greeting message', function() {
    it('says hi with a greeting message', function() {
      expect(haiku.hello()).toEqual(greetingMessage);
    });
  });

 describe('Penguin Haiku', function() {
   it('prints penguin haiku', function() {
     expect(haiku.create('penguin')).toEqual(penguinHaiku);
   });
  });

  describe ('Jam Haiku', function() {
    it('prints jam haiku', function() {
      expect(haiku.create('jam')).toEqual(jamHaiku);
    });
  });

  describe ('Werner Herzog', function() {
    it ('writes a Werner Herzog haiku', function() {
      expect(haiku.create('Werner Herzog')).toEqual(wernerHaiku);
    });
  });

});
