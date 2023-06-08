const  images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
  const src = img.getAribute("data-src");
  if(!src) {

    return;
  }
  img.src = src;
}

const imgOptions = {
  threshold:1,
  rootMargin: " 0px 0px -500px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }else{
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  })
}, imgOptions);


images.forEach(image => {
  imgObserver.observe(image);
});



var hour, min, sec;

    var day = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var month = new Array("January", "February", "March", "April", "May", "June", "July", "August",
    "September", "October", "November", "December");

    var clock = function(){

    var date = new Date();

    hour = date.getHours().toString().length < 2 ? "0" + date.getHours() : date.getHours();
    min = date.getMinutes().toString().length < 2 ? "0" + date.getMinutes() : date.getMinutes();
    sec = date.getSeconds().toString().length < 2 ? "0" + date.getSeconds() : date.getSeconds();

    var time = hour + ":" + min + ":" + sec;

    var fullDate = day[date.getDay()] + ", " + date.getDate() + " de " + month[ date.getMonth()] + " " + date.getFullYear();

    console.log(date.getDay());

    document.getElementById("time").innerHTML=time;
    document.getElementById("date").innerHTML=fullDate;
    }

    clock();

    setInterval( function(){
    clock();
    },1000);


  