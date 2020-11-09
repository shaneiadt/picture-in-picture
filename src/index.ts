interface PictureInPictire extends HTMLVideoElement {
    requestPictureInPicture(): Promise<void>;
}

const videoEl: PictureInPictire | null = document.querySelector('#video');
const button: HTMLButtonElement | null = document.querySelector('#btn');

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        if (videoEl) {
            videoEl.srcObject = mediaStream;
            videoEl.onloadedmetadata = () => {
                videoEl.play();
            };
        }

    } catch (error) {
        console.error(error);
    }
}

selectMediaStream();

button?.addEventListener('click', async () => {
    button.disabled = true;

    await videoEl?.requestPictureInPicture();

    button.disabled = false;
});

export { };
