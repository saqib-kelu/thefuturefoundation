async function loadComponent(id, file) {

    const response = await fetch(file);
    const data = await response.text();

    document.getElementById(id).innerHTML = data;

}

loadComponent(
    "topbar-container",
    "components/topbar.html"
);

loadComponent(
    "navbar-container",
    "components/navbar.html"
);

loadComponent(
    "hero-container",
    "components/hero.html"
);
loadComponent(
    "initiatives-container",
    "components/initiatives.html"
);
loadComponent(
    "focus-areas-container",
    "components/focus-areas.html"
);
loadComponent(
    "impact-container",
    "components/impact.html"
);
loadComponent(
    "community-banner-container",
    "components/community-banner.html"
);
loadComponent(
    "gallery-showcase-container",
    "components/gallery-showcase.html"
);
loadComponent(
    "featured-program-container",
    "components/featured-program.html"
);
loadComponent(
    "volunteer-cta-container",
    "components/volunteer-cta.html"
);
loadComponent(
    "collaborations-container",
    "components/collaborations.html"
);
loadComponent(
    "donations-container",
    "components/donations.html"
);
loadComponent(
    "footer-container",
    "components/footer.html"
);