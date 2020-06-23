const insertionSort = arr => {
	if(arr === null || arr.length === 0){
		console.log("Please enter array to be sorted");
		return;
	}
	for(let i = 1 ; i < arr.length ; i++){
		let hole = i;
		let curr = arr[i];
		while(hole > 0 && arr[hole-1] > curr){
			arr[hole] = arr[hole-1]
			hole -= 1;
		}
		arr[hole] = curr;
	}
	return arr;
}