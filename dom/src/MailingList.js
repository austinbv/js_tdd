var setupMailingList = function () {
  $("form").on("submit", function(e) {
    var $self = $(this);

    e.preventDefault();

    var deferred = $.post("http://api.example.com/newsletter");
    deferred.done(function() {
      $self.find("input").val("");
    });
  });
};