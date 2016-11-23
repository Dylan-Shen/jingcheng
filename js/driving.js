
define(function(require,exports,module){
	var Skiing={

	   initPage: function(){
            this.footerpage();
            this.headerpage();
            this.drivingpage();
	  },
	  headerpage:function(){
         var _html = require('../view/header.html');
         var headerHtml=_.template(_html);
         $('.header').html(headerHtml);
         
	  },
	  drivingpage:function(){
         var _html = require('../view/driving.html');
         var drivingHtml=_.template(_html);
         $.ajax({
            type:'get',
            url:'../json/index.json',
            success:function(data){
              $('.driving').html(drivingHtml({data:data}));
          }
          })    

	  },
	   footerpage:function(){
         var _html = require('../view/footer.html');
         var footerHtml=_.template(_html);
          $.ajax({
         	type:'get',
         	url:'../json/index.json',
         	success:function(data){
            $('.footer').html(footerHtml({data:data}));
         		
         	}
         })
	  }
	}

	module.exports=Skiing
})