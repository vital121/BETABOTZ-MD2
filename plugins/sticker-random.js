var { 
  sticker5 
} = require('../lib/sticker')
var fs = require('fs')

var handler = async (m, { conn, command }) => {
  var error = fs.readFileSync(`./media/sticker/emror.webp`)
  try {
    if (command == 'dinokuning' || command == 'sdino') {
      const res = API('lann', '/api/sticker/dinokuning', { apikey: lann });
      var stiker = await sticker5(res, { packname })
      await conn.sendFile(m.chat, stiker, 'emror.webp', '', m)
    } else if (command == 'patrick' || command == 'spatrick') {
      const res = API('lann', '/api/sticker/patrick', { apikey: lann });
      var stiker = await sticker5(res, { packname })
      await conn.sendFile(m.chat, stiker, 'emror.webp', '', m)
    } else if (command == 'spongebob' || command == 'sspongebob') {
      const res = API('lann', '/api/sticker/spongebob', { apikey: lann });
      var stiker = await sticker5(res, { packname })
      await conn.sendFile(m.chat, stiker, 'emror.webp', '', m)
    } else if ((command == 'doge' || command == 'sdoge') {
      const res = API('lann', '/api/sticker/doge', { apikey: lann });
      var stiker = await sticker5(res, { packname })
      await conn.sendFile(m.chat, stiker, 'emror.webp', '', m)
    } else if (command == 'manusialidi' || command == 'smanusialidi') {
      const res = API('lann', '/api/sticker/manusialidi', { apikey: lann });
      var stiker = await sticker5(res, { packname })
      await conn.sendFile(m.chat, stiker, 'emror.webp', '', m)
    }
  } catch (e) {
    console.log(e)
    await conn.sendFile(m.chat, error, 'error.webp', '', m)
  }
}

handler.command = handler.help = ['dinokuning', 'patrick', 'spongebob', 'doge', 'manusialidi', 'sdino', 'spatrick', 'sspongebob', 'sdoge', 'smanusialidi']
handler.tags = ['sticker']
handler.limit = true
module.exports = handler
