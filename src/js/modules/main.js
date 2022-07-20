//import './svg';

// Modules
import $ from "jquery";
import App from "./app";
//import Fancy from "./fancybox";
import Select from "./select";

$(document).ready(function () {
 // Fancy.init();
  Select.init();
  App.anchors();
  App.hideCookieAlert();
})