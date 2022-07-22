//import './svg';

// Modules
import $ from "jquery";
import App from "./app";
import Fancy from "./fancybox";
import Masks from "./inputmask";
import Select from "./select";
import Validation from '../forms/validation'
import sliderCatalogItem from "../sliders/sliderCatalogItem";

// Global
window.Masks = Masks
window.Select = Select
window.App = App
window.Fancy = Fancy

$(document).ready(function () {
  Fancy.init();
  Select.init();
  Validation();
  Masks.maskPhone();
  App.anchors();
  App.toggleSorting();
  App.catalogItemToggleContent();
  App.hideCookieAlert();
  sliderCatalogItem.init()
})