/**
 * TODO 1.
 * Buat array of object users (5 users).
 * Object memiliki property: name, age, major.
 * Note: Ubah var menggunakan JavaScript Modern.
 */
const users = [
    {
      name: "Ira Kusuma Wardani",
      age: 21,
      major: "Informatics",
    },
    {
      name: "Sabiq",
      age: 20,
      major: "Informatics",
    },
    {
      name: "Yoora",
      age: 20,
      major: "Informatics",
    },
    {
      name: "Sapitri",
      age: 20,
      major: "Information System",
    },
    {
      name: "Sukma",
      age: 19,
      major: "Korean Literature",
    }
  ];
  
  /**
   * TODO 2
   * Buat function all: Menampilkan semua data user.
   * Hint: Gunakan for/for-of.
   * Note: Ubah function menggunakan arrow function.
   */
  const all = () => {
    for (const label of users) {
      console.log(label);
    }
  }
  
  /**
   * TODO 3
   * Buat function store: Menambahkan user baru.
   * Hint: Gunakan method push.
   * Note: Ubah function menggunakan arrow function.
   */
  const store = (User) => {
    users.push(User);
  }
  
  /**
   * TODO 4.
   * Buat function update: Mengedit data user.
   * Hint: re-assign array.
   * Note: Ubah function menggunakan arrow function.
   */
  const update = (index, user) => {
    users[index] = user;
  }
  
  /**
   * TODO 5.
   * Buat function destroy: Menghapus data user.
   * Hint: Gunakan method splice.
   * Note: Ubah function menggunakan arrow function.
   */
  function destroy(index) {
    users.splice(index, 1);
  }
  
  /**
   * Function main.
   * Jangan edit atau hapus function main.
   * Function ini untuk testing task.
   */
  
  const main = () => {
    /**
     * Test function index
     */
    console.log("# Get All Users");
    all();
  
    /**
     * Test function store
     */
    console.log("# Add New User: Min Yoongi");
    const newUser = {
      name: "Min Yoongi",
      age: 29,
      major: "Informatics",
    };
    store(newUser);
    all();
  
    /**
     * Test function update
     */
    console.log("# Edit User: Isfa");
    const editedIndex = 1;
    const editedUser = {
      name: "Isfhani Ghiyath",
      age: 23,
      major: "English",
    };
    update(editedIndex, editedUser);
    all();
  
    /**
     * Test function destroy
     */
    console.log("# Delete User: Sukma");
    const deletedIndex = 4;
    destroy(deletedIndex);
    all();
  };
  
  main();
  
  /**
   * Jangan hapus exports.
   * Exports ini untuk tujuan testing.
   */
  module.exports = { users, all, store, update, destroy };
  