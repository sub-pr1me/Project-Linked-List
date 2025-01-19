import { addNode } from "./addNode.js";

function LinkedList() {
    let head = null;
    let tail = null;
    let string = '';
    let length = 0;
    return {
        append: function(value) {
            let currentNode = head;
            let newNode = addNode(value);
            if (!currentNode) {
                currentNode = newNode;
                string += `( ${currentNode.value} ) -> `;
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
                string += `( ${currentNode.next.value} ) -> `;
                length++;
            };            
        },

        prepend: function(value) {
            let currentNode = head;
            let newNode = addNode(value);
            if (string === '') {
                currentNode = newNode;
                string += `( ${currentNode.value} ) -> `;
                length++;
                head = newNode;
                tail = newNode;
                return;
            } else {
                let theRest = currentNode;
                currentNode = newNode;
                currentNode.next = theRest;
                string = `( ${currentNode.value} ) -> ${string}`;
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
        
        toString: function() {            
            return string === '' ? 'THE LIST IS EMPTY' : `${string}null`;
        }
    };
};

export { LinkedList }