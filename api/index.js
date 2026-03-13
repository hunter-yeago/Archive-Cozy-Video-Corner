const https = require('https');
const url = require('url');

module.exports = function handler(req, res) {
  const API_BASE_URL = process.env.API_BASE_URL;
  const API_KEY_NAME = process.env.API_KEY_NAME;
  const API_KEY_VALUE = process.env.API_KEY_VALUE;

  const params = new URLSearchParams({
    ...url.parse(req.url, true).query,
    [API_KEY_NAME]: API_KEY_VALUE,
  });

  const targetUrl = `${API_BASE_URL}?${params}`;

  https.get(targetUrl, (apiRes) => {
    let data = '';
    apiRes.on('data', (chunk) => { data += chunk; });
    apiRes.on('end', () => {
      res.setHeader('Content-Type', 'application/json');
      res.status(apiRes.statusCode).send(data);
    });
  }).on('error', (err) => {
    res.status(500).json({ error: err.message });
  });
};
