class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        stringInt = ''.join(map(str , digits))
        stringInt = int(stringInt)
        stringInt +=1 
        stringInt = str(stringInt)
        print(stringInt)
        return [int(char) for char in stringInt]
        