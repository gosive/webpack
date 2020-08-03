const {body} = require('../body/body')
const sideSheet = document.getElementById('sideSheet')

function show(){

    sideSheet.classList.toggle('sideSheet-show')
    body.classList.toggle('body-sideSheet')

}

function hide(){
    
    sideSheet.classList.toggle('sideSheet-show')
    body.classList.toggle('body-sideSheet')

    removeAnimation(()=>{
        body.classList.remove('body-sideSheet')
        sideSheet.classList.remove('sideSheet-show')
        sideSheet.classList.remove('sideSheet-hide')

    })

}

function removeAnimation(callback){
  setTimeout(()=>{ callback() }, 300)
}


module.exports = {
	show:show,
	hide:hide
}