func minimumOperations(nums []int, start int, goal int) int {
    type state struct {
        val   int
        steps int
    }
    
    visited := make([]bool, 1001)
    queue := []state{{start, 0}}
    
    for len(queue) > 0 {
        cur := queue[0]
        queue = queue[1:]
        
        if cur.val == goal {
            return cur.steps
        }
        
        if cur.val < 0 || cur.val > 1000 {
            continue
        }
        
        if visited[cur.val] {
            continue
        }
        visited[cur.val] = true
        
        for _, n := range nums {
            nextVals := []int{cur.val + n, cur.val - n, cur.val ^ n}
            for _, nxt := range nextVals {
                if nxt == goal {
                    return cur.steps + 1
                }
                if nxt >= 0 && nxt <= 1000 && !visited[nxt] {
                    queue = append(queue, state{nxt, cur.steps + 1})
                } else if nxt < 0 || nxt > 1000 {
                    queue = append(queue, state{nxt, cur.steps + 1})
                }
            }
        }
    }
    
    return -1
}
