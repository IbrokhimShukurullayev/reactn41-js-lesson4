// for1

// let a = +prompt("a son kiriting (a<b)");
// let b = +prompt("b son kiriting (a<b)");
// let sum = 0;

// for(let i = a; i <= b; i++) {
//     console.log(i);
//     s++;
// }

// console.log(s);

// for2

// let a = +prompt("a son kiriting (a<b)");
// let b = +prompt("b son kiriting (a<b)");
// let sum = 0;

// for(let i = b - 1; i > a; i--) {
//     console.log(i);
//     s++;
// }

// console.log(s);

// for3

// let kg = +prompt("1kg shirilikni narxini kiriting!");

// for(let i = 1; i <= 10; i++) {
//     console.log(i + " kg shirilikni narxi " + i * kg);
// };

// for4

// let kg = +prompt("1kg shirilikni narxini kiriting!");

// for(let i = 12; i <= 20; i += 2) {
//     console.log(i / 10 + " kg shirilikni narxi " + (i * kg) / 10 );
// };

// for5

// let a = +prompt("a  son kiriting (a<b)");
// let b = +prompt("b  son kiriting (a<b)");
// let sum = 0;

// for(let i = a; i <= b; i++) {
//   sum += i;
// };
// console.log(sum);

// for6

// let a = +prompt("a  son kiriting (a<b)");
// let b = +prompt("b  son kiriting (a<b)");
// let sum = 1;

// for(let i = a; i <= b; i++) {
//   sum *= i;
// };
// console.log(sum);

// for7

// let a = +prompt("a  son kiriting (a<b)");
// let b = +prompt("b  son kiriting (a<b)");
// let sum = 0;

// for(let i = a; i <= b; i++) {
//   sum += i**2;
// };
// console.log(sum);

// for8

// let n = +prompt("n  son kiriting (n>0)");
// let sum = 0;

// for(let i = 1; i <= n; i++) {
//   sum += 1/i;
// };

// console.log(sum);

// for9

// let n = +prompt("n son kiriting (n>0)");
// let sum = 1;

// for(let i = 1; i <= n; i+=0.1) {
//   sum *= i;
// };

// console.log(sum);

// for10

// let n = +prompt("n son kiriting (n>0)");
// let sum = 0;
// let cash

// for(let i = 1; i <= n; i++) {
//   cash = 2*i - 1;
//   sum = sum + cash;
//   console.log(i + "^2 = " + i**2 + " => qo'shilma = " + (sum - cash) + " + " + cash);
// };

// for11

// let n = +prompt("n son kiriting (n>0)");
// let a = +prompt("a haqiqiy son kiriting");
// let sum = 1

// for(let i = 1; i <= n; i++) {
//   sum *= a;
// };
// console.log(sum);

// for12

// let n = +prompt("n  son kiriting (n>0)");
// let a = +prompt("a haqiqiy son kiriting");

// for(let i = 1; i <= n; i++) {
//   console.log(a ** i);
// };

// for13

// let n = +prompt("n  son kiriting (n>0)");
// let a = +prompt("a haqiqiy son kiriting");
// let sum = 1;

// for(let i = 1; i <= n; i++) {
//   console.log(a ** i);
//   sum += a**i;
// };
// console.log("S = " + sum);

// for14

// let n = +prompt("n  son kiriting (n>0)");
// let sum = 0;
// let temp = 1;

// for(let i = 1; i <= n; i++) {
//   temp *= i
//   sum += temp;
// };
// console.log("S = " + sum);

// for15

// let N = +prompt("N  son kiriting (n>0)");
// let K = +prompt("K  son kiriting");
// let sum = 0;

// for(let i = 1; i <= N; i++) {
//   sum += i**K;
// };
// console.log("S = " + sum);

// for16

// let N = +prompt("N  son kiriting (n>0)");
// let sum = 0;

// for(let i = 1; i <= N; i++) {
//   sum += i**i;
// };
// console.log("S = " + sum);

// for17

// let A = +prompt("A  son kiriting (A < B)");
// let B = +prompt("B  son kiriting (A < B)");

// for(let i = A; i <= B; i++) {
//   for (let j = 0; j <= i-A; j++) {
//     console.log(i);
//   }
// };

// for18

// let A = +prompt("A  son kiriting (0 < A)");
// let sum = A;
// let temp = 1;

// for(let i = 1; i <= A/2; i++) {
//   if (A % i == 0) {
//     sum += i;
//     temp ++;
//     console.log(i + " => A ning bo'luvchilaridan biri!");
//   }
// };

// console.log(A + " => A ning bo'luvchilaridan biri!");
// console.log(sum + " => A ning bo'luvchilari yig'indisi");
// console.log(temp + " => A ning bo'luvchilari soni");

// for19

// let A = +prompt("A  son kiriting (1 < A)");
// let temp = 0;

// for(let i = 1; i <= A/2; i++) {
//   if (A % i == 0) {
//     temp++
//   };
// }
// if (temp > 1) {
//   console.log(A + " tub son emas!");      
// } else {
//   console.log(A + " tub son!");
// };

// for20

// let A = +prompt("A  son kiriting (0 < A)");
// let temp = "";

// for(let i = 1; i <= A; i++) {
//   temp += i.toFixed()
//   console.log(temp);
// };

