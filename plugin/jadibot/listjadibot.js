const prettyms = require('pretty-ms')

module.exports = {
  name: "listjadibot",
  alias: ["listjadibot","bots"],
  category: "jadibot",
  desc: "mostrando a los usuarios que se suben a los bots!!",
  async run({conn, msg}){
    try {
      let user = [... new Set([...global.conns.filter(conn => conn).map(conn => conn)])]
      te = "*Lista sub bots*\n\n"
      te += ` Total : ${global.conns.length}\n\n`
      for(let i of user){
        y = await conn.decodeJid(i.user.id)
        te += " × Usuarios : @" + y.split("@")[0] + "\n"
        te += " × Nombre : " + i.user.name + "\n"
        te += " × activo desde : " + await prettyms(Date.now() - i.time, { verbose: true, }) + "\n\n"
      }
      user != "" ? await msg.reply(te,{withTag : true}) : await msg.reply("_*No hay usuarios que sean sub-bots..*_")
    } catch (e){
      global.error(msg.command, e, msg)
    }
  }
}
