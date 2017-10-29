		<!-- JavaScripts
		================================================== -->

		<!--jQuery CDN -->
		<script src="/_/bower_components/jquery/dist/jquery.min.js"></script>

		<!-- Plug-Ins -->
		<script src="/_/bower_components/fastclick/lib/fastclick.js"></script>

		<!-- Bootstrap Components -->
		<script src="/_/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

		<!-- Component Library (Style Guide) Specific JS -->
		<script src="/_/js/styleguide.js"></script>

		<!-- Custom Prototype JS 
		... Will be added here ... -->

		<!-- HighLight Plugin for code snippest -->
		<script src="/_/bower_components/highlightjs/highlight.pack.js"></script>
		<script>hljs.configure({ 'languages': ['html'] });</script>
		<script type="text/javascript">
			$('pre code').each(function(i, item){ 
				var htmlOfElement = $(item).html().replace(/</g, '&lt;');
				var htmlOfElement = htmlOfElement.replace(/>/g, '&gt;');
				$(item).html(htmlOfElement);
				hljs.highlightBlock(item);
			});
		</script>
		

		<!-- LiveReload -->
		<script src="//localhost:35729/livereload.js"></script>
