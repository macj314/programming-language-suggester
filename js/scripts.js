$(document).ready(function(){
  $("form#form-survey").submit(function(){
    event.preventDefault();
    var inputLanguage = $("#input-language").val();
    var environment = parseInt($("input:radio[name=environment]:checked").val());
    var color = parseInt($("input:radio[name=color]:checked").val());
    var cat = parseInt($("#cat").val());
    var caffeine = $("#caffeine").val();
    $("#input").text(color);

    if(color === 1){
    var ruby = $(".language-name").children("#ruby");
    $(ruby).show;
    }
  })
})