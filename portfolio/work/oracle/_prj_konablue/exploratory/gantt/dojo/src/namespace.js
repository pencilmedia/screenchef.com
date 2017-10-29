/*
	Copyright (c) 2004-2006, The Dojo Foundation
	All Rights Reserved.

	Licensed under the Academic Free License version 2.1 or above OR the
	modified BSD license. For more information on Dojo licensing, see:

		http://dojotoolkit.org/community/licensing.shtml
*/

//Every namespace that is defined using the dojo.defineNamespace method has one of these Namespace objects created.
//It stores the fully qualified namespace name, it's location relative to the dojo root, the short namespace name, and a 
//resolver function that maps a widget's short name to it's fully qualified name
dojo.Namespace = function(objRoot, location, nsPrefix, resolver){
	this.root = objRoot;
	this.location = location;
	this.nsPrefix = nsPrefix;
	this.resolver = resolver;
	
	dojo.setModulePrefix(nsPrefix, location);
};

dojo.Namespace.prototype.loaded = [];
dojo.Namespace.prototype.load = function(name, domain){
	if(this.resolver){
		var fullName = this.resolver(name,domain);
		//only load a widget once. This is a quicker check than dojo.require does
		if(fullName && !this.loaded[fullName]){
			//workaround so we don't break the build system
			//TODO: how do we build in these deps. into the build system?
			var req = dojo.require;
			req(fullName);
			this.loaded[fullName] = "true";
 		}
		if(this.loaded[fullName]){
			return true;
		}
	}
	return false;
};



//list of all defined namespaces
djConfig.namespaces = [];
//list of all namespaces that were needed, but didn't have the required file in the dojo/src/namespaces folder. 
//This array ensures that a namespace will only be looked for once, rather than repeatedly trying to load the namespace descriptor file
djConfig.failedNamespaces = [];

//This function is used to define a new namespace. 
//objRoot is the fully qualified namespace name
//location is the file system location relative to the dojo root, e.g. "../myNewNamespace"
//nsPrefix is the short name of the namespace. e.g. for the namespace " my.new.namespace", the nsPrefix could be "mnn"
//resolver is a function that takes two parameters:
//    1. a short name of a widget and returns it's fully qualified name. For example if passed "checkbox", it could return " dojo.widget.CheckBox"
//    2. the widget domain, e.g. "html", "svg", "vml" etc.  This is optional, and depends on what the particular widget set supports. Dojo defaults to "html" 
//   resolver is optional, as it only applies to widgets, and a namespace may have no widgets
//widgetPackage the name of a widget package.  e.g. if you had a namespace with nsPrefix = "mnn", and your widgets were in a 
//   "widget" folder in that namespace, your widget package would be "mnn.widget".  This is optional, like the resolver
dojo.defineNamespace = function(objRoot, location, nsPrefix, resolver /*optional*/, widgetPackage /*optional*/){
//    dojo.debug("dojo.defineNamespace('"+objRoot+"','"+location+"','"+nsPrefix+"',resolver) called");
	if(djConfig.namespaces[objRoot]){
		return;
	}
	var ns = new dojo.Namespace(objRoot, location, nsPrefix, resolver);
	djConfig.namespaces[objRoot] = ns;
	if(nsPrefix){
		djConfig.namespaces[nsPrefix] = ns;
	}
	if(widgetPackage){
		dojo.widget.manager.registerWidgetPackage(widgetPackage);
	}
};

//This returns a namespace with the given short name.  If the namespace has not been loaded already, it tries to load it. 
dojo.getNamespace = function(nsPrefix){
	if(!djConfig.namespaces[nsPrefix] && !djConfig.failedNamespaces[nsPrefix]){
		var req = dojo.require;
		//TODO: another dynamic reference.  Need to track in builds?
		req("dojo.namespaces."+nsPrefix, false, true); 
		if(!djConfig.namespaces[nsPrefix]){
			djConfig.failedNamespaces[nsPrefix] = true; //only look for a namespace once
		}
	}
	
	return djConfig.namespaces[nsPrefix];
};
