/*!
 * tinyjs-plugin-ninepatch
 * Description:Tinyjs 九宫格
 * Author: 清扬陌客
 * Version: v0.2.3
 * Github: https://github.com/qingyangmoke/tinyjs-plugin-ninepatch.git
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.NinePatch=e():(t.Tiny=t.Tiny||{},t.Tiny.NinePatch=e())}(this,function(){return function(t){function e(r){if(i[r])return i[r].exports;var n=i[r]={exports:{},id:r,loaded:!1};return t[r].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var i={};return e.m=t,e.c=i,e.p="/Users/song/Develop/github/tinyjs-plugin-ninepatch/dist",e(0)}([function(t,e,i){t.exports=i(1)},function(t,e,i){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Sprite=void 0;var n=i(2),a=r(n);e.Sprite=a.default},function(t,e){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),o=function(t){function e(t,n,a,o,u){i(this,e);var s=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return s._gridTexture=t,s._debugDraw=!1,s._textures=[],s._gridSprites=[],s._targetWidth=n||0,s._targetHeight=a||0,s._textureOrigFrame=new Tiny.Rectangle(0,0,s._gridTexture.width,s._gridTexture.height),s._scale9Grid=null,s._overlapPadding=u||0,s._inited=!1,s._init(),s.scale9Grid=o,s._gridTexture.baseTexture.hasLoaded?s._onGridTextureUpdate():s._gridTexture.once("update",s._onGridTextureUpdate,s),s}return n(e,t),a(e,[{key:"_onGridTextureUpdate",value:function(){this._update()}},{key:"_init",value:function(){if(!this._inited){this._inited=!0;for(var t=0;t<9;t++){var e=new Tiny.Texture(this._gridTexture,new Tiny.Rectangle(0,0,this._gridTexture.width,this._gridTexture.height),new Tiny.Rectangle(0,0,this._gridTexture.width,this._gridTexture.height),null,0);this._textures.push(e);var i=new Tiny.Sprite(e);i.visible=!1,this._gridSprites.push(i),this.addChild(i)}}}},{key:"resize",value:function(t,e){this._targetWidth=t,this._targetHeight=e,this._update(t,e)}},{key:"_update",value:function(){if(this._gridTexture){(this.width<this._gridTexture.width||this.height<this._gridTexture.height)&&console.warn("九宫格尺寸设置异常，尺寸不能小于素材尺寸");var t=Math.max(this.width,this._gridTexture.width),e=Math.max(this.height,this._gridTexture.height),i=this._scale9Grid,r=i[0],n=Math.max(0,i[2]),a=Math.max(0,this._gridTexture.width-r-n),o=i[1],u=Math.max(0,i[3]),s=Math.max(0,this._gridTexture.height-o-u),h=[r,n,a],d=[0,r,r+n],c=[o,u,s],l=[0,o,o+u],g=this.overlapPadding;console.log("overlapPadding:",g);for(var f=0;f<3;f++)for(var _=0;_<3;_++){var p=3*f+_,x=this._gridSprites[p],y=new Tiny.Rectangle(d[_],l[f],h[_],c[f]);if(y.width>0&&y.height>0){var v=0===_||2===_?h[_]:Math.max(0,t-h[0]-h[2]),T=0===f||2===f?c[f]:Math.max(0,e-c[0]-c[2]),b=0===_?0:1===_?h[0]:Math.max(0,t-h[2]),w=0===f?0:1===f?c[0]:Math.max(0,e-c[2]);v>0&&T>0?(this._textures[p].frame=y,x.anchor.set(0,0),x.x=b-_*g,x.y=w-f*g,x.alpha=this._debugDraw?.1+.05*p:1,x.width=v,x.height=T,x.visible=!0):x.visible=!1}else x.visible=!1}this.emit("resize")}}},{key:"debug",get:function(){return this._debugDraw},set:function(t){this._debugDraw=t,this._update()}},{key:"scale9Grid",get:function(){return this._scale9Grid},set:function(t){if(t){var e="string"==typeof t?t.split(","):t;if(4!==e.length)return void console.error("error scale9Grid format",t);e=e.map(function(t){return parseFloat(t)}),this._scale9Grid=e}else this._scale9Grid=[0,0,0,0];this._update()}},{key:"width",get:function(){return this._targetWidth||this._gridTexture.width},set:function(t){this._targetWidth=t,this._update()}},{key:"height",get:function(){return this._targetHeight||this._gridTexture.height},set:function(t){this._targetHeight=t,this._update()}},{key:"overlapPadding",get:function(){return this._overlapPadding},set:function(t){this._overlapPadding=+t||0,this._update()}}]),e}(Tiny.Sprite);e.default=o}])});