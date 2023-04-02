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
var observer = new IntersectionObserver(callback, {threshold: 0.55});

// apply
elements_to_watch.forEach((element) => {observer.observe(element);});

var cocktails = document.querySelectorAll('.cocktail-radio')
cocktails.forEach((cocktail) => {
    cocktail.addEventListener('touchmove', () => {
        var just_one_selected = false;
        var found_previous = false;
        cocktails.forEach((item) => {
            if(item.checked){
              item.setAttribute('checked', false);
              found_previous = true;
             } else if (!just_one_selected && found_previous) {
                item.setAttribute('checked', true);
                just_one_selected = true;
            }
        });
    });
    }
)

//Icon hamburger
let item = document.querySelector('.icon-hamburger');
item.addEventListener("click", function(){
    document.body.classList.toggle('menu-open');
})

//New Carousel script
const state = {};
const carouselList = document.querySelector('.carousel__list');
const carouselItems = document.querySelectorAll('.carousel__itemfood');
const elems = Array.from(carouselItems);

carouselList.addEventListener('click', function (event) {
  var newActive = event.target;
  var isItem = newActive.closest('.carousel__itemfood');

  if (!isItem || newActive.classList.contains('carousel__itemfood_active')) {
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
  
  current.classList.remove('carousel__itemfood_active');
  
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