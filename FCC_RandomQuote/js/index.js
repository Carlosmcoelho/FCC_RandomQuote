//start js file

$(document).ready(function() {

    //button effects
    $('button').mouseenter(function(){
        $(this).fadeTo('faste',1);
    })
    $('button').mouseleave(function(){
        $(this).fadeTo('faste', 0.7);
    })
    //button effects end

    //background color
    $('#button-new-quote').click(function(){
          var colors =['#1d2120','#5a5c51','#ba9077','#bcd5d1','#729f98','#283018','#aa863a','#e6af4b','#e05038','#f2cbbc','#334431','#c0dfd9','#b3c2bf','#3b3a36'];
          var numRandom = Math.floor(Math.random() * colors.length);
          randomColor = colors[numRandom];
          $("html body, #button-new-quote, .btn").animate({backgroundColor: randomColor}, 1000);
     })
    //background color end

    //quotes funtion
    function randomQuote() {
        $.ajax({
          url: "http://api.forismatic.com/api/1.0/?",
          dataType: "jsonp",
          data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
          success: function(response) {
              $("#text").html("<p id='text' class='text-center'>"+ response.quoteText);
              $("#author").html("<p class='text-right'> - "+ response.quoteAuthor);
          }
       })

    }//quotes function end
    //quotebutton
    $("#button-new-quote").click(function(){
        randomQuote();
    })
    //quotebutton end

    //twitte function
    $("#twitter").on("click", function() {
        var tweetUrl = 'https://twitter.com/intent/tweet?text=' + $("#text").text() + " " + $('#author').text();
        window.open(tweetUrl, '_blank', 'width = 500, height = 400');
    });
    //twitte function end

    //Tumblr function
    $("#tumblr").on("click", function() {
        var tumblrUrl = 'http://www.tumblr.com/share/link?url=';
        window.open(tumblrUrl, '_blank', 'width = 500, height = 400');
    });
    //Tumblr function end

});

//end js file
