const logo = document.getElementById("logo");
const originalNavBar = document.querySelector(".navbar");
const menubar = document.getElementById("bars-button");
logo.onclick = () => {
  window.location.href = "https://messilinehani.github.io/burgerina/";
};
menubar.addEventListener("click", () => {
  let PhoneNavigationBar = document.createElement("div");
  document.body.appendChild(PhoneNavigationBar);
  PhoneNavigationBar.style.display = "flex";
  PhoneNavigationBar.style.flexDirection = "column";
  PhoneNavigationBar.style.justifyContent = "start";
  PhoneNavigationBar.style.alignItems = "center";
  let closeButton = document.createElement("img");
  closeButton.setAttribute("src", "./footage/images/close.png");
  closeButton.style.filter = "invert(100%)";
  closeButton.style.width = "30px";
  closeButton.style.marginLeft = "70%";
  closeButton.style.marginTop = "8%";
  closeButton.onclick = () => {
    PhoneNavigationBar.style.display = "none";
    updateOriginalNavbarStyling(); // Update the original navbar styling
  };
  PhoneNavigationBar.appendChild(closeButton);
  const navBar = document.querySelector(".list");
  const navBarItems = document.querySelectorAll(".list-item");
  const navBarItemsContent = document.querySelectorAll(".list-item-content");

  function updateNavigationBar() {
    if (window.innerWidth <= 767) {
      PhoneNavigationBar.style.background = "rgba(0,0,0,0.4)";
      PhoneNavigationBar.style.width = "100%";
      PhoneNavigationBar.style.height = "100%";
      PhoneNavigationBar.style.position = "absolute";
      PhoneNavigationBar.style.top = "0";
      PhoneNavigationBar.style.left = "0";
      PhoneNavigationBar.style.zIndex = "2";
      PhoneNavigationBar.style.paddingTop = "10px";
      PhoneNavigationBar.appendChild(navBar);
      for (let i = 0; i < navBarItems.length; i++) {
        navBarItems[i].style.display = "block";
        navBarItems[i].style.margin = "7vh 0";
        navBarItems[i].style.fontSize = "25px";
        navBarItems[i].style.setProperty("--underlineDisplay", "none");
        navBarItemsContent[i].style.color = "#fff";
        navBarItemsContent[i].style.textAlign = "center";
      }
      console.log("it's working");
    } else {
      PhoneNavigationBar.style.display = "none";
      originalNavBar.appendChild(navBar);
      updateOriginalNavbarStyling(); // Update the original navbar styling
    }
  }

  function updateOriginalNavbarStyling() {
    logo.style.height = "80%";
    logo.style.margin = "auto 0";
    logo.style.display = "flex";
    logo.style.justifyContent = "center";
    logo.style.cursor = "pointer";
    const logoImg = logo.querySelector("img");
    logoImg.style.height = "100%";

    const logoSpan = logo.querySelector("span");
    logoSpan.style.margin = "auto 0 auto 10px";
    logoSpan.style.fontSize = "22px";
    logoSpan.style.letterSpacing = "1.2px";
    logoSpan.style.fontFamily = "Caveat, sans-serif";
    logoSpan.style.color = "#b68958";
    logoSpan.style.userSelect = "none";

    const navBarList = originalNavBar.querySelector(".list");
    navBarList.style.width = "fit-content";
    navBarList.style.margin = "auto 0";

    const navBarItems = navBarList.querySelectorAll(".list-item");
    for (let i = 0; i < navBarItems.length; i++) {
      const listItem = navBarItems[i];
      listItem.style.display = "inline-block";
      listItem.style.margin = "0 10px";
      listItem.style.position = "relative";

      const listItemContent = listItem.querySelector(".list-item-content");
      listItemContent.style.color = "#b68958";
      listItemContent.style.textDecoration = "none";
    }

    const listItemUnderlines = navBarList.querySelectorAll(".list-item::after");
    for (let i = 0; i < listItemUnderlines.length; i++) {
      const underline = listItemUnderlines[i];
      underline.style.content = "";
      underline.style.width = "0%";
      underline.style.height = "2px";
      underline.style.backgroundColor = "#b68958";
      underline.style.position = "absolute";
      underline.style.left = "0";
      underline.style.bottom = "-5px";
      underline.style.borderRadius = "40px";
      underline.style.transition = "all .3s ease-out";
      underline.style.display = "var(--underlineDisplay, block)";
    }

    const secondListItemUnderline = navBarList.querySelector(
      ".list-item:nth-child(2)::after"
    );
    secondListItemUnderline.style.width = "80%";

    originalNavBar.removeEventListener("resize", updateNavigationBar);
  }

  updateNavigationBar(); // Initial call to set the navigation bar based on the window width

  window.addEventListener("resize", updateNavigationBar);
});
