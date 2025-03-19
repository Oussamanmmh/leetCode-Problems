class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        left_sum = 0 
        right_sum = 0
        for i in range(1 , len(nums)):
            right_sum+=nums[i] 
        print(right_sum)
        for i in range(len(nums)):
            if (left_sum==right_sum):
                return i 
            left_sum+=nums[i]
            if (i < len(nums)-1):
                right_sum-=nums[i+1]

        return -1 
        [1,7,3,6,5,6]