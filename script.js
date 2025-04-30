document.addEventListener("DOMContentLoaded", () => {
  const rotatingContent = document.querySelector(".rotating-content");
  const bannerRotatingItems = document.querySelectorAll(".inner-rotate p");
  const animatedTxt = document.querySelectorAll(".section-heading span");
  const moreSection = document.querySelector(".more-section");
  const projectsWorked = [
    {
      name: "clientPoint",
      displayName: "Client Point",
      alt: "clientpoint_company",
      href: "https://www.clientpoint.net/",
    },
    {
      name: "cleanProposals",
      displayName: "Clean Proposals",
      alt: "clean_proposals_logo",
      href: "https://cleanproposals.com/?utm_source=google-ads&utm_medium&utm_campaign=21829181461&utm_term&utm_content&device=c&gc_id=21829181461&h_ga_id&h_ad_id&h_keyword_id&h_keyword&h_placement&g_special_campaign=true&gad_source=1&gclid=Cj0KCQjw4Oe4BhCcARIsADQ0csl0zoqHCBLGeZbsVeDL_dSzuUamS5q3R3dGg_RweGh9SMsSc7Ky0iQaAmj-EALw_wcB",
    },
    {
      name: "easyWebinar",
      displayName: "Easy Webinar",
      alt: "easy_webinar_logo",
      href: "https://easywebinar.com/?fpr=2x5qp&fp_sid=1-g-Cj0KCQjw99e4BhDiARIsAISE7P9XEM3zjCaY1zj_TQRCU_al3xUZYINIAhh3ap_QfeyEfgUPUBoyrh0aAnsOEALw_wcB&gad_source=1",
    },
    {
      name: "streamFabriken",
      displayName: "Stream Fabriken",
      alt: "stream_fabriken_logo",
      href: "https://streamfabriken.com/",
    },
    {
      name: "clientPoint",
      displayName: "Client Point",
      alt: "clientpoint_logo",
      href: "https://www.clientpoint.net/",
    },
    {
      name: "cleanProposals",
      displayName: "Clean Proposals",
      alt: "clean_proposals_logo",
      href: "https://cleanproposals.com/?utm_source=google-ads&utm_medium&utm_campaign=21829181461&utm_term&utm_content&device=c&gc_id=21829181461&h_ga_id&h_ad_id&h_keyword_id&h_keyword&h_placement&g_special_campaign=true&gad_source=1&gclid=Cj0KCQjw4Oe4BhCcARIsADQ0csl0zoqHCBLGeZbsVeDL_dSzuUamS5q3R3dGg_RweGh9SMsSc7Ky0iQaAmj-EALw_wcB",
    },
    {
      name: "easyWebinar",
      displayName: "Easy Webinar",
      alt: "easy_webinar_logo",
      href: "https://easywebinar.com/?fpr=2x5qp&fp_sid=1-g-Cj0KCQjw99e4BhDiARIsAISE7P9XEM3zjCaY1zj_TQRCU_al3xUZYINIAhh3ap_QfeyEfgUPUBoyrh0aAnsOEALw_wcB&gad_source=1",
    },
    {
      name: "streamFabriken",
      displayName: "Stream Fabriken",
      alt: "stream_fabriken_logo",
      href: "https://streamfabriken.com/",
    },
  ];

  const list = document.getElementById("gallery");

  if (rotatingContent) {
    rotatingContent.addEventListener("animationend", () => {
      rotatingContent.classList.add("repeating-animation");
    });
  }

  const observerOptions = {
    root: document.querySelector(".outer-wrapper"),
    threshold: 0.8,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add bold class from top banner scroll
        entry.target.classList.add("visible");
      } else {
        // Remove bold class from top banner scroll
        entry.target.classList.remove("visible");
      }
    });
  }, observerOptions);

  bannerRotatingItems.forEach((item) => {
    observer.observe(item);
  });

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;
    return (
      rect.top < viewportHeight * 0.8 && // element distance from top
      rect.bottom >= viewportHeight * 0.2 // element distance from bottom
    );
  }

  if (moreSection) {
    window.addEventListener("scroll", () => {
      if (isElementInViewport(moreSection)) {
        const scrollY = window.scrollY;
        const newHeight = 1 + scrollY / 3; // Height based upon the scroll position

        // Styles to be updated
        moreSection.style.height = `${newHeight}px`;
        moreSection.style.transition = "200ms";
        if (moreSection.style.height >= "200px") {
          moreSection.style.padding = "30px";
        }
      } else {
      }
    });
  } else {
    console.log("Element not found");
  }

  if (list) {
    // we have learned the part on how to add elements directly into DOM using js in intro to web programming class
    for (let i = 0; i < projectsWorked.length; i++) {
      const listItem = document.createElement("div");
      listItem.style.cursor = "pointer";
      listItem.classList.add("gallery-item");
      const anchorItem = document.createElement("a");
      anchorItem.href = projectsWorked[i].href;
      const imgItem = document.createElement("p");
      imgItem.style.fontSize = "30px";
      imgItem.style.color = "black";
      imgItem.textContent = projectsWorked[i].displayName;
      imgItem.alt = projectsWorked[i].alt;
      anchorItem.appendChild(imgItem);
      listItem.appendChild(anchorItem);
      list.appendChild(listItem);
    }
  }

  const observeView = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Element is in view
        console.log("Element is in the viewport!");
      } else {
        // Element is out of view
        console.log("Element is out of the viewport!");
      }
    });
  }, observeBody);

  observeView.observe(animatedTxt);
  animatedTxt.forEach((item) => {
    observeView.observe(item);
  });
});

openSlider = () => {
  let slider = document.getElementById("contacts-slider");
  slider.classList.toggle("opened");
};
openMobileNav = () => {
  let mobileNav = document.getElementById("mobile-menu");
  mobileNav.classList.toggle("opened");
};
