(function(){HashNav.implement({$_hidden_DOM_loaded:!0});Element.implement({observe:function(a,b,c,d){var e=new HashNav,f=this.getProperty("id")||this.getProperty("class")||this.getProperty("name")||this.get("tag");d===!0&&(d=this);this.store(e.options.externalConstants[0],f);e.registerObserver(f,a,b,c,this,d);return this},observing:function(){var a=new HashNav;return a.registeredObserver(this.retrieve(a.options.externalConstants[0]))},unobserve:function(){var a=new HashNav,b=a.options.externalConstants[0],
c=this.retrieve(b);c&&a.unregisterObserver(c);this.eliminate(b);return this}})})();