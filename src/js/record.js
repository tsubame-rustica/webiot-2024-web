// import {RelayServer} from "https://chirimen.org/remote-connection/js/beta/RelayServer.js";

// リレーサーバーの接続
// onload = async function() {
//     let relay = RelayServer("chirimentest", "chirimenSocket");
//     channel = await relay.subscribe("chirimenHoge");
//     channel.onmessage = getEnvData;
// }

const gasFetchUrl = 'https://script.google.com/macros/s/AKfycbyAgVER_UJtUnMGd-aVp6mIKdGIdm9wd2kzIwpoS8rOrL3taUO-sTtY5aj0t7jRM4OSYg/exec';

const todayDate = document.getElementById('recordDate');
const temperature = document.getElementById('temp');
const humidity = document.getElementById('humidity');
const memo = document.getElementById('memo');

const submitBtn = document.getElementById('recordSubmitBtn');

submitBtn.addEventListener('click', function() {
    const recordDate = todayDate.value;
    const recordTemp = temperature.value;
    const recordHumidity = humidity.value;
    const recordMemo = memo.value;
    console.log(recordDate, recordTemp, recordHumidity, recordMemo);

    const recordData = {
        date: recordDate,
        temperature: recordTemp,
        humidity: recordHumidity,
        memo: recordMemo
    };

    
}, false);


function getEnvData(msg) {
    let data = msg.data;
    data = JSON.stringify(data);
    console.log(data);

    const envData = JSON.parse(data);
    temperature.innerHTML = envData.temperature;
    humidity.innerHTML = envData.humidity;
}

function fetchPost(data) {

    const options = {
        'method': 'post',
        'headers': {
            'Content-Type': 'application/json'
        },
        'payload': JSON.stringify(data)
    }

    res = UrlFetchApp.fetch(gasFetchUrl, options);
}