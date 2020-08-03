

function showSecond(ev){
    
    ev.target.parentNode.parentNode.classList.add('appbar-show-second')

}



function hideSecond(ev) {
    ev.target.parentNode.parentNode.classList.remove('appbar-show-second')

}

function removeAnimation(callback){
  setTimeout(()=>{ callback() }, 700)
}


module.exports = {
    showSecond:showSecond, 
    hideSecond:hideSecond, 
}


