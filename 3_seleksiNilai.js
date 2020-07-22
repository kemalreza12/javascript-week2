const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    function isInRange(value) {
        if(this.upper < this.lower) {
            console.log('Nilai akhir harus lebih besar dari nilai awal')
           
        } else if(this.num == null ) {
            console.log('Jumlah angka dalam dataArray tidak ada')
        }
        return value >= this.lower && value <= this.upper;
    }
    
    let range = {
        lower: nilaiAwal,
        upper: nilaiAkhir
    };

    let data = dataArray.sort();
    
    let num = data.filter(isInRange, range);
    console.log(num);
};
seleksiNilai(5,19,[8,4,5,7])