import { addNode } from "./addNode.js";

function LinkedList() {
    let head = null;
    let string = '';
    let length = 0;
    return {
        append: function(value) {
            let currentNode = head;            
            if (!currentNode) {
                currentNode = addNode(value);
                string += `( ${currentNode.value} ) -> `;
                length++;
                return;
            };
            while (currentNode.next) {
                currentNode = currentNode.next;
                string += `( ${currentNode.value} ) -> `;
                length++;
            };
            currentNode.next = addNode(value);
        },

        prepend: function(value) {
            let currentNode = head;
            if (string === '') {
                currentNode = addNode(value);
                string += `( ${currentNode.value} ) -> `;
                length++;
                return;
            };
            let theRest = currentNode;
            currentNode = addNode(value);
            currentNode.next = theRest;
            string = `( ${currentNode.value} ) -> ${string}`;
            length++;
        },

        size: function() {
            return length;
        },
        
        toString: function() {            
            return string === '' ? 'THE LIST IS EMPTY' : `${string}null`;
        }
    };
};

export { LinkedList }