const getmonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        if(!error) {
            callback(null, month)
        } else {
            callback(new Error('Sorry Data Not Found', []))
        }
    },4000)
}

const getData = (err, month) => {
    if(err) {
        console.log(err.message)
    } else {
        month.map((element) => {
            console.log(element)
        })
    }
}

getmonth(getData)
