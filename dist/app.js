
$(document).ready(function(e){
  $("#btn1").click(function(){
    $("#p1").toggle(100);
    var currentSrc = $('#myImage1').attr('src');
    var newSrc = (currentSrc === './assets/images/icon-minus.svg') ? './assets/images/icon-plus.svg' : './assets/images/icon-minus.svg';
    $('#myImage1').attr('src', newSrc);
  });
  $("#btn2").click(function(){
    $("#p2").toggle(100);
    var currentSrc = $('#myImage2').attr('src');
    var newSrc = (currentSrc === './assets/images/icon-minus.svg') ? './assets/images/icon-plus.svg' : './assets/images/icon-minus.svg';
    $('#myImage2').attr('src', newSrc);
  });
  $("#btn3").click(function(){
    $("#p3").toggle(100);
    var currentSrc = $('#myImage3').attr('src');
    var newSrc = (currentSrc === './assets/images/icon-minus.svg') ? './assets/images/icon-plus.svg' : './assets/images/icon-minus.svg';
    $('#myImage3').attr('src', newSrc);
  });
  $("#btn4").click(function(){
    $("#p4").toggle(100);
    var currentSrc = $('#myImage4').attr('src');
    var newSrc = (currentSrc === './assets/images/icon-minus.svg') ? './assets/images/icon-plus.svg' : './assets/images/icon-minus.svg';
    $('#myImage4').attr('src', newSrc);
  });
});

  
