const axios = require('axios');

async function getOpenCarts() {
  try {
    const response = await axios.get(process.env.VNDA_API_URL, {
      headers: {
        Authorization: `Bearer ${process.env.VNDA_API_TOKEN}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar carrinhos da Vnda:', error.response?.data || error.message);
    return [];
  }
}

module.exports = { getOpenCarts };
