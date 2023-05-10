const doWork = (callback) => {

    setTimeout(() => {
        callback(undefined, 'Success')
    }, 2000)

}

doWork((error, response) => {
    console.log(response)
})