// import {RelayServer} from "https://chirimen.org/remote-connection/js/beta/RelayServer.js";

// 水やり用のモーダル
const modal = document.getElementById('modal');
const modalText = document.getElementById('confirmText');
const modalBtn = document.getElementById('confirmBtnInner');

const wateringBtn = document.getElementById('wateringBtn');

let needWatering = false;

// リレーサーバーの接続
// onload = async function() {
//     let relay = RelayServer("chirimentest", "chirimenSocket");
//     channel = await relay.subscribe("chirimenHoge");
//     channel.onmessage = checkWatering;
// }

function closeModal() {
  modal.style.display = 'none';
}

function showWateringModal() {
    modal.style.display = 'flex';
    if (needWatering) {
        modalText.innerHTML = '水やりが必要です';
        modalBtn.innerHTML = '水やりをする';
    } else {
        modalText.innerHTML = '水やりは不要です';
        modalBtn.innerHTML = '閉じる';
    }    
}

function checkNeedWatering(msg) {
    // 土壌センサの値を取得
    let data = msg.data; 
    data = JSON.stringify(data);
    console.log(data);
    if (data < 50) {
        needWatering = true;
    }
}

wateringBtn.addEventListener('click', showWateringModal, false);

modalBtn.addEventListener('click', function() {
    if (needWatering) {
        // リレーサーバーに水やりを通知
        // channel.send("watering");
        console.log('watering');
    }
    closeModal();
}, false);

