window.addEventListener('load', windowLoad);

function windowLoad() {
    if(document.querySelector('.main-slider')){
        new Swiper('.main-slider', {
            speed: 2000,
            effect: 'Fade',
            autoplay:{
                delay: 3000
            },
            
        });
    }
}