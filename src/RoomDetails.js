import './pug/blocks/pages/RoomDetails.scss';
import 'ion-rangeslider';
import './pug/blocks/__elements/pagination/pagination.js';
import './pug/blocks/__elements/dropdown/dropdown.js';
import './pug/blocks/__elements/slider/slider.js';
import './pug/blocks/__elements/air-datepicker/datepicker.min.js';
import './pug/blocks/__elements/header/header.js'
import './pug/blocks/__elements/chart/chart.js'

//datepicker на два инпута
$('#start').datepicker({ 
    clearButton: true,
    range: true,
    showButtonPanel: true,
    onSelect: function (fd, d, picker) { 
      $("#start").val(fd.split("-")[0]);
      $("#end").val(fd.split("-")[1]);
    }
});