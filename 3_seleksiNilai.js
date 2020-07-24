const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    function isInRange(value) {
        if(this.lower > this.upper) {
            console.log('Nilai akhir harus lebih besar dari nilai awal')
        } else if(this.lower < this.dataArray && this.upper < this.dataArray || this.lower < this.dataArray && this.upper < this.dataArray) {
            console.log('Jumlah data dalam dataArray tidak ada')
        }
        return value >= this.lower && value <= this.upper;
    }
    
    let range = {
        lower: nilaiAwal,
        upper: nilaiAkhir
    };

    let data = dataArray.sort((a, b) => a - b);
    
    let num = data.filter(isInRange, range);
    console.log(num);
};
seleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])
