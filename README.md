# Portfolio — Dominique Ngueussie

Vue 3 (Composition API) · Vite · Tailwind CSS v4 · Font Awesome. Site 100 % statique.

## Démarrage
```bash
npm install
npm run dev      # développement
npm run build    # production → dist/
```

## Modifier le contenu
Tout est dans `src/data/portfolio.js` : profil, réseaux sociaux (vides = masqués), disponibilité, compétences, expériences, projets, services.
- **Captures de projets** : déposez-les dans `public/images/projects/` puis renseignez `image: '/images/projects/xxx.png'`. Sans image, une illustration est affichée (et signalée comme telle).
- **KmerMotor** : renseignez `github` quand le lien est prêt. **TikaPlace** : renseignez `stores.appstore` / `stores.playstore`.
- **CV** : remplacez `public/cv.pdf`.

## Formulaire de contact
1. Créez un formulaire sur https://formspree.io et copiez son identifiant.
2. Définissez `VITE_FORMSPREE_ID` (fichier `.env` en local, variables d’environnement sur Vercel).
Sans identifiant, le formulaire ouvre le client mail (mailto). Aucune clé secrète n’est utilisée côté frontend.

## SEO
Définissez `VITE_SITE_URL` (ex. `https://mon-site.vercel.app`), puis remplacez `VOTRE-DOMAINE` dans `public/robots.txt` et `public/sitemap.xml`.

## Déploiement sur Vercel
1. Poussez le dépôt sur GitHub (`.env` est ignoré).
2. Sur vercel.com : **Add New → Project** → importez le dépôt.
3. Framework : Vite · Install : `npm install` · Build : `npm run build` · Output : `dist`.
4. Ajoutez `VITE_FORMSPREE_ID` et `VITE_SITE_URL` dans **Settings → Environment Variables**, puis déployez.
Chaque `git push` redéploie automatiquement.
