import './App.css'
function App() {
  return (
    <>
      {/* Navigation */}
      <header>
        <nav>
          <a href="#accueil">SIALOU TIBANA LARISSA</a>

          <div>
            <a href="#accueil">Accueil</a>
            <a href="#apropos">À propos</a>
            <a href="#competences">Compétences</a>
            <a href="#projets">Projets</a>
            <a href="#experiences">Expériences</a>
            <a href="#formation">Formation</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      {/* Accueil */}
      <main>
        <section id="accueil">
  <div className="hero-container">

    <div className="hero-content">
    <p className="hero-intro">Bonjour et bienvenue sur mon portfolio !</p>

    <h1>SIALOU TIBANA LARISSA</h1>

    <h2>Développeuse Web Full-Stack</h2>

    <p className="hero-description">
      Je transforme les idées en solutions numériques modernes, fonctionnelles et adaptées aux besoins réels.

Passionnée par le développement web et mobile, je conçois des applications et des plateformes qui répondent à des besoins concrets, tout en continuant à apprendre et à perfectionner mes compétences.
    </p>

    <div className="hero-buttons">
      <a href="#projets" className="btn-primary">
        Voir mes projets
      </a>

      <a href="#contact" className="btn-secondary">
        Me contacter
      </a>
    </div>
  </div>

  <div className="hero-image">
      <img
        src="/photo-larissa.png"
        alt="Sialou Tibana Larissa"
      />
    </div>
    </div>

</section>

        {/* À propos */}
        <section id="apropos">
  <div className="about-container">

    <div className="about-text">
      <p className="section-intro">Mon parcours</p>

      <h2>À propos de moi</h2>

      <p>
  Après une formation en Physique-Chimie, j'ai choisi en 2024 de me
  reconvertir dans le développement web afin de construire mon parcours
  professionnel dans le numérique.
</p>

<p>
  J'ai ainsi intégré Eranove Academy en décembre 2024, où j'ai suivi une formation
  professionnalisante en Web Mobile Business Intelligence d'une durée de 1 an 4 mois . Cette formation
  m'a permis de développer mes compétences en développement web et mobile,en gestion et conception
  bases de données, ainsi qu'en conception de solutions numériques. À l’issue de ce parcours, j’ai obtenu en avril 2026 ma Licence Professionnelle avec la  <strong>Mention Très Bien</strong>.
  une reconnaissance qui vient valoriser mon engagement, ma persévérance et les compétences acquises au cours de ma formation.
</p>

<p>
  Depuis ma soutenance, je continue activement à développer mes compétences
  à travers des projets personnels et des missions freelance. Je pratique,
  j'effectue des recherches et j'approfondis régulièrement mes connaissances
  afin de progresser et de mieux répondre aux besoins des projets sur lesquels
  je travaille.
</p>

<p>
  Pour moi, être développeuse junior, c'est être dans une démarche constante
  d'apprentissage : apprendre, expérimenter, concevoir, résoudre des problèmes
  et rechercher chaque jour de meilleures solutions pour progresser
  professionnellement.
</p>

    </div>

    <div className="about-highlights">

      <a href="#formation" className="about-card">
        <span>🎓</span>
        <h3>Formation</h3>
        <p>Licence Professionnelle en Web Mobile Business Intelligence</p>
      </a>

      <a href="#formation" className="about-card">
        <span>🏆</span>
        <h3>Mention Très Bien</h3>
        <p>Diplômée d'Eranove Academy</p>
      </a>

      <a href="#projets" className="about-card">
        <span>💻</span>
        <h3>Projets</h3>
        <p>Projets personnels et freelance pour continuer à progresser</p>
      </a>

       <a href="#contact" className="about-card">
        <span>🚀</span>
        <h3>Objectif</h3>
        <p>Mettre mes compétences au service d'une entreprise</p>
      </a>

    </div>

  </div>
</section>

        {/* Compétences */}
<section id="competences">
  <div className="skills-container">

    <div className="skills-header">
      <p className="section-intro">Mon savoir-faire</p>
      <h2>Mes compétences</h2>
      <p>
        Des compétences développées à travers ma formation, mes projets
        personnels, mon expérience professionnelle et mes missions freelance.
      </p>
    </div>

    <div className="skills-grid">

      <div className="skill-card">
        <span className="skill-icon">💻</span>
        <h3>Développement Web</h3>
        <div className="skill-list">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>PHP</span>
          <span>Python</span>
        </div>
      </div>

      <div className="skill-card">
        <span className="skill-icon">⚛️</span>
        <h3>Frontend & Frameworks</h3>
        <div className="skill-list">
          <span>React</span>
          <span>Laravel Blade</span>
          <span>Tailwind CSS</span>
        </div>
      </div>

      <div className="skill-card">
        <span className="skill-icon">⚙️</span>
        <h3>Backend & API</h3>
        <div className="skill-list">
          <span>Laravel</span>
          <span>Django REST Framework</span>
          <span>Laravel API REST</span>
          <span>Laravel Sanctum</span>
          <span>PHP</span>

        </div>
      </div>

      <div className="skill-card">
  <span className="skill-icon">📱</span>

  <h3>Développement Mobile</h3>

  <div className="skill-list">
    <span>React Native</span>
    <span>Android Studio</span>
  </div>

  <p className="skill-learning">
    En cours d'apprentissage et de perfectionnement
  </p>
</div>

      <div className="skill-card">
        <span className="skill-icon">🗄️</span>
        <h3>Bases de données</h3>
        <div className="skill-list">
          <span>MySQL</span>
          <span>PostgreSQL</span>
          <span>Oracle SQL</span>
        </div>
      </div>

      <div className="skill-card">
        <span className="skill-icon">📊</span>
        <h3>Business Intelligence</h3>
        <div className="skill-list">
          <span>Power BI</span>
          <span>Analyse de données</span>
          <span>Visualisation</span>
        </div>
      </div>

      <div className="skill-card">
        <span className="skill-icon">📐</span>
        <h3>Conception & Méthodes</h3>
        <div className="skill-list">
          <span>UML</span>
          <span>Merise</span>
          <span>MCD</span>
          <span>MLD</span>
          <span>MPD</span>
          <span>MVC</span>
          <span>Agile</span>
          <span>Scrum</span>
        </div>
      </div>

      <div className="skill-card">
        <span className="skill-icon">🛠️</span>
        <h3>Outils</h3>
        <div className="skill-list">
          <span>Git</span>
          <span>GitHub</span>
          <span>GitLab</span>
          <span>Docker</span>
          <span>VS Code</span>
          <span>XAMPP</span>
          <span>Beekeeper Studio</span>
          <span>Trello</span>
          <span>Render</span>
        </div>
      </div>

    </div>

  </div>
</section>

        {/* Projets */}
<section id="projets">
  <div className="projects-container">

    <div className="projects-header">
      <p className="section-intro">Mes réalisations</p>

      <h2>Mes projets</h2>

      <p>
        Découvrez quelques réalisations développées dans le cadre de mon
        parcours et de mes activités freelance.
      </p>
    </div>

    <div className="projects-grid">

      {/* Projet 1 */}
      <article className="project-card">

        <div className="project-image">
          <div className="project-placeholder">
            H-Créa & Design
          </div>
        </div>

        <div className="project-content">

          <p className="project-category">
            E-commerce & Développement Web
          </p>

          <h3>H-Créa & Design</h3>

          <p>
  Conception et développement d'une plateforme web dédiée à la
  présentation et à la vente de produits personnalisés, avec
  gestion des produits, du panier, des commandes et du paiement.
</p>

<div className="project-challenge">
  <p>
    <strong>Défi :</strong> Problèmes d'affichage de certaines images après le déploiement.
  </p>

  <p>
    <strong>Solution :</strong> Analyse et correction des chemins d'accès aux ressources
    afin d'assurer le chargement correct des images en production.
  </p>
</div>

<div className="project-technologies">
            <span>Laravel</span>
            <span>JavaScript</span>
            <span>Tailwind CSS</span>
            <span>MySQL</span>
            <span>REST API</span>
            <span>PHP</span>
            <span>API HSMS</span>
          </div>
        
        <a
  href="https://red-goshawk-398004.hostingersite.com"
  target="_blank"
  rel="noopener noreferrer"
  className="project-link"
>
  Voir le projet →
</a>

    
        </div>

      </article>


      {/* Projet 2 */}
      <article className="project-card">

        <div className="project-image">
          <div className="project-placeholder">
            Gestion de dépôt de pharmacie
          </div>
        </div>

        <div className="project-content">

          <p className="project-category">
            Application Web de Gestion
          </p>

          <h3>Gestion de dépôt de pharmacie</h3>

          <p>
            <p>
  Développement d'une application web permettant de centraliser la gestion
  des produits, des stocks, des achats, des ventes et des utilisateurs,
  avec suivi des lots et des dates de péremption, alertes de péremption des
  médicaments et alertes de stock, génération de reçus et de factures,
  ainsi que des indicateurs et rapports de performance.
</p>
          </p>

          <div className="project-technologies">
            <span>React</span>
            <span>TypeScript</span>
            <span>Django</span>
            <span>PostgreSQL</span>
            <span>REST API</span>
          </div>

        </div>

      </article>

    </div>

  </div>
</section>

        {/* Expériences */}
        
<section id="experiences">
  <div className="experience-container">

    <p className="section-intro">Mon expérience professionnelle</p>

    <h2>Mes expériences</h2>

    <p className="section-description">
      Des expériences qui m'ont permis de mettre en pratique mes compétences
      et de participer à des projets concrets.
    </p>

    <div className="experience-card">

      <div className="experience-header">
  <div>
    <h3>Stagiaire Développeuse Web</h3>
    <h4>H-Venture SARL — Bingerville, Abidjan</h4>
  </div>

  <span className="experience-date">
    Novembre 2025 – Mars 2026
  </span>
</div>

<p className="experience-description">
  Projet réalisé dans le cadre de mon stage chez H-Venture SARL :
  conception et développement d'une plateforme web dédiée à la présentation
  et à la vente de produits personnalisés, avec gestion des produits,
  du panier, des commandes et du paiement.
</p>

      <div className="experience-tags">
        <span>Développement Web</span>
        <span>Laravel</span>
        <span>PHP</span>
        <span>JavaScript</span>
        <span>MySQL</span>
        <span>Tailwind CSS</span>
      </div>

    </div>

   <div className="experience-card">

  <div className="experience-header">
    <div>
      <h3>Développeuse Web Freelance</h3>
      <h4>K-Créa</h4>
    </div>

    <span className="experience-date">
      2026 – Aujourd'hui
    </span>
  </div>

  <p className="experience-description">
    Conception et développement de solutions numériques pour répondre
    aux besoins de clients et de projets personnels.
  </p>

  <div className="experience-tags">
    <span>Développement Web</span>
    <span>Sites Web</span>
    <span>Applications Web</span>
    <span>Base de données</span>
    <span>API</span>
  </div>

</div>

  </div>
</section>

        {/* Formation, Masterclasses & Distinctions */}
<section id="formation">
  <div className="formation-container">

    <p className="section-intro">Mon parcours</p>

    <h2>Formation, Masterclasses & Distinctions</h2>

    {/* Formation */}
    <div className="formation-block">
      <h3>🎓 Formation académique</h3>

      <div className="formation-item">
        <h4>Licence Professionnelle en Web Mobile Business Intelligence</h4>
        <p>Eranove Academy</p>
        <span>Mention Très Bien</span>
      </div>
    </div>

    {/* Masterclasses & formations */}
    <div className="formation-block">
      <h3>📚 Masterclasses & Formations</h3>

      <div className="formation-item">
        <h4>Masterclass en Business Intelligence (BI)</h4>
        <p>
          Initiation aux outils d'analyse et de valorisation des données.
        </p>
      </div>

      <div className="formation-item">
        <h4>Masterclass en Intelligence Artificielle (IA)</h4>
        <p>
          Découverte des usages de l'IA et de son intégration dans les projets numériques.
        </p>
      </div>

      <div className="formation-item">
        <h4>Fresque du Numérique – Eranove Academy</h4>
        <p>
          Sensibilisation aux enjeux environnementaux et à l'impact du numérique.
        </p>
      </div>

      <div className="formation-item">
        <h4>Fresque de l'Éducation – Forum 2040</h4>
        <p>
          « Façonnez l'école du futur ».
        </p>
      </div>
    </div>

    {/* Hackathons */}
    <div className="formation-block">
      <h3>🏆 Hackathons & Distinctions</h3>

      <div className="formation-item">
        <h4>1er Prix – Hackathon Eranove Academy (2025)</h4>
        <p>
          Projet ECObin, une poubelle intelligente visant à réduire
          l'empreinte carbone grâce à un système de reconnaissance.
        </p>
      </div>

      <div className="formation-item">
        <h4>3e Prix – Hackathon GS2E</h4>
        <p>
          Projet « Mon Service, Ma Voix », une solution de fidélisation
          client proposée pour améliorer les services de la CIE.
        </p>
      </div>
    </div>

  </div>
</section>

        {/* Contact */}
<section id="contact">
  <div className="contact-container">

    <p className="section-intro">Parlons de votre projet</p>

    <h2>Contact</h2>

    <p className="contact-description">
      Vous avez un projet web, mobile ou une idée numérique à concrétiser ?
      Je serais ravie d'échanger avec vous.
    </p>

    <div className="contact-content">

      <div className="contact-info">

        <div className="contact-item">
          <span>📍</span>
          <div>
            <h3>Localisation</h3>
            <p>Abidjan, Bingerville</p>
          </div>
        </div>

        <div className="contact-item">
          <span>📧</span>
          <div>
            <h3>Email</h3>
            <a href="mailto:sialoutibanalarissa@gmail.com">
              sialoutibanalarissa@gmail.com
            </a>
          </div>
        </div>

        <div className="contact-item">
          <span>📱</span>
          <div>
            <h3>Téléphone</h3>
            <a href="tel:+2250757728834">
              07 57 72 88 34
            </a>
            <br />
            <a href="tel:+2250506148229">
              05 06 14 82 29
            </a>
          </div>
        </div>

        <div className="contact-item">
          <span>💼</span>
          <div>
            <h3>LinkedIn</h3>
            <a
              href="https://linkedin.com/in/tibana-larissa-sialou"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/tibana-larissa-sialou
            </a>
          </div>
        </div>

        <div className="contact-item">
          <span>🦊</span>
          <div>
            <h3>GitLab</h3>
            <a
              href="https://gitlab.com/TIBANA"
              target="_blank"
              rel="noopener noreferrer"
            >
              gitlab.com/TIBANA
            </a>
          </div>
        </div>

        <div className="contact-item">
          <span>💻</span>
          <div>
            <h3>GitHub</h3>
            <a
              href="https://github.com/SIALOU-TIBANA-LARISSA"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/SIALOU-TIBANA-LARISSA
            </a>
          </div>
        </div>

      </div>

      <div className="contact-message">
  <span className="contact-message-icon"></span>

  <h3>Construisons quelque chose ensemble</h3>

  <p>
    Je suis à la recherche de nouvelles opportunités professionnelles,
    de projets freelance et de collaborations dans le domaine du
    développement web et mobile.
  </p>

  <p>
    Si vous avez un projet, une idée ou une opportunité à partager,
    n'hésitez pas à me contacter.
  </p>
</div>

    </div>

  </div>
</section>
      </main>
    <footer className="footer">
  <div className="footer-content">

    <div className="footer-brand">
      <h3>SIALOU TIBANA LARISSA</h3>
      <p>Développeuse Web & Mobile</p>
    </div>

    <div className="footer-links">
      <a href="https://www.linkedin.com/in/tibana-larissa-sialou" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>

      <a href="https://github.com/SIALOU-TIBANA-LARISSA" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>

      <a href="https://gitlab.com/TIBANA" target="_blank" rel="noopener noreferrer">
        GitLab
      </a>

      <a href="mailto:sialoutibanalarissa@gmail.com">
        Email
      </a>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2026 SIALOU TIBANA LARISSA — Tous droits réservés.</p>
  </div>
</footer>

    </>
  )
}

export default App