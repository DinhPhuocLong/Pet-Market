import Vue from 'vue';
import moment from 'moment';

Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('DD/MM/YYYY hh:mm');
    }
});

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


Vue.filter('percentage', function (value) {
    if(!value) {
        return '0%';
    }
    return `${+value}%`;
});