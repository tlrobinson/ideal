(function(){
	"use strict";
	if (typeof(module) != "undefined")
	{
		var ideal = module.parent.exports;
	}
	
	ideal.Map = ideal.Proto.clone().newSlots({
		type: "ideal.Map",
		jsMap: null
	}).setSlots({
		withJsMap: function(jsMap)
		{
			return this.clone().setJsMap(jsMap)
		},

		keys: function()
		{
			return Object.keys(this.jsMap());
		},

		values: function()
		{
			var self = this;
			return this.keys().map(function(k){
				return self.jsMap()[k];
			});
		},

		at: function(k)
		{
			return this.jsMap()[k];
		},

		valuesSortedByKeys: function()
		{
			var self = this;
			return this.keys().sort().map(function(k){
				return self.at(k);
			});
		},

		forEach: function(fn)
		{
			var self = this;
			this.keys().forEach(function(k){
				fn(k, self._jsMap[k]);
			});

			return this;
		}
	});
})();