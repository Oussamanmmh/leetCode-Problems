class Solution:
    def mySqrt(self, x: int) -> int:
        if x <= 1 :
            return x 
        left , right  = 0 , x 
        while left <= right: 
            mid = left + (right - left) // 2
            square = mid * mid
            if square == x:
                return mid
            elif square < x:
                left = mid + 1
            else:
                right = mid - 1
        return right
        