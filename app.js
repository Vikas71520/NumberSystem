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