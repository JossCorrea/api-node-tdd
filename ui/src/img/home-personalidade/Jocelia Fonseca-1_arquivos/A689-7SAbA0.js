if (self.CavalryLogger) { CavalryLogger.start_js(["yHk4m"]); }

__d("XPlaceClaimLogEntryPointController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/place_claim/log_entry_point/",{})}),null);
__d("PlaceClaimLogEntryPoint",["AsyncRequest","Event","XPlaceClaimLogEntryPointController"],(function(a,b,c,d,e,f){a={init:function(a,c,d){var e=this;b("Event").listen(a,"click",function(){e.sendLoggingRequest(c,d)})},initMenu:function(a,b,c,d){var e=this;a.subscribe("itemclick",function(a,f){f.item.getValue()==b&&e.sendLoggingRequest(c,d)})},sendLoggingRequest:function(a,c){var d=b("XPlaceClaimLogEntryPointController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(d).setData({pageid:a,pageevent:c}).setMethod("POST").send()}};e.exports=a}),null);
__d("SaveState",[],(function(a,b,c,d,e,f){a=Object.freeze({SAVING:"saving",SAVED:"saved",UNSAVING:"unsaving",UNSAVED:"unsaved"});e.exports=a}),null);
__d("SaveStateHandler",["Run","SaveState"],(function(a,b,c,d,e,f){var g=null;a=function(){"use strict";function a(){this.$1={},this.$2={},b("Run").onLeave(function(){g=null})}var c=a.prototype;c.addListener=function(a,b){this.$1[a]||(this.$1[a]=[]),this.$1[a].push(b)};c.setState=function(a,b){a.forEach(function(a){this.$2[a]=b;if(!this.$1[a])return;a=this.$1[a];a.forEach(function(a){try{a.call(window,b)}catch(a){}})},this)};c.getState=function(a){return this.$2[a]};a.$3=function(){g||(g=new a());return g};a.listen=function(a,b){this.$3().addListener(a,b)};a.getState=function(a){this.$3().getState(a)};a.saving=function(a){this.$3().setState(a,b("SaveState").SAVING)};a.saved=function(a){this.$3().setState(a,b("SaveState").SAVED)};a.unsaving=function(a){this.$3().setState(a,b("SaveState").UNSAVING)};a.unsaved=function(a){this.$3().setState(a,b("SaveState").UNSAVED)};a.isSaveAction=function(a){a=this.$3().getState(a);return a==b("SaveState").UNSAVED||a==b("SaveState").UNSAVING};return a}();e.exports=a}),null);
__d("CurationToggleButton",["cx","CSS","Event","SaveState","SaveStateHandler","tidyEvent"],(function(a,b,c,d,e,f,g){var h="_vu",i="_vv";a=function(){"use strict";function a(a,c,d,e,f){this.$1=!1;this.$2=f;b("tidyEvent")([(f=b("Event")).listen(c,"click",this.setSaving.bind(this)),f.listen(c,"error",this.setUnsaved.bind(this)),f.listen(d,"click",this.setUnsaving.bind(this)),f.listen(d,"error",this.setSaved.bind(this))]);b("SaveStateHandler").listen(e,function(e){switch(e){case b("SaveState").SAVING:b("CSS").addClass(a,h);b("CSS").addClass(a,i);d.setAttribute("rel","");this.$1=!0;break;case b("SaveState").SAVED:b("CSS").addClass(a,h);b("CSS").removeClass(a,i);d.setAttribute("rel","async-post");this.$1=!1;break;case b("SaveState").UNSAVING:b("CSS").removeClass(a,h);b("CSS").addClass(a,i);c.setAttribute("rel","");this.$1=!0;break;case b("SaveState").UNSAVED:b("CSS").removeClass(a,h);b("CSS").removeClass(a,i);c.setAttribute("rel","async-post");this.$1=!1;break}}.bind(this))}var c=a.prototype;c.setSaving=function(){this.$1||b("SaveStateHandler").saving(this.$2)};c.setUnsaving=function(){this.$1||b("SaveStateHandler").unsaving(this.$2)};c.setSaved=function(){b("SaveStateHandler").saved(this.$2)};c.setUnsaved=function(){b("SaveStateHandler").unsaved(this.$2)};return a}();e.exports=a}),null);
__d("VideoChainingToken",["Base64"],(function(a,b,c,d,e,f){a=function(){"use strict";function a(a){this.$1=a}a.encode=function(c){return new a(b("Base64").encode(JSON.stringify(c)))};var c=a.prototype;c.decode=function(){return JSON.parse(b("Base64").decode(this.$1))};return a}();e.exports=a}),null);