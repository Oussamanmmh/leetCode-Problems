func reportSpam(message []string, bannedWords []string) bool {
    set:=make(map[string]bool)
    count:=0 
    for _ , v := range  bannedWords {
        set[v] = true ;
    }
    for _  , word := range message {
        if set[word]{
            count++
        }
        if count == 2 {
            return true 
        }
    }
    return false 
}