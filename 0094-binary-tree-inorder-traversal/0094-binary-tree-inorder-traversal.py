# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
            nodes = []
            output= []  
            current = root 
            while current or nodes :
                while current :
                    nodes.append(current)
                    current = current.left
                current = nodes.pop()
                output.append(current.val)
                current = current.right 
            return output 
