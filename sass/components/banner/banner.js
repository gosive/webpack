
const banner = document.getElementById('banner')
const page   = document.getElementById('page-test-1')

function show(ev){

  	banner.classList.add('banner-show')
  	page.classList.add('page-banner')
  	
}

function hide(ev){

  	banner.classList.add('banner-hide')

	remove(()=>{
			banner.classList.remove('banner-hide');
			banner.classList.remove('banner-show');
			banner.style.display = "none"
	})

}

function remove(callback){
	setTimeout(()=>{
		callback()
	}, 350)
}



module.exports = {
	show:show, 
	hide:hide
}