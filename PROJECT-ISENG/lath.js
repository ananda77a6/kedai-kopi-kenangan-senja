const text = document.getElementById('pertanyaan')
const SkyBot = document.getElementById('jawaban')
let init = 0
const BotSay = () => {
    return["Halo perkenalkan nama saya cuyBot, Siapa nama kamu?", `Halo ${SkyBot.value} salam kenal, kalo boleh tau umur kamu berapa?`]
}
text.innerHTML = BotSay()[0]
function Botstar() {
init++
    if(init === 1) {
        text.innerHTML = BotSay()[1]
    } else if(init === 2) {
        console.log({userJawab: SkyBot.value})
    }
}