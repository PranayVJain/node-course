
const geocode = (address, callback) => {
    console.log('Fetching geocode info for ' + address)
    setTimeout(() => {
        callback(undefined, { latitude: 100, longitude: 102 })
    }, 2000)
}

module.exports = geocode