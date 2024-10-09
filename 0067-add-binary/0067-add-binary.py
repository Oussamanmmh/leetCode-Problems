class Solution:
    def addBinary(self, a: str, b: str) -> str:
        # Initialize the result list and carry
        result = []
        carry = 0
        
        # Get the maximum length of the two binary strings
        max_length = max(len(a), len(b))
        
        # Iterate through each bit from the end
        for i in range(max_length):
            # Get the current bit or treat it as 0 if out of range
            bit_a = int(a[len(a) - 1 - i]) if i < len(a) else 0
            bit_b = int(b[len(b) - 1 - i]) if i < len(b) else 0
            
            # Calculate the sum of the bits and the carry
            total = bit_a + bit_b + carry
            result.append(str(total % 2))  # Append the current bit (total mod 2)
            carry = total // 2              # Calculate the new carry
            
        if carry:
            result.append(str(carry))
        
        return ''.join(result[::-1])


        