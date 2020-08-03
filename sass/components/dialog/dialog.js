
const dialog      = document.getElementById('dialog')
const scrimDialog = document.getElementById('scrim_dialog')

function show(){

  	dialog.classList.add('dialog-show')
    scrimDialog.classList.add('scrim-show')  	

}

function hide(){

  dialog.classList.add('dialog-hide');
  scrimDialog.classList.remove('scrim-show')

	remove(()=>{
			dialog.classList.remove('dialog-hide');
			dialog.classList.remove('dialog-show');
	})

}


function remove(callback){
	setTimeout(()=>{
		callback()
	}, 300)
}


module.exports = { 
	show: show,
	hide: hide

}