const dialog = document.querySelector("#dialog");
const openDialogBtn = document.getElementById("openDia");
const closeDialogBtn = document.getElementById("closeDia");
const resultContent = document.getElementById("dCont")
var result;

let scanner = new Instascan.Scanner({ video: document.getElementById('pre') });
      scanner.addListener('scan', function (content) {
        console.log(content);
        resultContent.innerHTML = content;
        result = content;
        dialog.showModal();
      });

      Instascan.Camera.getCameras().then(function (cameras) {
        if (cameras.length > 0) {
          scanner.start(cameras[0]);
        } else {
          console.error('No cameras found.');
        }
      }).catch(function (e) {
        console.error(e);
      });

      openDialogBtn.addEventListener("click", ()=> {
        window.open(result, '_blank');
      })

      closeDialogBtn.addEventListener("click",()=> {
        dialog.close();
      })


