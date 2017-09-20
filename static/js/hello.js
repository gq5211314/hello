export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
$(function(){
				
var $li = $('#wrap ul li');

$li.hover(function(ev){

	move.call(this , ev , true);

},function(ev){
	move.call(this , ev , false);
});


function move( ev , bool ){
	var top = $(this).offset().top;
	var bottom  = top + $(this).height();
	var left = $(this).offset().left;
	var right = left + $(this).width();

	var x = ev.pageX,
		y = ev.pageY;
	
	var sT = Math.abs(y - top),
		sB = Math.abs(y - bottom),
		sL = Math.abs(x - left),
		sR = Math.abs(x - right);
	
	var a = Math.min( sT , sB , sL , sR );

	switch ( a )
	{
		case sT:
			if ( bool )
			{
				$(this).find('.cover').css({
					left : 0,
					top : '-300px',
					color: 'white'
					
				}).stop().animate({
					top : 0
				},300);

			}
			else
			{
				$(this).find('.cover').stop().animate({
					top : '-300px'
					
				},300);
			}
			
			break;

		case sB:
			if ( bool )
			{
				$(this).find('.cover').css({
					left : 0,
					top : '300px',
					color: 'white'
					
				}).stop().animate({
					top : 0
				},300);
			}
			else
			{
				$(this).find('.cover').stop().animate({
					top : '300px'
				},300);
			}
			break;
		
		case sL:
			
			if ( bool )
			{
				$(this).find('.cover').css({
					top : 0,
					left : '-100%',
					color: 'white'
				
				}).stop().animate({
					left : 0
				},300);
			}
			else
			{
				$(this).find('.cover').stop().animate({
					left : '-100%'
				},300);
			}
			
			break;
		
		case sR:
			if ( bool )
			{
				$(this).find('.cover').css({
					top : 0,
					left : '100%',
					color: 'white'
					
				}).stop().animate({
					left : 0
				
				},300);
			}
			else
			{
				$(this).find('.cover').stop().animate({
					left : '100%'
				},300);
			}
			break;
	}
	
	//console.log( '距离顶部:'+sT+'   距离底部:'+sB+'   距离左边:'+sL+'   距离右边:'+sR )
};

});