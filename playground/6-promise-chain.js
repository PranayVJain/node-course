const sum = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        },2000)
    })
}

sum(3, 4).then((result) => {
    console.log(result)
    return sum(result, 3)
}).then((result1) => console.log(result1))