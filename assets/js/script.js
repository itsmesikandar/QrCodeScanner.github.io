const dialog = document.querySelector("#dialog");
const openDialogBtn = document.getElementById("openDia");
const closeDialogBtn = document.getElementById("closeDia");
const resultContent = document.getElementById("dCont")
const scanImage = document.querySelector(".image-scan")
var resultt;

let scanner = new Instascan.Scanner({ video: document.getElementById('pre'),mirror: false });
      scanner.addListener('scan', function (content) {
        console.log(content);
        resultContent.innerHTML = content;
        resultt = content;
        dialog.showModal();
        scanner.stop();
      });

      Instascan.Camera.getCameras().then(function (cameras) {
        if (cameras.length > 0) {
          let userAgent = navigator.userAgent;
            
          if(cameras.length == 2 ){
            if(userAgent.match(/firefox|fxios/i)){
              scanner.start(cameras[0])
            }else {
              scanner.start(cameras[1]);
            }
          }else {scanner.start(cameras[0]);}  
        } else {
          console.error('No cameras found.');
        }
      }).catch(function (e) {
        console.error(e);
      });

      openDialogBtn.addEventListener("click", ()=> {
        dialog.close();
        scanner.start();
        window.open(resultt, '_blank');
      })

      closeDialogBtn.addEventListener("click",()=> {
        dialog.close();
        scanner.start()
      })

      scanImage.addEventListener("click", () => {
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "image/*";
        fileInput.style.display = "none";

        fileInput.onchange = () => {
          const file = fileInput.files[0];
          const reader = new FileReader();

          reader.onload = () => {
            const imageData = reader.result;
            console.log(imageData)

            const codeReader = new ZXingBrowser.BrowserQRCodeReader();

            codeReader.decodeFromImageUrl(imageData)
              .then(result => {
                resultContent.innerHTML = result.text;
                resultt = result.text;
                console.log("The Result is "+result)
                dialog.showModal();
                scanner.stop();
              })
              .catch(error => {
                
                alert(`QR code could not be scanned:`);
              });
          };
          reader.readAsDataURL(file);
        };
        document.body.appendChild(fileInput);
    
        fileInput.click();
      });


