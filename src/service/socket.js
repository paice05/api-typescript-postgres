class Socket {
  constructor(io) {
    this.io = io;

    this.connection();
  }

  connection() {
    this.io.on('connection', socket => {
      console.log(socket.id);
    });
  }
}

module.exports = io => {
  new Socket(io);
};
