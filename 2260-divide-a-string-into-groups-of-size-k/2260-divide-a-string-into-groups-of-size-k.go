func divideString(s string, k int, fill byte) []string {
    i := 0
    res := make([]string, 0)

    for i < len(s) {
        j := 0
        w := ""
        for j < k {
            if i < len(s) {
                w += string(s[i])
                i++
            } else {
                w += string(fill)
            }
            j++
        }
        res = append(res, w)
    }

    return res
}
