const { smd, sleep } = require('../lib');

smd({ cmdname: "developer", type: "fun", info: "𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥", filename: __filename }, async (citel) => {
  const messages = [
    "𝗥𝗖𝗗 𝗧𝗘𝗔𝗠 𝗠𝗘𝗠𝗕𝗘𝗥𝗦 ",
    "` 𝗥𝗘𝗔𝗟 𝗗𝗘𝗫𝗧𝗘𝗥` 94789958225 ",
    " `𝗖𝗬𝗕𝗘𝗥 𝗗𝗘𝗫𝗧𝗘𝗥` 94785274495 ",
    " `𝗞𝗜𝗡𝗚 𝗥𝗔𝗩𝗜` 94757660788 ",
    " `𝗖𝗛𝗔𝗞𝗬 𝗕𝗢𝗬` 94741698653 ",
    " █ █ █ █ █ 50%",
    " █ █ █ █ █ █ 60%",
    " █ █ █ █ █ █ █ 70%",
    " █ █ █ █ █ █ █ █ 80%",
    " █ █ █ █ █ █ █ █ █ 90%",
    " █ █ █ █ █ █ █ █ █ █ 100%",
    "*RCD BOT PREFECT*",
    "*THANKS FOR ALL*"
  ];

  let editedMessage;
  for (const message of messages) {
    editedMessage = await citel.send(editedMessage || message);
    await sleep(1000);
    editedMessage = await citel.edit(editedMessage, message);
  }
});