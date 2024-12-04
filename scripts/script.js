// Ensure the DOM is fully loaded before executing scripts
document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href").split(".html")[0]; // Extract target from href
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    // Sticky Header on Scroll
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });

    // Profile Image Hover Animation
    const profileImage = document.querySelector(".about-header img, .intro img");
    if (profileImage) {
        profileImage.addEventListener("mouseenter", () => {
            profileImage.style.transform = "scale(1.1)";
            profileImage.style.transition = "transform 0.3s ease";
        });

        profileImage.addEventListener("mouseleave", () => {
            profileImage.style.transform = "scale(1)";
        });
    }

    // Services Card Hover Effect
    const serviceCards = document.querySelectorAll(".services-container div");
    serviceCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-10px)";
            card.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
            card.style.transition = "all 0.3s ease";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        });
    });

    // Portfolio Project Animations
    const portfolioItems = document.querySelectorAll(".portfolio-container img");
    portfolioItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "scale(1.05)";
            item.style.transition = "transform 0.3s ease";
        });

        item.addEventListener("mouseleave", () => {
            item.style.transform = "scale(1)";
        });
    });

    // Dynamic Copyright Year
    const footer = document.querySelector("footer p");
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.innerHTML = `Copyright © ${currentYear} Portfolio & CV | Powered by Dushyant Rajotia`;
    }

    // Scroll to Top Button
    const scrollToTopBtn = document.createElement("button");
    scrollToTopBtn.textContent = "↑";
    scrollToTopBtn.style.position = "fixed";
    scrollToTopBtn.style.bottom = "20px";
    scrollToTopBtn.style.right = "20px";
    scrollToTopBtn.style.background = "#343a40";
    scrollToTopBtn.style.color = "#fff";
    scrollToTopBtn.style.border = "none";
    scrollToTopBtn.style.padding = "10px 15px";
    scrollToTopBtn.style.borderRadius = "50%";
    scrollToTopBtn.style.cursor = "pointer";
    scrollToTopBtn.style.display = "none";
    scrollToTopBtn.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    document.body.appendChild(scrollToTopBtn);

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    // Add a Light Fade-in Animation to All Sections on Scroll
    const sections = document.querySelectorAll("section");
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
                entry.target.style.transition = "all 0.6s ease";
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(50px)";
        fadeInObserver.observe(section);
    });
});
