let i = 0;
let images = [];
const button = document.getElementById('button');

    //add images to array
images[0] = 'poster1.png';
images[1] = 'poster2.png';
images[2] = 'poster3.png';
images[3] = 'poster4.png';
images[4] = 'poster5.png';

    // when button is pressed start looping through images array
button.addEventListener('click', function loop() {
    setTimeout(function() {
        document.slide.src = images[i]; //change src of epmty image
        i++;
        if (i<images.length) {
            loop();
        } else {    //restart loop when done
            i=0
            loop();
        }
    }, 1000)    // 1 second
})

