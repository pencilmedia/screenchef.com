"use strict";
var acceptHeader = '*/*';
var ContactPage = {
    load: function (context) {
        document.getElementById('contactLink').setAttribute('href', '/');
        if (site.isInit(context)) {
            site.showSection('contact');
            return;
        }
        document.body.classList.add('contactOpened');
        site.showSection('contact');
        context.notify = true;
        site.onLoaded(context);
    },
    unload: function (context) {
        site.hideSection('contact');
        document.getElementById('contactLink').setAttribute('href', '/contact');
    }
};
var AboutPage = {
    load: function (context) {
        document.getElementById('aboutLink').setAttribute('href', '/');
        if (site.isInit(context)) {
            site.showSection('about');
            return;
        }
        site.showSection('about');
        context.notify = true;
        site.onLoaded(context);
    },
    unload: function (context) {
        site.hideSection('about');
        document.getElementById('aboutLink').setAttribute('href', '/about');
    }
};
var Site = (function () {
    function Site() {
        this.router = new Carbon.Router({
            '/': this.index.bind(this),
            '/about': AboutPage,
            '/contact': ContactPage,
            '/blog': this.blog.bind(this),
            '/blog/{tag}': this.blog.bind(this),
            '/projects/{id}': this.project.bind(this)
        });
        window.site = this;
        this.router.start();
    }
    Site.prototype.index = function (context) {
        var _this = this;
        if (this.isInit(context))
            return;
        if (document.body.matches('.projectPage, .blogPage, .postPage')) {
            this.load('/').then(function () {
                document.body.classList.remove('projectPage');
                _this.onLoaded(context);
            });
            return;
        }
        this.onLoaded(context);
    };
    Site.prototype.blog = function (cxt) {
        var _this = this;
        if (this.isInit(cxt))
            return;
        this.load(cxt.pathname).then(function () {
            document.body.classList.add('blogPage');
            _this.onLoaded(cxt);
        });
    };
    Site.prototype.post = function (context) {
        var _this = this;
        if (this.isInit(context))
            return;
        this.load(context.pathname).then(function () {
            document.body.classList.add('postPage');
            _this.onLoaded(context);
        });
    };
    Site.prototype.project = function (context) {
        var _this = this;
        if (this.isInit(context))
            return;
        this.load('/projects/' + context.params.id).then(function () {
            document.body.classList.add('projectPage');
            _this.onLoaded(context);
        });
    };
    Site.prototype.showSection = function (name) {
        document.body.classList.add(name + 'Opened');
        var contentEl = document.querySelector('.content');
        var projectsEl = document.getElementById('projects');
        var sectionEl = document.querySelector('section.' + name);
        projectsEl.animate([
            { 'transform': "translate(0, 0)" },
            { 'transform': "translate(0px, " + sectionEl.clientHeight + "px)" }
        ], { duration: 300, fill: 'forwards', easing: "ease-in" });
        contentEl.style.marginBottom = sectionEl.clientHeight + 'px';
    };
    Site.prototype.hideSection = function (name) {
        document.body.classList.remove(name + 'Opened');
        var contentEl = document.querySelector('.content');
        var projectsEl = document.getElementById('projects');
        var sectionEl = document.querySelector('section.' + name);
        projectsEl.animate([
            { 'transform': "translate(0px, " + sectionEl.clientHeight + "px)" },
            { 'transform': "translate(0, 0)" }
        ], { duration: 200, fill: 'forwards', easing: "ease-out" });
        contentEl.style.marginBottom = '0px';
        document.body.classList.remove('static');
    };
    Site.prototype.route = function (path, force) {
        if (!force) {
            this.router.navigate(path);
            return Promise.resolve();
        }
        document.body.classList.add('reloading');
        return this.load(path).then(function () {
            path = path.split('?')[0];
            if (path == '/about') {
                AboutPage.load({ path: '/about', init: true });
                return;
            }
            else if (path == '/contact') {
                ContactPage.load({ path: '/contact', init: true });
                return;
            }
            return Promise.resolve(true);
        });
    };
    Site.prototype.load = function (path) {
        var _this = this;
        var url = path + (path.indexOf('?') > -1 ? '&' : '?') + 'partial=true';
        var mainEl = document.querySelector('main');
        return fetch(url, {
            credentials: 'include',
            headers: {
                'Accept': acceptHeader
            }
        }).then(function (response) {
            document.title = decodeURI(response.headers.get("X-Page-Title"));
            return response.text();
        }).then(function (html) {
            mainEl.innerHTML = html;
            _this._onDOMChange();
            return Promise.resolve(true);
        });
    };
    Site.prototype.onLoaded = function (context) {
        context.oldPath = this.path;
        this.path = context.path;
        window.scrollTo(0, 0);
        this._onDOMChange();
        if (!this.lazyLoader) {
            this.lazyLoader = new Carbon.LazyLoader();
        }
        this.lazyLoader.setup();
        Carbon.Reactive.trigger('routed', context);
    };
    Site.prototype._onDOMChange = function () {
        for (var _i = 0, _a = _.queryAll('[on-insert]'); _i < _a.length; _i++) {
            var el = _a[_i];
            Carbon.ActionKit.dispatch({
                type: 'insert',
                target: el
            });
            el.removeAttribute('on-insert');
        }
    };
    Site.prototype.isInit = function (context) {
        if (context.init) {
            this.onLoaded(context);
            return true;
        }
        return false;
    };
    return Site;
}());
var SiteActions = {
    setStyles: function (data) {
        var ss = document.getElementById('styles');
        var href = ss.getAttribute('href');
        var basePath = href.substring(0, href.indexOf('?') + 1);
        for (var key in data) {
            ss.dataset[key] = data[key];
        }
        var url = basePath + _.serialize(ss.dataset);
        ss.setAttribute('href', url);
        console.log(url);
    },
    updateBlock: function (data) {
        var block = SiteBlocks[data.name];
        block && block.update(data.data);
    }
};
var SiteBlocks = {
    siteTitle: {
        update: function (text) {
            var el = document.querySelector('h1');
            el.classList[text ? 'remove' : 'add']('hide');
            el.textContent = text || '';
        }
    },
    siteFooterContent: {
        update: function (text) {
            var el = document.querySelector('.footerBlurb p');
            el.innerHTML = text;
        }
    },
    brandingGlyph: {
        update: function (value) {
            var el = document.querySelector('carbon-glyph');
            el.innerHTML = "&#x" + value + ";";
        }
    },
    nav: {
        update: function (data) {
            var navEl = document.querySelector('nav');
            _.getHTML('/?partial=nav').then(function (html) {
                navEl.outerHTML = html;
            });
        }
    }
};
Carbon.controllers.set('form', {
    setup: function (e) {
        Carbon.Form.get(e.target);
    }
});
var site = new Site();
Carbon.ActionKit.observe('click');
var webp = new Image();
webp.onload = function () {
    acceptHeader = '*/*,image/webp';
};
webp.src = 'data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoBAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==';
