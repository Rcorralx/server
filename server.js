const Gun = require('gun')
const gun = Gun({ peers:  ['http://localhost:8765/gun'] })
gun.get('test').once(v => console.log(v))