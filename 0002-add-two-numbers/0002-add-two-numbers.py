# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        r1 , r2 = [] ,[]
        c1 , c2 = l1 , l2 
        while c1 :
            r1.append(c1.val)
            c1 = c1.next
        while c2 :
            r2.append(c2.val)
            c2=c2.next
        r1.reverse()
        r2.reverse()
        r1 = ''.join(map(str , r1))
        r2 = ''.join(map(str ,r2)) 
        res = int(r1) +int(r2) 
        
        res = [int(digit) for digit in str(res)]
        res.reverse()
        head = ListNode(res[0])
        current = head 
        for val in res[1:]:
            current.next = ListNode(val)
            current = current.next

        return head

        