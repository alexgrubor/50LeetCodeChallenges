// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Constraints:

//     nums1.length == m
//     nums2.length == n
//     0 <= m <= 1000
//     0 <= n <= 1000
//     1 <= m + n <= 2000
//     -106 <= nums1[i], nums2[i] <= 106


// Solution
// Time Complexity: O(log(min(m,n)))
// Space Complexity: O(1)
const findMedianSortedArrays = function (nums1, nums2) {
    let x = nums1.length;
    let y = nums2.length;
    if (x > y) {
        return findMedianSortedArrays(nums2, nums1);
    }
    let low = 0;
    let high = x;
    while (low <= high) {
        let partitionX = Math.floor((low + high) / 2);
        let partitionY = Math.floor((x + y + 1) / 2) - partitionX;
        let maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
        let minRightX = partitionX === x ? Infinity : nums1[partitionX];
        let maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
        let minRightY = partitionY === y ? Infinity : nums2[partitionY];
        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            if ((x + y) % 2 === 0) {
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
            } else {
                return Math.max(maxLeftX, maxLeftY);
            }
        } else if (maxLeftX > minRightY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }
}

//Testing
console.log(findMedianSortedArrays([1, 3], [2])); //2
console.log(findMedianSortedArrays([1, 2], [3, 4])); //2.5
console.log(findMedianSortedArrays([0, 0], [0, 0])); //0
console.log(findMedianSortedArrays([], [1])); //1
console.log(findMedianSortedArrays([2], [])); //2
