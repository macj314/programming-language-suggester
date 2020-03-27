$(document).ready(function(){
  $("form#form-survey").submit(function(){
    event.preventDefault();
    var inputLanguage = $("#input-language").val();
    var environment = parseInt($("input:radio[name=environment]:checked").val());
    var color = parseInt($("input:radio[name=color]:checked").val());
    var cat = parseInt($("#cat").val());
    var caffeine = $("#caffeine").val();

    $("#user-language").text(inputLanguage);
    $("#language-prefix").show();

    if(color === 2){
      $("#ruby").show();

    } else if (cat === 5 || caffeine > 3){    
      $("#python").show();

    } else if (environment === 2){
      $("#language-prefix").hide();
      $("#ruby").show();
      $("#js").show();
      $("#python").show();

    }  else {
      $("#js").show();
    }

  })
})