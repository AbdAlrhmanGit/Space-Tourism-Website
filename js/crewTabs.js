// global variabls
let tabList = document.querySelector(`[role="tablist"]`);
let tabs = tabList.querySelectorAll(`[role="tab"]`);
let tabsLength = tabs.length;
let tabFocus = 0;
let isShiftPress = false;
// add event listner to tablist
// key down is a event that fire when we pressd a key down while the focus is on the tabList

tabs[0].addEventListener("focus", (_) => (tabFocus = 0));
tabList.addEventListener("keydown", (e) => {
   let key = e.key;
   isShiftPress = key === "Shift" ? true: false
   if (!["ArrowLeft", "ArrowRight", "Tab"].includes(key)) return;
   
   if (key === "ArrowLeft" || (key === "Tab" && isShiftPress)) {
      tabFocus === 0 ? (tabFocus = tabsLength - 1) : tabFocus--;
      if (key === "ArrowLeft") tabs[tabFocus].focus();
   } else {
      tabFocus === tabsLength - 1 ? (tabFocus = 0) : tabFocus++;
      if (key === "ArrowRight") tabs[tabFocus].focus();
   }
   
});
tabList.addEventListener("keyup", _ => isShiftPress = false);

tabList.addEventListener("click", (e) => {
   let target = e.target;
   if (target.nodeName != "BUTTON") return;
   Array.from(tabs).some((el, index) => {
      if (el === target) {
         tabFocus = index;
         return true;
      }
   });
   if (target.ariaSelected === "true") return;
   
   let activeButton = tabList.querySelector(`[aria-selected="true"]`);
   activeButton
      .getAttribute("aria-controls")
      .split(" ")
      .forEach((id) => {
         let element = document.getElementById(id);
         element.setAttribute("hidden", "");
      });
   activeButton.ariaSelected = "false";


   target.ariaSelected = "true";
   target
      .getAttribute("aria-controls")
      .split(" ")
      .forEach((id) => {
         let element = document.getElementById(id);
         element.removeAttribute("hidden");
      });
});
