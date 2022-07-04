import Helpers from "./helpers";

class App{

  currentYear(){
    let currentYear = new Date().getFullYear();
    $('.js-current-year').html(currentYear);
  }


}

export default new App()