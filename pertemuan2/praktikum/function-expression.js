/**
 * membuat fungsi menghitung umur
 * dibuat menggunakan cara function expression
 * 
 * @param {integer} bod (tanggal lahir)
 * @returns {integer} age (umur)
 */

const getAge = function (bod) {
    const tahunsekarang = 2023;
    const umur = tahunsekarang - bod;

    return umur;
};

// memanggil fungsi getAge
console.log(getAge(1993));
console.log(getAge(2002));