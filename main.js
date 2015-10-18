var ctx;
var canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');
var Vue = require("vue");
var img = new Image();
var tategaki = require("./lib/tategaki-canvas.js");

var app = new Vue({
	el: "main",
	data: {
		text: "「『日本語縦書き』のデモです。どうでしょう〜」"
	},
	methods: {
		redraw: function(){
			var fontsize = 14;
			ctx.clearRect(0, 0, 300, 800);
			for(var i = 0; i < 8; i++){
				tategaki(ctx, this.text, 300 - (fontsize * i) * 2 - i * 5, 0, fontsize  + i * 2);
			}
		}
	},
	ready: function(){
		var self = this;
		var font = new FontFace("newfont", "url(07YasashisaAntique.otf)", {});
		font.load().then(function (loadedFace) {
			setTimeout(function(){
				document.fonts.add(loadedFace);
				self.redraw();
			}, 1000);
		});
	}
	
});

