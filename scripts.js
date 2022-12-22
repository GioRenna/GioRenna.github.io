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