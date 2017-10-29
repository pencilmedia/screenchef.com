<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
    <style>
		body { margin:30px 60px; font-family:Verdana, Geneva, sans-serif; font-size: 11px;}
	</style>
</head>
<body>
<h2>Train</h2>
<h3>The Train allows users to quickly see where they are in a guided process, and provides links to navigate through that process.</h3>
<h4>Trains should have at least three stops. Two-step processes can be handled solely with action/navigation buttons.</h4>

<h2>Types of Train</h2>
<ul style="clear:both;">
	<li>
		<h3>Horizontal Trains</h3>
		<p><img src="mHTrain_elements_intro.png" /></p>
		<p>Typically displayed within the horizontal space of the Secondary Control Panel, directly above the page header (this is the recommended location). Suggested for shorter processes (3 - 7 steps) where all stops can be shown at the same time. When there are too many train stops to fit within the available horizontal space, an overflow list appears.</p>
	</li>
	<li>
		<h3>Vertical Trains</h3>
		<p><img src="mVTrain_elements_intro.png" style="float:right;" /></p>
		<p style="margin-top:50px;">Typically displayed within the vertical space of the Secondary Control Panel and in dialogs (these are the recommended locations). In both cases they appear on the left side of the page or window (right side for BiDi languages). Suggested for longer processes (up to 10) steps so more stops can be shown at the same time. Vertical trains occupy space typically used for display of data, so are not recommended for processes with large amounts of detail in individual steps. When there are too many train stops to fit within the available vertical space, a vertical scroll bar appears.</p>
		<p style="background-color:pink;">Note: Due to Applications Division executive mandate, Apps division development should not use vertical trains in their products!</p>
	</li>
</ul>

<h2 style="margin-top:250px;">Property Sheet</h2>
		<p><img src="mHTrain_elements.png" /></p>

<ul>
	<li><h3>Component Level</h3>
    	<ul>
        	<li><strong>Style:</strong> Horizontal / Vertical</li>
            <li><strong>State</strong></li>
            <li>
            	<p><strong>Process: Sequential</strong><br/>
                Consist of a number of logical, sequential steps with data dependencies between some or all steps.</p>
                <p><strong>Non-Sequential</strong><br />
                Consist of steps presented in a suggested order, but which do not have data dependencies between steps.</p>
            </li>
        </ul>
    </li>
	<li><h3>Stop Level</h3>
    	<ul>
        	<li><strong>Stop Name</strong></li>
            <li><strong>Sequential Behavior:</strong> Sequential / Non-Sequential</li>
            <li>
            	<strong>Skip Stop:</strong> Enabled / Disabled<br/>
            	Development teams specify process type at the train stop level, so a single guided process may consist of a mix of sequential and non-sequential steps.
            </li>
            <li><strong>Tooltip</strong></li>
            <li><strong>Required</strong></li>
            <li><strong>Subprocess</strong></li>
       </ul>
    </li>
</ul>

<h2>Proposed Generated Markup</h2>
    <p>Each train stop has a corresponding content panel similar to tabs.</p>
    &lt;ux class="dwpe_train"&gt;<br/>
    &nbsp; &nbsp; &nbsp; &lt;li&gt;Stop 1&lt;/li&gt;<br/>
    &nbsp; &nbsp; &nbsp; &lt;li&gt;Stop 2&lt;/li&gt;<br/>
    &nbsp; &nbsp; &nbsp; &lt;li&gt;Stop 3&lt;/li&gt;<br/>
    &nbsp; &nbsp; &nbsp; &lt;li&gt;Stop 4&lt;/li&gt;<br/>
    &lt;/ux&gt;<br/>
    &lt;div class="dwpe_train_panel"&gt;Stop 1 Content&lt;/div&gt;<br/>
    &lt;div class="dwpe_train_panel"&gt;Stop 2 Content&lt;/div&gt;<br/>
    &lt;div class="dwpe_train_panel"&gt;Stop 3 Content&lt;/div&gt;<br/>
    &lt;div class="dwpe_train_panel"&gt;Stop 4 Content&lt;/div&gt;<br/>

<h2>Proposed Rendered Code</h2>
<p>After careful consideration of various structural layouts I decided on a simplified version of the RCUX code.</p>

&lt;ux class="dwpe_train"&gt;<br/>
&nbsp; &nbsp; &nbsp; &lt;table&gt;<br/>
&nbsp; &nbsp; &nbsp; 	 &nbsp; &nbsp; &nbsp; &lt;tr&gt;<br/>
&nbsp; &nbsp; &nbsp;       	 &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; <strong>&lt;!-- Train Stop --&gt;</strong><br/>
&nbsp; &nbsp; &nbsp;       	 &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; <strong>&lt;!-- Each TD represents a train stop --&gt;</strong><br/>
&nbsp; &nbsp; &nbsp;     	 &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &lt;td&gt;<br/>
&nbsp; &nbsp; &nbsp;              &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &lt;table&gt;<br/>
&nbsp; &nbsp; &nbsp;                  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &lt;tr&gt;<br/>
&nbsp; &nbsp; &nbsp;                      &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &lt;td&gt;<br/>
&nbsp; &nbsp; &nbsp;                           &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; <strong>&lt;!-- Line Style --&gt;</strong><br/>
&nbsp; &nbsp; &nbsp;                           &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &lt;span&gt;&lt;/span&gt;<br/>
&nbsp; &nbsp; &nbsp;                      &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &lt;/td&gt;<br/>
&nbsp; &nbsp; &nbsp;                      &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &lt;td&gt;<br/>
&nbsp; &nbsp; &nbsp;                           &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; <strong>&lt;!-- ICON --&gt;</strong><br/>
&nbsp; &nbsp; &nbsp;                       	 &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &lt;a&gt;&nbsp;&lt;/a&gt;<br/>
&nbsp; &nbsp; &nbsp;                      &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &lt;/td&gt;<br/>
&nbsp; &nbsp; &nbsp;                      &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &lt;td&gt;<br/>
&nbsp; &nbsp; &nbsp;                           &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; <strong>&lt;!-- Line Style --&gt;</strong><br/>
&nbsp; &nbsp; &nbsp;                          &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &lt;span&gt;&lt;/span&gt;<br/>
&nbsp; &nbsp; &nbsp;                      &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &lt;/td&gt;<br/>
&nbsp; &nbsp; &nbsp;                  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &lt;/tr&gt;<br/>
&nbsp; &nbsp; &nbsp;                  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &lt;tr&gt;<br/>
&nbsp; &nbsp; &nbsp;                      &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &lt;td colspan="3"&gt;<br/>
&nbsp; &nbsp; &nbsp;                           &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; <strong>&lt;!-- Stop Name --&gt;</strong><br/>
&nbsp; &nbsp; &nbsp;                          &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &lt;a&gt;Stop 1&lt;/a&gt;<br/>
&nbsp; &nbsp; &nbsp;                      	 &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &lt;/td&gt;<br/>
&nbsp; &nbsp; &nbsp;                  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &lt;/tr&gt;<br/>
&nbsp; &nbsp; &nbsp;              &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &lt;/table&gt;<br/>
&nbsp; &nbsp; &nbsp;          &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &lt;/td&gt;<br/>
&nbsp; &nbsp; &nbsp;      &nbsp; &nbsp; &nbsp; &lt;/tr&gt;<br/>
&nbsp; &nbsp; &nbsp; &lt;/table&gt;<br/>
&nbsp; &nbsp; &nbsp; <strong>&lt;!--Each Stop has a corresponding Container--&gt;</strong><br/>
&nbsp; &nbsp; &nbsp; &lt;div&gt;Stop 1 Content Pane&lt;/div&gt;<br/>

&lt;/ux&gt;<br/>


</div>
</body>
</html>	
