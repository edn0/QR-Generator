function generateQRCode() {
    const text = document.getElementById('text').value;
    if (text.trim() === '') {
        alert('Please enter a text or URL');
        return;
    }
    const qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = '';
    new QRCode(qrcodeContainer, text);
}
