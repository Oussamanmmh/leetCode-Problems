class Solution:
    def maximumCount(self, nums: List[int]) -> int:
        neg = 0 
        i=0 
        while(i < len(nums) and nums[i]< 0  ):
            neg+=1 
            i+=1
        if (nums[0]==0 and nums[len(nums)-1]==0):
            return 0 
        while(i < len(nums)-1 and nums[i]==0  ):
            i+=1

        return max(len(nums)-i,neg)

        