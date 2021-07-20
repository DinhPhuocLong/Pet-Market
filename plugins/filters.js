import Vue from 'vue';
import moment from 'moment';

Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('DD/MM/YYYY hh:mm');
    }
});

// Vue.filter('formatVndCurrency', function(value) {
//     if (value) {
//         let val = (value/1).toFixed(2).replace('.', ',')
//         return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
//     }
// });

Vue.filter('toVndCurrency', function (value) {
    if (typeof value !== "number") {
        return value;
    }
    var formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0
    });
    return formatter.format(value);
});