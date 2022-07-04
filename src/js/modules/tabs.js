export default function() {
 
      let $tabs = $(".js-tabs");
    
      $tabs.each(function() {
        let tabs_item = $(this);
    
        function showTab(index) {
     
          tabs_item
            .find(".js-tab-link")
            .eq(index)
            .addClass("is-active");
          tabs_item
            .find(".js-tab-content")
            .eq(index)
            .fadeIn(100);
            if(window.sidebar){
            window.sidebar.updateSticky();
            
            }
        }

        function hideTabs() {
          tabs_item.find(".js-tab-link.is-active").removeClass("is-active");
          tabs_item.find(".js-tab-content").hide()
        }

        hideTabs();
        showTab(0);

        tabs_item.find(".main-tabs-navigation").find('.js-tab-link').click(function() {
          hideTabs();
          showTab($(this).index());
          
        });


      });
    
    }