const selectionSort = arr => {
	if(arr === null || arr.length === 0){
		console.log("Please enter array to be sorted");
		return;
	}
	
	let temp = 0;
	for(let i = 0 ; i < arr.length-1 ; i++){
		let min = i;
		for (let j = i ; j < arr.length ; j++){
			if(arr[min] > arr[j]){
				min = j
			}
		}
		temp = arr[i];
		arr[i] = arr[min];
		arr[min] = temp;
	}

	return arr;
}