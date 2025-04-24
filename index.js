const changeThemeMobile = document.getElementById("changeThemeMobile");
const changeThemeDesktop = document.getElementById("changeThemeDesktop");
const changeBackgroundHeroSection = document.getElementById("hero");
const changeBackgroundGallerySection = document.getElementById("gallery");
const changeStyleCardArticle = document.querySelectorAll(".card");

// mobile
changeThemeMobile.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  //Untuk rubah icon
  const isDark = document.body.classList.contains("dark-mode");
  changeThemeMobile.setAttribute("name", isDark ? "sunny-sharp" : "moon-sharp");

  //Untuk rubah theme hero section
  changeBackgroundHeroSection.style.backgroundColor = isDark
    ? "#6c757d"
    : "#f8d7da";

  //untuk rubah background color section gallery
  changeBackgroundGallerySection.style.backgroundColor = isDark
    ? "#6c757d"
    : "#f8d7da";

  //untuk ubah style card ketika darkmode
  changeStyleCardArticle.forEach((card) => {
    card.classList.toggle("card-dark-mode", isDark);
  });
});

// desktop
changeThemeDesktop.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  //Untuk rubah icon
  const isDark = document.body.classList.contains("dark-mode");
  changeThemeDesktop.setAttribute(
    "name",
    isDark ? "sunny-sharp" : "moon-sharp"
  );

  //   Untuk rubah background color section hero
  changeBackgroundHeroSection.style.backgroundColor = isDark
    ? "#6c757d"
    : "#f8d7da";

  //untuk rubah background color section gallery
  changeBackgroundGallerySection.style.backgroundColor = isDark
    ? "#6c757d"
    : "#f8d7da";

  //untuk ubah style card ketika darkmode
  changeStyleCardArticle.forEach((card) => {
    card.classList.toggle("card-dark-mode", isDark);
  });
});
