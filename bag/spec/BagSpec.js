describe("Bag", function() {
  describe("#isEmpty", function() {
    it("is true when the bag has no contents", function() {
      var empty = new Bag();
      var one = new Bag();
      var many = new Bag();

      one.add(1);
      many.add(1);
      many.add(2);

      expect(empty.isEmpty()).toEqual(true);
      expect(one.isEmpty()).toEqual(false);
      expect(many.isEmpty()).toEqual(false);
    });
  });

  describe("#getSize", function() {
    it("returns a count of the items added to the bag", function() {
      var empty = new Bag();
      var one = new Bag();
      var many = new Bag();

      one.add(1);
      many.add(1);
      many.add(2);

      expect(empty.getSize()).toEqual(0);
      expect(one.getSize()).toEqual(1);
      expect(many.getSize()).toBeGreaterThan(1);
    });
  });
});
