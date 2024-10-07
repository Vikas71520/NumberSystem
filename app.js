let arr = [19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30];
let n = arr.length;
let ansArr = [];

for (let i=0;i<n;i++)
{
    let count = 0;
    for (let j=1;j<=arr[i];j++)
    {
        if (arr[i] % j === 0)
        {
            count++;
        }
    }
    if (count == 2)
    {
        ansArr.push(arr[i]);
    }
}
console.log(ansArr);


let nn = ansArr.length;
let Max = ansArr[0];
let Min = ansArr[0];
let sum = 0;
for (let i=0; i<nn; i++)
{
    if (ansArr[i] > Max)
    {
        Max = ansArr[i];
    }
}
for (let i=0; i<nn; i++)
{
    if (ansArr[i] < Min)
    {
        Min = ansArr[i];
    }
}
for (let i=0; i<nn; i++)
{
    sum = sum + ansArr[i];
}
console.log(Min)
console.log(Max)
console.log(sum)