const Node = function (){
	this.data = null
	this.left = null
	this.right = null
} 

insertElement = (data , root) => {
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

insertElementRecursive = (data , root) => {
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

treeTraversalBFS = root => {
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