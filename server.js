const app = require('express')();
const server = require('http').createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});

io.on('connection',socket=>{
    console.log('user come in');
    socket.on('chat message',msg=>{
        console.log(msg);
        io.emit('chat message',msg);
    })
    socket.on('chat image',img=>{
        console.log('server got picture')
        io.emit('chat image',img)
    })
    socket.on('disconnect',()=>{
        console.log('user come out');
    })

})

server.listen('3000', () => 'server opening')

console.log('server is running')