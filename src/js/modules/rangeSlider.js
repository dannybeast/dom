import "jquery-ui/ui/widgets/slider";
import "jquery-ui-touch-punch";

export default function(){
  
$('.range-slider-wrapper').each(function(){
  let min = $(this).data('min')
  let max = $(this).data('max')
  let step = $(this).data('step')
  let minVal = $(this).find('.js-range-min').val();
  let maxVal = $(this).find('.js-range-max').val();
  let that = $(this)
  let slider = $(this).find('.range-slider')
  
  $(this).append(`
  <div class="range-slider-wrapper__bottom">
    <p class="range-slider-wrapper__price"> 
     ${min}
    </p>
    <p class="range-slider-wrapper__price ">
      ${max}
    </p>
  </div>`)



  slider.slider({
    range: true,
    min: min,
    max: max,
    step:step,
    values: [minVal, maxVal],
    slide: function(event, ui) {
      let $parent = $(event.target).closest('.range-slider-wrapper')
      $parent.find('.js-range-min').val(ui.values[0]);
      $parent.find('.js-range-max').val(ui.values[1]);
    },
    create: function(event, ui) {
     let $parent = $(event.target).closest('.range-slider-wrapper')


     $parent.find('.js-range-min').keyup(function(){
      minVal = $(this).val();
      slider.slider( "option",'values',[minVal,maxVal]);
      that.find('.range-min').text(minVal);
      that.find('.range-max').text(maxVal);
    })
  
    $parent.find('.js-range-max').keyup(function(){
      maxVal = $(this).val()
      slider.slider( "option",'values',[minVal,maxVal]);
      that.find('.range-min').text(minVal);
      that.find('.range-max').text(maxVal);
    })
  
   }
  });

  $(this).find('.ui-slider-handle').eq(0).append(`<span class="range-min">${minVal}</span>`)
  $(this).find('.ui-slider-handle').eq(1).append(`<span class="range-max">${maxVal}</span>`)

})

}