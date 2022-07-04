import $ from 'jquery';
import "jquery-validation";
export default function(){
 
 let fieldClass = ".field"

 // Default settings
 
 jQuery.extend(jQuery.validator.messages, {
  min: jQuery.validator.format("Минимум {0}"),
  minlength: jQuery.validator.format("Поле должно содержать {0} символов"),
  email: jQuery.validator.format("Введите валидный E-mail адрес"),
  url: jQuery.validator.format("Введите валидную ссылку на сайт в формате http://"),
  required: jQuery.validator.format("Поле обязательно для заполнения")
});

 $.validator.setDefaults({
  highlight: function (element) {
      $(element)
          .parents(fieldClass)
          .addClass("is-error");
  },
  ignore: [],
  unhighlight: function (element) {
      $(element)
          .parents(fieldClass)
          .removeClass("is-error");
  },
  errorElement: "div",
  errorClass: "field__error",

  errorPlacement: function (error, element) {
      if (
          element.prop("type") === "file" ||
          element.prop("type") === "checkbox" ||
          element.prop("type") === "radio"
      ) {
          error.insertAfter(element.parent());
      } else {

          error.insertAfter(element.closest(fieldClass).children().last());
      }
  }
});

 // Forms
 $(".js-validation-form").each(function(){
  $(this).validate({
   submitHandler: function(form) {
     form.submit();
   }
  });
 })
}