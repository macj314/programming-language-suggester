$(document).ready(function(){
  $("form#form-survey").submit(function(){
    event.preventDefault();
    var goals = $("#goals").val();
    var environment = parseInt($("input:radio[name=environment]:checked").val());
    var color = parseInt($("input:radio[name=color]:checked").val());

    $("#input").text(environment);
  })
})