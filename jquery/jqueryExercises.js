//jQuery exercises
//To get the element with the id="start" and change its html to "Go" we will need to do the following:

/*It is a good practice to wait for the HTML document to be fully loaded and ready before working with it.
For that we use the ready event of the document object:*/
$(function(){
    $("#start").html("Go");
    //selects the element with the id="start" and calls the html() method for it, which is used to change the HTML content of an element'

    //getting the href attribute value and alerting it
    var val = $("a").attr("href");
    //alert(val);
    //changing the href attribute
    $("a").attr("href", "http://www.jquery.com");

    //removing the table style attribute
    //$("table").removeAttr("style");
    //removing the table style color attribute
    $("table").css("color", "");

    //getting the content with HTML markup - html()
    var cont = $(".example").html();
    //alert(cont);
    //getting the content without HTML markup - text()
    var cont2 = $(".example2").text();
    //alert(cont2);
    //setting the content with HTML markup - html()
    $(".example").html("some new <i>text</i> for this with markup");
    //setting the content without HTML markup - text()
    $(".example2").text("text <b>without</b> markup");

    //getting the content of an input field
    //alert($("#name").val());
    //setting the content of an input field
    $("#name").val("new name");

    //append() - insert content at the end of the selected element
    $("#demo").append(" this is appended text of this element"); 
    //prepend() - insert content at the beginning of the selected element
    $("#demo").prepend("Hiya! I prepend this element ");
    //after() - insert content after the selected element
    $("#menu").after("Im after the previous element");
    //before() - insert content before the selected element
    $("#menu").before("Im before the next element");

    //adding new elements; any of the four methods above can be used
    var txt = $("<p></p>").text("New element");
    var txt2 = $("<div></div>").html("Another <b>New</b> element");
    $("#demo").before(txt, txt2);

    //adding class
    $("div").addClass("header class2");
    //removing class
    $("#odkaz").removeClass("refer");

    //toggle class
    $("button").click(function() {
        $("#par").toggleClass("red");
        $("#par").toggleClass("green");
    });    

    //css properties
    alert($("#par").css("background-color"));
    $(".header").css({"color": "navy", "font-size": "100%"});
    //$(".class2").width(1000);
    //$("div").height(20);

    var info = "";
    info += "width: " + $("#test").width() + " ";
    info += "heigth: " + $("#test").height() + "<br/>";
    info += "innerWidth: " + $("#test").innerWidth() + " ";
    info += "innerHeigth: " + $("#test").innerHeight() + "<br/>";
    info += "outerWidth: " + $("#test").outerWidth() + " ";
    info += "outerHeigth: " + $("#test").outerHeight() + " ";

    $("#test").html(info);

    //getting the parent element
    var parents = $("#demo").parents();
    parents.css("border", "2px solid red");
    var oneParent = $("#demo").parent();
    oneParent.css("border", "2px solid green");
   
    //selecting the second div of the page
    var secondDiv = $("div").eq(1);
    secondDiv.append(" + This is the second div");

    //removing an element - remove()
    //$("p").eq(5).remove();    

    //removing child elements of a selected element - empty()
    $(".box").empty();

    //handling events - displaying the date
    //pure javascript
   /* var x = document.getElementById("date");
    x.onclick = function () {
    document.body.innerHTML = Date();*/
    //jquery
    $("#date").click(function() {
        $("body").html(Date());
    });

    //function to see the input below the text box
    $("#name").keydown(function() {
        $("#msg").html($("#name").val());
    });

    $(".box").on("click", function() {
       // alert("clicked");
        $(".box").off(); //off("event name") - remove all event handlers
    });

    //prevent default action of <a> which is opening link
    $("a").on("click", function(event) {
    //    alert(event.pageX + " + " + event.pageY); //alert the mouse position x and position y
        event.preventDefault();
    });

    //trigger("event name") - trigger event programmatically
   // $(".box").trigger("click");

    //to-do list
    $("#add").click(function() {
        const value = $("#todo").val();
        if (value !== '') { // if the textbox is not empty
            let elem = $("<li></li>").text(value); //create new list element with the value of the text box
            $(elem).append("<button class='rem'>X</button>"); // append button to elem to be its child
            $("#mylist").append(elem); // append the text to list
            $("#todo").val(""); // clear the input
            $(".rem").on("click", function() {
                $(this).parent().remove();
                //onclick removes the parent of the current object
            });
        }        
    });    

    //effects - animations in jQuery
    //hide(), show(), toggle()
    //first optional parameter to each of them - speed of animation in miliseconds; second optional argument to each of them - callback, which is a function to be executed after the animation ends
    function reset() {
        $(".toToggle").toggle(1000);
    };

    $(".toggle").click(function() {
        $(".toToggle").toggle(1000, reset());
    });

    //fade methods - fadeIn(), fadeOut(), fadeToggle()
    $(".fade").click(function(){
        $(".toFade").fadeTo(1000, 0.5);
    })

    //slide methods - slideUp(), slideDown(), slideToggle()
    function down() {
        $(".toSlide").slideToggle(1000);
    };

    $(".slide").click(function() {
        $(".toSlide").slideToggle(1000, down());
    });

    //animate({"key": "value", } speed)
    $(".anim").click(function(){
        $(".toAnim").animate({width: '30px', height: '+=10px'}, 2000);
    });

    //animation queue
    var div = $(".box");
    div.animate({opacity: 1});
    div.animate({height: '+=100px', width: '+=100px', top: '+=100px'}, 500);
    div.animate({height: '-=100px', width: '-=100px', left: '+=100px'}, 500);
    div.animate({height: '+=100px', width: '+=100px', top: '-=100px'}, 500);
    div.animate({height: '-=100px', width: '-=100px', left: '-=100px'}, 500);
    div.animate({opacity: 0.5});

    //drop-down menu
    $(".dropdown").click(function(){
        $("#submenu").slideToggle(500);
    });
})

/*$("div.menu")  // all <div> elements with class="menu"

$("p:first")  // the first <p> element

$("h1, p") // all <h1> and all <p> elements

$("div p") // all <p> elements that are descendants of a <div> element

$("*")  // all elements of the DOM*/