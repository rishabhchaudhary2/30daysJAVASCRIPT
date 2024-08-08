// Activity 1
class Node {
    constructor(data) {
        this.next = null;
        this.data = data;
    }
}
class LinkedList {
    constructor() {
        this.head = null;

    }
    add(data) {
        const newNode = new Node(data)
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let temp = this.head;
        while (temp.next) {
            temp = temp.next;
        }

        temp.next = newNode

    }
    delete() {

        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let temp = this.head;
        while (temp.next.next) {
            temp = temp.next;
        }

        temp.next = null;

    }

    printList() {
        let temp = this.head;
        let str = '';
        while (temp) {
            str += temp.data + ' -> ';
            temp = temp.next;
        }
        console.log(str + 'null');
    }
}




// Activity 2

class stk {

    constructor() {
        this.arr = []
    }
    push(data) {
        this.arr.push(data);
    }
    pop() {
        if (this.arr.length == 0)
            return "Underflow";
        this.arr.pop();
    }
    peek() {
        return this.arr[this.arr.length - 1];
    }
    printStack() {
        for (let index = 0; index < this.arr.length; index++) {
            console.log(this.arr[index]);
        }
    }
    length() {
        return this.arr.length
    }

}

let Stk1 = new stk();
Stk1.push(5)
Stk1.push(4)
Stk1.push(3)
Stk1.push(2)
Stk1.push(1)
Stk1.pop()
console.log(Stk1.peek());
Stk1.printStack()

let stack2 = new stk();
let str = "Rishab Chaudhary";
for (let index = 0; index < str.length; index++) {
    const element = str[index];
    stack2.push(element);

}
stack2.printStack();
str = "";
const n = stack2.length()
for (let index = 0; index < n; index++) {
    str += stack2.peek()
    stack2.pop();

}
console.log(str);


// ACtivity 3

class queue {
    constructor() {
        this.arr = []
    }
    enqueue(data) {
        this.arr.push(data);
    }
    dequeue()
    {
        if(this.arr.length==0)
            return "underflow";
        return this.arr.shift();//Remove and return first element;
    }
    front()
    {
        if(this.arr.length!=0)
            return this.arr[0];
        else
        return "Queue is empty";
    }

    display()
    {
        for (let index = 0; index < this.arr.length; index++) {
            console.log(this.arr[index]);
        }   
    }
}

let qu=new queue();
qu.enqueue(3)
qu.enqueue(2)
qu.enqueue(1)
qu.enqueue(0)
console.log(qu.dequeue());
console.log("displaying the queue");
qu.display()

// Activity 4

class TreeNode{
    constructor(data)
    {
        this.data=data;
        this.left=null
        this.right=null
    }
}


class BinaryTree {
    constructor() {
        this.root = null;         
    }

   
    insert(value) {
        const newNode = new TreeNode(value);
        
        if (this.root === null) { 
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    
    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
           
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

   
    inOrderTraverse(node = this.root) {
        if (node !== null) {
            this.inOrderTraverse(node.left);
            console.log(node.value);
            this.inOrderTraverse(node.right);
        }
    }

}