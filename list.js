import { addNode } from "./addNode.js";

function LinkedList() {
    let head = null;
    let string = '';
    let length = 0;
    let first = null;
    let last = null;
    return {
        append: function(value) {
            let currentNode = head;            
            if (!currentNode) {
                currentNode = addNode(value);
                string += `( ${currentNode.value} ) -> `;
                length++;
                first = currentNode;
                last = currentNode;
                return;
            };
            while (currentNode.next) {
                currentNode = currentNode.next;
                string += `( ${currentNode.value} ) -> `;
                length++;
            };
            currentNode.next = addNode(value);
            last = currentNode;
        },

        prepend: function(value) {
            let currentNode = head;
            if (string === '') {
                currentNode = addNode(value);
                string += `( ${currentNode.value} ) -> `;
                length++;
                first = currentNode;
                return;
            };
            let theRest = currentNode;
            currentNode = addNode(value);
            currentNode.next = theRest;
            string = `( ${currentNode.value} ) -> ${string}`;
            length++;
            first = currentNode;
        },

        size: function() {
            return length;
        },

        headNode: function() {
            
            return first.value;
        },

        tailNode: function() {
            return last.value;
        },
        
        toString: function() {            
            return string === '' ? 'THE LIST IS EMPTY' : `${string}null`;
        }
    };
};

export { LinkedList }