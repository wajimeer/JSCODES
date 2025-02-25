function duplicate(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                return true;
            }
        }
    }
    return false;
}
console.log(duplicate([1,1,2,3,4,5]))
function anagram(arr,arr1){
    if(arr.length!==arr1.length){
        return false;
    }
    let empty = {}
    for(let check of arr){
        empty[check]=(empty[check]||0)+1
    }
    for(let check of arr1){
        if(!empty[check]){
            return false
        }
        empty[check]--
    }
    return true

}
console.log(anagram('silent','listen'))
function twosum(arr,arr1){
    for (let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]===arr1){
                return[i,j]
            }
        }
    }
    return []
}
console.log(twosum([2,3,4,5,6,7],8))

function groupanagram(arr){
    if(arr.length===0){
        return false;
    }
    function customarr(str){
        let arr1 = []
        let n=str.length
        for(let i=0; i<n;i++){
            arr1[i]=str[i]
        }
        for (let i=0; i<arr1.length;i++){
            for(let j=i+1;j<arr1.length;j++){
                if(arr1[j]>arr1[j+1]){
                    let x=arr1[j]
                    arr1[j]=arr1[j+1]
                    arr1[j+1]=x
                }
            }
        }
        let sort = ""
        for(let i=0; i<arr1.length;i++){
            sort +=arr1[i]
        }
        return sort

    }
    let sorted = customarr(arr[0])
    for(let i=0; i<arr.length; i++){
        if(customarr(arr[i])!==sorted){
            return false;
        }
    }
    return true;
}
console.log(groupanagram(["eat", "tea", "ate","eta","ann"]))