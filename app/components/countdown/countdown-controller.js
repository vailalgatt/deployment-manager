$("#DateCountdown").TimeCircles();
$("#CountDownTimer").TimeCircles({ time: { Days: { show: false }, Hours: { show: false } } });
$("#PageOpenTimer").TimeCircles();

var updateTime = function () {
  var date = $("#date").val();
  var time = $("#time").val();
  var datetime = date + ' ' + time + ':00';
  $("#DateCountdown").data('date', datetime).TimeCircles().start();
}
$("#date").change(updateTime).keyup(updateTime);
$("#time").change(updateTime).keyup(updateTime);

// Start and stop are methods applied on the public TimeCircles instance
$(".startTimer").click(function () {
  $("#CountDownTimer").TimeCircles().start();
});
$(".stopTimer").click(function () {
  $("#CountDownTimer").TimeCircles().stop();
});

// Fade in and fade out are examples of how chaining can be done with TimeCircles
$(".fadeIn").click(function () {
  $("#PageOpenTimer").fadeIn();
});
$(".fadeOut").click(function () {
  $("#PageOpenTimer").fadeOut();
});


