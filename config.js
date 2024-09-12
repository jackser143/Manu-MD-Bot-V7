const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "", //Add Your Session id
ALIVE_IMG : process.env.ALIVE_IMG || "https://telegra.ph/file/f89a97a65465401faf323.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "me!! ivde und makkale",
MENU_IMG : process.env.MENU_IMG || "https://i.imgur.com/cqBiIhM.mp4",
MODE : process.env.MODE || "private",    
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_BIO: process.env.AUTO_BIO || "true",
READ_CMD: process.env.READ_CMD || "true",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
};
