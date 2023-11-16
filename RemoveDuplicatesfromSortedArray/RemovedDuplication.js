function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let k = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    nums.fill('_', k);

    return k;
}

// Test with example 1
const nums1 = [1, 1, 2];
const k1 = removeDuplicates(nums1);
console.log(`Output 1: ${k1}, nums = ${JSON.stringify(nums1)}`);

// Test with example 2
const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const k2 = removeDuplicates(nums2);
console.log(`Output 2: ${k2}, nums = ${JSON.stringify(nums2)}`);
