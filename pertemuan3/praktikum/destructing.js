// Destructing object based on label/key
const req = {
    body :  {
    name : "Ira Kusuma Wardani",
    age : 21,
    major : "informatics",
    tinggi : 165
},
};

const { name, age, major, tinggi = 165} = req.body;

// destructing array based on posisi
const family = ["Michael","Hannah", "Jonas"];
const [suami, istri, son] = family

// menampilkan array
console.log(suami, istri, son);
