document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="container">
    <div class="item" >
      <a href="">click me !</a>
      <div class="menu" style="display: none;">I am a menu</div>
    </div>
  </div>
`;

const aEl = document.querySelector("a");
// <Element>는 클래스임. 클래스가 타입으로 사용되는 것.
const menuEl = document.querySelector<HTMLElement>(".menu"); // html에 소속된 요소라서 style 속성 사용 가능
aEl?.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  if (menuEl) {
    menuEl.style.display = "block";
  }
});
window.addEventListener("click", () => {
  if (menuEl) {
    menuEl.style.display = "none";
  }
});
// 윈도우 클릭 시 메뉴 있으면 꺼주세요
// 근데 click me 누르면 메뉴가 안꺼짐. 이벤트 버블링 때문에 !!!

// 이벤트 버블링, 이벤트 캡쳐링

// document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
//   <div class="container" style="border: 10px solid red; padding: 20px">
//     <div class="item" style="border: 10px solid blue; padding: 20px">
//       <a href="">click me !</a>
//       <div class="menu" style="display: none;">I am a menu</div>
//     </div>
//   </div>
// `;
// window.addEventListener("click", (event) => {
//   console.log("window !");
// });

// document.documentElement.addEventListener(
//   "click",
//   (event) => {
//     console.log("html !");
//   },
//   {
//     capture: true, // html이 가장 먼저 실행됨
//   }
// );

// document.body.addEventListener("click", (event) => {
//   console.log("body !");
// });

// const containerEl = document.querySelector(".container");
// containerEl?.addEventListener("click", (event) => {
//   event.stopPropagation();
//   console.log("container!");
// });

// const itemEl = document.querySelector(".item");
// itemEl?.addEventListener("click", (event) => {
//   console.log("item!");
// });

// const aEl = document.querySelector("a");
// aEl?.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log("a!");
// });
