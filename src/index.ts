interface PictureInPictire extends HTMLVideoElement {
    requestPictureInPicture(): Promise<void>;
}

const videoEl: PictureInPictire | null = document.querySelector('#video');
const button: HTMLButtonElement | null = document.querySelector('#btn');

async function selectMediaStream() {
    try {
        const mediaDevices = navigator.mediaDevices as any;
        const stream = mediaDevices.getDisplayMedia();
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

button?.addEventListener('click', async () => {
    button.disabled = true;

    await videoEl?.requestPictureInPicture();

    button.disabled = false;
});

export { };
