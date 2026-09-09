const StaticArray = require("../src/staticArray.js");


// =======================================================
// TEST 1: REMOVE LAST ELEMENT
// =======================================================

// CREATE

const arr1 = new StaticArray(5);

arr1.insert(0, 10);
arr1.insert(1, 20);
arr1.insert(2, 30);
arr1.insert(3, 40);
arr1.insert(4, 50);

// OPERATION

arr1.remove(4);

// RESULT

console.log("TEST 1: REMOVE LAST ELEMENT");
console.log("array size is :", arr1.size());
console.log("the array is:");

console.log(arr1.get(0));
console.log(arr1.get(1));
console.log(arr1.get(2));
console.log(arr1.get(3));
console.log(arr1.get(4));


// =======================================================
// TEST 2: REMOVE FIRST ELEMENT
// =======================================================

// CREATE

const arr2 = new StaticArray(5);

arr2.insert(0, 10);
arr2.insert(1, 20);
arr2.insert(2, 30);
arr2.insert(3, 40);
arr2.insert(4, 50);

// OPERATION

arr2.remove(0);

// RESULT

console.log("\nTEST 2: REMOVE FIRST ELEMENT");
console.log("array size is :", arr2.size());
console.log("the array is:");

console.log(arr2.get(0));
console.log(arr2.get(1));
console.log(arr2.get(2));
console.log(arr2.get(3));
console.log(arr2.get(4));


// =======================================================
// TEST 3: REMOVE ELEMENT FROM MIDDLE
// =======================================================

// REMOVE(beginning) → O(n)
// REMOVE(middle)    → O(n)
// REMOVE(end)       → O(1)

// CREATE

const arr3 = new StaticArray(5);

arr3.insert(0, 10);
arr3.insert(1, 20);
arr3.insert(2, 30);
arr3.insert(3, 40);
arr3.insert(4, 50);

// OPERATION

arr3.remove(2);

// RESULT

console.log("\nTEST 3: REMOVE ELEMENT FROM MIDDLE");
console.log("array size is :", arr3.size());
console.log("the array is:");

console.log(arr3.get(0));
console.log(arr3.get(1));
console.log(arr3.get(2));
console.log(arr3.get(3));
console.log(arr3.get(4));


// =======================================================
// TEST 4: INSERT AT THE BEGINNING
// =======================================================

// INSERT(beginning) → O(n)
// INSERT(middle)    → O(n)
// INSERT(end)       → O(1)

// CREATE

const arr4 = new StaticArray(10);

arr4.insert(0, 10);
arr4.insert(1, 20);
arr4.insert(2, 30);
arr4.insert(3, 40);

// OPERATION

arr4.insert(0, 90);

// RESULT

console.log("\nTEST 4: INSERT AT THE BEGINNING");
console.log("array size is :", arr4.size());
console.log("the array is:");

console.log(arr4.get(0));
console.log(arr4.get(1));
console.log(arr4.get(2));
console.log(arr4.get(3));
console.log(arr4.get(4));


// =======================================================
// TEST 5: INSERT IN THE MIDDLE
// =======================================================

// CREATE

const arr5 = new StaticArray(10);

arr5.insert(0, 10);
arr5.insert(1, 20);
arr5.insert(2, 30);
arr5.insert(3, 40);

// OPERATION

arr5.insert(2, 100);

// RESULT

console.log("\nTEST 5: INSERT IN THE MIDDLE");
console.log("array size is :", arr5.size());
console.log("the array is:");

console.log(arr5.get(0));
console.log(arr5.get(1));
console.log(arr5.get(2));
console.log(arr5.get(3));
console.log(arr5.get(4));


// =======================================================
// TEST 6: INSERT AT THE END
// =======================================================

// CREATE

const arr6 = new StaticArray(10);

arr6.insert(0, 10);
arr6.insert(1, 20);
arr6.insert(2, 30);
arr6.insert(3, 40);

// OPERATION

arr6.insert(4, 100);

// RESULT

console.log("\nTEST 6: INSERT AT THE END");
console.log("array size is :", arr6.size());
console.log("the array is:");

console.log(arr6.get(0));
console.log(arr6.get(1));
console.log(arr6.get(2));
console.log(arr6.get(3));
console.log(arr6.get(4));


// =======================================================
// TEST 7: INVALID INDEXES
// =======================================================

// CREATE

const arr7 = new StaticArray(10);

arr7.insert(0, 10);

// TESTING

console.log("\nTEST 7: INVALID INDEXES");

console.log("set(-1):", arr7.set(-1, 20));
console.log("set(10):", arr7.set(10, 20));

console.log("get(-1):", arr7.get(-1));
console.log("get(10):", arr7.get(10));

console.log("insert(-1):", arr7.insert(-1, 20));
console.log("insert(2):", arr7.insert(2, 20));

console.log("remove(-1):", arr7.remove(-1));
console.log("remove(10):", arr7.remove(10));


// =======================================================
// TEST 8: FULL ARRAY
// =======================================================

// CREATE

const arr8 = new StaticArray(3);

arr8.insert(0, 1);
arr8.insert(1, 2);
arr8.insert(2, 3);

// OPERATION

console.log("\nTEST 8: FULL ARRAY");

console.log("insert into full array:", arr8.insert(2, 60));

// RESULT

console.log("array size is :", arr8.size());
console.log("the array is:");

console.log(arr8.get(0));
console.log(arr8.get(1));
console.log(arr8.get(2));




// ====================================================
// TEST 9 : SET /UPDATE

// ====================================================

const arr9=new StaticArray(5)


// CREATE

arr9.insert(0, 10);
arr9.insert(1, 20);
arr9.insert(2, 30);

// UPDATE

arr9.set(1,99)

console.log("\nTEST 9: Set/update");

console.log("array size is :", arr9.size());
console.log("the array is:");

console.log(arr9.get(0));
console.log(arr9.get(1));
console.log(arr9.get(2));