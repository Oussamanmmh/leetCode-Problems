/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
   
   let prefix = ""

    const smallString = strs.reduce((shortest, current) => 
     current.length < shortest.length ? current  : shortest
            );
          
            
    for(let j=0 ; j<smallString.length ; j++)
    {       

                let courantLetter = smallString[j]
               
                
                        for (let i=0 ; i < strs.length ; i++){
                            
                            if (courantLetter!== strs[i][j])
                            {
                                return prefix
                            }

                           
                            
                        }
                        prefix += courantLetter
                    


               

    }

    return prefix
        
    
};