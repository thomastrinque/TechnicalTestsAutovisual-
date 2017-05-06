'use strict'

function getShortMessage (array)  {

	function filter (element) {
		return element.length < 50
	}

	return(array.filter(filter));
}
