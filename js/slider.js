window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel_lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        rewind:true,
        dots: '.carousel_indicadores',
        arrows: {
            prev: '.carousel_anterior',
            next: '.carousel_siguiente'
        },
    });
})