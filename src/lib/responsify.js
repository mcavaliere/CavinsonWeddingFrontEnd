(function ( $ ) {
  $.fn.responsify = function() {
    return this.each(function() {
      var owidth, oheight,
          twidth, theight,
          fx1, fy1, fx2, fy2,
          width, height, top, left,
          $this = $(this);

      owidth = $this.width();
      oheight = $this.height();
      twidth = $this.parent().width();
      theight = $this.parent().height();
      fx1 = Number($this.attr('data-focus-left'));
      fy1 = Number($this.attr('data-focus-top'));
      fx2 = Number($this.attr('data-focus-right'));
      fy2 = Number($this.attr('data-focus-bottom'));
      if( owidth/oheight > twidth/theight ) {
        var fwidth = (fx2-fx1) * owidth;
        if ( fwidth/oheight > twidth/theight ) {
          height = oheight*twidth/fwidth;
          width = owidth*twidth/fwidth;
          left = -fx1*width;
          top = (theight-height)/2;
        } else {
          height = theight;
          width = theight*owidth/oheight;
          left = twidth/2 - (fx1 + fx2)*width/2;
          // if left > 0, it will leave blank on the left, so set it to 0;
          left = left>0?0:left;
          // if width - left < twidth, it will leave blank on the right, so set left = width - twidth
          left = (twidth - left - width)>0?(twidth-width):left;
          top = 0;
        }
      }
      else {
        var fheight = (fy2-fy1) * oheight;
        if ( fheight/owidth > theight/twidth ) {
            // MC - original code below. Does not cover all bases since images smaller than the container
            //  will have whitespace around them. Removing this in favor of our solution further below.
            //   width = owidth*theight/fheight;
            //   height = oheight*theight/fheight;
            //   top = -fy1*height;
            //   left = (twidth-width)/2;

          // MC - our addition. When the container is bigger than the original image, stretch it out.
          width = twidth;
          height = oheight*twidth/owidth;
          top = 0
          left = 0;

        } else {
          width = twidth;
          height = twidth*oheight/owidth;
          top = theight/2 - (fy1 + fy2)*height/2;
          // if top > 0, it will leave blank on the top, so set it to 0;
          top = top>0?0:top;
          // if height - top < theight, it will leave blank on the bottom, so set top = height - theight
          top = (theight - top - height)>0?(theight-height):top;
          left = 0;
        }
      }
      $this.parent().css({
        "overflow": "hidden"
      })
      $this.css({
        "position": "relative",
        "height": height,
        "width": width,
        "left": left,
        "top": top
      })
    });
  };
}( jQuery ));
