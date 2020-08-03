
const textfield = require('../components/textfield/textfield')
const dt    = require('../components/dt/dt')


// onkeyup onkeypress
//change keyup paste keydown > 
const keypress = document.onkeydown = function (ev) {
    ev = ev || window.event;
  console.log('call keydowon')
    const classes = ev.target.className
    if (classes === "" ) {return} ; //avoid error, empty elements
    const spliter = classes.split(" ")      

    spliter.forEach((element)=>{
      if(element.startsWith('Lk_')) { //only 
        call(element, ev)
      }
    })

};

const paste = document.paste = function (ev) {
    ev = ev || window.event;

    const classes = ev.target.className
    if (classes === "" ) {return} ; //avoid error, empty elements
    const spliter = classes.split(" ")      

    spliter.forEach((element)=>{
      if(element.startsWith('Lk_')) { //only 
        call(element, ev)
      }
    })

};


function call(func, ev){
  console.log('call on function')


	switch (func){
		case 'Lk_textfield':        textfield.typing(ev);     break;
    case 'Lk_dtSearch':     dt.typing(ev);     break;

	}
}


module.exports = {
	keypress:keypress, 
	paste: paste
}

// const change = document.onkeydown = function (ev) {
//     ev = ev || window.event;
//      input.typing(ev)

// };
