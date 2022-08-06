//import './svg';

// Modules
import $, { map } from "jquery";
import App from "./app";
import Fancy from "./fancybox";
import Masks from "./inputmask";
//import Select from "./select";
import Validation from '../forms/validation'
import sliderCatalogItem from "../sliders/sliderCatalogItem";
import sliderGallery from "../sliders/sliderGallery";
import sliderContractors from "../sliders/sliderContractors";
import dropdown from "./dropdown";
import rangeSlider from "./rangeSlider";
import yandexMap from "./map";
import tabs from "./tabs";
import CatalogFilter from "./catalogFilter";

// Global
window.Masks = Masks
//window.Select = Select
window.App = App
window.Fancy = Fancy

$(document).ready(function () {
  yandexMap();
  dropdown();
  rangeSlider();
  tabs()
  CatalogFilter.init();
  sliderGallery();
  Fancy.init();
 //Select.init();
  Validation();
  Masks.maskPhone();
  App.anchors();
  App.mobileMenu();
  App.toggleSorting();
  App.catalogItemToggleContent();
  App.hideCookieAlert();
  sliderCatalogItem.init();
  sliderContractors.init();
})