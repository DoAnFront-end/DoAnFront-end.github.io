// JavaScript Document
$('#banner').owlCarousel({
loop:true, // cho lap lại
 items:1,// xuất hiện 1 ảnh thôi
smartSpeed:3000, // tốc độ thay đổi ảnh
autoplay:true, // cho phép tự động chạy
autoplayTimeout:10000, // thời gian chờ khi chuyển ảnh khi chạy tự động
nav:true, // cho xuất hiện bộ nút tới lui
})

$('#cnhan').owlCarousel({
loop:true, // cho lap lại
margin:100,
 items:2,// xuất hiện 1 ảnh thôi
smartSpeed:3000, // tốc độ thay đổi ảnh
autoplay:true, // cho phép tự động chạy
autoplayTimeout:10000, // thời gian chờ khi chuyển ảnh khi chạy tự động
// nav:true, cho xuất hiện bộ nút tới lui
})

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();