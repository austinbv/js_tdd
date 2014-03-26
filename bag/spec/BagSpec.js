describe("Bag", function() {
  describe("#isEmpty", function() {
    it("is true when the bag has no contents", function() {
      var bag = new Bag();
      expect(bag.isEmpty()).toEqual(true);
    });
  });
});
