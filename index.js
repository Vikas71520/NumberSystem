// let arr = [1,2,3,4,5];
// let numbers = [3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18];
// let n = numbers.length;
// for (let i=0;i<n;i++)
// {
//     if (numbers[i] % 2 === 0)
//     {
//         console.log(numbers[i],"Is an Even Number");
//     }
//     else
//     {
//         console.log(numbers[i], "Is an Odd Number");
//     }
// }

let arr = [19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30];
let n = arr.length;
let count = 0;
for (let i=1; i<n; i++)
{
    for (let j = 1;j<=arr[i];j++)
    {
        if (arr[i] % j === 0)
        {
            count++;
        }
    }
    if (count == 2)
    {
        console.log(arr[i], "is a prime number");
    }
}