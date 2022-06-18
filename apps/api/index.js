const express = require('express');
const logger = require('@prashantvermaiiitb/logger');

const PORT = process.env.PORT || 8080;
const app = express();

app.get('/greeting', (req, res) => {
    logger.info('/greeting was called');
    res.send({
        message: `Hello, ${req.query.name || 'World'} from server.`
    })
});

app.listen(PORT, () => console.log(`Example app is listening on port ${PORT}`));