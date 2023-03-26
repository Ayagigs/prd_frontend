let date = new Date(Date.now())
let iso = date.toISOString()
let iso2 = new Date(iso)

console.log(new Date(iso).toUTCString().length)