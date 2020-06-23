
const mergeSort = arr => {
	if(arr.length > 1){
		let size = Math.floor(arr.length/2);
		let left = [];
		let right = [];
		
		for(let i = 0 ; i < size ; i++){
			left[i] = arr[i];
		}
		for(let i = size ; i < arr.length ; i++){
			right[i-size] = arr[i];	
		}
		return merge(mergeSort(left) , mergeSort(right));
		 
	} else {
		return arr;
	}
}

const merge = (left , right) => {
	let i = 0
	let j = 0
	let k = 0
	let returnArr = [];
	while(i < left.length && j < right.length){
		if(left[i] <= right[j]){
			returnArr[k] = left[i];
			i++;
		} else {
			returnArr[k] = right[j];
			j++ ;
		}
		k++;
	}

	while(i < left.length){
		returnArr[k] = left[i];
		i++; k++;
	}

	while(j < right.length){
		returnArr[k] = right[j];
		k++ ; j++;
	}
	return returnArr;
}