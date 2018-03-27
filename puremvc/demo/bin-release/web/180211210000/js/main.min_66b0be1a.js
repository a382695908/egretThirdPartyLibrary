var __reflect=this&&this.__reflect||function(e,t,r){e.__class__=t,r?r.push(t):r=[t],e.__types__=e.__types__?r.concat(e.__types__):r},__extends=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);r.prototype=t.prototype,e.prototype=new r},__awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(i,o){function a(e){try{c(n.next(e))}catch(t){o(t)}}function s(e){try{c(n["throw"](e))}catch(t){o(t)}}function c(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(a,s)}c((n=n.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function r(e){return function(t){return n([e,t])}}function n(r){if(i)throw new TypeError("Generator is already executing.");for(;c;)try{if(i=1,o&&(a=o[2&r[0]?"return":r[0]?"throw":"next"])&&!(a=a.call(o,r[1])).done)return a;switch(o=0,a&&(r=[0,a.value]),r[0]){case 0:case 1:a=r;break;case 4:return c.label++,{value:r[1],done:!1};case 5:c.label++,o=r[1],r=[0];continue;case 7:r=c.ops.pop(),c.trys.pop();continue;default:if(a=c.trys,!(a=a.length>0&&a[a.length-1])&&(6===r[0]||2===r[0])){c=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){c.label=r[1];break}if(6===r[0]&&c.label<a[1]){c.label=a[1],a=r;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(r);break}a[2]&&c.ops.pop(),c.trys.pop();continue}r=t.call(e,c)}catch(n){r=[6,n],o=0}finally{i=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}var i,o,a,s,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:r(0),"throw":r(1),"return":r(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},AssetAdapter=function(){function e(){}return e.prototype.getAsset=function(e,t,r){function n(n){t.call(r,n,e)}if(RES.hasRes(e)){var i=RES.getRes(e);i?n(i):RES.getResAsync(e,n,this)}else RES.getResByUrl(e,n,this,RES.ResourceItem.TYPE_IMAGE)},e}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var LoadingUI=function(e){function t(){var t=e.call(this)||this;return t.createView(),t}return __extends(t,e),t.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},t.prototype.onProgress=function(e,t){this.textField.text="Loading..."+e+"/"+t},t}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Main=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.createChildren=function(){e.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(e){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var t=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",t),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(e){console.log(e)})},t.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(r){switch(r.label){case 0:return[4,this.loadResource()];case 1:return r.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 2:return e=r.sent(),this.startAnimation(e),[4,platform.login()];case 3:return r.sent(),[4,platform.getUserInfo()];case 4:return t=r.sent(),console.log(t),[2]}})})},t.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(r){switch(r.label){case 0:return r.trys.push([0,4,,5]),e=new LoadingUI,this.stage.addChild(e),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return r.sent(),[4,this.loadTheme()];case 2:return r.sent(),[4,RES.loadGroup("preload",0,e)];case 3:return r.sent(),this.stage.removeChild(e),[3,5];case 4:return t=r.sent(),console.error(t),[3,5];case 5:return[2]}})})},t.prototype.loadTheme=function(){var e=this;return new Promise(function(t,r){var n=new eui.Theme("resource/default.thm.json",e.stage);n.addEventListener(eui.UIEvent.COMPLETE,function(){t()},e)})},t.prototype.createGameScene=function(){var e=this.createBitmapByName("bg_jpg");this.addChild(e);var t=this.stage.stageWidth,r=this.stage.stageHeight;e.width=t,e.height=r;var n=new egret.Shape;n.graphics.beginFill(0,.5),n.graphics.drawRect(0,0,t,172),n.graphics.endFill(),n.y=33,this.addChild(n);var i=this.createBitmapByName("egret_icon_png");this.addChild(i),i.x=26,i.y=33;var o=new egret.Shape;o.graphics.lineStyle(2,16777215),o.graphics.moveTo(0,0),o.graphics.lineTo(0,117),o.graphics.endFill(),o.x=172,o.y=61,this.addChild(o);var a=new egret.TextField;a.textColor=16777215,a.width=t-172,a.textAlign="center",a.text="Hello Egret",a.size=24,a.x=172,a.y=80,this.addChild(a);var s=new egret.TextField;this.addChild(s),s.alpha=0,s.width=t-172,s.textAlign=egret.HorizontalAlign.CENTER,s.size=24,s.textColor=16777215,s.x=172,s.y=135,this.textfield=s;var c=new eui.Button;c.label="Click!",c.horizontalCenter=0,c.verticalCenter=0,this.addChild(c),c.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onButtonClick,this),console.log(puremvc.Facade.SINGLETON_MSG)},t.prototype.createBitmapByName=function(e){var t=new egret.Bitmap,r=RES.getRes(e);return t.texture=r,t},t.prototype.startAnimation=function(e){var t=this,r=new egret.HtmlTextParser,n=e.map(function(e){return r.parse(e)}),i=this.textfield,o=-1,a=function(){o++,o>=n.length&&(o=0);var e=n[o];i.textFlow=e;var r=egret.Tween.get(i);r.to({alpha:1},200),r.wait(2e3),r.to({alpha:0},200),r.call(a,t)};a()},t.prototype.onButtonClick=function(e){var t=new eui.Panel;t.title="Title",t.horizontalCenter=0,t.verticalCenter=0,this.addChild(t)},t}(eui.UILayer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function e(){}return e.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,{nickName:"username"}]})})},e.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var ThemeAdapter=function(){function e(){}return e.prototype.getTheme=function(e,t,r,n){function i(e){t.call(n,e)}function o(t){t.resItem.url==e&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),r.call(n))}"undefined"!=typeof generateEUI?egret.callLater(function(){t.call(n,generateEUI)},this):(RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),RES.getResByUrl(e,i,this,RES.ResourceItem.TYPE_TEXT))},e}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);