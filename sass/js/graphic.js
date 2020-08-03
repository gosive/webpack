

const screenHeight = window.innerHeight 
const screenWeight = window.innerWidth

function changeSVG(parent, icon){
	parent.querySelector('USE').setAttribute("xlink:href", `./public/css/svg.svg#${icon}`);

}

module.exports = {
	screenHeight:screenHeight, 
	screenWeight:screenWeight,
	changeSVG: changeSVG
}