import './pug/blocks/pages/Registration.scss';
import 'ion-rangeslider';
import './pug/blocks/__elements/pagination/pagination.js';
import './pug/blocks/__elements/dropdown/dropdown.js';
import './pug/blocks/__elements/slider/slider.js';
import './pug/blocks/__elements/air-datepicker/datepicker.min.js';
import './pug/blocks/__elements/header/header.js'

$('.datepicker-here').datepicker({
    clearButton: true,
    range: true,
    showButtonPanel: true
});
$('.datepicker--buttons').append('<span class="datepicker--button" data-action="apply">Применить</span>');
