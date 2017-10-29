</div><!--/.col-xs-12.col-sm-9-->
        <div class="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">
          <!-- Main Navigation
          ================================================== -->
          @@include('./inc/nav.tpl')


        </div><!--/.sidebar-offcanvas-->
      </div>
      <!--/row-->
    </section><!--/.container-->

    <!-- END/ Page Content
    ================================================== -->


    <!-- JavaScripts
    ================================================== -->

    <!--jQuery CDN -->
    <script src="/portfolio/work/paradata/style-guide/dist/app/assets/bower_components/jquery/dist/jquery.min.js"></script>

    <!-- Plug-Ins -->
    <script src="/portfolio/work/paradata/style-guide/dist/app/assets/bower_components/fastclick/lib/fastclick.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/3.5.2/select2.min.js"></script>
    <script src="/portfolio/work/paradata/style-guide/dist/app/assets/bower_components/jquery.truncator/jquery.truncator.js"></script>

    <!-- Polyfills - create support for unsupported browsers
    ... Will be added here ... -->

    <!-- Bootstrap Components -->
    <script src="/portfolio/work/paradata/style-guide/dist/app/assets/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

    <!-- Plugins  -->
    <!-- plugins go here -->

    <!-- App JS -->
    <script src="/portfolio/work/paradata/style-guide/dist/app/assets/js/app.js"></script>

    <!-- Components JS  -->
    <script src="/portfolio/work/paradata/style-guide/dist/app/assets/js/components.js"></script>

    <!-- Component Library (Style Guide) Specific JS -->
    <script src="/portfolio/work/paradata/style-guide/dist/app/assets/js/styleguide.js"></script>

    <!-- Angular Library-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.0/angular.min.js"></script>


    <!-- HighLight Plugin for code snippest -->
    <script src="/portfolio/work/paradata/style-guide/dist/app/assets/bower_components/highlightjs/highlight.pack.js"></script>
    <script>hljs.configure({ 'languages': ['html', 'javascript'] });</script>
    <script type="text/javascript">
      $('pre code').each(function(i, item){
        var htmlOfElement = $(item).html().replace(/</g, '&lt;');
        var htmlOfElement = htmlOfElement.replace(/>/g, '&gt;');
        $(item).html(htmlOfElement);
        hljs.highlightBlock(item);
      });
    </script>

    <!-- Angular module setup -->
    <script>
      var angApp = angular.module('myApp',[]);
        angApp.controller('appCtrl', ['$scope', function($scope){
          $scope.collection = [
            {name:'Scott'},
            {name:'Steve'},
            {name:'Nick'},
            {name:'Asha'},
            {name:'Vishak'},
            {name:'Joel'},
            {name:'Ralph'},
            {name:'Marq'},
            {name:'Michele'},
            {name:'Kiavash'}
          ];
        }]);
    </script>

    <!-- FOR DEV PURPOSES: LiveReload -->
    <script src="//localhost:35729/livereload.js"></script>

  </body>
</html>
