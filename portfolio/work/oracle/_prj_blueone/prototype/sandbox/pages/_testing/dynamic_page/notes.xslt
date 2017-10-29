<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:output method="html" indent="yes" omit-xml-declaration="yes" encoding="iso-8859-1" doctype-public="-//W3C//DTD XHTML 1.0 Transitional//EN" doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" />

	<xsl:param name="note_id" />

	<xsl:template match="/notes/note[@id=001]">
		<html xmlns="http://www.w3.org/1999/xhtml">
			<head>
				<title><xsl:value-of select="@page_title" /></title>
				<link>
	                <xsl:attribute name="rel">stylesheet</xsl:attribute>
                    <xsl:attribute name="type">text/css</xsl:attribute>
					<xsl:attribute name="href"><xsl:value-of select="current()/@cssFile" /></xsl:attribute>
                </link>	
			</head>
			<body class="notes">
		    	<h1><xsl:value-of select="current()/@page_header" /></h1>
				<xsl:call-template name="sections" />
			</body>
		</html>
	</xsl:template> 

	<xsl:template name="sections">
		<xsl:for-each select="section">
			<div>
           		<xsl:attribute name="class">section</xsl:attribute>
                <h2 class="section_title"><xsl:value-of select="current()/@title" /></h2>
                <xsl:if test="subsection">
                    <xsl:for-each select="subsection">
                    	<xsl:call-template name="subsections" />
                    </xsl:for-each>
                </xsl:if>
         	</div>
        </xsl:for-each>
	</xsl:template>

	<xsl:template name="subsections">
		<div>
	   		<xsl:attribute name="class">subsection</xsl:attribute>
	        <xsl:if test="@title">
	            <h3 class="subsection_title"><xsl:value-of select="current()/@title" /></h3>
	       	</xsl:if>
	        <xsl:for-each select="current()/p">
	            <p>
	                <xsl:if test="current()/@label">
	                    <span class="label"><xsl:value-of select="current()/@label" />: </span>
	                </xsl:if>
					<xsl:value-of select="." />
	            </p>
	        </xsl:for-each>
	    </div>
	</xsl:template>

</xsl:stylesheet>