const sum = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

const dowork = async () => {
    const result = await sum(1, 3)
    return result
}

dowork().then((result) => {
    
})