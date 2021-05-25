var twoSum = function(nums, target) {
    let size = nums.length;
    let indices = [];
    for(let i=0; i < size; i++){
        for(let j=i + 1; j < size; j++){
            if(nums[i] + nums[j] == target){
                // console.log(`${i}, ${j} = ${nums[i]} + ${nums[j]}`)
                indices.push(i);
                indices.push(j);
                break;
            }
        }   
    }
    return indices; 
};

module.exports = twoSum;