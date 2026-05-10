// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
function sortTwoColors(nums){
    let i=0,j=nums.length-1;
        
        while(i<=j){
            if(nums[i]==0){
                i++;
            }else{
                let temp=nums[i];
                nums[i]=nums[j];
                nums[j]=temp;
                j--;//1 aaya to ek ghata do
            }
        }
};

function main(){
    const nums=[0,1,1,1,0,0,1,1];
    
    console.log("BEFORE:");
      for(let i=0;i<nums.length;i++){
          console.log(nums[i]);
      }
      
      sortTwoColors(nums);
      console.log("AFTER:");
      for(let i=0;i<nums.length;i++){
          console.log(nums[i]);
      }
}
main()