// solution for first question

function lengthOfLIS(nums) {
    if (nums.length === 0) return [0, []];

    const ln = new Array(nums.length).fill(1);
    const previousIndex = new Array(nums.length).fill(-1);

    let maxLength = 1;
    let maxIndex = 0;

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j] && ln[i] < ln[j] + 1) {
                ln[i] = ln[j] + 1;
                previousIndex[i] = j;
            }
        }
        if (ln[i] > maxLength) {
            maxLength = ln[i];
            maxIndex = i;
        }
    }

    const lis = [];
    for (let i = maxIndex; i >= 0; i = previousIndex[i]) {
        lis.unshift(nums[i]);
        if (previousIndex[i] === -1) break;
    }

    return [maxLength, lis];
}


const nums = [10, 9, 2, 5, 3, 7, 101, 18];
const [length, subsequence] = lengthOfLIS(nums);
console.log("Length:", length);
console.log("Subsequence:", subsequence);







// Solution for second question


function twoSum(nums, target) {

    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {

            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }

    // If no solution is found, throw an error
    throw new Error("No two sum solution");
}


const nums2 = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums2, target));


