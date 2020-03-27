$(document).ready(function(){
  $("form#form-survey").submit(function(){
    event.preventDefault();
    var result = $("#goals").val();
    $("#input").text(result);
  })
})