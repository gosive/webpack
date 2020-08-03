
const selector = require('../../js/selector')
const tabObj   = require('./tabObj').inf

//when user click one tab
function mov(ev){
	//tabMovPage(ev)
    
	tabObj.initClick(ev)//initClick, get actual tabbar

	//find child postion to mov the page
	const position = Array.prototype.indexOf.call(tabObj.tabBar.children, ev.target)
	//move page
	//debugger
	tabObj.tabPage.setAttribute('style', `left:-${position*tabObj.screenWidth}px`)

	//move the Indicator
	const mov  = parseInt(ev.target.getBoundingClientRect().x)
	
	tabObj.indicator.setAttribute("style", `left: ${(tabObj.tabBar.offsetWidth/(tabObj.tabBar.childElementCount-1))*position}px`)	
	//tabInf.indicator.setAttribute("style", `left: ${(ev.target.offsetWidth)*position}px`)	

	//save the new position from tab, allow tab and touch work togethers. 
	tabObj.tabLeft = (position*tabObj.screenWidth*-1)
	select(ev.target, position)


}

//remove the select from all tab sibling
function select(tabDiv, num){

	selector.siblingRemoveClass(tabDiv, 'select')
	var i = 0

	//select the right tab
	for (let item of tabDiv.parentElement.children) {
		if (i === num){
			item.classList.add('select')
			return
		}

		i++
	}	

}

module.exports = {
	mov:mov, 
	select: select
}



