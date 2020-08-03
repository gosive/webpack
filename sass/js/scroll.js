///////////////////////////////////
const scroll = document.addEventListener('scroll', function(ev){
	ev.stopPropagation();

    const classes = ev.target.className  

	//avoid error, run the code when the page is load first time
    if (classes == undefined) return 

    const spliter = classes.split(" ") //Get elem all class


    spliter.forEach((element)=>{//anlyce each class
      if(element.startsWith('Ls_')) { //Only Ls_ → are allowed
      	console.log('elemnent',element)
        let arr  = element.split('_')
        call(arr[1], arr[2], ev)
      }
    })

}, true);


function call(module, func, ev){
    
    switch (module){
        case 'page':  p_page(func, ev);   break; 
    }
}/*call*/

function p_page(func, ev){

var elem
    switch (func){ 

        case 'body':  //main pages on the body
        		elem = ev.target.parentNode.querySelector("#appbar")
       			pageShadow(ev, elem); 
        		break; 

        case 'fullCont':  //fullcont without tab  
        		elem = ev.target.parentNode.querySelector(".appbar")
       			pageShadow(ev, elem); 
        		break; 

        case 'fullContTab':  //fullcont with tab  
        		elem = ev.target.querySelector(".tab")
       			pageShadow(ev, elem); 
        		break; 
    }   

}/*p_page*/


function pageShadow(ev, elem){
	
	const scroll = ev.target.scrollTop

	if (ev.target.scrollTop == 0) {
		elem.classList.remove('bs-4')
		return
	}

	//the appbar already has the shadow?
	//only add the shadonw if the appbar dosen't have it
 	const hasShadow = elem.classList.contains('bs-4')

	if (ev.target.scrollTop > 0 && !hasShadow) {
		elem.classList.add('bs-4')
		return
	}

}/*pageShadow*/





module.exports = {scroll:scroll}