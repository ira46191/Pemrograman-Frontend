const user = {
    name: "Ira Kusuma Wardani",
    umur: 21,
    tinggi: 165
}
console.log(user.name);

// menggunakan array
console.log(user["name"]);

// looping for-in
for (const label in user){
    console.log(user[label]);
}