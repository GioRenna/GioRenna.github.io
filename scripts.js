//import
(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})
      ({key: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg", v: "weekly"});

// elements
var elements_to_watch = document.querySelectorAll('.scroll-section')

// callback
var callback = function(items) {
    items.forEach((item) => {
        if(item.isIntersecting){
            item.target.classList.add("in-page");
        } else {
            item.target.classList.remove("in-page");
        }
    });
}

// observer
var observer = new IntersectionObserver(callback, {threshold: 0.5});

// apply
elements_to_watch.forEach((element) => {observer.observe(element);});

//Icon hamburger
let item = document.querySelector('.icon-hamburger');
item.addEventListener("click", function(){
    document.body.classList.toggle('menu-open');
})

//Carousel Drink 
const state = {};
const carouselList = document.querySelector('.carousel_drink__list');
const carouselItems = document.querySelectorAll('.carousel_drink__item');
const elems = Array.from(carouselItems);

carouselList.addEventListener('click', function (event) {
  var newActive = event.target;
  var isItem = newActive.closest('.carousel_drink__item');

  if (!isItem || newActive.classList.contains('carousel_drink__item_active')) {
    return;
  };
  
  update(newActive);
});

const update = function(newActive) {
  const newActivePos = newActive.dataset.pos;

  const current = elems.find((elem) => elem.dataset.pos == 0);
  const prev = elems.find((elem) => elem.dataset.pos == -1);
  const next = elems.find((elem) => elem.dataset.pos == 1);
  const first = elems.find((elem) => elem.dataset.pos == -2);
  const last = elems.find((elem) => elem.dataset.pos == 2);
  
  current.classList.remove('carousel_drink__item_active');
  
  [current, prev, next, first, last].forEach(item => {
    var itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos)
  });
};

const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 2) {
    return -current
  }

  return diff;
}

//Carousel Food 
const stateFood = {};
const carouselFoodList = document.querySelector('.carousel_food__list');
const carouselFoodItems = document.querySelectorAll('.carousel_food__item');
const elemsFood = Array.from(carouselFoodItems);

carouselFoodList.addEventListener('click', function (event) {
  var newActive = event.target;
  var isItem = newActive.closest('.carousel_food__item');

  if (!isItem || newActive.classList.contains('carousel_food__item_active')) {
    return;
  };
  
  updateFood(newActive);
});

const updateFood = function(newActive) {
  const newActivePos = newActive.dataset.pos;

  const current = elemsFood.find((elem) => elem.dataset.pos == 0);
  const prev = elemsFood.find((elem) => elem.dataset.pos == -1);
  const next = elemsFood.find((elem) => elem.dataset.pos == 1);
  const first = elemsFood.find((elem) => elem.dataset.pos == -2);
  const last = elemsFood.find((elem) => elem.dataset.pos == 2);
  
  current.classList.remove('carousel_food__item_active');
  
  [current, prev, next, first, last].forEach(item => {
    var itemPos = item.dataset.pos;

    item.dataset.pos = getFoodPos(itemPos, newActivePos)
  });
};

const getFoodPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 2) {
    return -current
  }

  return diff;
}

// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 43.868378228386284, lng: 10.244614004899082};
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    map: map,
    position: {
      lat: 43.868378228386284,
      lng: 10.244614004899082,
    }
  });
}

initMap();