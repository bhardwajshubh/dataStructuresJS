const Node = function (){
	this.data = null
	this.left = null
	this.right = null
} 

const insertElement = (data , root) => {
	newNode = new Node();
	newNode.data = data;
	if(root === null){
		root = newNode;
		return root;
	}
	let temp = root;
	while(true){
		if(data < temp.data){
			if(temp.left !== null){
				temp = temp.left;
				continue;
			}
			temp.left = newNode;
			return root;
		}

		if(data >= temp.data){
			if(temp.right !== null){
				temp = temp.right;
				continue;
			}
			temp.right = newNode;
			return root;
		}
	}
}

const insertElementRecursive = (data , root) => {
	if(root === null){
		newNode = new Node();
		newNode.data = data;
		root = newNode;
		return root;
	}
	
	if(data < root.data){
		if(root.left === null)
			root.left = insertElementRecursive(data , root.left);
		else insertElementRecursive(data , root.left);
	}

	if(data >= root.data){
		if(root.right ===null)
			root.right = insertElementRecursive(data , root.right);
		else insertElementRecursive(data , root.right);
	}
	return root;
}

const treeTraversalBFS = root => {
	if(root === null ){
		console.log("Tree is empty");
		return;
	}
	const queue = [];
	queue.push(root);
	while(queue.length !== 0){
		if(queue[0].left !== null)
			queue.push(queue[0].left);

		if(queue[0].right !== null)
			queue.push(queue[0].right);

		console.log(queue[0].data);
		queue.shift();
	}
}

const findTheLargestElement = root => {
	if(root === null){
		console.log("Empty tree");
		return null;
	}
	let temp = root;
	while(temp.right !== null){
		temp = temp.right;
	}
	return temp.data;
}

const findTheSmallestElement = root => {
	if(root === null){
		console.log("Empty tree");
		return null;
	}
	let temp = root;
	while(temp.left !== null){
		temp = temp.left;
	}
	return temp.data;
}

const dfsInorderTraversal = root => {
	if(root === null){
		return;
	}

	dfsInorderTraversal(root.left);

	console.log(root.data);

	dfsInorderTraversal(root.right);

}

const dfsPreorderTraversal = root => {
	if(root === null){
		return;
	}

	console.log(root.data);

	dfsPreorderTraversal(root.left);

	dfsPreorderTraversal(root.right);

}

const dfsPostorderTraversal = root => {
	if(root === null){
		return;
	}

	dfsPostorderTraversal(root.left);

	dfsPostorderTraversal(root.right);

	console.log(root.data);
}


// delete a node which contains the given data
const deleteANode = (data , root) => {
	if(root === null) {
		console.log("Empty tree")
		return;
	}

	let temp = root;
	let prev = root;

	while(data !== temp.data){
		if(data < temp.data){
			if(temp.left === null){
				console.log("No such element found");
				return -1;
			}
			prev = temp;
			temp = temp.left;
		}

		if(data > temp.data){
			if(temp.right === null){
				console.log("No such element found");
				return -1;
			}
			prev = temp;
			temp = temp.right;
		}
	}
		

	if(temp.right === null && temp.left === null){ // if it is a leaf node;
		prev.left === temp ? prev.left = null : prev.right = null;
		return 1;
	}

	if(temp.right !== null && temp.left !== null){  // if it contains both child nodes
		prev.left === temp? prev.left = temp.right : prev.right = temp.right; 
		let freeLeft = temp.right;
		let left = temp.left;
		while(freeLeft.left !== null){
			console.log("hii");
			freeLeft = freeLeft.left;
		}
		console.log("hii 2")
		freeLeft.left = left;
		return 1;
	}

	if(temp.right !== null || temp.left !== null){ //if it is a branch node;
		console.log("hello")
		if(prev.data >= data){
			prev.left = temp.right !== null ? temp.right : temp.left; 
			return 1;
		}  
				
		if(prev.data < data) {
			prev.right = temp.right !== null ? temp.right : temp.left;
			return 1;
		}
	}
}