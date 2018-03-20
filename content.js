
if(!$(".width-script").is(":visible")){
$('body').append("<div class = 'width-script'> <h1 id = 'copy-media-query'></h1></div>");
  doStuff();

}
else{
  $(".width-script").remove();
}

function doStuff(){
  jQuery.fn.center = function () {
      this.css("position","absolute");
      this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
                                                  $(window).scrollTop()) + "px");
      this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
                                                  $(window).scrollLeft()) + "px");
      return this;
  }

$(".width-script").center();
$(".width-script h1").html("@media(max-width:" + window.innerWidth + "px)" )
}
$(window).resize(function(){
  doStuff();
});
$(window).scroll(function(){
doStuff();
});


function copyToClipboard(elementId) {

  // Create a "hidden" input
  var aux = document.createElement("input");

  // Assign it the value of the specified element
  aux.setAttribute("value", document.getElementById(elementId).innerHTML);

  // Append it to the body
  document.body.appendChild(aux);

  // Highlight its content
  aux.select();

  // Copy the highlighted text
  document.execCommand("copy");

  // Remove it from the body
  document.body.removeChild(aux);

}
$(".width-script").click(function(){
  copyToClipboard("copy-media-query");
})
$(".width-script").dblclick(function(){
  $(this).center();
});
