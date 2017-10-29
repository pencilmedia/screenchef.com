package com
{
	import mx.skins.ProgrammaticSkin;
	import flash.display.Graphics;
	import mx.utils.ColorUtil;
	
	
	public class extended_TabDropIndicator extends ProgrammaticSkin
	{
		public function extended_TabDropIndicator()
		{
			super();
			
		}
		
		override protected function updateDisplayList(w:Number, h:Number):void{	
			super.updateDisplayList(w, h);
			
			//eventually use a style setting
			var dropIndicatorColor:uint =0x000000;
			
			graphics.lineStyle(0, 0, 0);
			graphics.beginFill(dropIndicatorColor);
						
			graphics.moveTo (4, 0); 
			graphics.lineTo (0, 4); 
			graphics.lineTo (-4, 0); 
			graphics.lineTo (4,0);
			graphics.endFill();
	
	
	
		}
	}
}