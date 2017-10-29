<!-- DWXMLSource="test01.xml" -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:output method="html" indent="yes" omit-xml-declaration="yes" encoding="iso-8859-1" doctype-public="-//W3C//DTD XHTML 1.0 Transitional//EN" doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" />
	<xsl:template match="/objLayouts">
		<html xmlns="http://www.w3.org/1999/xhtml">
			<head>
				<link rel="stylesheet" type="text/css" href="/kb_phase_1/prototype/web/global/css/default.css" />
				<script type="text/javascript" src="/kb_phase_1/prototype/web/global/js/common.js"></script>
				<script type="text/javascript" src="/kb_phase_1/prototype/web/global/js/action_dialog.js"></script>
				<title><xsl:value-of select="/page/@title" /></title>
			</head>
			<body>
				<!--************************************
					HEADER
				*************************************-->
				<div class="header_wrapper">
					<div class="column_one layout">
						<ul class="breadcrumbs">
							<li><a href="#">Breadcrumb</a> >></li>
							<li>Breadcrumb</li>
						</ul>
						<h2><xsl:value-of select="page/header/identifier" /></h2>
						<p><xsl:value-of select="page/header/description" /></p>
					</div>
					<div class="column_two">
						<h2><xsl:value-of select="page/header/progress/@title" /></h2>
						<div class="progress_bar">
							<div class="progress_bar_background">
								<div class="progress_bar_inner"></div>
							</div>
						</div>
						<p><strong><xsl:value-of select="page/header/progress/@value" />%</strong></p>
					</div>
					<div class="column_three">
						<ul class="rating">
							<xsl:for-each select="page/header/status_rating/rating">
								<li>
									<xsl:attribute name="class"><xsl:value-of select="@class" /></xsl:attribute>
									<xsl:value-of select="@title" />
								</li>
							</xsl:for-each>
						</ul>
					</div>
				</div>
				<!--************************************
					OBJECT LEVEL CONTROLS
				*************************************-->
				<div class="object_level_controls">
					<form action="#">
						<label>Label:</label>
						<select name="">
							<option value="">Values</option>
							<option value="">selection</option>
						</select>
						<a href="#" class="button icon_with_text summary">Object Action</a>
						<a href="#" class="button icon_with_text comment">Action 2</a>
						<a href="#" class="button icon_with_text dropdown">Menu</a>
					</form>
				</div>
				
				<!--************************************
					TABS
				*************************************-->
				<ul class="agile_tabs">
					<xsl:for-each select="page/tabs/tab">
						<li>
							<xsl:attribute name="class"><xsl:value-of select="@class" /></xsl:attribute>
							<a href="#"><span><xsl:value-of select="@title" /></span></a>
						</li>
					</xsl:for-each>
				</ul>
		
		
				<!--************************************
					MESSAGES
				*************************************-->
				<div>
					<xsl:attribute name="class">message <xsl:value-of select="page/message/@type" /></xsl:attribute>
					<p><xsl:value-of select="page/message" /></p>
				</div>

			</body>
		</html>
	</xsl:template>

</xsl:stylesheet>	