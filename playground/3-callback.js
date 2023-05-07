sum = (x, y, callback) => {
    setTimeout(() => {
        callback(x + y)
    }, 2000)
}

sum(3, 4, (result) => {
    console.log('Sum is ' + result)
})

//1. Why is this a problem. i.e function call should be after the function is defined.
