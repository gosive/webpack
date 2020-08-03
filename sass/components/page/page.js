const allPage = document.getElementsByClassName('page')
const appbar  = document.getElementById('appbar')

function show(id){

	const elem = document.getElementById(id)

	//make all page to 56px, when you move a page

	for (let item of allPage  ) {
		appbar.style.top = '0px'
		item.style.top   = '56px'

		item.classList.remove('page-hide')
		item.classList.remove('page-show')
	
	}

	elem.classList.add('page-show')

	hide()
	

}	


function hide(){
	setTimeout(()=>{
		for (let item of allPage) {
			item.classList.remove('page-hide')
		}
	}, 300)
}






module.exports = {
	show: show
}