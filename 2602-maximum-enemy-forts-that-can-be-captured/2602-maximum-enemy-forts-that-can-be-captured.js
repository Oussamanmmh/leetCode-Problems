var captureForts = function(forts) {
    let max = 0;

    for (let i = 0; i < forts.length; i++) {
        if (forts[i] === 1 || forts[i] === -1) {
            let j = i + 1;
            while (j < forts.length && forts[j] === 0) {
                j++;
            }

            if (j < forts.length && forts[j] !== forts[i] && forts[j] !== 0) {
                max = Math.max(max, j - i - 1);
            }
        }
    }

    return max;
};
