//data-attribute

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

// jQuery
$(function () {
    $('.load-info').on('click', function () {
        $.ajax({
            method: 'GET',
            url: 'js/data_artists.json',
            dataType: 'json'
        }).done(function (data) {
            $.each(data.artists, function (key, val) {
                $('.info-artists')
                    .append('<li>' + val.name + '</li>')
            }); //each
        }); //ajax done
    }); // click event
}); // jQuery Ready

// conditional operator
(function (howMany, colors) {

    var colorAmt = colors.length;
    var currColor = 0;
    var myElement;
    var myNode = document.querySelector('.boxes');
    for (var i = 0; i < howMany; i++) {
        myElement = document.createElement('div');
        myElement.className = 'box';
        myElement.style = 'background-color: ' + colors[currColor];
        myNode.appendChild(myElement);

        currColor === colorAmt - 1 ? currColor = 0 : currColor++;

    }

    myNode.addEventListener('click', function (e) {
        e.target.parentNode.removeChild(e.target);
    }, false);
})(20, [
    '#C94C24', //orange
    '#268BD2', //blue
    '#C4226F', //pink
    '#859835', //lime
    '#6D73C2', //purple
    '#37A198', //green
    '#DA3637', //red
    '#F0AD4E' //yellow
])

// AJAX Request

var data, result, DOMNode;
var request = new XMLHttpRequest();

DOMNode = document.querySelector('.artists');

request.open('GET', 'js/data.json');

request.onreadystatechange = function () {
    if (
        request.status === 200 &&
        request.readyState === 4
    ) {

        data = JSON.parse(request.responseText);
        // console.log(data);
        // console.log(request);

        for (var item in data.artists) {
            if (data.artists.hasOwnProperty(item)) {
                var element = data.artists[item];
                var listItem = document.createElement('div');
                listItem.className = 'artist';
                listItem.innerHTML = '<h4>' + element.name + '</h4>' + '<p>' + element.bio + '</p>';
                DOMNode.appendChild(listItem);                
            }
        }

        // result = new EJS({ url: 'js/template.ejs' }).render(data.artists);
        // document.querySelector('.artists').innerHTML = result;

    }
}

request.send();

// DOM Manipulation

var colors = [
    '#C94C24', //orange
    '#268BD2', //blue
    '#C4226F', //pink
    '#859835', //lime
    '#6D73C2', //purple
    '#37A198', //green
    '#DA3637', //red
    '#F0AD4E' //yellow
]
function makeBoxes(howMany) {
    var colorAmt = colors.length;
    var currColor = 0;
    var myElement;
    var myNode = document.querySelector('.boxes');

    for (var i = 0; i < howMany; i++) {

        myElement = document.createElement('div');
        myElement.className = 'box';
        myElement.style = 'background-color: ' + colors[currColor];
        myNode.appendChild(myElement);

        if (currColor === colorAmt - 1) {
            currColor = 0;
        } else {
            currColor++;
        }
    }

    myNode.addEventListener('click', function (e) {
        e.target.parentNode.removeChild(e.target);
    }, false);

}

makeBoxes(20)

// constructor

var Hamburger = (nodeName) => {
    var myNode = document.querySelector(nodeName + ' .hamburger');

    return {
        activate: () => myNode.addEventListener('click', (e) => myNode.parentNode.querySelector('.navbar').classList.toggle('hidden'), false), // activate
        hide: () => myNode.parentNode.querySelector('.navbar').classList.add('hidden') // hide
    } //return
} //Hamburger

var topMenu = new Hamburger('#topMenu');
topMenu.activate();

var bottomMenu = new Hamburger('#bottomMenu');
bottomMenu.activate();
bottomMenu.hide();

// Fetch API

var getArtists = new Request('js/data_artists.json', {
    method: 'GET'
})

var artists = fetch(getArtists).then(function(response) {
    return response.json();
})

document.querySelector('.load-infos')
    .addEventListener('click', function() {
    artists.then(function(data) {
        console.log(data);
    })
})


// IIFE
// (function(howMany, colors) {

//     var colorAmt = colors.length;
//     var currColor = 0;
//     var myElement;
//     var myNode = document.querySelector('.boxes');
  
//     for (var i = 0; i < howMany; i++) {
  
//       myElement = document.createElement('div');
//       myElement.className = 'box';
//       myElement.style = 'background-color: ' + colors[currColor];
//       myNode.appendChild(myElement);
  
//       if (currColor === colorAmt-1) {
//         currColor = 0;
//       } else {
//         currColor++;
//       }
//     }
  
//     myNode.addEventListener('click', function(e) {
//       e.target.parentNode.removeChild(e.target);
//     }, false);
  
//   })(20, [
//     '#C94C24', //orange
//     '#268BD2', //blue
//     '#C4226F', //pink
//     '#859835', // lime
//     '#6D73C2', // purple
//     '#37A198', // green
//     '#DA3637', //red
//     '#F0AD4E' //yellow
//   ]);