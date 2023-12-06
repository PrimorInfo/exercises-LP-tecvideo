function migratoryBirds(arr) {
    // Write your code here
    let counts= {};
    arr.forEach((count)=>{
        counts[count] = (counts[count] || 0) +1;
    });
    const maxVal = Math.max(...object.values(counts));
    const num = object.keys(counts).find((key) => counts(key) === maxVal
    );
    return num;
}
console.log.migratoryBirds(([2, 4, 3, 2, 3, 1, 2, 1, 3, 3, 5]));