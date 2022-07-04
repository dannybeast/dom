class Helpers{

  toggleText(){
    $.fn.extend({
      toggleText: function (a, b) {
        return this.text(this.text() == b ? a : b);
      }
    });
  }

  numberWithSpaces(x) {
    return parseFloat(x).toLocaleString() ;
  }

  

}

export default new Helpers()