import { useState, useEffect } from "react";
// function Counter(){
// let hasil = 0;

// membuat variabel state
// mengembalikkan 2 data
// nilai saat ini: 0
// fungsi untuk mengubah state
// const [hasil, setHasil] = useState(0);

// function tambah(){
//     // jalankan fungsi setHasil
//     // untuk mengubah state
//     setHasil(hasil + 1)
// }

//     return(
//         <div>
//             <p>Hasil: {hasil}</p>
//             <button onClick={tambah}>Add</button>
//         </div>
//     );
// }
// export default Counter;

// praktikum pertemuan 9
function Counter() {
  const [angka, setAngka] = useState(0);
  const [nama, setNama] = useState("aufa");

  function addAngka() {
    setAngka(angka + 1);
    // console.log(angka);
  }

  function ubahNama(){
    setNama("Aufa Billah");
  }

     useEffect( ()=> {
      console.log("Dijalankan ketika component di-mount dan update");

      document.title = `Angka: ${angka}`;
    },
    [angka, nama]
    );

    console.log("Dijalankan ketika component di-render");
  return (
    <div>
      <p>Nilai Angka: {angka}</p>
      <button onClick={addAngka}>Add</button>
      <p>Nama: {nama}</p>
      <button onClick={ubahNama}>Ubah Nama</button>

    </div>
  );
}
export default Counter;
