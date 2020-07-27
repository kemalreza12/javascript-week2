const divideAndSort = num => {
    if(typeof num === 'number') {
        const str = num.toString().split(0)
        const sorting = str.map((element) => {
            return element.split('').sort().join('')
        })
        const merge = sorting.join('')
        
        console.log(merge)
    } else {
        console.log('Parameter harus deret angka')
    }
}

divideAndSort(5956560159466056)