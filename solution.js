// source: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/



// CODE CURRENTLY NOT PASSING!! Exceeding max. call stack, and failing tests like this:
//
// Your input
// [2,6,3,6,7,2,3,4,5]
// [3,3,6,2,3,7,2,3,4]
// Your answer
// [3,3,2,3,7,2,3,4]
// Expected answer
// [3,3,6,2,7,2,4]



var intersect = function(nums1, nums2) {
    let intersectArray = [];
    let index = {
        nums1: 0,
        nums2: 0
    };
    
    while (index.nums2 < nums2.length) {
        index.nums1 = 0;
        while (index.nums1 < nums1.length) {
            checkIndexMatch();
            index.nums1++;
        };
        index.nums2++;
    };

    return intersectArray;
    
    
    
    function checkIndexMatch() {
        let currentNum1 = nums1[index.nums1];
        let currentNum2 = nums2[index.nums2];

        if (currentNum1 == currentNum2) {
            intersectArray.push(currentNum1);
            index.nums1++;
            index.nums2++;
            checkIndexMatch();
        };
    };
};