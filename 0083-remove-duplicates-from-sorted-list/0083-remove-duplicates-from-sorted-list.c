/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* deleteDuplicates(struct ListNode* head) {
    // Handle the case where the list is empty or has only one element
    if (head == NULL || head->next == NULL) {
        return head;
    }

    struct ListNode* current = head;
    
    while (current != NULL && current->next != NULL) {
        // If the current node's value is equal to the next node's value
        if (current->val == current->next->val) {
            // Skip all nodes with the same value
            struct ListNode* temp = current->next;
            while (temp != NULL && temp->val == current->val) {
                temp = temp->next;
            }
            // Connect current to the node after all duplicates
            current->next = temp;
        } else {
            // Move to the next node if no duplicates
            current = current->next;
        }
    }
    
    return head;
}