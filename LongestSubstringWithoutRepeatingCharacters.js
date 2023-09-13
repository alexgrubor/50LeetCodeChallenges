// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:
//     0 <= s.length <= 5 * 104
//     s consists of English letters, digits, symbols and spaces.

//Solution
//Time Complexity: O(n)
//Space Complexity: O(n)

const lengthOfLongestSubstring = function (s) {
    let map = {};
    let left = 0;
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        if (map.hasOwnProperty(s[i]) && map[s[i]] >= left) {
        left = map[s[i]] + 1;
        }
        map[s[i]] = i;
        max = Math.max(max, i - left + 1);
    }
    return max;
}

//Testing
console.log(lengthOfLongestSubstring("abcabcbb")); //3
console.log(lengthOfLongestSubstring("bbbbb")); //1
console.log(lengthOfLongestSubstring("pwwkew")); //3
console.log(lengthOfLongestSubstring("")); //0