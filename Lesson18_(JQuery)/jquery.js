// //Native
// let button = document.getElementById("btn");
// // Query
// $('.btn');

$(document).ready(function () {
    $('.list-item:first').hover(function () {
        $(this).toggle('active');
    })
    $('.list-item:eq(1)').on('click', function () {
        $('.image:even').fadeToggle('slow');
    })
    $('.list-item:last').on('click', function () {
        $('.image:odd').animate(
            {
                opacity: 'toggle',
                height: 'toggle'
            }, 3000
        );

    })
})