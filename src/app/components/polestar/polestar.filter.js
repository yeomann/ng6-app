export default () => {
    return (data, input) => {
        let filtered = [];
        const inputMatch = new RegExp(input, 'i');
        if (data != undefined) {    	
	        for (let items of data) {
	        	let name = items.name;
	        	let country_severity = items.country_check_severity.toLowerCase().split('-');
	        	let country_severity_CHECK = country_severity.indexOf('unknown');
	        	// if used !== -1, because of 'minus', it'll Only show unkown results.
	        	let countrysevCondition =  country_severity_CHECK !== 1 ? items.country_check_severity : void 0;
	        	const condition = inputMatch.test(name) || inputMatch.test(countrysevCondition);
	            if (condition) {
	                filtered.push(items);
	            }
	        }
        }
        return filtered;
    }
}

