const token = ~~[Math.random() * 12345678]
const picture = ['1.jpg', '2.jpg', '3.jpg']

function login(username) {
  console.log('Procesiiing data token....')
  return new Promise ((succes, fail) => {
    setTimeout(() => {
    if (username != 'ananda_gilang') fail("maaf bro nama nya salah")
    succes({token})
    }, 200)
  })
}
function getUser(token) {
  console.log('Procesing data apikey....')
  return new Promise ((succes, fail) => {
    if(!token) fail('bro token nya kosong nih ')
    setTimeout(() => {
        succes({apiKey: 'XKey123'})
    }, 500);
  })
}
function getPicture(apiKey) {
  console.log('Memuat gambar....')
 return new Promise ((succes, fail) => {
   if(!apiKey) fail('BRO INI APIKEY NYA KOSONG')
    setTimeout(() => {
        succes({pict: picture})
    }, 1200);
 }) 
}


async function dataUser() {
    try {
    const {token} = await login("ananda_gilang")
    const {apiKey} = await getUser(token)
    const {pict} = await getPicture(apiKey)
    
  
    console.log(`
      token kamu adalah ${token}
      dengan apikey ${apiKey}
      dan ini adalah hasil proses gambar mu!!${pict}
      `)
    } catch (arr) {
      console.log(arr)
    }
  }
dataUser()