const videoEl = document.querySelector("#video");
const button = document.querySelector("#btn");
async function selectMediaStream() {
  try {
    const mediaDevices = navigator.mediaDevices;
    const stream = await mediaDevices.getDisplayMedia();
    if (videoEl) {
      videoEl.srcObject = stream;
      videoEl.onloadedmetadata = () => {
        videoEl.play();
      };
    }
  } catch (error) {
    console.error(error);
  }
}
selectMediaStream();
button?.addEventListener("click", async () => {
  button.disabled = true;
  await videoEl?.requestPictureInPicture();
  button.disabled = false;
});
