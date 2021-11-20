window.onload = () => {
  var colc = new Colcade(".grid", {
    columns: ".grid-col",
    items: ".grid-item",
  });
};

// /////////////////////////////// NAV TOGGLE
const navBtn = document.querySelector(".menu-btn");
const headerEl = document.querySelector(".header");

navBtn.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

/////////////////////////////////// Smooth Scrolling
// css html wala tareeqa doesnt work on safari browser

const links = document.querySelectorAll("a:link");
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scoll back to top
    if (href === "#") {
      // scroll by pixel
      window.scrollTo({
        top: 0,
        behaviour: "smooth",
      });
    }
    // scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      // scroll to the section
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile navigation
    if (link.classList.contains("nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

///////////////////////////////////// Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");
// const sectionHeroEl = document.querySelector(".header");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    /* Agr intersection observer ka (target %) threshold se zyada andar he to "isIntersecting is true"
      Matlab in this case if more than 0% is in theviewport then "isIntersecting" will be true.
    */
    if (ent.isIntersecting == false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting == true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // root is the element jisse intersection ho rha he
    // root:null means viewport
    root: null,
    // threshold: 0 means the callBack function will run when 0% of target Element is in the viewPort. (jb poora hero section scroll down krlenge)
    threshold: 0,
    rootMargin: "-80px",
  }
);
// sectionHeroEl is the target for IntersectionObserver
obs.observe(sectionHeroEl);
