/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
    
    let extracted = [];
    for (let ch of s) {
        if (vowels.has(ch)) {
            extracted.push(ch);
        }
    }
    
    extracted.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    
    let result = [];
    let idx = 0;
    for (let ch of s) {
        if (vowels.has(ch)) {
            result.push(extracted[idx++]);
        } else {
            result.push(ch);
        }
    }
    
    return result.join('');
};
