// optimized bubble sort
const bubbleSort = arr => {
	if(arr === null || arr.length === 0){
		console.log("Please enter array to be sorted");
		return;
	}
	let sorted = true;
	for(let i = 0 ; i < arr.length-1 ; i++){
		for(let j = 0 ; j < arr.length ; j++){
			if(arr[j] > arr[j+1]){
				sorted = false;
				arr[j] = arr[j] + arr[j+1];
				arr[j+1] = arr[j] - arr[j+1];
				arr[j] = arr[j] - arr[j+1]; 	
			}
		}
		if (sorted) break;
	}
	return arr;
}