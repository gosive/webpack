
//find sibling after or before

function siblingFindTag(elem, attribute){ 
	//console.log('on findSibling', attribute)
	const allSibling = elem.parentNode.children //get all the siblings	
	attribute = attribute.toUpperCase() 
	for (let item of allSibling) {
   		 if(item.tagName === attribute){
   		 		return item;
   		 }
	}	
	
}
function siblingFindClass(elem, attribute){
	const allSibling = elem.parentNode.children //get all the siblings	
	for (let item of allSibling) {
  		if(item.classList.contains(attribute) && item != elem){
  			return item
  		} 
	}
}


function siblingRemoveClass(elem, attribute){ 
	const allSibling = elem.parentNode.children //get all the siblings	
	for (let item of allSibling) {
		item.classList.remove(attribute)
	}
	return		
}




module.exports = {
	siblingFindTag     :siblingFindTag, 
	siblingFindClass   :siblingFindClass, 
	siblingRemoveClass :siblingRemoveClass
}

	// if(attribute[0] === '.' || attribute[0] === "#"){
	// 	for (let item of allSibling) {
	//    		 if(item.querySelector(attribute) === attribute){
	//    		 		return item;
	//    		 }
	// 	}

	// }else{}
		//tag names have to be on uppercase