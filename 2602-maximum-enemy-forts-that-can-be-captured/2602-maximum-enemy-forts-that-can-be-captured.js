var captureForts = function(forts) {
  let max = 0;
  for(let i = 0 ; i<forts.length  ; i++){
        if(forts[i]===1||forts[i]===-1){
            let k = i + 1 ;
            while(k<forts.length && forts[k]===0){
                k++;
            }
            if(k < forts.length && forts[k] !== forts[i] && forts[k] !== 0){
                max = Math.max(max, k - i - 1);
            }
        }
  }
  return max ;
};
