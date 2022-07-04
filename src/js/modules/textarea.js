import "autoresize-textarea";
class Textarea{

  init() {
    $("textarea").autoResize();
  }

}

export default new Textarea()