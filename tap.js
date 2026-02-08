// Use native JS selectors instead of $
const pad = document.querySelector('#gesture-pad'); 
const status = document.querySelector('#status');

if (pad) {
    const mc = new Hammer.Manager(pad);

    const tripleFingerDoubleTap = new Hammer.Tap({
      event: '3f_double_tap',
      pointers: 3,
      taps: 2
    });

    mc.add(tripleFingerDoubleTap);

    mc.on('3f_double_tap', (ev) => {
      status.textContent = "Success!";
      pad.style.backgroundColor = "#27ae60";
    });
}