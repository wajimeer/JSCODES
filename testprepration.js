function reverse(arr){
    let emptyarr = []
    for(let i=arr.length-1;i>=0;i--){
        emptyarr.push(arr[i])
    }
    return emptyarr
}
console.log(reverse([1,2,3,4,5,6,7]))