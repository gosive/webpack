const selector = require('../../js/selector')
const bodyBar = document.getElementById('bodyBar')


function mov(ev){
	select(ev)
}

function select (ev){
	const elem = ev.target
	if (elem.classList.contains('select')){
		elem.classList.remove('select')
		return
	}
	selector.siblingRemoveClass(elem, 'select')
	elem.classList.toggle('select')
	
}

function deselect (){
	selector.siblingRemoveClass(bodyBar.firstElementChild, 'select')
}

module.exports = { 
	mov : mov, 
	deselect :deselect 
}

