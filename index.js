const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  /**
 *
 *
 *
 * $env:debug="true"; node app.js
 *
 *
 */

/**
 *  Select Debug Mode via env variable
 */
let debug = process.env.debug === "true";
console.log("Test: " + debug);

/**
 *
 * TWITCH BOT SECTION
 *
 */
// ES6 syntax
let TwitchJs = require('twitch-js').default;

// Define configuration options:
let opts = {
        identity: {
            username: 'cubeconlp',
                password: 'oauth:bhvq4jhuy4ymacztewuarm0drttz91'
                    },
        channels: [
            '#salz0r_tv',
           '#cubeconlp'
        ]
};

const token = 'oauth:bhvq4jhuy4ymacztewuarm0drttz91';
const username = 'cubeconlp';
const { chat } = new TwitchJs({ token, username });
const channel = '#salz0r_tv';
chat.connect().then(globalUserState => {
    // Do stuff ...
    chat.join(channel);
});