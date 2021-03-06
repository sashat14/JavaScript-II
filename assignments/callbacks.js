const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];


function firstItem(arr, cb) {
   // firstItem passes the first item of the given array to the callback function.
  return cb(arr);
}

function first(arr){
  return arr[0];
}

firstItem(items, first);

//-----------------------------------------------------------------------------------------------------------------------------

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
   return cb(arr);
}

function length(arr){
  return arr.length;
}

getLength(items, length);

//----------------------------------------------------------------------------------------------------------------------------------

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr);
}

function lastItem(arr){
  return arr[arr.length-1];
}

last(items, lastItem);

//--------------------------------------------------------------------------------------------------------------------------------

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x,y);
}

function adds(x,y){
  return x + y;
}

sumNums(5, 4, adds);

//------------------------------------------------------------------------------------------------------------------------------------

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x,y);
}

function multi(x,y){
  return x * y;
}

multiplyNums(5, 4, multi);

//-----------------------------------------------------------------------------------------------------------------------------------

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(item, list);
}

function contents(item, list){
  if(list.indexOf(item)> -1){
    return true;
  }else{
    return false;
  }
}

contains("yo-yo", items, contents);

//----------------------------------------------------------------------------------------------------------------------------------

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
