// method foreach: untuk looping array

const names = ["Michael" , "Hannah", "Jonas"];

names.forEach(function (nama){
    console.log(nama);
});

// method map: untuk format data. tambahkan Mr/Mrs
const formatedName = names.map(function (nama) {
    return `Mr/Mrs ${nama}`;
});

console.log(formatedName);