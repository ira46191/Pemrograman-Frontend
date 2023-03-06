/**
 * jika nilai diatas 90 : A
 * jika nilai diatas 80 : B
 * jika nilai diatas 70 : C
 * selain itu : D
 */

const nilai = 95;

// if: membuat satu kondisi
if (nilai > 90) {
  console.log("A");
} //else if : membuat 2 kondisi atau lebih
else if (nilai > 80) {
  console.log("B");
} else if (nilai > 70) {
  console.log("C");
} //else: membuat kondisi terakhir
else {
  console.log("D");
}
