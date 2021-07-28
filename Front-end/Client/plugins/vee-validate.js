import { extend } from "vee-validate";
import { required, alpha } from "vee-validate/dist/rules";

extend('isValidateEmail', {
    validate: (value) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(value).toLowerCase());
    },
    message: "Vui lòng nhập đúng định dạng email"
});


// rule để validate form 
extend("required", {
    ...required,
    message: "Hãy nhập trường này"
});

extend("alpha", {
    ...alpha,
    message: "This field must only contain alphabetic characters"
});


// extend("digits", {
//     ...alpha,
//     message: "Chỉ được nhập số"
// });








