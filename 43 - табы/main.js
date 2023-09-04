(function () {
   const tabs = document.querySelectorAll(".tab-head__item");
   const contents = document.querySelectorAll(".tab-content__item");

   tabs.forEach((tab, index) => {
      tab.onclick = () => {
         changeTab(index);
      };
   });

   // function changeTab(index) {
   //    for (let tab of tabs) {
   //       tab.classList.remove("active");
   //    }
   //    tabs[index].classList.add("active");

   //    for (let el of contents) {
   //       el.classList.remove("active");
   //    }
   //    contents[index].classList.add("active");
   // }

   function changeTab(index) {
      setActiveClass(tabs, index);

      setActiveClass(contents, index);
   }

   function setActiveClass(arr, index) {
      for (let el of arr) {
         el.classList.remove("active");
      }
      arr[index].classList.add("active");
   }
})();
