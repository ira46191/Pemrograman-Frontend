/**
 * membuat fungsi menghitung umur
 * dibuat menggunakan cara function declaration
 * 
 * @param {integer} bod (tanggal lahir)
 * @returns {integer} age (umur)
 */

function getAge(bod){
    const tahunsekarang = 2023;
    const umur = tahunsekarang - bod;

    return umur;
}
// memanggil fungsi getAge
console.log(getAge(1993));
console.log(getAge(2002));