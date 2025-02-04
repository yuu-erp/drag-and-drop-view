document.body.style.backgroundImage =
  "url(https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/474894142_122210260880195386_6028951266742352029_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=M2jHXkGFlGMQ7kNvgFAyy4h&_nc_zt=23&_nc_ht=scontent.fsgn5-12.fna&_nc_gid=AXGuOuaSUjM5oILevcDEeRQ&oh=00_AYDrr5-MvG7mBUNWgjm4keBVbUSTM1xxsiBYs7-R9j8xUA&oe=67A5E6C7";
document.documentElement.style.setProperty(
  "--primary-text",
  "rgba(255, 255, 255, 1)"
);
document.documentElement.style.setProperty(
  "--secondary-text",
  "rgba(255, 255, 255, 0.7)"
);

document.documentElement.style.setProperty("--card-corner-radius", "20px");
document.documentElement.style.setProperty(
  "--card-background",
  "rgba(0, 0, 0, 0.3)"
);
document.documentElement.style.setProperty(
  "--divider",
  "rgba(255, 255, 255, 0.6)"
);
document.documentElement.style.setProperty(
  "--nav-bar-background",
  "rgba(0, 0, 0, 0.3)"
);
document.documentElement.style.setProperty(
  "--card-background-flat",
  "rgba(0, 0, 0, 0.2)"
);
document.documentElement.style.setProperty(
  "--comment-background",
  "rgba(0, 0, 0, 0.2)"
);
document.documentElement.style.setProperty(
  "--background-deemphasized",
  "rgba(0, 0, 0, 0.2)"
);
document.documentElement.style.setProperty(
  "--secondary-button-background",
  "rgba(255, 255, 255, 0.8)"
);
document.documentElement.style.setProperty(
  "--surface-background",
  "rgba(0, 0, 0, 0.3)"
);
document.documentElement.style.setProperty("--web-wash", "rgba(0, 0, 0, 0");

const allElements = document.querySelectorAll("body *");

allElements.forEach((ele) => {
  const styles = window.getComputedStyle(ele);
  const background = styles.backgroundColor;

  if (background === "rgba(0, 0, 0, 0.3)") {
    ele.style.backdropFilter = "blur(10px)"; // Thêm hiệu ứng blur
    console.log("Đã đổi background + blur cho:", ele);
  }
  if (ele.getAttribute("role") === "navigation") {
    console.log("ele", ele);
    // console.log(
    //   "Phần tử có attribute data-visualcompletion='ignore-dynamic':",
    //   ele.querySelector('[data-visualcompletion="ignore-dynamic"]')
    // );
  }
});
// Column left
document.querySelector(".x9e5oc1 .x1us19tq").style.marginLeft = "16px";

document.querySelector(".x9e5oc1 .x1us19tq .x1iyjqo2 > div").style.paddingTop =
  "10px";
document.querySelector(
  ".x9e5oc1 .x1us19tq .x1iyjqo2 > div"
).style.paddingBottom = "10px";
document.querySelector(".x9e5oc1 .x1us19tq .x1iyjqo2 > div").style.background =
  "rgba(0, 0, 0, 0.3)";
document.querySelector(
  ".x9e5oc1 .x1us19tq .x1iyjqo2 > div"
).style.backdropFilter = "blur(20px)";
document.querySelector(
  ".x9e5oc1 .x1us19tq .x1iyjqo2 > div"
).style.borderRadius = "20px";
document.querySelector(
  ".x9e5oc1 .x1us19tq .x1iyjqo2 > div .x80vd3b"
).style.display = "none";

document.querySelector(
  ".x9e5oc1 .x1us19tq .x1iyjqo2 > div"
).nextElementSibling.style.paddingTop = "10px";
document.querySelector(
  ".x9e5oc1 .x1us19tq .x1iyjqo2 > div"
).nextElementSibling.style.paddingBottom = "10px";
document.querySelector(
  ".x9e5oc1 .x1us19tq .x1iyjqo2 > div"
).nextElementSibling.style.background = "rgba(0, 0, 0, 0.3)";
document.querySelector(
  ".x9e5oc1 .x1us19tq .x1iyjqo2 > div"
).nextElementSibling.style.backdropFilter = "blur(20px)";
document.querySelector(
  ".x9e5oc1 .x1us19tq .x1iyjqo2 > div"
).nextElementSibling.style.borderRadius = "20px";
document.querySelector(
  ".x9e5oc1 .x1us19tq .x1iyjqo2 > div"
).nextElementSibling.style.marginTop = "16px";
