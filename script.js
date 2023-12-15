let n = 1;
for(i=0; i<10; i++) {
    console.log("Виводимо " + n);
    n+=1;
}

let phone = {
    brand: "Iphone",
    color: "black",
    wight: 123
}

for (let key in phone) {
    console.log(key + ': ' + phone[key]);
}

let numbers = [1, 2, 3, 4, 5];

let newNumbers = [... numbers.slice(0, 2), 6, 7, ...numbers.slice(2, 5)];
console.log(newNumbers);