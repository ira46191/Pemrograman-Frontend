/**
 * TODO 2.
 * Import variable users dari file data/users.js
 */
// const users = require("../data/users");
import users from "../data/users.js";

/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */

/**
 * TODO 3.
 * Buat function formatUser: Format nama user.
 * Fungsi membutuhkan waktu 3 detik.
 * Hint:
 * - Gunakan method map untuk format user.
 * - Gunakan promise untuk handle asynchronous.
 */
function formatUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const resultFormatUser = users.map(function (user) {
        return {
          name: `Mr/Mrs. ` + user.name,
          age: user.age,
          major: user.major,
        };
      });
      resolve(resultFormatUser);
    }, 3000);
  });
}

/**
 * TODO 4.
 * Buat function findByName: Mencari 1 user by name.
 * Fungsi membutuhkan waktu 2 detik.
 * Hint:
 * - Gunakan method find untuk mencari 1 user.
 * - Gunakan promise untuk handle asynchronous.
 */
function findByName() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const resultFindByName = users.find(function (user) {
        return user.name = "Aufa";
      });
      resolve(resultFindByName);
    }, 2000);
  });
}

/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */

/**
 * TODO 5.
 * Buat function filterByMajor: Mencari semua user by major.
 * Fungsi membutuhkan waktu 4 detik.
 * Hint:
 * - Gunakan method filter untuk mencari semua user.
 * - Gunakan promise untuk handle asynchronous.
 */
function filterByMajor(major) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const resultFilterByMajor = users.filter(function (user) {
        return user.major == major;
      });
      resolve(resultFilterByMajor);
    }, 4000);
  });
}

/**
 * TODO 6.
 * Export fungsi: formatUser, findByName, filterByMajor
 */
// export {formatUser, findByName, filterByMajor};
module.exports = { formatUser, findByName, filterByMajor };
