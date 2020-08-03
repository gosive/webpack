const selector = require('../../js/selector')
const page     = require('../page/page')

function mov(ev){

	select(ev)
	page.show(ev.target.getAttribute("data-page"))
	//console.log(ev.target.getAttribute("data-page"))
	
}

function select (ev){
	selector.siblingRemoveClass(ev.target, 'select')
	ev.target.classList.add('select')
	
}

module.exports = { 
	mov : mov 
}


