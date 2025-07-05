require('dotenv').config();
const { getOpenCarts } = require('./services/vnda');

(async () => {
  const carts = await getOpenCarts();
  console.log(carts);
})();
