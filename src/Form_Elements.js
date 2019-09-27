import './pug/blocks/__elements/Form_Elements.scss'

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
