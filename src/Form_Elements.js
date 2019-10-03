import './pug/blocks/__elements/Form_Elements.scss';
import 'ion-rangeslider';
import './pug/blocks/__elements/pagination/pagination.js'
import './pug/blocks/__elements/dropdown/dropdown.min.js'

//active two items in checkbox buttons
let checkbox = document.getElementsByClassName('checkbox__input');
checkbox[0].checked = true;
checkbox[1].checked = true;

//active first radiobutton
let radio = document.getElementsByClassName('radio-button__input');
radio[0].checked = true;

//active right like-buttons
let like = document.getElementsByClassName('like-buttons__input');

like[1].checked = true;
// active 4 star in left stars and all in right stars
let star = document.querySelectorAll('.rate-button__star');
star[3].classList.add('rate-button__star--full');
star[9].classList.add('rate-button__star--full');


//start range-slider
$(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 15000,
    from: 5000,
    to: 10000,
    keyboard: true,
    grid: false,
    skin: "round",
    hide_min_max: true,
    postfix: "&#8381;"
});

//pagination
$(function() {
    $('.pagination').pagination({
        items: 180,
        itemsOnPage: 12,
        cssStyle: 'light-theme',
        displayedPages: 3,
        edges: 1,
        prevText: '',
        nextText: ''
    });
});
//settings dropdown
$(document).ready(() => {
    $('.iqdropdown').iqDropdown({
        minItems: 0,
        maxItems: 9,
    });
  });

//open expandle_checkbox
let showCheckboxExpandle = document.getElementsByClassName('checkbox-expandle__body')[1];
showCheckboxExpandle.style.display="flex";
showCheckboxExpandle.click();
showCheckboxExpandle.children[1].click();
showCheckboxExpandle.children[2].click();
showCheckboxExpandle.children[3].click();
//option margin top
let option = document.getElementsByClassName('option')[0];
option.setAttribute("style","margin-top: 260px;");



