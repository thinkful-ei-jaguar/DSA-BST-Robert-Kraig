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
function heightOfTree(node,height=0){
if(!node){
    return height-1;
}
const left= heightOfTree(node.left,height+1)
const right = heightOfTree(node.right,height+1)
if(left>right){
    return left
}
else{
    return right
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

//##7 O(n)
function thirdlargestnode(tree){
    if (!tree.right.right.right) {
        return tree;
    }
    return thirdlargestnode(tree.right);
}
//##8
//tree where no 2 leaves differ in distance from the root by more than 1)
// 8
function checkBalance(tree,height=1){
    if(height>=2){
        return false
    }
    if(tree.right&&tree.left){
        checkBalance(tree.right)
        checkBalance(tree.left)  
    }
    if(!tree.left){
        height++;
        return checkBalance(tree.right,height)  
    }
    if(!tree.right){
        height++;
        return checkBalance(tree.left,height)
    }
    return true
}
//##9//2 arrays O(n*k)
const a=[3, 5, 4, 6, 1, 0, 2];
const b=[3, 1, 5, 2, 4, 6, 0];

function checkIdentical(arr1,arr2){
    for(let i=0;i<arr1.length;i++){
        const check=arr2.includes(arr1[i]);
        if(!check){
            return false;
        }
    }
    for(let j=0;j<arr2.length;j++){
        const check2=arr1.includes(arr2[j]);
        if(!check2){
            return false;
        }
    }
    return true;
}
//console.log(checkIdentical(a,b));



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
    //console.log(BST);//by the insert order
    //console.log(heightoftree(BST));
    // const BST2 =new BinarySearchTree();
    // BST2.insert('E');
    // BST2.insert('A');
    // BST2.insert('S');
    // BST2.insert('Y');
    // BST2.insert('Q');
    // BST2.insert('U');
    // BST2.insert('E');
    // BST2.insert('S');
    // BST2.insert('T');
    // BST2.insert('I');
    // BST2.insert('O');
    // BST2.insert('N');
    // console.log(BST2);//by alpahbetical number
    result= heightOfTree(BST)
    console.log(result)
}
Main();
