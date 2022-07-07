const { log } = require('console');
const EventEmitter = require('events');

const CustomEmitter = new EventEmitter();

CustomEmitter.on('response', (h, w)=>{
    log(`data received some ${h}, so ${w} `);
})

CustomEmitter.emit('response', 'help', 'welp')