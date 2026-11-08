(function () {
  "use strict";

  const config = window.PORTFOLIO_CONFIG;
  const projects = window.PORTFOLIO_PROJECTS;
  const grid = document.getElementById("projects-grid");
  const count = document.getElementById("project-count");
  const dialog = document.getElementById("project-dialog");
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("site-nav");

  function setText(selector, value) {
    document.querySelectorAll(selector).forEach((element) => {
      element.textContent = value;
    });
  }

  function configureProfile() {
    if (!config) {
      console.error("PORTFOLIO_CONFIG não foi carregado.");
      return;
    }

    setText("[data-profile-name]", config.name);
    setText("[data-email-label]", config.email);
    document.querySelectorAll("[data-contact-email]").forEach((link) => {
      link.href = `mailto:${config.email}`;
    });
    document.querySelectorAll("[data-contact-linkedin]").forEach((link) => {
      link.href = config.linkedin;
    });
    document.querySelectorAll("[data-contact-github]").forEach((link) => {
      link.href = config.github;
    });
    document.querySelectorAll("[data-resume-link]").forEach((link) => {
      link.href = config.resume;
    });
    document.getElementById("current-year").textContent = String(new Date().getFullYear());
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[character]);
  }

  function icon(name, attributes) {
    const extra = attributes || "";
    return `<i data-lucide="${name}" aria-hidden="true"${extra}></i>`;
  }

  function renderProjects(category) {
    if (!grid || !Array.isArray(projects)) {
      console.error("A lista de projetos não foi carregada corretamente.");
      if (grid) grid.innerHTML = '<p class="empty-projects">Não foi possível carregar os projetos. Verifique js/projects.js.</p>';
      return;
    }

    const visibleProjects = category === "todos"
      ? projects
      : projects.filter((project) => project.category === category);

    count.textContent = `${visibleProjects.length} ${visibleProjects.length === 1 ? "projeto" : "projetos"}`;

    if (visibleProjects.length === 0) {
      grid.innerHTML = '<p class="empty-projects">Nenhum projeto nesta categoria por enquanto.</p>';
      return;
    }

    grid.innerHTML = visibleProjects.map((project) => {
      const tools = project.tools.map((tool) => `<span class="project-tool">${escapeHtml(tool)}</span>`).join("");
      const githubAction = project.githubUrl
        ? `<a class="project-github" href="${escapeHtml(project.githubUrl)}" target="_blank" rel="noopener noreferrer" aria-label="Abrir GitHub de ${escapeHtml(project.title)}">${icon("github")}GitHub</a>`
        : `<span class="project-github is-unavailable" aria-label="Link do GitHub ainda não cadastrado">${icon("github")}GitHub — não cadastrado</span>`;

      return `<article class="project-card">
        <div class="project-visual">
          <img src="${escapeHtml(project.image)}" alt="Prévia ilustrativa do estudo ${escapeHtml(project.title)}" loading="lazy" width="640" height="360">
          <span class="project-visual-label">DADOS SIMULADOS</span>
        </div>
        <div class="project-body">
          <div class="project-topline"><span class="project-category">${escapeHtml(project.category)}</span><span class="project-demo-tag">ESTUDO DEMONSTRATIVO</span></div>
          <h3>${escapeHtml(project.title)}</h3>
          <p class="project-description">${escapeHtml(project.description)}</p>
          <div class="project-tools" aria-label="Ferramentas utilizadas">${tools}</div>
          <div class="project-actions">
            <button class="project-view" type="button" data-project-id="${escapeHtml(project.id)}">Visualizar projeto ${icon("arrow-up-right")}</button>
            ${githubAction}
          </div>
        </div>
      </article>`;
    }).join("");

    grid.querySelectorAll("[data-project-id]").forEach((button) => {
      button.addEventListener("click", () => openProject(button.dataset.projectId));
    });
    refreshIcons();
  }

  function openProject(projectId) {
    const project = projects.find((item) => item.id === projectId);
    if (!project || !dialog) return;

    document.getElementById("dialog-category").textContent = project.category;
    document.getElementById("dialog-title").textContent = project.title;
    document.getElementById("dialog-image").src = project.image;
    document.getElementById("dialog-image").alt = `Prévia ilustrativa do estudo ${project.title}`;
    document.getElementById("dialog-problem").textContent = project.problem;
    document.getElementById("dialog-objective").textContent = project.objective;
    document.getElementById("dialog-approach").textContent = project.approach;
    document.getElementById("dialog-results").textContent = project.results;
    document.getElementById("dialog-tools-list").innerHTML = project.tools
      .map((tool) => `<span class="project-tool">${escapeHtml(tool)}</span>`)
      .join("");

    const links = [];
    if (project.dashboardUrl) {
      links.push(`<a class="dialog-link" href="${escapeHtml(project.dashboardUrl)}" target="_blank" rel="noopener noreferrer">${icon("chart-no-axes-column-increasing")}Visualizar painel ${icon("arrow-up-right")}</a>`);
    }
    if (project.githubUrl) {
      links.push(`<a class="dialog-link" href="${escapeHtml(project.githubUrl)}" target="_blank" rel="noopener noreferrer">${icon("github")}Acessar GitHub ${icon("arrow-up-right")}</a>`);
    }
    document.getElementById("dialog-links").innerHTML = links.join("");

    if (typeof dialog.showModal === "function") {
      dialog.showModal();
      refreshIcons();
    } else {
      console.error("Este navegador não oferece suporte a janelas de diálogo nativas.");
    }
  }

  function refreshIcons() {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }

  function setupFilters() {
    document.querySelectorAll(".filter-button").forEach((button) => {
      button.addEventListener("click", () => {
        document.querySelectorAll(".filter-button").forEach((filter) => {
          const isActive = filter === button;
          filter.classList.toggle("is-active", isActive);
          filter.setAttribute("aria-pressed", String(isActive));
        });
        renderProjects(button.dataset.filter);
      });
    });
  }

  function setupNavigation() {
    if (!menuToggle || !nav) return;
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
      nav.classList.toggle("is-open", !isOpen);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
      });
    });
  }

  function setupDialog() {
    const closeButton = document.querySelector(".dialog-close");
    closeButton.addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
  }

  configureProfile();
  setupNavigation();
  setupFilters();
  setupDialog();
  renderProjects("todos");
  refreshIcons();
})();
