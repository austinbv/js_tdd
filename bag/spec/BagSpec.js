describe("Bag", function() {

  beforeEach(function() {
    this.empty = new Bag();
    this.one = new Bag();
    this.many = new Bag();

    this.one.add(1);
    this.many.add(1);
    this.many.add(2);
  });

  describe("#isEmpty", function() {
    it("is true when the bag has no contents", function() {
      expect(this.empty.isEmpty()).toEqual(true);
      expect(this.one.isEmpty()).toEqual(false);
      expect(this.many.isEmpty()).toEqual(false);
    });
  });

  describe("#getSize", function() {
    it("returns a count of the items added to the bag", function() {
      expect(this.empty.getSize()).toEqual(0);
      expect(this.one.getSize()).toEqual(1);
      expect(this.many.getSize()).toBeGreaterThan(1);
    });
  });
});
