
const scrim         = document.getElementById('scrim')

function show(ev){

	const id = ev.target.getAttribute('data-backdrop')
	const elem = document.getElementById(id)

  	elem.classList.add('backdrop-show')
  	scrim.classList.add('scrim-show')
  	scrim.setAttribute('data-serving', 'backdrop')	
  	scrim.setAttribute('data-backdrop', id)

}

var id
var elem

function hide(ev){ //click  the close bottom


  elem = ev.target.parentNode
  elem.classList.add('backdrop-hide')
  scrim.classList.remove('scrim-show')
  scrim.setAttribute('data-serving', '')

	remove(()=>{
			elem.classList.remove('backdrop-hide');
			elem.classList.remove('backdrop-show');
	})
}


function hideScrim(ev){  //when the scrim is clicked
  

   id   =  ev.target.getAttribute("data-backdrop")  
   elem =  document.getElementById(id)

  elem.classList.add('backdrop-hide')
  scrim.classList.remove('scrim-show')


    remove(()=>{
        elem.classList.remove('backdrop-hide')
        elem.classList.remove('backdrop-show')
    })


}



function remove(callback){
	setTimeout(()=>{
		callback()
	}, 400)
}


module.exports = { 
	show: show,
	hide: hide, 
	hideScrim: hideScrim

}