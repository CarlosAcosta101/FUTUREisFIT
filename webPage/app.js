const parallax_el = document.querySelectorAll(".parallax")

let xValue = 0;
let yValue = 0;
let rotateDegree = 0;

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    // Doubt, why rotate degree should give a value between -1 and 1.
    rotateDegree = (xValue / (window.innerWidth / 2)) * 20;


    parallax_el.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let rotateSpeed = el.dataset.rotation;

        let isInLeft =
            parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
        // zValue is the result of substracting the position of the mouse in the page (relative to the left by default) minus the distance 
        // of each image from the left of the page. Multiplied by the the Value of isInLeft by 0.1 to decrease the speed
        let zValue = (e.clientX - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.5;


        // This creates the parallax effect controlling x, y and z axis of each image the z axis is relative to the movement of the mouse in the x axis
        el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px)) rotateY(${rotateDegree * rotateSpeed}deg) perspective(2300px) translateZ(${zValue * speedz}px)`;
    });
});

