// largest third

function thirdLargest(arr,arr_size){
    //there should be 3 elements or more
    if (arr_size < 3) {
        console.log("there should be 3 elements atleast");
        return;
    }
    // first largest
    let first = arr[0];
    for(let i=1;i<arr_size;i++)
    if (arr[i]>first) {
        first =arr[i];
    }

    // second largest
    let second = Number.MIN_VALUE;
    for(let i=0;i<arr_size;i++)
    if (arr[i]> second && arr[i] < first) {
        second =arr[i];
    }

    // find third largest
    let third = Number.MIN_VALUE;
    for(let i=0;i<arr_size;i++)
    if (arr[i]> third && arr[i] < second) {
        third =arr[i];

        }
        console.log("the third largest " + "element is ",third);
   

}


let arr=[3,45,6,7,23,5,7,8];
let n = arr.length;

//function calling
thirdLargest(arr,n);