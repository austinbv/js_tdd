var setupMailingList = function() {
  $("form").on("submit", function(e) {
    var $self = $(this);
    e.preventDefault();

    var $input = $self.find("input");

    $input.prop("disabled", true);
    var deferred = $.post(
      "http://api.example.com/newsletter",
      { "email": $input.val() }
    );

    deferred.done(function() {
      $self.find("input").val("");
      $input.prop("disabled", false);
    });
  });
};