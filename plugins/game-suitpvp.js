/* 
    Made by https://github.com/syahrularranger 
    Jangan di hapus credit nya :)
*/
let timeout = 60000
let poin = 500
let poin_lose = -100
let handler = async (m, { conn, usedPrefix }) => {
  conn.suit = conn.suit ? conn.suit : {}
  if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw 'termima tu traje anterior'
  if (!m.mentionedJid[0]) return m.reply(`_a quien te gustaría desafíoa?_\netiqueta a la persona.. ejemplo\n\n${usedPrefix}suit @${owner[1]}`, m.chat, { contextInfo: { mentionedJid: [owner[1] + '@s.whatsapp.net'] } })
  if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `La persona a la que desafías está jugando con otra persona :(`
  let id = 'suit_' + new Date() * 1
  let caption = `
_*traje PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} jugar

por favor @${m.mentionedJid[0].split`@`[0]} 
`.trim()
  let footer = `escriba "acerta/ok/gas" para iniciar la demanda\nescriba "rechaza/no se puede/mas tarde" para rechaza`
  conn.suit[id] = {
    chat: await conn.send2But(m.chat, caption, footer, 'acerta', 'ok', 'rechazar', 'rechazar', m, { contextInfo: { mentionedJid: conn.parseMention(caption) } }),
    id: id,
    p: m.sender,
    p2: m.mentionedJid[0],
    status: 'espere',
    waktu: setTimeout(() => {
      if (conn.suit[id]) conn.reply(m.chat, `_tiempo afuera de traje_`, m)
      delete conn.suit[id]
    }, timeout), poin, poin_lose, timeout
  }
}
handler.tags = ['game']
handler.help = ['trajepvp', 'traje2'].map(v => v + ' @tag')
handler.command = /^traje(pvp|2)$/i
handler.limit = false
handler.group = true

module.exports = handler
