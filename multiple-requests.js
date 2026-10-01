import http from 'node:http'

const promises = []
for (let i = 0; i < 10000; i++) {
    promises.push(
        http.get('http://localhost:3001', (res) => {
            let body = ''
            res.on('data', (c) => (body += c))
            res.on('end', () => {
                console.log(body)
            })
        })
    )
}

const promises2 = []
for (let i = 0; i < 10000; i++) {
    promises2.push(
        http.get('http://localhost:3001', (res) => {
            let body = ''
            res.on('data', (c) => (body += c))
            res.on('end', () => {
                console.log(body)
            })
        })
    )
}

const promises3 = []
for (let i = 0; i < 10000; i++) {
    promises3.push(
        http.get('http://localhost:3001', (res) => {
            let body = ''
            res.on('data', (c) => (body += c))
            res.on('end', () => {
                console.log(body)
            })
        })
    )
}
await Promise.all(promises, promises2, promises3)
// console.log(response.map((r) => r[1]))