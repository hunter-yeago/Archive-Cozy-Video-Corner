const { createProxyMiddleware } = require('http-proxy-middleware');


// This is what was causing me all those issues with not being able to connect to local host!

// Proxy for use on Heroku / deployment platforms
if (process.env.NODE_ENV == "production") {

  console.log('firing production proxy');
  module.exports = function (app) {
    app.use(
      '/api',
      proxy({
        target: 'https://www.googleapis.com/youtube/v3/search',
        changeOrigin: true,
      })
    );
  };

// Proxy for use on local machine / local host 3000
} else if (process.env.NODE_ENV !== "production") {
  console.log('firing development proxy');

  module.exports = function(app) {
    app.use(
      createProxyMiddleware(["/api", , "/otherApi"], { target: "http://localhost:8080" })
    );
  };
}

