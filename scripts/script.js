// Ensure the script runs only after DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed!");

    // Highlight the active navigation link
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });

    // Back-to-top button
    const backToTopButton = document.createElement("button");
    backToTopButton.innerText = "↑ Back to Top";
    backToTopButton.id = "backToTop";
    backToTopButton.style.display = "none";
    document.body.appendChild(backToTopButton);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Dynamic Year for Footer
    const footer = document.querySelector("footer p");
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.innerHTML = `Copyright © ${currentYear} Portfolio & CV | Powered by Portfolio & CV`;
    }

    // Contact Page Form Validation
    const contactForm = document.querySelector("form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const message = document.querySelector("#message").value.trim();

            if (!name || !email || !message) {
                e.preventDefault();
                alert("Please fill out all required fields!");
            } else if (!validateEmail(email)) {
                e.preventDefault();
                alert("Please enter a valid email address!");
            } else {
                alert("Form submitted successfully!");
            }
        });
    }

    // Email validation function
    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    // Portfolio Page Lightbox Functionality
    const portfolioImages = document.querySelectorAll(".portfolio img");
    if (portfolioImages.length) {
        const lightbox = document.createElement("div");
        lightbox.id = "lightbox";
        document.body.appendChild(lightbox);

        portfolioImages.forEach(image => {
            image.addEventListener("click", () => {
                lightbox.classList.add("active");
                const img = document.createElement("img");
                img.src = image.src;
                while (lightbox.firstChild) {
                    lightbox.removeChild(lightbox.firstChild);
                }
                lightbox.appendChild(img);
            });
        });

        lightbox.addEventListener("click", () => {
            lightbox.classList.remove("active");
        });
    }

    // Smooth Scroll for Navigation Links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetID = link.getAttribute("href");
            const targetSection = document.querySelector(targetID);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
