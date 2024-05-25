let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");

function qrGenerate() {
  if (qrText.value.length > 0) {
    qrImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value; // Set the src attribute of qrImg
    imgBox.classList.add("showImg"); // Add the "showImg" class to imgBox
  } else {
    qrText.classList.add("errors");
    setTimeout(() => {
      qrText.classList.remove("errors");
    }, 1000);
  }
}
