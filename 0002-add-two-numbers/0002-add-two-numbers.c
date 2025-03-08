/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */


struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {
    struct ListNode *l3 = (struct ListNode*)malloc(sizeof(struct ListNode));
    if (l3 == NULL) {
        printf("Memory allocation failed\n");
        exit(0);
    }

    struct ListNode *head = l3; // Pointer to track the current node
    int carry = 0;

    while (l1 != NULL || l2 != NULL || carry != 0) {
        int sum = carry; // Start with carry

        if (l1 != NULL) {
            sum += l1->val;
            l1 = l1->next;
        }
        
        if (l2 != NULL) {
            sum += l2->val;
            l2 = l2->next;
        }

        head->val = sum % 10; // Store the digit
        carry = sum / 10;     // Update the carry

        // Only create the next node if necessary
        if (l1 != NULL || l2 != NULL || carry != 0) {
            head->next = (struct ListNode*)malloc(sizeof(struct ListNode));
            if (head->next == NULL) {
                printf("Memory allocation failed\n");
                exit(0);
            }
            head = head->next;
            head->next = NULL; // Initialize the next pointer
        }
    }

    head->next = NULL; // Set the last node's next to NULL to avoid misalignment
    return l3;        // Return the head of the list
}
