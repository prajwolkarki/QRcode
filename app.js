

let imgBox = document.getElementById('imgBox');
let qrImage = document.getElementById('qrImg');
let qrText = document.getElementById('qrText');


const qrGenerate = () => {
    qrImage.src =  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
}