// rest parameter : menggabungkan item menjadi satu (array)
function sum(... numbers) {
    let nilaiHasil = 0; // 6,

    for (let i = 0; i < numbers.length; i++){
        nilaiHasil = nilaiHasil + numbers[i];
    }

    console.log(nilaiHasil);
}

sum(1,2,3,4,5);