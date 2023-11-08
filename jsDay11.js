let arr=[3,8,91,2,4,6,8,11,5]


function findMax(arr){
    let max=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i+1]>max){
            max=arr[i+1]
        }
    }
    
    console.log('Max : ', max)
}

// findMax(arr)

let arr1=[3,4,6,8,5,6,7,4,10]

function findmin(arr) {
    let min=arr[0]
    for(i=0; i<arr.length; i++){
        if(arr[i+1]<min){
            min=arr[i+1]
        }
    }
    console.log("Min : ",min)
}
// findmin(arr1)

// secondLargest(arr1)

function secondLargest(arr){
    let firstMax=arr[0],secondMax=-1;
    for(let i=0; i<arr.length; i++){
        if(firstMax<arr[i+1]){
            secondMax=firstMax
            firstMax=arr[i+1]
        }
    }
    console.log("First max : "+firstMax+" | Second max : "+secondMax)
}

secondLargestArrow(arr)
//Arrow function

const secondLargestArrow=(arr)=>{
    let firstMax=arr[0],secondMax=-1;
    for(let i=0; i<arr.length; i++){
        if(firstMax<arr[i+1]){
            secondMax=firstMax
            firstMax=arr[i+1]
        }
    }
    console.log("First max : "+firstMax+" | Second max : "+secondMax)
}

