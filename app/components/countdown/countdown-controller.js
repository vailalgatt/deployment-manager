// function getTimeRemaining(endtime) {
//   var t = Date.parse(endtime) - Date.parse(new Date());
//   var seconds = Math.floor((t / 1000) % 60);
//   var minutes = Math.floor((t / 1000 / 60) % 60);
//   var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//   var days = Math.floor(t / (1000 * 60 * 60 * 24));
//   return {
//     'total': t,
//     'days': days,
//     'hours': hours,
//     'minutes': minutes,
//     'seconds': seconds
//   };
// }

// function initializeClock(id, endtime) {
//   var clock = document.getElementById(id);
//   var daysSpan = clock.querySelector('.days');
//   var hoursSpan = clock.querySelector('.hours');
//   var minutesSpan = clock.querySelector('.minutes');
//   var secondsSpan = clock.querySelector('.seconds');

//   function updateClock() {
//     var t = getTimeRemaining(endtime);

//     daysSpan.innerHTML = t.days;
//     hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
//     minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//     secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

//     if (t.total <= 0) {
//       clearInterval(timeinterval);
//     }
//   }

//   updateClock();
//   var timeinterval = setInterval(updateClock, 1000);
// }

// var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
// initializeClock('clockdiv', deadline);


// $(".example").TimeCircles(); 
// $(".example").TimeCircles({start: false}); 
// $(".example").TimeCircles({animation: "smooth"}); 
// $(".example").TimeCircles({count_past_zero: false}); 
// $(".example").TimeCircles({circle_bg_color: "#000000"}); 
// $(".example").TimeCircles({use_background: false}); 
// $(".example").TimeCircles({fg_width: 0.05}); 
// $(".example").TimeCircles({bg_width: 0.5}); 
// $(".example").TimeCircles({total_duration: "Auto"}); 
// $(".example").TimeCircles({direction: "Clockwise"}); 
// $(".example").TimeCircles({start_angle: 0}); 
// $(".example").TimeCircles({ time: {
//     Days: { color: "#C0C8CF" },
//     Hours: { color: "#C0C8CF" },
//     Minutes: { color: "#C0C8CF" },
//     Seconds: { color: "#C0C8CF" }
// }});
// $(".example.stopwatch").TimeCircles();
// $(".start").click(function(){ $(".example.stopwatch").TimeCircles().start(); });
// $(".stop").click(function(){ $(".example.stopwatch").TimeCircles().stop(); });
// $(".restart").click(function(){ $(".example.stopwatch").TimeCircles().restart(); }); 

// $(".example").TimeCircles().destroy(); 
// $(".example").TimeCircles().rebuild(); 
// $(".example").TimeCircles().getTime(); 
// $(".example").TimeCircles().end().fadeOut(); 



            $("#DateCountdown").TimeCircles();
            $("#CountDownTimer").TimeCircles({ time: { Days: { show: false }, Hours: { show: false } }});
            $("#PageOpenTimer").TimeCircles();
            
            var updateTime = function(){
                var date = $("#date").val();
                var time = $("#time").val();
                var datetime = date + ' ' + time + ':00';
                $("#DateCountdown").data('date', datetime).TimeCircles().start();
            }
            $("#date").change(updateTime).keyup(updateTime);
            $("#time").change(updateTime).keyup(updateTime);
            
            // Start and stop are methods applied on the public TimeCircles instance
            $(".startTimer").click(function() {
                $("#CountDownTimer").TimeCircles().start();
            });
            $(".stopTimer").click(function() {
                $("#CountDownTimer").TimeCircles().stop();
            });

            // Fade in and fade out are examples of how chaining can be done with TimeCircles
            $(".fadeIn").click(function() {
                $("#PageOpenTimer").fadeIn();
            });
            $(".fadeOut").click(function() {
                $("#PageOpenTimer").fadeOut();
            });


        