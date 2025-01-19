import { addNode } from "./addNode.js";

function LinkedList() {
    let head = null;
    let tail = null;
    let length = 0;
    return {
        append: function(value) {
            let currentNode = head;
            let newNode = addNode(value);
            if (!currentNode) {
                currentNode = newNode;
                length++;
                head = newNode;
                tail = newNode;
                return;
            } else {
                while (currentNode.next) {
                    currentNode = currentNode.next;                    
                };
                currentNode.next = newNode;
                tail = newNode;
                length++;
            };            
        },

        prepend: function(value) {
            let currentNode = head;
            let newNode = addNode(value);
            if (length === 0) {
                currentNode = newNode;
                length++;
                head = newNode;
                tail = newNode;
                return;
            } else {
                let theRest = currentNode;
                currentNode = newNode;
                currentNode.next = theRest;
                length++;
                head = newNode;
            };
        },

        size: function() {
            return length;
        },

        headNode: function() {
            return head;
        },

        tailNode: function() {
            return tail;
        },

        at: function(index) {
            let currentNode = head;
            if (length === 0) {
                return `THE LIST IS EMPTY`;
            } else {
                if (index === 0) {
                    return head;
                };
                let i = 1;
                while (i<=index) {
                    currentNode = currentNode.next;
                    i++;
                };
                return currentNode;
            };

        },

        pop: function() {
            if (length === 0) {
                return 'THE LIST IS ALREADY EMPTY';
            };
            if (length === 1) {
                head = null;
                length--;
                return;
            }
            let pointer = {};
            pointer.next = head;
            while(pointer.next.next) {
                pointer = pointer.next;
            };
            pointer.next = null
            length--;
        },

        contains: function(value) {
            return this.toString().includes(`${value}`) ? true : false;
        },
        
        toString: function() {
            let string = '';
            let currentNode = head;
            if (!currentNode) {
                return 'THE LIST IS EMPTY';
            };
            while (currentNode.next) {
                string += `( ${currentNode.value} ) -> `;
                currentNode = currentNode.next;            
            };
            string += `( ${currentNode.value} ) -> `;
            return `${string}null`;
        }        
    };
};

export { LinkedList }