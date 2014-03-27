describe("Mailing list", function() {
  beforeEach(function() {
    this.$form = $('<form><input type="text" name="email"><button type="submit">sign me up</button></form>');
    setFixtures(this.$form);

    jasmine.Ajax.install();

    setupMailingList()
  });

  describe("Submitting a valid form", function() {
    it("preventsDefault on the submit", function() {
      this.$form.find("input[name=email]").val("happy@example.com");
      var event = jQuery.Event("submit");
      this.$form.trigger(event);
      expect(event.isDefaultPrevented()).toEqual(true);
    });

    it("sends a user's email to the server and clears the field", function() {
      this.$form.find("input[name=email]").val("happy@example.com");
      this.$form.trigger("submit");

      var mostRecentRequest = jasmine.Ajax.requests.mostRecent();
      expect(mostRecentRequest.url).toEqual("http://api.example.com/newsletter");
      expect(mostRecentRequest.method).toEqual("POST");
      expect(mostRecentRequest.data()).toEqual({"email": ["happy@example.com"]});

      expect(this.$form.find("input[name=email]")).toBeDisabled();

      mostRecentRequest.response({
        status: 200,
        responseText: '{}'
      });

      expect(this.$form.find("input[name=email]")).not.toBeDisabled();
      expect(this.$form.find("input[name=email]").val()).toEqual("");
    });
  });
});
