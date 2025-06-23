class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
	toString() {
		return this.value;
	}
}

class LinkedList {
	constructor(){
		this.head = null;
		this.tail = null;
		this.size = 0;
	}
	// Add a new node to the end of the list
	add(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.size++;
	}

	// Remove a node from the list
	remove(value) {
		if (!this.head) return null;

		let current = this.head;
		let previous = null;

		while (current) {
			if (current.value === value) {
				if (previous) {
					previous.next = current.next;
				} else {
					this.head = current.next;
				}
				this.size--;
				return current.value;
			}
			previous = current;
			current = current.next;
		}
		return null;
	}

	pop () {
		if(!this.head) return null
		
	}
}
