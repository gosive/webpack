const drawer = require('./drawer')
const scrim  = require('../scrim/scrim')

var startX = 0
var distX = 0

// console.log ('drawer.elem', drawer.elem)
function init (ev, touch){
  switch(touch){
         case "touchstart": touchstart(ev); break;
         case "touchmove" : touchmove(ev);  break;
         case "touchend"  : touchend(ev);   break;
  }
}

function touchstart(ev){
   //console.log('on',  drawer.drawer_touchstart)
     
   // get x position of touch point relative to left edge of browser
   startX = parseInt(ev.changedTouches[0].clientX) 
   drawer.elem.classList.remove("drawer-anime")  
}

function touchmove(ev){
   // console.log('on', 'drawer_touchmove')
     distX = parseInt(ev.changedTouches[0].clientX) - startX
     //var mov = (parseInt((drawer.style.marginLeft).replace(/px/,""))+distX)+"px"

     if(distX <= 0){
        drawer.elem.setAttribute("style", `left: ${distX}px`)
     }
}

function touchend(ev){
      
      drawer.elem.classList.add("drawer-anime") //

      if( parseInt((drawer.elem.style.left).replace(/px/,"")) < -(drawer.elem.clientWidth/4)){
        scrim.hide('drawer', true)
        return

      }else{
        drawer.elem.setAttribute("style", `left: 0px`)
      }

}       


module.exports = { init:init } 