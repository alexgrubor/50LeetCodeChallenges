// Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:

// Input: s = "cbbd"
// Output: "bb"

// Constraints:

//     1 <= s.length <= 1000
//     s consist of only digits and English letters.

// Solution
// Time Complexity: O(n^2)
// Space Complexity: O(1)

const expandFromMiddle = function (s, left, right) {
  if (s === null || left > right) return 0;
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
};
const longestPalindrome = function (s) {
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    let len1 = expandFromMiddle(s, i, i);
    let len2 = expandFromMiddle(s, i, i + 1);
    let len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }
  return s.substring(start, end + 1);
};

//Testing
console.log(longestPalindrome("babad")); //bab
console.log(longestPalindrome("cbbd")); //bb

