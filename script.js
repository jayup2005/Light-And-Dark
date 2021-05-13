const day = document.querySelector('.day');
const night = document.querySelector('.night');



// var night = document.querySelector('.night');
var dark = false;



day.addEventListener('click', () => {

        document.body.classList.add('dark')
        day.classList.add('day1');
        night.classList.add('night1');
        night.classList.remove('night');
        dark = true;
    
})


night.addEventListener('click', () => {

    document.body.classList.remove('dark');
    document.body.classList.add('dark1');
    day.classList.remove('day1');
    night.classList.add('night')
    night.classList.remove('night1');
    dark = true;

})



 




