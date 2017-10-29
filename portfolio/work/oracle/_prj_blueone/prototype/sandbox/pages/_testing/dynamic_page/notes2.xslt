<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:output method="html" indent="yes" omit-xml-declaration="yes" encoding="iso-8859-1" doctype-public="-//W3C//DTD XHTML 1.0 Transitional//EN" doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" />
	<xsl:template match="/notes/note[@id=001]">
		<html xmlns="http://www.w3.org/1999/xhtml">
			<head>
				<title><xsl:value-of select="@pageTitle" /></title>
				<link>
	                <xsl:attribute name="rel">stylesheet</xsl:attribute>
                    <xsl:attribute name="type">text/css</xsl:attribute>
					<xsl:attribute name="href"><xsl:value-of select="@cssFile" /></xsl:attribute>
                </link>	
			</head>
			<body class="notes">
				<div class="notes">

                	<h1><xsl:value-of select="@pageTitle" /></h1>
					<xsl:for-each select="section">
	                    <h2><xsl:value-of select="@title" /></h2>
                        <xsl:if test="sec">
                            <xsl:for-each select="sec">  
                                <h3><xsl:value-of select="@title" /></h3>
                                <xsl:for-each select="p">
                                    <p>
                                        <xsl:if test="@title">
                                            <strong><xsl:value-of select="@title" />: </strong>
                                        </xsl:if>
        
                                        <xsl:value-of select="." />
                                    </p>
                                </xsl:for-each>
                            </xsl:for-each>
                        </xsl:if>
                    </xsl:for-each>

   				</div>
        	</body>
		</html>
	</xsl:template>
</xsl:stylesheet>