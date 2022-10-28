const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors')
var whitelist = ['http://localhost:3000', 'https://hr-management-4a24c.web.app/']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// Then pass them to cors:
app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send({test:123})
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
