let handler = async (m, { conn }) => {
let api-hyzer = 'https://api.zacros.my.id/asupan/cecan'
    conn.sendButtonImg(m.chat, api-hyzer, 'Nih', wm2, '𝚂𝚒𝚐𝚞𝚒𝚎𝚗𝚝𝚎', '.cecan', m)
}
handler.help = ['cecan']
handler.tags = ['asupan']
handler.command = /^(cecan)$/i

module.exports = handler
