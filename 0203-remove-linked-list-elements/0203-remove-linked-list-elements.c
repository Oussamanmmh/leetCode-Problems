/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* removeElements(struct ListNode* head, int val) {
   
    struct ListNode * prev =  NULL ; 

    while(head != NULL && head->val == val){
        head = head->next ;
    }
    struct ListNode * current = head ;
    
    while (current != NULL) {
        
        prev = current ;
        current = current->next ;
        while(current != NULL && current->val == val){
        current = current->next ;
        }
      prev->next = current ;

    }
    return head ;
}