Node = function () {
	this.data = null;
	this.next = null;
}



addNodeAtBegining = function(data , head) {
	newNode = new Node(data);
	newNode.data = data;
	if(head === null){
		head = newNode;
		return head;
	}
	newNode.next = head;
	head = newNode;
	return head
}

linkedTraversal = function(head){
	if(head === null){
		console.log("Linked list is empty");
		return;
	}
	temp = {...head};
	while(temp !== null){
		console.log(temp.data);
		temp = temp.next;
	}	
}