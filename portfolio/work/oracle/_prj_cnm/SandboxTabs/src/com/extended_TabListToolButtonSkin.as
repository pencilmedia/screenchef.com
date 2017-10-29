package com
{
	import mx.skins.halo.HaloBorder;
		
	public class extended_TabListToolButtonSkin extends HaloBorder
	{
		private var offset:Number=0;
		
		public function extended_TabListToolButtonSkin()
		{
			super();
						
		}
				
		override protected function updateDisplayList(w:Number, h:Number):void{
			var alpha:Number =getStyle("alpha");
			var borderColor:uint =getStyle("borderColor");
			graphics.beginFill(borderColor,alpha);
			graphics.drawRect(0,0,w-offset,h);
			drawArrow(w,h);
		}
		
		private function drawArrow(w:Number, h:Number):void{
			if (this.parent is extendedPopUpMenuButton){
			
				//draw the drop down arrow taking into account the right padding
	            //and use the text color for the arrow color
				var PaddingRight:Number = getStyle("paddingRight");
				var arrowColor:uint = getStyle("color");
					
				graphics.lineStyle(1,arrowColor,0);
				graphics.beginFill(arrowColor,1);
				graphics.moveTo((w-PaddingRight)-7/2, h/2+3);
				graphics.lineTo(w-PaddingRight, 9);
				graphics.lineTo((w-PaddingRight)-7, 9);
				graphics.lineTo((w-PaddingRight)-7/2,h/2+3);
				graphics.endFill();
			
			}
			
		}
			
		
	}
}