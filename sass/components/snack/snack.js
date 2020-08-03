const   snack = document.getElementById('snack')

function show(){

  	snack.classList.add('snack-show')

	remove(()=>{
		snack.classList.add('snack-hide');
		setTimeout(()=>{
			snack.classList.remove('snack-hide');
			snack.classList.remove('snack-show');

		}, 1000)
	})

}


function hide(){
			snack.classList.remove('snack-hide');
			snack.classList.remove('snack-show');

}


function remove(callback){
	setTimeout(()=>{
		callback()
	}, 5000)
}


module.exports = { show: show, hide:hide}