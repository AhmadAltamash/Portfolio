
var tl = gsap.timeline();
tl.from(".logo",{
  opacity:0,
  y: -30,
  delay: 0.3,
  stagger: 0.3
});
tl.from("nav a", {
  x: 500,
  opacity: 0,
  delay: 0.2,
  stagger: 0.1,
});
tl.from(".info p", {
  opacity: 0,
  duration: 1,
  y: 30,
  delay: 0.4,
  stagger: 0.6,
});
gsap.from(".about #p1", {
  opacity: 0,
  duration: 1,
  delay:0.5,
  x: 300,
  scrollTrigger: {
    trigger: " .about",
    scroller:"body",
    scrub:2,
    start: "top 60%",
   end: "top 30%"
  },
});
gsap.from(".about #p2", {
    opacity: 0,
    duration: 1,
    delay:0.5,
    x: -300,
    scrollTrigger: {
      trigger: " .about",
      scroller:"body",
      scrub:2,
     start: "top 60%",
   end: "top 30%"
    },
  });

  




























let containers = document.getElementsByClassName("container");

Array.from(containers).forEach((container) => {
  container.onmouseover = () => {
    let headers = container.getElementsByTagName("h3");
    Array.from(headers).forEach((header) => {
      header.style.visibility = "hidden";
    });
  };
});
Array.from(containers).forEach((container) => {
  container.onmouseover = () => {
    let headers = container.getElementsByTagName("h3");
    Array.from(headers).forEach((header) => {
      header.style.visibility = "hidden";
    });
  };
  container.onmouseout = () => {
    let headers = container.getElementsByTagName("h3");
    Array.from(headers).forEach((header) => {
      header.style.visibility = "visible";
    });
  };
});
