# Cabinet Maître Joseph Czub — Site Vitrine

Site vitrine professionnel pour le cabinet d'avocat de Maître Joseph Czub, situé à Martigues.

## Stack technique

- **Framework** : Next.js 14 (App Router)
- **Langage** : TypeScript
- **Styles** : Tailwind CSS + CSS custom
- **Animations** : Framer Motion + CSS natif
- **Icônes** : Lucide React
- **Fonts** : Cormorant Garamond + Libre Franklin (Google Fonts)

## Structure du projet

```
cabinet-czub/
├── public/                  # Assets statiques (images, favicon)
│   └── images/
├── src/
│   ├── app/                 # Pages (App Router)
│   │   ├── layout.tsx       # Layout global (nav + footer)
│   │   ├── page.tsx         # Page d'accueil
│   │   ├── cabinet/         # Page "Le Cabinet"
│   │   ├── expertises/      # Page "Expertises"
│   │   └── contact/         # Page "Contact"
│   ├── components/          # Composants réutilisables
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── PageHero.tsx
│   │   ├── RevealOnScroll.tsx
│   │   ├── AnimatedCounter.tsx
│   │   ├── ExpertiseCard.tsx
│   │   └── SectionDivider.tsx
│   ├── lib/                 # Utilitaires et constantes
│   │   └── constants.ts     # Infos du cabinet, navigation, expertises
│   └── styles/
│       └── globals.css      # Styles globaux + Tailwind
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

## Installation

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer en développement
npm run dev

# 3. Ouvrir http://localhost:3000
```

## Personnalisation

### Informations du cabinet
Toutes les informations (nom, téléphone, email, adresse…) sont centralisées dans :
```
src/lib/constants.ts
```
Modifie ce fichier pour mettre à jour les coordonnées réelles.

### Couleurs et typographie
Les couleurs et polices sont définies dans :
- `tailwind.config.ts` (palette Tailwind)
- `src/styles/globals.css` (variables CSS custom)

### Google Maps
Dans la page Contact, un placeholder est prévu pour intégrer Google Maps.
Remplace le bloc placeholder par un `<iframe>` Google Maps ou utilise `@react-google-maps/api`.

### Formulaire de contact
Le formulaire est fonctionnel côté front. Pour l'envoi d'emails, connecte-le à :
- [Formspree](https://formspree.io) (le plus simple)
- [Resend](https://resend.com) (via API Route Next.js)
- [SendGrid](https://sendgrid.com)

## Déploiement

### Vercel (recommandé)
```bash
npm i -g vercel
vercel
```

### Build statique
```bash
npm run build
npm start
```

## SEO
- Balises `<title>` et `<meta description>` configurées par page
- Open Graph prêt
- Structure sémantique HTML5
- Performance optimisée (fonts, images lazy)

---

© 2025 Cabinet Czub — Développé avec Next.js
"# site-cabinet-CZUB-" 
