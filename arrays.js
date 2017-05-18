/*
* @param array
* Prints all elements of array in reverse order
*/

function printReverse(arr) {
    var len = arr.length - 1
    for (var i = len; i >= 0; i--) {
        console.log(arr[i]);
    }
}

/*
* @param array
* Checks if array is comprised of same elements
* @return true if all elements are same, false otherwise
*/

function isUniform(arr) {
    var len = arr.length;
    var first = arr[0];
    if (len <= 1) {
        return false;
    }
    for (var i = 1; i < len - 1; i++) {
        if (arr[i] !== first) {
            return false;
        }
    }
    return true;
}

/*
* @param array
* Sums all elements in the array
* @return sum of all elements
*/
function sumArray(arr) {
    var sum = 0;
    arr.forEach(function(el) {
        sum += el;
    });
    return sum;
}

/*
* @param array
* Finds the biggest value in the array
* @return biggest value in the array
*/
function max(arr) {
    var maxNum = arr[0];
    arr.forEach(function(el){
        if(el>maxNum){
            maxNum = el;
        }
    });
    return maxNum;
}

/*
* Adding new method on the array prototype which takes function as a parameter
* and invokes it for every element in the array
*/
Array.prototype.myForEach = function(func){
    for(var i = 0; i < this.length; i++){
        func(this[i]);
    }
}
