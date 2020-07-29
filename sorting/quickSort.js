
const quickSort = (arr , left , right) => {
	if(left < right){
		pivote = partition(arr, left , right)

		quickSort(arr , left , pivote-1)
		quickSort(arr , pivote+1 , right)
		return arr
	} else {
		return arr;
	}
}

const partition = (arr , left , right) => {
	let pivote = right
	let i = left
	let j = left
	let temp = 0;
	while(j < right){
		if(arr[j] < arr[pivote]){
			temp = arr[j]
			arr[j] = arr[i]
			arr[i] = temp
			i++
		}
		j++
	}

	temp = arr[pivote]
	arr[pivote] = arr[i]
	arr[i] = temp
	return i
}