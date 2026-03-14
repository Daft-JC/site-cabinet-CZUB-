export const SITE_CONFIG = {
  name: "Cabinet Czub",
  fullName: "Cabinet Maître Joseph Czub",
  lawyer: "Maître Joseph Czub",
  barreau: "Barreau d'Aix-en-Provence",
  tagline: "Avocat au Barreau d'Aix-en-Provence",
  description:
    "Cabinet d'avocat à Martigues spécialisé dans la défense des consommateurs depuis 1994. Photovoltaïque, fraudes bancaires, assurances, construction, automobile — interventions sur toute la France.",
  founded: 1994,
  yearsExperience: "30+",
  location: {
    city: "Martigues",
    region: "Bouches-du-Rhône",
    area: "Provence-Alpes-Côte d'Azur",
    full: "Martigues, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur",
  },
  contact: {
    phone: "04 42 40 36 65",
    phoneHref: "tel:+33442403665",
    email: "czubjoseph@hotmail.com",
    emailHref: "mailto:czubjoseph@hotmail.com",
    address: "1 Boulevard du Président Allende, L'Espace Vénitien",
    addressFull: "1 Boulevard du Président Allende, L'Espace Vénitien, 13500 Martigues",
  },
} as const;

export const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Le Cabinet", href: "/cabinet" },
  { label: "Domaines d'intervention", href: "/expertises" },
  { label: "Presse & Médias", href: "/presse" },
  { label: "Contact", href: "/contact" },
] as const;

export const ARTICLES_PRESSE: {
  id: string;
  date: string;
  source: string;
  category: string;
  title: string;
  excerpt: string;
  url?: string;
  image?: string;
}[] = [
  {
    id: "article-comedie",
    date: "2011-03-01",
    source: "La Provence",
    category: "Construction & Immobilier",
    title: "La fin du cauchemar pour les propriétaires du Comédia ?",
    excerpt:
      "Après trois ans de procédure, une nouvelle réunion a donné de l'espoir aux acquéreurs des 19 logements du Comédia à Jonquières, livrables en mars 2008 mais toujours inachevés. Maître Joseph Czub, qui défend trois propriétaires, rapporte que le Groupement français de caution s'est engagé verbalement à reprendre les travaux et à délivrer une garantie de paiement pour les différents corps de métier.",
    image: "/presse-comedie.png",
    url: "/presse/comedie",
  },
  {
    id: "article-grossiste-viande",
    date: "2008-03-01",
    source: "La Provence",
    category: "Droit de la consommation",
    title: "Lourde peine pour un grossiste en viande",
    excerpt:
      "CBS Viandes, grossiste de Vitrolles, condamné à 23 000 € d'amendes (681 infractions) après la découverte de 4 tonnes de viandes périmées mêlées à des denrées saines. L'UFC, représentée par Maître Joseph Czub, s'est constituée partie civile pour défendre l'intérêt collectif des consommateurs.",
    image: "/grossiste.png",
    url: "/presse/grossiste-viande-vitrolles",
  },
  {
    id: "article-ufc-ag-2008",
    date: "2008-04-21",
    source: "La Provence — Martigues",
    category: "Vie associative",
    title: "L'UFC–Que Choisir, entre satisfactions et inquiétudes",
    excerpt:
      "Assemblée générale 2008 de l'UFC-Que Choisir de Martigues. Maître Czub rappelle les victoires obtenues contre les banques, Free et Total — dont une première requête gagnée en droit de l'environnement. L'association fait face à de nouveaux défis liés aux nouvelles technologies et à son financement.",
    image: "/ufc-logo.png",
    url: "/presse/ufc-assemblee-generale-2008",
  },
  {
    id: "article-sos-conso",
    date: "2013-10-11",
    source: "Le Monde — SOS Conso",
    category: "Arnaques photovoltaïque",
    title: "Comme une éolienne sans ailes !",
    excerpt:
      "Chronique SOS Conso de Raphaële Rivais : panneaux photovoltaïques et éoliennes de pignon aux rendements surévalués. L'affaire Lemichel illustre les risques du démarchage abusif et la responsabilité des organismes de crédit (Solfermo, Franfinance) qui débloquent les fonds sans contrôle.",
    image: "/panneau-solaire.jpg",
    url: "/presse/sos-conso-eolienne",
  },
  {
    id: "article-geant-casino",
    date: "2008-01-01",
    source: "La Provence — Istres",
    category: "Droit de la consommation",
    title: "Les services vétérinaires et l'UFC font condamner Géant",
    excerpt:
      "L'hypermarché Géant Casino d'Istres condamné à 81 contraventions pour des denrées conservées jusqu'à 12,4°C au lieu de 0 à 3°C. Maître Czub, avocat de l'UFC, souligne la gravité d'une récidive dans une grande surface.",
    image: "/geant-casino.jpg",
    url: "/presse/geant-casino-istres",
  },
  {
    id: "article-viande-avariee",
    date: "2011-06-01",
    source: "La Provence — Martigues",
    category: "Droit de la consommation",
    title: "L'UFC Martigues-étang de Berre sur tous les fronts",
    excerpt:
      "Partie civile dans le procès de la viande avariée maquillée au bisulfite de soude, l'UFC Martigues-étang de Berre obtient 6 000 € de dommages et intérêts — un montant record. Maître Joseph Czub rappelle que l'association défendait l'intérêt collectif des consommateurs dès le stade de l'instruction.",
    image: "/boucherie.jpg",
    url: "/presse/viande-avariee-martigues",
  },
  {
    id: "article-1",
    date: "2014-06-24",
    source: "Midi Libre",
    category: "Arnaques photovoltaïque",
    title: "Avignon : trois ans de prison requis contre l'escroc aux panneaux solaires",
    excerpt:
      "Retour sur une affaire emblématique d'arnaque aux panneaux solaires, illustrant les pratiques frauduleuses dénoncées depuis des années par le cabinet Czub : démarchage abusif, fausses promesses de rentabilité et victimes engagées dans des crédits prohibitifs.",
    url: "https://www.midilibre.fr/2014/06/24/avignon-trois-ans-de-prison-requis-contre-l-escroc-aux-panneaux-solaires,1013993.php",
  },
  {
    id: "article-3",
    date: "2014-07-15",
    source: "Le Monde",
    category: "Arnaques photovoltaïque",
    title: "Photovoltaïque : un an de prison pour le gérant de Cesp",
    excerpt:
      "Le tribunal correctionnel d'Avignon condamne le dirigeant de la société Cesp pour pratiques commerciales trompeuses envers 156 victimes. Maître Joseph Czub, avocat de parties civiles, souligne que ce jugement pénal permettra aux victimes de se défendre au civil contre l'organisme de crédit Sofemo, qui aurait débloqué les fonds sans contrôle.",
    url: "https://www.lemonde.fr/vie-quotidienne/article/2014/07/15/photovoltaique-un-an-de-prison-pour-le-gerant-de-cesp_6003842_5057666.html",
  },
  {
    id: "article-2",
    date: "2025-03-30",
    source: "La Provence",
    category: "Droit de la consommation",
    title: "L'UFC Que Choisir de Martigues fait front au côté des victimes d'arnaque, souvent lassées face aux longs combats",
    excerpt:
      "L'UFC Que Choisir de Martigues, partenaire du cabinet Czub, se mobilise aux côtés des victimes d'arnaques en tous genres. Malgré la longueur des procédures, les résultats obtenus témoignent de l'efficacité de cette collaboration au service des consommateurs.",
    url: "https://www.laprovence.com/article/region/1558833153019115/lufc-que-choisir-de-martigues-fait-front-au-cote-des-victimes-darnaque-souvent-lasses-face-aux-longs-combats",
  },
];

export const EXPERTISES = [
  {
    id: "energies-renouvelables",
    title: "Photovoltaïque & Énergies Renouvelables",
    shortDesc: "Défense des victimes d'arnaques EnR",
    description:
      "Vous êtes victimes d'arnaques au photovoltaïque ou énergies renouvelables (pompes à chaleur, ballons thermodynamiques, système de chauffage, isolation…) le cabinet CZUB dispose d'une expertise approfondie en la matière et intervient sur toute LA FRANCE, aux fins notamment d'annulation ou résolution du contrat principal et du contrat affecté de crédit.\nCes litiges naissent généralement à la suite d'un démarchage à domicile effectué par un commercial bien rôdé, promettant sans étude technique préalable et sérieuse, et sans devis préalable, un rendement important ou des économies substantielles sur les factures d'électricité (autoconsommation ou autoconsommation avec revente du surplus), et donc un temps de retour sur investissement très rapide, et au demeurant avec diverses subventions ou aides.\nLe temps de retour sur investissement est souvent désastreux, le service après-vente inexistant ou presque (sachant que la durée de vie de ces sociétés est rarement longue) et les victimes sont engagés sur des crédits prohibitifs allant jusqu'à 15 ans, connaissant au surplus des dysfonctionnements et des infiltrations en toiture.\nLes experts spécialisés mandatés, si besoin, démontrent très souvent les multiples manquements de ces prétendus professionnels, le non-respect des règles de l'art et des normes, pouvant parfois entrainer un danger pour la sécurité des personnes, un manquement au devoir de conseil sur les questions de rendement et de retour sur investissement et même des manquements aux règles d'urbanisme.\nLe cabinet CZUB obtient désormais depuis près de 20 ans en cette matière des jurisprudences très favorables aux consommateurs et victimes de ces arnaques aux énergies de renouvelables devant les juridictions de première instance, les Cours d'appel et même la Cour de cassation.\nS'agissant d'un domaine très technique, il est parfois opportun de recourir également aux services d'un expert spécialisé et le cabinet CZUB collabore si besoin avec un réseau d'expert compétents.\nDes actions sont parfois engagées par l'UFC QUE CHOISIR, dans l'intérêt collectif des consommateurs.",
    details: [
      "Annulation ou résolution du contrat d'installation",
      "Résiliation du crédit affecté (organismes de financement)",
      "Démarchage à domicile",
      "Absence d'étude technique ou de devis préalable",
      "Non-respect des règles de l'art, des normes et des règles d'urbanisme",
      "Manquement au devoir de conseil sur le rendement et le retour sur investissement",
      "Infiltrations en toiture et dysfonctionnements techniques",
      "Collaboration avec un réseau d'experts techniques spécialisés",
      "Actions UFC Que Choisir dans l'intérêt collectif des consommateurs",
      "Jurisprudences favorables devant TJ, Cours d'appel et Cour de cassation",
    ],
    icon: "sun",
  },
  {
    id: "code-consommation",
    title: "Code de la Consommation",
    shortDesc: "Protection des droits des consommateurs",
    description:
      "Le Code de la consommation impose de nombreuses mentions obligatoires aux professionnels, très souvent à peine de nullité du contrat. Depuis plus de 30 ans, le cabinet engage si nécessaire une procédure judiciaire après tentative de solution amiable, et collabore avec l'UFC Que Choisir dans la gestion des litiges.",
    details: [
      "Démarchage à domicile et contrats à distance",
      "Droit de rétractation",
      "Contrats conclus dans les foires et salons",
      "Non-respect de l'obligation générale d'information précontractuelle",
      "Pratiques commerciales trompeuses — abus de faiblesse",
      "Clauses abusives",
      "Garantie légale de conformité",
      "Crédit à la consommation et crédits affectés",
      "Actions en annulation, résolution et dommages-intérêts",
    ],
    icon: "shield",
  },
  {
    id: "fraudes-bancaires",
    title: "Arnaques & Fraudes Bancaires",
    shortDesc: "Remboursement & responsabilité des banques",
    description:
      "Les fraudeurs ont toujours un coup d'avance sur les dispositifs de sécurité mis en place par les banques, qui ne sont pas infaillibles.\nIls contournent les dispositifs de sécurité, et l'authentification forte.\nCela peut arriver à tout le monde, y compris des personnes prétendument « averties »\nLes techniques de fraude sont de plus en plus élaborées, notamment : SPOOFING (fraude au faux conseiller bancaire), PHISHING (hameçonnage), QUISHING (arnaque aux QR codes), FAUX RIB, SIM SWAPPING, LOGICIELS MALVEILLANTS.\nSi vous êtes victimes d'arnaques à la carte bancaire ou de ces différentes techniques de fraude, de multiples solutions existent et le code monétaire et financier prévoit dans certaines hypothèses une obligation de remboursement de la banque, notamment si la banque ne démontre pas la négligence grave de l'utilisateur.\nLa jurisprudence qui est désormais bien établie, n'hésite pas à sanctionner la banque.\nLe cabinet CZUB a obtenu de très nombreuses jurisprudences favorables aux victimes.",
    details: [
      "Spoofing — fraude au faux conseiller bancaire",
      "Phishing (hameçonnage par mail ou SMS)",
      "Quishing — arnaque aux QR codes",
      "Faux RIB",
      "SIM Swapping — usurpation de carte SIM",
      "Logiciels malveillants",
      "Responsabilité de la banque",
      "Obtention du remboursement des sommes détournées",
    ],
    icon: "creditcard",
  },
  {
    id: "assurances",
    title: "Assurances",
    shortDesc: "Garanties d'assurances refusées",
    description:
      "À la suite d'une déclaration de sinistre, votre assureur refuse d'appliquer la garantie régulièrement souscrite ? Le cabinet vous assiste pour faire valoir vos droits et obtenir l'indemnisation qui vous est due.",
    details: [
      "Garantie vol",
      "Garantie catastrophes naturelles (CAT NAT sécheresse, inondation, boue)",
      "Garantie vandalisme",
      "Garantie événements climatiques",
      "Garantie incapacité, invalidité, décès",
      "Garantie décennale",
      "Assurance dommage ouvrage",
    ],
    icon: "umbrella",
  },
  {
    id: "construction-immobilier",
    title: "Construction & Immobilier",
    shortDesc: "Vices, malfaçons et litiges immobiliers",
    description:
      "De la vente en l'état futur d'achèvement aux litiges post-livraison, le cabinet intervient pour défendre vos droits face aux constructeurs, promoteurs, artisans et piscinistes.",
    details: [
      "Vices cachés et non-conformités",
      "Retard de livraison et abandon de chantier",
      "Vente en l'état futur d'achèvement (VEFA)",
      "Contrat de construction de maison individuelle (CCMI)",
      "Garantie décennale et assurance dommage ouvrage",
      "Litiges piscinistes, façades, infiltrations toiture",
      "Litiges menuiseries et urbanisme",
    ],
    icon: "building",
  },
  {
    id: "litiges-automobile",
    title: "Litiges Automobile",
    shortDesc: "Vices cachés & responsabilité du garagiste",
    description:
      "Victime d'un vice caché sur un véhicule ou d'une faute de votre garagiste ? Le cabinet défend vos droits face aux vendeurs et professionnels de l'automobile.",
    details: [
      "Vices cachés sur véhicule",
      "Garantie légale de conformité",
      "Responsabilité du garagiste et obligation de résultat",
    ],
    icon: "car",
  },
  {
    id: "responsabilite-contrats",
    title: "Responsabilité & Contrats",
    shortDesc: "Droit commun et litiges contractuels",
    description:
      "Le cabinet intervient dans l'ensemble des litiges contractuels de droit commun, du tourisme aux agents immobiliers, en passant par les compagnies aériennes et les diagnostiqueurs.",
    details: [
      "Droit commun des contrats",
      "Tourisme et agences de voyages",
      "Compagnies aériennes",
      "Agents immobiliers",
      "Diagnostiqueurs",
    ],
    icon: "scale",
  },
  {
    id: "prejudice-corporel",
    title: "Réparation du Préjudice Corporel",
    shortDesc: "Accidents & responsabilité médicale",
    description:
      "Victime d'un accident de la circulation ou d'une faute médicale ? Le cabinet vous accompagne pour obtenir la juste réparation de votre préjudice corporel.",
    details: [
      "Accidents de la circulation",
      "Responsabilité médicale",
    ],
    icon: "heart",
  },
  {
    id: "litiges-bailleurs",
    title: "Litiges Bailleurs & Locataires",
    shortDesc: "Droit locatif et contentieux",
    description:
      "Le cabinet intervient dans les litiges opposant bailleurs et locataires, qu'il s'agisse de recouvrement de loyers, de procédures d'expulsion, de dépôt de garantie ou de réparations locatives.",
    details: [
      "Recouvrement de loyers impayés",
      "Procédures d'expulsion",
      "Dépôt de garantie et état des lieux",
      "Contentieux relatifs aux réparations locatives",
    ],
    icon: "key",
  },
  {
    id: "divorces-amiables",
    title: "Divorces Amiables",
    shortDesc: "Divorce par consentement mutuel",
    description:
      "Maître Czub accompagne les couples souhaitant divorcer à l'amiable dans le cadre de la procédure de divorce par consentement mutuel, avec toute la discrétion et l'efficacité que la situation requiert.",
    details: [
      "Divorce par consentement mutuel",
      "Convention de divorce rédigée par l'avocat",
      "Partage des biens et règlement des questions patrimoniales",
    ],
    icon: "users",
  },
] as const;
