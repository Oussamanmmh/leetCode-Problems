class Solution:
    def stringHash(self, s: str, k: int) -> str:
        result = ""
        for i in range(0 , len(s) , k) :
            sum_hash = 0 
            for j in range(i , i+k):
                sum_hash+=ord(s[j])%97
            hashed_char = sum_hash % 26 
            result += chr(hashed_char+97)
        return result

            
                
        