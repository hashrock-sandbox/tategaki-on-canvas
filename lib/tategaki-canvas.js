module.exports = function(ctx, text, x, y, px){
	ctx.font = px + "px 'newfont'";
	for(var i = 0; i < text.length; i++){
		ctx.save();
		ctx.translate(x, y + px * i);
		ctx.rotate(Math.PI / 2);
		ctx.translate(2, -px - 3);
		ctx.fillText(text[i], 0, px);
		ctx.restore();
	}
}

