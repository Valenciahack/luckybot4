import fs from 'fs'
let handler = async (m, { conn }) => {
conn.reply(m.chat, `*https://github.com/Valenciahack/luckybot4*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'ππ²ππΈπΏπ ππ·π°πππ°πΏπΏ π±πΎπ πΌπ³',
body: 'ΰΌΊπππππ πππΰΌ»α΄',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/Valenciahack/luckybot4`}}})
}
handler.command = ['sc','script']
handler.help = ['sc']
handler.tags = ['General']
export default handler
