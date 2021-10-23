// 1. Use a loop to print a column of numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    document.write( i + br );
}

// 2.Use a loop to print a column of numbers from 100 to 1
for (let i = 100; i < 0; i--) {
    document.write( i + br );
}

// 3. Use a loop to print a column of even numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if ( i % 2 === 0 ) document.write( i + br );
}

// 4. Fill the array with 10 x x using a loop.
let arr4 = [];
for (let i = 0; i < 10; i++) {
    arr4.push('x');
}

// 5. Fill an array with numbers from 1 to 10 using a loop
let arr5 = [];
for (let i = 1; i <= 10; i++) {
    arr5.push(i);
}

// 6. Fill the array with 10 random numbers (fractions) from 0 to 1 using a loop. Round fractions to two decimal places.
let arr6 = [];
for (let i = 0; i < 10; i++) {
    let random = Math.random().toFixed(2);
    arr6.push(+random);
}

// 7. Fill the array with 10 random numbers from 1 to 10 using a loop.
let arr7 = [];
for (let i = 0; i < 10; i++) {
    let random = Math.round((Math.random()*10)+1);
    arr7.push(+random);
}

// 8. An array with numbers is given. Using a loop, output only those array elements that are greater than zero and less than 10
let arr8 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for (let i = 0; i < arr8.length; i++) {
    if ( arr8[i] > 0 && arr8[i] < 10 ) {
        document.write(arr8[i]);
    }
}

// 9. An array with numbers is given. Using a loop, check that it contains an element with the value 5. As soon as the first such element is found, print 'Yes' and break the loop. If there is no such element, do not output anything.
let arr9 = [1, 2, 4, -1, -3, 8, 5,  7, 0, -5, 18, 12];
for (let i = 0; i < arr9.length; i++) {
    if ( arr9[i] === 5 ) {
        document.write('yes!');
        break;
    }
}

// 10. Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
let arr10 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
let result_10 = 0;
for (let i = 0; i < arr10.length; i++) {
    result_10 += arr10[i];
}

// 11. An array with numbers is given. Use a loop to find the sum of the squares of the elements in this array.
let arr11 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
let result_11 = 0;
for (let i = 0; i < arr11.length; i++) {
    result_11 += Math.pow(arr11[i],2);
}

// 12. An array with numbers is given. Find the arithmetic mean of its elements (the sum of the elements, divided by the number)
let arr12 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
let result_12 = 0;
for (let i = 0; i < arr12.length; i++) {
    result_12 += arr12[i];
    if ( i === arr12.length-1 ) result_12 /= arr12.length;
}