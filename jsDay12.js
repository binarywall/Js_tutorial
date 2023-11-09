let arr=[3,8,91,2,4,6,8,11,5] //[2,3,4,5,6,8,11,91]

function sort(arr){
    
    for(let i=1;i<arr.length;i++){
        let temp=-1;
        for(let j=0;j<i;j++){
            if(arr[i]<arr[j]){
                temp=arr[i];
                arr[i]=arr[j]
                arr[j]=temp
                
            }
        }
        
    }
    console.log("Sort Array : ",arr)
}

sort(arr)

const sLogic=(a,b)=> {return a-b}

console.log(arr.sort(sLogic))