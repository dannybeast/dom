import "jquery-ui/ui/widgets/slider";
import "jquery-ui-touch-punch";

export default function(){
  let wrapper = '.range-slider-wrapper',
      rangeMin = '.js-range-min',
      rangeMax = '.js-range-max',
      rangeSlider = '.range-slider'
      
$(wrapper).each(function(){
  let min = $(this).data('min')
  let max = $(this).data('max')
  let step = $(this).data('step')
  let minVal = $(this).find(rangeMin).val();
  let maxVal = $(this).find(rangeMax).val();
  let slider = $(this).find(rangeSlider)
  
  slider.slider({
    range: true,
    min: min,
    max: max,
    step:step,
    values: [minVal, maxVal],
    slide: function(event, ui) {
      let $parent = $(event.target).closest(wrapper)
      $parent.find(rangeMin).val(ui.values[0]);
      $parent.find(rangeMax).val(ui.values[1]);
    },
    create: function(event, ui) {
     let $parent = $(event.target).closest(wrapper)

     $parent.find(rangeMin).keyup(function(){
      minVal = $(this).val();
      slider.slider( "option",'values',[minVal,maxVal]);
     })
   
     $parent.find(rangeMax).keyup(function(){
       maxVal = $(this).val()
       slider.slider( "option",'values',[minVal,maxVal]);
     })
   }
  });
})

}