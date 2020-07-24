// 1. Method .join()
// Method Array .join() berfungsi untuk menggabungkan elemen array menjadi sebuah string. 

const arr1 = [1,2,3,4,5,"a","b","c","d","e"];       
console.log(arr1.join(' '));                        // output: 1 2 3 4 5 a b c d e

// 2. Method .reverse()
// Method Array.reverse() digunakan untuk membalikkan urutan dari elemen di dalam array. Method ini akan mengubah array asal.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.reverse());                      //  output: ["Mango", "Apple", "Orange", "Banana"]

// 3. Method .concat()
// Method Array.concat() berfungsi untuk ”penyambungan” array. Hasil akhir dari pemanggilan fungsi ini adalah array baru dengan penambahan dari method concat(). 
// Elemen yang ditambahkan diinput sebagai argumen dari method concat().

const name1 = ["Cecilie", "Lone"];
const name2 = ["Emil", "Tobias", "Linus"];
const merge = name1.concat(name2);
console.log(merge)                               // output: ["Cecilie", "Lone", "Emil", "Tobias", "Linus"]


// 4. Method .slice()
// Method Array.slice() digunakan untuk ’memotong’ array menjadi array baru, atau menjadi ’sub-array’ dari array asal. 

const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits2.slice(1, 5);
console.log(citrus)                                // output: ["Orange", "Lemon", "Apple", "Mango"]


// 5. Method unshift() dan shift()
// Method unshift() akan menambahkan elemen baru diawal array, dan menggeser seluruh eleman yang ada. 
// Method shift() akan menghapus elemen paling awal array, dan menggeser ke bawah seluruh elemen lain di dalam Array. Kedua method ini akan mengubah array asal.

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits3.shift());                       // output: ["Orange", "Apple", "Mango"] 
const uShift = (fruits3.unshift("Lemon","Pineapple"));  // output: ["Lemon","Pineapple","Banana", "Orange", "Apple", "Mango"]
console.log(uShift)

// 6. Method toString()
// method ini akan mengkonversi masing-masing elemen menjadi string, lalu menyambungnya menjadi sebuah string dengan karakter koma sebagai pemisah.

const arr2 = [1,2,3,4,"a","b","c","d"];
console.log(arr2.toString());                       // output: 1,2,3,4,a,b,c,d

// 7. Method splice()
// Method ini berfungsi untuk mengubah konten dari array dengan menghapus elemen yang ada dan/atau menambah elemen baru.

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);                                // ouyput: ["Jan", "Feb", "March", "April", "June"]

// 8. Method find()
// method yang mengembalikan nilai elemen pertama dalam array yang lulus tes (tersedia sebagai fungsi)

const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);                                // output: 12

// 9. Method forEach()
// menjalankan fungsinya untuk setiap elemen dengan mengeksekusi dari index terkecil ke yang terbesar

const arr3 = ['a', 'b', 'c'];                           //  output: "a"
                                                        //          "b"
array1.forEach(element => console.log(element));        //          "c"

// 10. Method some()
// method ini akan memberikan nilai true ketika minimal ada satu data yang sesua dengan kondisi yang ditentukan.

const array = [1, 2, 3, 4, 5];

const even = (element) => element % 2 === 0;
console.log(array.some(even));                          // expected output: true
