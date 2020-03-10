class BinarySearchTree{
    constructor(key=null,parent=null){
        this.key=key;
        this.parent=parent;
        this.left=null;
        this.right=null;
    }
    insert(item){
        if(this.key===null){//89
            this.key=item;
        }
        else if(item<this.key){//76
            if(this.left===null){
                this.left = new BinarySearchTree(item,this)
            }
            else{
            this.left.insert(item);
            }
        }
        else{
            if(this.right===null){
                this.right = new BinarySearchTree(item,this)
            }else{
                this.right.insert(item);
            }
        }
    }
    find(key) {
        if (this.key == key) {
            return this.value;
        }
        else if (key < this.key && this.left) {
            return this.left.find(key);
        }
        else if (key > this.key && this.right) {
            return this.right.find(key);
        }
        else {
            throw new Error('Key Error');
        }
    }

    remove(key) {
        if (this.key == key) {
            if (this.left && this.right) {
                const successor = this.right._findMin();//node with 4
                this.key = successor.key;//change node 3 to  node 4
                this.value = successor.value;//change values
                successor.remove(successor.key);
            }
            else if (this.left) {
                this._replaceWith(this.left);
            }
            else if (this.right) {
                this._replaceWith(this.right);
            }
            else {
                this._replaceWith(null);
            }
        }
        else if (key < this.key && this.left) {
            this.left.remove(key);
        }
        else if (key > this.key && this.right) {
            this.right.remove(key);
        }
        else {
            throw new Error('Key Error');
        }
    }
    _replaceWith(node) {
        if (this.parent) {
            if (this == this.parent.left) {
                this.parent.left = node;
            }
            else if (this == this.parent.right) {
                this.parent.right = node;
            }

            if (node) {
                node.parent = this.parent;
            }
        }
        else {
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }
    _findMin() {
        if (!this.left) {
            return this;
        }
        return this.left._findMin();
    }
}
//##4
/* function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
} */
//should retrun all values to the left the its own value then goes to the right for the rest of the values,
//return everything in order
//##5

function heightoftree(tree,counterleft=0,counterright=0){
    let counterright=0;
    let counterleft=0;
    if(!tree.left){
        return counterleft;
    }
    if(!tree.right){
        return counterright
    }
    if(tree.right || tree.left){
        counterright++;
        counterleft++;
    }
    else if(tree.right){
        return heightoftree(tree.right);
    }else if(tree.left){
        return heightoftree(tree.left);
    }
}
//##6
function isitaBST(tree){
    const root= tree.key;
    let rightB =tree.right;
    let leftB=tree.left;
    if(root.value>rightB.value||root.value<leftB.value){
        return false;
    }
    if(rightB&&root.value<rightB.value){
        return isitaBST(rightB)  
    }
    if(leftB&&root.value>leftB.value){
        return isitaBST(leftB) 
    }
    return true
}

//##7
function thirdlargestnode(tree){
    let granparentright =tree;
    let parent =tree;
    let child=tree;
    while(child){

  
    };
}




function Main(){
    const BST =new BinarySearchTree();
    BST.insert(3);
    BST.insert(1);
    BST.insert(4);
    BST.insert(6);
    BST.insert(9);
    BST.insert(2);
    BST.insert(5);
    BST.insert(7);
    console.log(BST);//by the insert order
    //console.log(heightoftree(BST));
    const BST2 =new BinarySearchTree();
    BST2.insert('E');
    BST2.insert('A');
    BST2.insert('S');
    BST2.insert('Y');
    BST2.insert('Q');
    BST2.insert('U');
    BST2.insert('E');
    BST2.insert('S');
    BST2.insert('T');
    BST2.insert('I');
    BST2.insert('O');
    BST2.insert('N');
    console.log(BST2);//by alpahbetical number
}
Main();