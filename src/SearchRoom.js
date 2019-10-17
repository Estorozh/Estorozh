import './pug/blocks/pages/SearchRoom.scss';
import 'ion-rangeslider';
import './pug/blocks/__elements/pagination/pagination.js';
import './pug/blocks/__elements/dropdown/dropdown.js';
import './pug/blocks/__elements/slider/slider.js';
import './pug/blocks/__elements/air-datepicker/datepicker.min.js';
import './pug/blocks/__elements/header/header.js'

//air data picker
$('.datepicker-single').datepicker({
  inline: false,
  clearButton: true,
  range: true,
  showButtonPanel: true
});
$('.datepicker--buttons').append('<span class="datepicker--button" data-action="apply">Применить</span>');

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