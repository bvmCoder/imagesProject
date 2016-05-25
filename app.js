/*
(function() {
    "use strict";

    var _id = function _id(x) {
        return document.getElementById(x);
    };
    var _class = function _class(x) {
        return document.querySelectorAll(x);
    };
    var _tag = function _tag(x) {
        return document.querySelectorAll(x);
    };
    //var button3 = document.getElementById("button3");
    var button = _tag("button");
    var classImage = _class(".image");
    //console.log(button);
  //  console.log(classImage);
    for(var i =0; i < button.length; i++){
    button[i].addEventListener('click', function() {
        console.log(classImage[0].img.src);

    });
  };

    var imgArray = _class(".image");
    //console.log(imgArray);
})();

// we need to solve the same project using the pure javaScript
*/

(function() {
    'use strict';

    // get all buttons
    var $buttons = $('button');
    // get all images
    var $images = $('.image');
    /*
    console.log($buttons);
    console.log($images);
    */

    var hideAllImages = function hideAllImages() {
        for (var i = 0; i < $images.length; ++i) {
            $($images[i]).hide();
        }
    };


    var bindButtonToImage = function bindButtonToImage(id) {
        $('#button' + id).click(function() {
            hideAllImages();
            $('#image' + id).show();
        });
    }

    var bindCountToImage = function bindCountToImage(id) {
        var image = ('#image' + id);
        console.log(image);
        $(image).click(function() {
            var count = $(image + ' > .counter').text();
            //console.log(count);
            //count = parseInt(count) + 1;
            //console.log(count);
            $(image + ' > .counter').text(count);
        });
    }

    for (var i = 1; i < $buttons.length + 1; ++i) {
        bindButtonToImage(i);
    }

    for (var i = 1; i < $images.length + 1; ++i) {
        bindCountToImage(i);
    }


    hideAllImages();
    $('#image3').show();


})();
