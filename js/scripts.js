$(document).ready(function(){
  $("form#form-survey").submit(function(){
    event.preventDefault();
    var goals = $("#goals").val();
    $("#input").text(goals);
  })
})