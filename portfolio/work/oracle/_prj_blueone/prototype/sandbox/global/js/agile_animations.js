/****************************************************
	FADE ANIMATION VARIABLES : pills added animation
****************************************************/
gIsFading = false;
gfadeTimer = null;
	
function cleanUpFader() {
	clearTimeout(gfadeTimer);	
	gIsFading = false;
	gfadeTimer = null;
}

function msclAddedPill()
	{
		$('mscl_added_notice').style.opacity = '1';
		$('mscl_added_notice').style.filter = 'alpha(opacity=100)';
		$('mscl_added_notice').style.display = 'none';
		cleanUpFader();
	}
function msclResetAddedPill()
	{
		$('mscl_palette_added_notice').style.opacity = '1';
		$('mscl_palette_added_notice').style.filter = 'alpha(opacity=100)';
		$('mscl_palette_added_notice').style.display = 'none';
		cleanUpFader();	
	}
	
function sssResetTargetPill()
	{
		$('sss_added_notice').style.opacity = '1';
		$('sss_added_notice').style.filter = 'alpha(opacity=100)';
		$('sss_added_notice').style.display = 'none';
		cleanUpFader();
	}
function sssResetPalettePill()
	{
		$('sss_palette_added_notice').style.opacity = '1';
		$('sss_palette_added_notice').style.filter = 'alpha(opacity=100)';
		$('sss_palette_added_notice').style.display = 'none';
		cleanUpFader();	
	}
	
function mssResetPalettePill()
	{
		$('mss_palette_added_notice').style.opacity = '1';
		$('mss_palette_added_notice').style.filter = 'alpha(opacity=100)';
		$('mss_palette_added_notice').style.display = 'none';
		cleanUpFader();	
	}
function mslResetPalettePill()
	{
		$('msl_palette_added_notice').style.opacity = '1';
		$('msl_palette_added_notice').style.filter = 'alpha(opacity=100)';
		$('msl_palette_added_notice').style.display = 'none';
		cleanUpFader();	
	}	
	
function resetAddedPill()
	{
		$('mscl_added_notice').style.opacity = '1';
		$('mscl_added_notice').style.filter = 'alpha(opacity=100)';
		$('mscl_added_notice').style.display = 'none';
		cleanUpFader();
	}
function resetAddedPill2()
	{
		$('mscl_palette_added_notice').style.opacity = '1';
		$('mscl_palette_added_notice').style.filter = 'alpha(opacity=100)';
		$('mscl_palette_added_notice').style.display = 'none';
		cleanUpFader();	
	}
function sss_resetAddedPill()
	{
		$('palette_added_notice').style.opacity = '1';
		$('palette_added_notice').style.filter = 'alpha(opacity=100)';
		$('palette_added_notice').style.display = 'none';
		cleanUpFader();
	}
function sss_resetAddedPill2()
	{
		$('sss_added_notice').style.opacity = '1';
		$('sss_added_notice').style.filter = 'alpha(opacity=100)';
		$('sss_added_notice').style.display = 'none';
		cleanUpFader();	
	}
function sss_addPill()
	{
		$('pill').style.opacity = '.7';
		$('pill').style.filter = 'alpha(opacity=70)';
		cleanUpFader();	
	}