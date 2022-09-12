const least_num = (arr)=>{
  let smallest = arr[0];
  let smallest_index = 0;
  for(let i=1; i<arr.length;i++){
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallest_index = i;
    }
  }
  return smallest_index
}


const sortArray = (arr)=>{
 const newArr = [];
 while(arr.length > 0){
  let smallest = least_num(arr);
  newArr.push(...arr.splice(smallest,1))
 }
 return newArr;

}

console.log(sortArray([5,4,3,2,1]));
