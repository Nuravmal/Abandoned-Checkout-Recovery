const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const planetsRouter = require('./routes/planets/planets.router');
const launchesRouter = require('./routes/launches/launches.router');

const itemsRouter = require('./routes/items/items.router');
const checkoutRouter = require('./routes/checkout/checkout.router');
const abandonedCheckoutRouter = require('./routes/abandonedCheckout/abandonedCheckout.router');
const ordersRouter = require('./routes/orders/orders.router');
const app = express();

app.use(cors());

app.use(morgan('c'));
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", 'public')));

app.use('/items', itemsRouter);
app.use('/checkout', checkoutRouter);
app.use('/abandonedCheckout',abandonedCheckoutRouter);
app.use('/orders', ordersRouter);

app.use('/planets', planetsRouter);
app.use('/launches', launchesRouter);
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"))
})

module.exports = app;