const menuToggle = document.getElementById("menu-toggle");
      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () => (menuToggle.checked = false));
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.id;
              document
                .querySelectorAll(".nav-links a")
                .forEach((a) =>
                  a.classList.toggle(
                    "active",
                    a.getAttribute("href") === `#${id}`
                  )
                );
            }
          });
        },
        { threshold: 0.2, rootMargin: "-19% 0px" }
      );

      document
        .querySelectorAll("section[id]")
        .forEach((section) => observer.observe(section));

      // AOS
      AOS.init({
        offset: 200,
        duration: 1000,
      });