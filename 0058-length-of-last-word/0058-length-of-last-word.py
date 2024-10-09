class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        index= -1 
        finalIndex =-1 
        for i in range(len(s)) :
            print(s[i])
            if(s[i]==" "):
                index = i
            else:
               
                finalIndex = index
                
       
        
        return len(s[finalIndex+1:].strip()) 
        