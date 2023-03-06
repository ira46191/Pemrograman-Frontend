/**
 * membuat fungsi menghitung umur
 * dibuat menggunakan cara arrow function
 * 
 * @param {integer} bod (tanggal lahir)
 * @returns {integer} age (umur)
 */

const getAge = (bod = 1993) => {
    const tahunsekarang = 2023;
    const umur = tahunsekarang - bod

    return umur;
};

// memanggil fungsi getAge
console.log(getAge());
console.log(getAge(2002));