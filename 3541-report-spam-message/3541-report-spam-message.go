func reportSpam(message []string, bannedWords []string) bool {
    set:=make(map[string]struct{})
    count:=0 
    for _ , v := range  bannedWords {
        set[v] = struct{}{} ;
    }
    for _  , word := range message {
        if  _ , exists := set[word]; exists {
            count++
        }
        if count == 2 {
            return true 
        }
    }
    return false 
}