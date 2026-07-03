const EventEmitter = require('events');

const orderEmitter = new EventEmitter();

orderEmitter.on('orderPlaced', (id, item, price) => {
  console.log(`[${id}] ${item} ${price} has been placed.`);
});

function confirmOrder(confirm) {
  console.log('Order confirmed');
}

orderEmitter.on('confirm', confirmOrder);

orderEmitter.emit('orderPlaced', '422', 'MoMo', 200);

orderEmitter.once('delivered', () => {
  console.log('First order delivered.');
});

orderEmitter.emit('delivered');