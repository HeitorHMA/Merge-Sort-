function mergeSort(array){
    if(array.length < 2){
        return array
    }
        const mid = Math.floor(array.length /2)
        const leftArray = array.slice(0,mid)
        const rightArray = array.slice(mid)
        return merge(mergeSort(rightArray),mergeSort(leftArray))
    }
    function merge(rightArray,leftArray){
        const sortedArray = []
        while(rightArray && leftArray){
            if(rightArray[0] <= leftArray[0]){
                sortedArray.push(rightArray.shift())
            }
            else{
                sortedArray.push(leftArray.shift())
            }
            return[...sortedArray, ...leftArray , ...rightArray]
        }
    }
const arr = [2,3,9,1]
console.log(mergeSort(arr))