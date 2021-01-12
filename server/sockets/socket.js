const { TicketControl } = require('../classes/ticket-control');
const { io } = require('../server');

const ticketControl = new TicketControl();

io.on('connection', (client) => {

  client.on('siguienteTicket', (data, callback) => {

    let siguiente = ticketControl.siguiente();

    console.log(siguiente);
    callback(siguiente);
  });
});