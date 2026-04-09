//=======================================================//

import chalk from 'chalk';

console.log(chalk.magentaBright("► Baileys Whatsapp"));
console.log(chalk.blueBright("► Telegram: ") + chalk.whiteBright("@q_sra & @p_ynn"));
console.log(chalk.blueBright("► YouTube: ") + chalk.whiteBright("@YunNotDev"));
console.log(chalk.blue("enter your numbers :\n"));

import makeWASocket from "./Socket/index.js";
//=======================================================//
export * from "./Defaults/index.js";
export * from "./WABinary/index.js";
export * from "../WAProto/index.js";
export * from "./WAUSync/index.js";
export * from "./Store/index.js";
export * from "./Utils/index.js";
export * from "./Types/index.js";
export * from "./WAM/index.js";
//=======================================================//
export { makeWASocket };
export default makeWASocket;
//=======================================================//
