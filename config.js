//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/fee7af11b4edf8eb7c272.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923135673658,923192173398";
global.owner = process.env.OWNER_NUMBER || "923135673658";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT05GRGxPYyszK2ovOHRjODVUOGFyZDhNSS90eW9LQlJ1azBRbFZKSkxtVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidmNxRTdVUzFidk1XYjFlbnd0NFJSYnBWclhnbjJ4NjRSVjRLZXBBZ0F3TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFQytucHhFcWlSZXFzR2tyMkUzWm1ZQnpFWW9vbWZtdU9aUFB6U2Yxa1ZrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5bThIS3JSRUJQRmZCQ2RicS9WMEZTdmdzZjFDNHo1ZGcxY2g3dzhWVlZNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFIYjRQWGhhQmd5WE5saUQ5L2YxdjlKL3NqSkhTMVhSZFZBaktxeUpJM0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFQeCtTazVWRklRbHBTQ1JaeVB3cm5scEFXMkwzZ0lHTmVZcklkMkhvVzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0FMT2N3MVFDOWxtOUxEeFNOVU1vZERuZUIzcXVuLy92RndhNG04endVUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1ZycTh2bVVGVzdiVzgxVnpicmxFRlVYUzdOeTNrZFBZaWRGQURTNDlIND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5sMUxDMlRpYWdDcE4wNzNRQmM3UklGYzczdHJ1cWc1VVJkVEdKM3Z2QkdtYWNTK2IxUXZZdE1ydUJ2ZDVIZTRyRHI2UWZLM3hmREVPMDhrTCtxMEF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI4LCJhZHZTZWNyZXRLZXkiOiJFYTRUbll0dVIwWE5GckkyTWYxVmtjREo2Z2p4WTJQZlJrcndpRnpGR2xJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzg5OTU4MjI1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkI0NTE0QzcyMjY2MTg2MUM3RTc4RDIzMjUzMERBNjZFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTUzNjE2MzR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlZOaFl2OHpkUloyUmdsR3pScmtyZVEiLCJwaG9uZUlkIjoiNjY1ZDg3YjItNWVmZi00YTQzLWExMmUtZDc2NTJlYmQ3YmFiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9GeldZcUM5NitxY3BZNi9USFBNa3B6Y1podz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCMVdkL1IzL2hMK0srZGVFSVdLOXMwbWlONDQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRVJYVEhZRFEiLCJtZSI6eyJpZCI6Ijk0Nzg5OTU4MjI1OjgxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkTNn0XNn1jNn1TNn0XNn1LNnyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnJEMFNnUTBxNzVzUVlZQnlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWDYwNmlMc1c3V21CTWEyZHVvdG14M294dklCSEpLM29taUlxNFNEcjlUQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRFpHelM3VFBkNHJCMTZKcjgxNlh5L0tNajYwdmpuZkMzSFdFc1hmUHViVzVGVUd2QmgyVmZzbHhvOUdJemlDVGxYYjR6UnZPL1NIMXdOVldHTlZNQkE9PSIsImRldmljZVNpZ25hdHVyZSI6Iks0Q3QvSG43VXhDL25ZKzUvelNHWlpneWlQMW1DSUhsREgzRGVjdkhEeEtqZmxtRXFDamtQVkk5Z3JhU1hPbXUvOUdoTzNzVC9EM09OakVnbGJNVkNnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3ODk5NTgyMjU6ODFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVit0T29pN0Z1MXBnVEd0bmJxTFpzZDZNYnlBUnlTdDZKb2lLdUVnNi9VdyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNTM2MTYzMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFITE0ifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "/",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
