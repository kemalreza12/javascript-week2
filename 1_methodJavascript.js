// 1. Method .join()
// Method Array .join() berfungsi untuk menggabungkan elemen array menjadi sebuah string. 
// Sebuah argumen bisa diinputkan kedalam method ini yang akan berfungsi sebagai karakter ’pembatas’ untuk menyatukan array.

const arr1 = [1,2,3,4,5,"a","b","c","d","e"];       
console.log(arr1.join(' '));                        // output: 1 2 3 4 5 a b c d e

// 2. Method .reverse()
// Method Array.reverse() digunakan untuk membalikkan urutan dari elemen di dalam array. Method ini akan mengubah array asal.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.reverse());                      //  output: ["Mango", "Apple", "Orange", "Banana"]

// 3. Method .concat()
// Method Array.concat() berfungsi untuk ”penyambungan” array. Hasil akhir dari pemanggilan fungsi ini adalah array baru dengan penambahan dari method concat(). 
// Elemen yang ditambahkan diinput sebagai argumen dari method concat().

const hege = ["Cecilie", "Lone"];
const stale = ["Emil", "Tobias", "Linus"];
const children = hege.concat(stale);
console.log(children)                               // output: ["Cecilie", "Lone", "Emil", "Tobias", "Linus"]


// 4. Method .slice()
// Method Array.slice() digunakan untuk ’memotong’ array menjadi array baru, atau menjadi ’sub-array’ dari array asal. 
// Method slice() ini membutuhkan 2 buah argumen yang berisi posisi index awal dan akhir pemotongan.

const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus)


// 5. Method unshift() dan shift()
// Method unshift() akan menambahkan elemen baru diawal array, dan menggeser seluruh eleman yang ada. 
// Method shift() akan menghapus elemen paling awal array, dan menggeser ke bawah seluruh elemen lain di dalam Array. Kedua method ini akan mengubah array asal.

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.shift());
console.log(fruits.unshift("Lemon","Pineapple"));

// 6. Method toString()
// method ini akan mengkonversi masing-masing elemen menjadi string, lalu menyambungnya menjadi sebuah string dengan karakter koma sebagai pemisah.

const arr2 = [1,2,3,4,"a","b","c","d"];
console.log(arr2.toString());

// 7. Method splice()
// Method ini berfungsi untuk mengubah konten dari array dengan menghapus elemen yang ada dan/atau menambah elemen baru.

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);

// 8. Method find()
// method yang mengembalikan nilai elemen pertama dalam array yang lulus tes (tersedia sebagai fungsi)

const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);                                     // expected output: 12

// 9. Method forEach()
// menjalankan fungsinya untuk setiap elemen dengan mengeksekusi dari index terkecil ke yang terbesar

const arr3 = ['a', 'b', 'c'];                           // expected output: "a"
                                                        // expected output: "b"
array1.forEach(element => console.log(element));        // expected output: "c"

// 10. Method some()
// method ini akan memberikan nilai true ketika minimal ada satu data yang sesua dengan kondisi yang ditentukan.

const array = [1, 2, 3, 4, 5];

const even = (element) => element % 2 === 0;
console.log(array.some(even));                          // expected output: true