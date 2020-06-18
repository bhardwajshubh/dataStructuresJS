Node = function () {
	this.data = null;
	this.next = null;
}



addNodeAtBegining = (data , head) => {
	const newNode = new Node(data);
	newNode.data = data;
	if(head === null){
		head = newNode;
		return head;
	}
	newNode.next = head;
	head = newNode;
	return head
}

linkedTraversal = head => {
	if(head === null){
		console.log("Linked list is empty");
		return;
	}
	let temp = head;
	while(temp !== null){
		console.log(temp.data);
		temp = temp.next;
	}	
}

addNodeAtTheEnd = function(data , head){
	const newNode = new Node();
	newNode.data = data;
	newNode.next = null;
	if(head === null){
		head = newNode;
		return head;
	}

	let temp = head;
	while(temp.next !== null)
		temp = temp.next;
	
	temp.next = newNode;
	return head;

}

addNodeBetweenNode = (data , position , head) => {
	position -= 1;
	const newNode = new Node();
	newNode.data= data;
	if(head === null && position === 0){
		head = newNode;
		return head;
	} else if(head === null && position !== 0){
		console.log("Canot be inserted at that position");
		return null;
	}
	nxt = head;
	for(let i = 0 ; i < position -1 ; i++){
		if(nxt === null){
			console.log("Item cannot be inserted at this position")
			return head;
		}
		nxt = nxt.next;
	}
	newNode.next = nxt.next;
	nxt.next = newNode;
	return head;
}


deleteNodeFromFront = head => {
	if(head === null){
		console.log("Linkedlist is empty");
		return head;
	}
	let temp = head.next;
	head = temp;
	return head;
}

deleteNodeFromEnd = head => {
	if(head === null){
		console.log("Linkedlist is empty");
		return head;
	}
	let temp = head;
	while((temp.next).next !== null)
		temp = temp.next;
	temp.next = null;
	return head;
}

deleteFromPosition = (position , head) => {
	if(head === null){
		console.log("Linkedlist is empty");
		return head;	
	}
	position -= 1;
	temp = head;
	for(let i = 0 ; i < position-1 ; i++){
		if(temp === null){
			console.log("No node exist at this position")
			return head;
		}
		let temp = temp.next;
	}
	if(temp.next === null){
		console.log("No node exist at this position")
		return head;
	}
	temp.next = (temp.next).next;
	return head;
}

reverceALinkedlist = head => {
	if(head === null){
		console.log("Empty linked list");
		return head;
	}
	if(head.next === null){
		return head;
	}
	if((head.next).next ===null){
		let temp = head.next;
		temp.next = head;
		head.next = null;
		head = temp;
		return head;
	}
	let ptr = head.next;
	let prev = head;
	let nxt = (head.next).next;
	prev.next = null;
	while(nxt.next !== null) {
		ptr.next = prev;
		prev = ptr;
		ptr = nxt;
		nxt = nxt.next;  
	}
	ptr.next = prev;
	nxt.next = ptr;
	head = nxt;
	return head;
}