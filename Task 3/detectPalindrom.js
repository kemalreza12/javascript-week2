const detectPalindrom = input => {
    let reversed = "";
    for (let i = input.length - 1; i >= 0; i--) {
        reversed += input[i];
    }
    if(reversed == input) {
        console.log('Palindrom')
    } else {
        console.log('Bukan Palindrom')
    }
    return reversed;
}
detectPalindrom('malam')