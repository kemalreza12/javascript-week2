const reverseWords = input => {
    let words = input.split(" ").reverse();
    let str = '';
    for(word in words)
        str += (word > 0 ? " " : "") + words[word];
    return console.log(str);
}
reverseWords("saya belajar javasript")