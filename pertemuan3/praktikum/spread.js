// spread syntax: ...

const family = ["Michael", " Hannah"];
const newFamily = [... family, "Jonas", "Martha"];

// object : spread
const user = {
    name : "Ira Kusuma",
    age : 21
};

const newUser = {
    ...user,
    major: "informatics",
};

console.log(newUser);