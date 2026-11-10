// ===== Données du portfolio : modifiez ici, pas dans les composants =====
export const profile = {
  name: 'Yemdom Ngueussie Dominique', short: 'Dominique Ngueussie', brand: 'DOMINIQUE.DEV',
  title: 'Full-Stack Developer | Laravel, Vue.js, Nuxt, Python/Django, API & DevOps',
  email: 'ngueussievega@gmail.com', phone: '+237 671 657 197', location: 'Douala, Cameroun',
  photo: '/images/profile/dominique.jpg', cv: '/cv.pdf',
  // Disponibilité : modifiable librement (show:false pour masquer)
  availability: { show: true, text: 'Ouvert aux missions freelance et aux opportunités' },
  // Renseignez uniquement les liens réels : les autres restent masqués
  social: { github: '', linkedin: '', facebook: '', whatsapp: '' }, // whatsapp : numéro international sans +, ex. 237671657197
}
export const nav = [['Accueil', '#accueil'], ['À propos', '#a-propos'], ['Compétences', '#competences'], ['Expériences', '#experiences'], ['Projets', '#projets'], ['Contact', '#contact']]
export const about = [
  'Je suis Yemdom Ngueussie Dominique, développeur Full-Stack passionné par la conception de solutions numériques.',
  'Formé en génie logiciel, j’interviens sur l’ensemble du cycle de développement d’une application web : conception, frontend, backend, intégration d’API, conteneurisation et déploiement.',
  'Mon passage chez Polypharma, puis mon activité de développeur freelance et formateur chez FTGROUP, m’ont permis de travailler sur des applications métiers, des plateformes e-commerce, des applications SaaS et des API destinées au web et au mobile.',
  'J’accorde une attention particulière à la qualité du code, à la maintenabilité, à la sécurité et à la performance.',
]
export const facts = [['Formation', 'BTS Génie logiciel'], ['Localisation', 'Douala, Cameroun'], ['Expérience', 'Depuis 2020'], ['Spécialité', 'Full-Stack Development'], ['Langue principale', 'Français']]
export const skills = [
  { icon: 'fa-server', name: 'Backend & API', items: ['PHP', 'Laravel', 'Livewire', 'API REST', 'OpenAPI / Swagger', 'Python / Django'] },
  { icon: 'fa-display', name: 'Frontend', items: ['Vue.js 3', 'Nuxt 4', 'Inertia.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'] },
  { icon: 'fa-cloud', name: 'DevOps & Infrastructure', items: ['Docker', 'Docker Compose', 'Ubuntu Linux', 'SSH', 'Nginx', 'DNS', 'SSL/TLS', 'UFW', 'Fail2Ban', 'GitHub Actions / CI-CD'] },
  { icon: 'fa-database', name: 'Bases de données', items: ['MySQL', 'PostgreSQL', 'SQL Server', 'Redis'] },
  { icon: 'fa-screwdriver-wrench', name: 'Outils', items: ['Node.js', 'Git / GitHub', 'Composer', 'npm', 'Vite', 'Portainer'] },
  { icon: 'fa-layer-group', name: 'Autres', items: ['WordPress', 'UML', 'MERISE', 'Sage Saari', 'Cronjobs'] },
]
export const experiences = [
  { role: 'Freelance — Développeur Full-Stack & Formateur', org: 'FTGROUP, Douala', period: 'Octobre 2024 – Aujourd’hui', points: ['Développement d’applications web et backend', 'Conception d’API REST avec Laravel 12, documentées avec OpenAPI / Swagger', 'Développement de TikaPlace Web avec Nuxt 4', 'Utilisation de frameworks JavaScript', 'Formation et accompagnement technique'] },
  { role: 'Développeur Web (CDD)', org: 'Polypharma, Douala', period: 'Octobre 2022 – Octobre 2024', points: ['Développement de Polymatrix et de l’intranet', 'Administration du site e-commerce WordPress polypharma90.com', 'Création de Poly-Sage : extraction de données Sage Saari avec SQL Server','Création de Poly-intranet : site intranet de l\'entreprise', 'Automatisation de tâches avec des cronjobs', 'Gestion de cPanel, des e-mails, d’Outlook et support utilisateurs'] },
  { role: 'Développeur Web (Stage)', org: 'FIRST SMIT, Douala', period: 'Août 2020 – Octobre 2020', points: ['Création de sites WordPress et de sites e-commerce', 'Création d’infosport01.com', 'Administration de pages professionnelles sur les réseaux sociaux'] },
]
// Pour ajouter une vraie capture : déposez-la dans public/images/projects/ et mettez image: '/images/projects/nom.png'
export const projects = [
  { id: 'invexqr', name: 'InvexQR', category: 'SaaS', type: 'SaaS — QR Code Management Platform', featured: true, icon: 'fa-qrcode', image: '/images/projects/invexqr.png', role: 'Développeur Full-Stack', status: '',
    description: 'Plateforme SaaS permettant de créer et de gérer des QR Codes statiques et dynamiques.',
    details: 'Architecture moderne associant Laravel et Vue.js, avec une infrastructure conteneurisée et déployée sur VPS Ubuntu.',
    tech: ['Laravel 12', 'Vue 3', 'Inertia.js', 'TypeScript', 'Redis', 'Node.js', 'Docker', 'Ubuntu'], url: 'https://invexqr.com', github: '', stores: {} },
  { id: 'tikaplace', name: 'TikaPlace', category: 'Web & API', type: 'Application web et API', icon: 'fa-hotel', image: '/images/projects/tikaplace.png', role: 'Développeur Full-Stack', status: '',
    description: 'API REST Laravel 12 documentée avec OpenAPI / Swagger et application web Nuxt 4.',
    details: 'L’API est conçue pour être consommée par des applications web et mobiles.',
    tech: ['Laravel 12', 'Nuxt 4', 'API REST', 'OpenAPI / Swagger'], url: 'https://tikaplace.com', github: '', stores: { appstore: '', playstore: '' } },
  { id: 'kmermotor', name: 'KmerMotor', category: 'Marketplace', type: 'Plateforme automobile et de location', icon: 'fa-car', image: '/images/projects/kmermotor.png', role: '', status: 'Déploiement en cours',
    description: 'Plateforme de mise en relation autour de la publication et de la location de véhicules.',
    details: 'Le déploiement est en cours.',
    tech: ['Laravel 12', 'Livewire', 'Docker', 'Nginx', 'MySQL'], url: '', github: '', stores: {} },
  { id: 'polypharma90', name: 'Polypharma90', category: 'E-commerce', type: 'Plateforme e-commerce', icon: 'fa-cart-shopping', image: '/images/projects/polypharma.png', role: 'Administration & développement', status: '',
    description: 'Administration et développement d’une plateforme e-commerce sous WordPress et PHP.',
    details: '', tech: ['WordPress', 'PHP'], url: 'https://polypharma90.com', github: '', stores: {} },
  { id: 'allo-beaute', name: 'Allô-beauté', category: 'Marketplace', type: 'Marketplace / Mise en relation', icon: 'fa-scissors', image: '/images/projects/allo-beaute.png', role: '', status: 'Projet en pause',
    description: 'Plateforme de mise en relation entre les clients et les professionnels de la beauté.',
    details: 'Projet actuellement en pause. Une démo est disponible.',
    tech: [], url: 'https://demo-allo-beaute.vercel.app/', github: '', stores: {} },
  { id: 'Poly-intranet', name: 'Poly-intranet', category: 'Plateforme', type: 'Plateforme intranet', icon: 'fa-building', image: '/images/projects/polyintranet.png', role: '', status: '',
    description: 'Application intranet de l\'entreprise pour centgraliser les processus internes et faciliter la communication interne.',
    details: 'Une démo est disponible.',
    tech: [], url: '', github: '', stores: {} },
  { id: 'Polymatrix', name: 'Polymatrix', category: 'Plateforme', type: 'Plateforme / Mise en relation', icon: 'fa-scissors', image: '/images/projects/polymatrix.png', role: '', status: '',
    description: 'Application de suivi des équipes commerciaules(DCM) avec géolocalisation,rapport de visite et analyse des performances.',
    details: 'Une démo est disponible.',
    tech: [], url: '', github: '', stores: {} },
]
export const process = [
  ['fa-magnifying-glass', 'Analyse & compréhension du besoin', 'Échanger, cadrer les objectifs et les contraintes.'],
  ['fa-diagram-project', 'Conception & architecture technique', 'Choisir une architecture adaptée et maintenable.'],
  ['fa-gears', 'Développement Backend & API', 'Construire des API REST solides et documentées.'],
  ['fa-laptop-code', 'Développement Frontend & intégration', 'Créer des interfaces claires et responsives.'],
  ['fa-vial-circle-check', 'Tests & optimisation', 'Vérifier le comportement et améliorer les performances.'],
  ['fa-rocket', 'Déploiement & maintenance', 'Mettre en production et assurer le suivi.'],
]
export const education = [
  { title: 'BTS — Génie logiciel', school: 'IUGET, Douala', period: '2019 – 2021' },
  { title: 'Baccalauréat technique — Électronique (F2)', school: 'Collège Nanfah, Douala', period: '2016 – 2017' },
]
export const services = [
  ['fa-globe', 'Applications web Full-Stack', 'Conception et développement d’applications web complètes.'],
  ['fa-cubes', 'Plateformes SaaS', 'Développement de produits SaaS, du prototype à la production.'],
  ['fa-plug', 'API REST', 'API robustes, sécurisées et documentées avec OpenAPI.'],
  ['fa-window-maximize', 'Intégration Vue.js & Nuxt', 'Interfaces modernes, rapides et responsives.'],
  ['fa-code', 'Solutions Laravel', 'Développement et intégration de solutions sur mesure.'],
  ['fa-box', 'Docker & administration VPS', 'Conteneurisation, déploiement et mise en production.'],
  ['fa-terminal', 'Serveurs Linux', 'Installation, configuration et sécurisation (Nginx, SSL/TLS, UFW).'],
  ['fa-screwdriver-wrench', 'Maintenance & optimisation', 'Suivi, correctifs et amélioration des performances.'],
  ['fa-chalkboard-user', 'Formation & accompagnement', 'Accompagnement technique et formation de développeurs.'],
]
