var maxMinAvg = function(arr){
    return {
        'min':Math.min(...arr),
        'max':Math.max(...arr),
        'avg':arr.reduce((acc,cur) => acc + cur, 0)
    }
}
