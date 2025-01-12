// var highlight = document.querySelectorAll('.tooltip');

// highlight.forEach(function (item) {
//     item.addEventListener('click', function() {
//         if(item.dataset.highlightClick === 'on'){
//             item.style.backgroundColor = 'red';
//         }
//     }, false);
// }, this);

var highlight = document.querySelectorAll('[data-highlight-click');

highlight.forEach(function (item) {
    item.addEventListener('click', function () {
        item.style.backgroundColor = 'blue';
    }, false);
}, this);

$(function() {
    $('.load-info').on('click', function() {
        $.ajax({
            method: 'GET',
            url: 'js/data_artists.json',
            dataType: 'json'
        }).done(function(data) {
            $.each(data.artists, function(key, val){
                $('.info-artists')
                    .append('<li>' + val.name + '</li>')
            }); //each
        }); //ajax done
    }); // click event
}); // jQuery Ready