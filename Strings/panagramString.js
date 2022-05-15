/*

// Using IndexOf in an Array
const isPanagram = (s) => {
    let str = s.toLowerCase();
    // let str = s;
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for(let i=0;i<alphabet.length;i++){
        if(str.indexOf(alphabet[i]) < 0){
            return false;
        }
    }

    return true;
}
*/

// Using SET DS
const isPanagram = (s) => {
    let str = s.toLowerCase();
    const hm = new Set();
    for(let j=0;j<str.length;j++){
        hm.add(str[j]);
    }

    // let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for(let i=0;i<alphabet.length;i++){
        if(!hm.has(alphabet[i])){
            return false;
        }
    }

    return true;
}

let s = 'We promptly judged antique ivory buckles for the next prize';
let ans = isPanagram(s);
console.log(ans);