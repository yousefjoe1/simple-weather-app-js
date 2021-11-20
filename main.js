const container = document.querySelector('#cont');
const btn = document.getElementById('btn');
const result = document.getElementById('res');
const url = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const key = '&units=metric&appid=68c617629e3720ee1ff4aad52881d98f';
let spans = document.querySelectorAll('#res span')
const input = document.getElementById('code');

window.onload = ()=>{
    input.value = ''
}

btn.onclick = ()=>{
    if(!input.value.trim()){
        writecode()
    }else {
        getw(url,input,key);
        let spans = document.querySelectorAll('#res span');
        spans[0].style.display = 'block';
        spans[1].style.display = 'block';
        spans[2].style.display = 'block';
        spans[3].style.display = 'block';
    }

}
function writecode(){
    alert('write')
}

async function getw(url,input,key){
    let first =  await fetch(url + input.value + key);
    let second = await first.json();
    let data = second;
    try{
            let obj = [{
                temp : data.main.temp,
                name : data.name,
                descreption : data.weather[0].description,
                country: data.sys.country
            }]
            spans[0].innerHTML = `Temp: ${obj[0].temp}.`;
            spans[1].innerHTML = `City Name: ${obj[0].name}.`;
            spans[2].innerHTML = `Description: ${obj[0].descreption}.`;
            spans[3].innerHTML = `Country: ${obj[0].country}.`;
            input.value = '';
        }catch(er){
            alert(`status: ${first.status} And , statusText: ${first.statusText}`)
            input.value = '';
            // obj = [{}]
        }
        
    }


// async function get(url,input,key){
// await fetch(url+ input.value + key).then((res) => {
//     let resp = res.json().then(respon=>{
//         try{
//             let obj = {
//                 temp : respon.main.temp,
//                 name : respon.name,
//                 descreption : respon.weather[0].description,
//                 country: respon.sys.country
//             }
//             spans[0].innerHTML = `Temp: ${obj.temp}`;
//             spans[1].innerHTML = `City Name: ${obj.name}`;
//             spans[2].innerHTML = `Description: ${obj.descreption}`;
//             spans[3].innerHTML = `Country: ${obj.country}`;
//         }catch(er){
//             alert(er)
//             console.log(er)
//         }
//         }
// )
// }).then(r=>{
//     input.value = ''
// })
// }
