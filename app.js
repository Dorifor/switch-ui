const appSlider = document.querySelector('.apps-slider');
const timeLabel = document.querySelector('span.time');

appSlider.addEventListener('wheel', onAppSliderScroll);

function onAppSliderScroll(event) {
    appSlider.scrollBy(-event.wheelDelta * 2, 0);
}

function updateTimeLabel() {
    const currentTime = new Date();
    let minutes = currentTime.getMinutes();
    if (minutes < 10)
        minutes = "0" + minutes;
    timeLabel.textContent = currentTime.getHours() + ":" + minutes;
}

setInterval(updateTimeLabel, 1000);
updateTimeLabel();