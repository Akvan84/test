const Menu = async () => {
  let data = await fetch("https://akvan84.github.io/JsonServer/db.json");
  let result = await data.json();
  let menu = result.menu.map((elem) => {
   
    if (elem.dropdown.length) {
      return `
        <li>
        <a href="${elem.link}">${elem.name}</a>
        <ul class="subMenu">
          ${elem.dropdown
            .map((e) => {
              return `
            <li><a href="${e.link}">${e.name}</a></li>
            `;
            })
            .join("")}
          
        </ul>
        </li>
        `;
    } else {
      return `
        <li><a href="${elem.link}">${elem.name}</a></li>
        `;
    }
  });

  document.querySelector(".menu").innerHTML = menu.join("");
};

export default Menu;
