const {screenWeight} = require('../../js/graphic')
const scrim       	 = require('../scrim/scrim')

function typing(ev){

	const elem    = ev.target
	const parent  = elem.parentElement

	setTimeout(()=>{
		//input empty or filled
		elem.value === '' ? 
		parent.classList.remove('search-filled') : 
		parent.classList.add('search-filled')

	},100)
}


function clear(ev){
	const  parent = ev.target.parentElement
	const  elem  = parent.querySelector('INPUT')

	elem.value = ''
	elem.focus() //keep input focus
	parent.classList.remove('search-filled') 
}


//Handle click the arrow on the th, down, up, and remove
function th(ev){

	const elem = ev.target
	if (elem.classList.contains('selected') ){
		elem.classList.remove('selected') 
		elem.classList.add('reverse') 
		return;
	}
	if (elem.classList.contains('reverse') ){
		elem.classList.remove('reverse') 
		return;
	}

	//remove select or rever from all the siblings
	const allSibling = elem.parentNode.children //get all the siblings	
	for (let item of allSibling) {
		item.classList.remove('reverse')
		item.classList.remove('selected') 	
	}

	elem.classList.add('selected') 
}

function checkbox(ev){
	const elem       = ev.target
	const table      = elem.closest('TABLE')
	const status     = elem.checked

	//find the first td[INPUT] → Check or uncheck
    for (let i = 0; i < table.rows.length; i++) {
       table.rows[i].cells[0].getElementsByTagName('INPUT')[0].checked = status 
	}
}

function checkboxTr(ev){
	const tr = ev.target
	console.log('trxx', tr)
}

function td(ev){
//console.log('function td(ev)', ev)

	const tr = ev.target

	scrim.show(ev, 'fullCont' )

	// if (screenWeight > 900){
	// 	console.log('on PC', screenWeight)

	// 	return
	// }else{
	// 	scrim.show(false, 'fullCont')
	// 	console.log('on Mobile', screenWeight)


	// }

}

function searching(ev){
	const elem        = ev.target
	const header      = elem.parentElement.parentElement
	if (header.classList.contains('searching')){
		header.classList.remove('searching')
	}else{
		header.classList.add('searching')
		header.querySelector('INPUT').focus()
	}
}


function test(ev){
	console.log('on test function dt', ev.target)
}

module.exports = {
	typing: typing,
	clear: clear, 
	th: th, 
	td:td, 
	checkbox: checkbox, 
	searching: searching,
	checkboxTr,checkboxTr,
	test, test
}
