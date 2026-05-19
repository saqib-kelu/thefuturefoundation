/* =========================
   LOAD COMPONENT
========================= */

async function loadComponent(id, file) {

    const element = document.getElementById(id);

    // Prevent errors if container does not exist
    if (!element) return;

    try {

        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(`Failed to load ${file}`);
        }

        const data = await response.text();

        element.innerHTML = data;

    } catch (error) {

        console.error(error);

    }

}


/* =========================
   INITIALIZE WEBSITE
========================= */

async function initializeWebsite() {

    /* ---------- TOPBAR ---------- */
    await loadComponent(
        "topbar-container",
        "components/topbar.html"
    );

    /* ---------- NAVBAR ---------- */
    await loadComponent(
        "navbar-container",
        "components/navbar.html"
    );

    /* ---------- HERO ---------- */
    await loadComponent(
        "hero-container",
        "components/hero.html"
    );

    /* ---------- INITIATIVES ---------- */
    await loadComponent(
        "initiatives-container",
        "components/initiatives.html"
    );

    /* ---------- FOCUS AREAS ---------- */
    await loadComponent(
        "focus-areas-container",
        "components/focus-areas.html"
    );

    /* ---------- IMPACT ---------- */
    await loadComponent(
        "impact-container",
        "components/impact.html"
    );

    /* ---------- COMMUNITY BANNER ---------- */
    await loadComponent(
        "community-banner-container",
        "components/community-banner.html"
    );

    /* ---------- GALLERY ---------- */
    await loadComponent(
        "gallery-showcase-container",
        "components/gallery-showcase.html"
    );

    /* ---------- FEATURED PROGRAM ---------- */
    await loadComponent(
        "featured-program-container",
        "components/featured-program.html"
    );

    /* ---------- VOLUNTEER CTA ---------- */
    await loadComponent(
        "volunteer-cta-container",
        "components/volunteer-cta.html"
    );

    /* ---------- COLLABORATIONS ---------- */
    await loadComponent(
        "collaborations-container",
        "components/collaborations.html"
    );

    /* ---------- DONATIONS ---------- */
    await loadComponent(
        "donations-container",
        "components/donations.html"
    );

    /* ---------- FOOTER ---------- */
    await loadComponent(
        "footer-container",
        "components/footer.html"
    );


    /* =========================
       HEADER EFFECTS
    ========================== */

    const navbar = document.querySelector(".main-navbar");
    const topbar = document.querySelector(".topbar");

    if (!navbar || !topbar) return;

    let lastScroll = 0;

    window.addEventListener("scroll", () => {

        const currentScroll = window.pageYOffset;


        /* =========================
           NAVBAR SHADOW
        ========================== */

        if (currentScroll > 20) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }


        /* =========================
           HIDE / SHOW HEADER
        ========================== */

        if (currentScroll <= 0) {

            topbar.classList.remove("hide-header");
            navbar.classList.remove("hide-header");

            return;
        }


        /* ---------- SCROLL DOWN ---------- */

        if (
            currentScroll > lastScroll &&
            currentScroll > 120
        ) {

            topbar.classList.add("hide-header");
            navbar.classList.add("hide-header");

        }

        /* ---------- SCROLL UP ---------- */

        else {

            topbar.classList.remove("hide-header");
            navbar.classList.remove("hide-header");

        }

        lastScroll = currentScroll;

    });

}


/* =========================
   RUN WEBSITE
========================= */

initializeWebsite();