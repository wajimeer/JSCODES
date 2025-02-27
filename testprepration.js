function reverse(arr){
    let emptyarr = []
    for(let i=arr.length-1;i>=0;i--){
        emptyarr.push(arr[i])
    }
    return emptyarr
}
console.log(reverse([1,2,3,4,5,6,7]))

function isarray (arr){
    return typeof arr ==="object"&&arr!==null&&"length" in  arr;
}
console.log(isarray("abcd"))
console.log(isarray([1,3,4,5]));
function clonning (arr){
    let clone = []
    for (let i=0; i<arr.length;i++){
        clone[i]=arr[i]
    }
    return clone
}
console.log(clonning([1,2,3,4,5,0]))
function first(arr ,n){
    let result =[]
    if(n===undefined){
        return arr[0]
    }
    if(n<=0){
        return result
    }
    for (let i=0; i<n && i<arr.length; i++){
        result.push (arr[i])
    }
    return result;
}
console.log(first([5,67,9,3,345,25,]))

function last (arr,n){
    let result = [];
    if(n===undefined){
        return arr[arr.length-1]
    }
    if(n<=0){
        return result;
    }
    for(let i=arr.length -n;i<arr.length;i++){
        if(i>=0){
            result.push(arr[i])
        }
    }
    return result;
}
console.log(last([5,67,9,3,345,25,]))
function joinm (arr,sepr){
    let result=""
    for(let i=0;i<arr.length;i++){
        result+=arr[i]
        if(i<arr.length-1){
            result+=sepr
        }
    }
    return result
}
let check = ['red','green','yellow']
console.log(joinm(check,","))

function dash(arr){
    let result =[]
    let s=""
   
    for (let i=0; i<arr.length;i++){
        
        if(arr[i]%2===0){
            result.push(arr[i])
        }
    }
    for (let i=0;i<result.length;i++){
        s+=result[i]
        if(i<arr.length-1){
            s+="-"
        }
    }
    return s
}
let number=[1,2,3,4,5,6,7,8,9,10]
console.log(dash(number))

function occur(arr){
    let frq={}
    let max=0;
    let most;
    for(let item of arr){
        frq[item]=(frq[item]||0)+1
        if (frq[item]>max){
            max=frq[item]
            most=item;
        }
    }
    return `${most} (${max} time)`
}
let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3,3,3,3,3,3];
console.log(occur(arr1));

function swap(str){
    return str.split('').map(char=>char===char.toUpperCase()?char.toLowerCase():char.toUpperCase()).join('')
}
console.log(swap(" A Quik brown fox jump Over The Lazy Dog"))

function sum(arr){
    let sum =0;
  
    for(let i=0; i<arr.length;i++){
        
            
            sum+=arr[i]*arr[i]
        
       
    }
    return sum;
}
console.log(sum([1,2,3,4,5]));

function sumandproduct(arr){
    let sum =0;
    let product=1;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i]
    }
    for(let i=0; i<arr.length; i++){
        product+=arr[i]*arr[i]
    }
    return {sum,product}

}
console.log(sumandproduct([1,2,3,4,5]));
function remv(arr){
    let hashmap = {}
    let result = [];
    for(let i=0; i<arr.length; i++){
        if(!hashmap[arr[i]]){
            hashmap[arr[i]]=true;
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(remv([1,2,2,2,3,4,5,6,6,6,7,7,7,8,8,1,10,10,10]))
function removelast(arr){
    let n =arr.length-1
    for(let i=0; i<n;i++){
        console.log(arr[i])
    }
    return arr[n]
}
removelast([1,2,3,4,5])

function binarrysearch(arr,target){
    let left =0;
    let right = arr.length-1;
    while(left<=right){
        let mid = Math.floor(left+right/2)
        if(arr[mid]===target){
            return mid;
        }else if(arr[mid]<target){
            left = mid +1;
        }else{
            right = mid -1
        }
    }
    return -1
}
console.log(binarrysearch([1,2,33,4,5,77,8,9],9))
