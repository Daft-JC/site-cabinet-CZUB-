// Contenu SEO des pages dédiées /expertises/[slug].
// Chaque page cible une recherche précise ("avocat fraude bancaire", "avocat
// arnaque panneaux solaires"…) avec un titre, une description et un contenu
// propres. Les informations juridiques sont générales : elles ne remplacent
// pas l'analyse du dossier.

export type ExpertiseSeo = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  h1Highlight: string;
  intro: string;
  guideTitle: string;
  guide: { title: string; text: string }[];
  faq: { q: string; a: string }[];
  // ids d'ARTICLES_PRESSE liés au domaine
  press?: string[];
  // France entière ou région locale
  national?: boolean;
};

export const EXPERTISES_SEO: Record<string, ExpertiseSeo> = {
  "photovoltaique-energies-renouvelables": {
    metaTitle: "Avocat arnaque photovoltaïque et panneaux solaires",
    metaDescription:
      "Victime d'une arnaque aux panneaux solaires, pompe à chaleur ou isolation ? Maître Joseph Czub, avocat à Martigues, obtient l'annulation du contrat et du crédit affecté. Toute la France.",
    h1: "Avocat arnaque photovoltaïque",
    h1Highlight: "et énergies renouvelables",
    intro:
      "Panneaux solaires vendus après un démarchage à domicile, rendement promis jamais atteint, crédit sur 10 ou 15 ans : depuis près de 20 ans, le cabinet défend les victimes d'arnaques aux énergies renouvelables partout en France et obtient l'annulation des contrats et des crédits affectés.",
    guideTitle: "Arnaque aux panneaux solaires : vos recours",
    guide: [
      {
        title: "Un bon de commande souvent irrégulier",
        text: "Un contrat conclu à domicile doit comporter de nombreuses mentions obligatoires (caractéristiques précises du matériel, prix détaillé, délai de livraison, conditions et formulaire de rétractation…). Leur absence ou leur imprécision permet souvent d'obtenir la nullité du contrat devant le juge.",
      },
      {
        title: "Le crédit affecté tombe avec le contrat",
        text: "Lorsque le contrat de vente et d'installation est annulé ou résolu, le crédit qui l'a financé est annulé de plein droit (article L. 312-55 du Code de la consommation). La jurisprudence admet en outre que la banque qui a débloqué les fonds sans vérifier la régularité de l'opération puisse être privée, dans certains cas, de son droit au remboursement du capital.",
      },
      {
        title: "Même si l'installateur a disparu",
        text: "Beaucoup de sociétés de photovoltaïque sont liquidées quelques années après la vente. Cela n'empêche pas d'agir : le mandataire liquidateur est mis en cause et l'action se poursuit contre l'organisme de crédit.",
      },
      {
        title: "L'expertise technique, un atout",
        text: "Rendement réel très inférieur aux promesses, infiltrations en toiture, non-respect des normes ou des règles d'urbanisme : un expert spécialisé peut chiffrer précisément vos préjudices. Le cabinet travaille, si besoin, avec un réseau d'experts techniques.",
      },
    ],
    faq: [
      {
        q: "Peut-on encore agir plusieurs années après l'installation des panneaux solaires ?",
        a: "Souvent oui. Des délais de prescription s'appliquent, mais leur point de départ dépend des circonstances (date à laquelle vous avez découvert le problème, notamment). Chaque dossier doit être analysé : contactez le cabinet sans attendre avec votre bon de commande, votre offre de crédit et vos factures de production.",
      },
      {
        q: "Dois-je continuer à rembourser le crédit de mon installation photovoltaïque ?",
        a: "En principe oui tant qu'aucune décision n'a été rendue : cesser de payer vous exposerait à une inscription au fichier des incidents de paiement. L'objectif de la procédure est justement d'obtenir l'annulation du crédit affecté et, selon les cas, la restitution des sommes déjà versées.",
      },
      {
        q: "Le cabinet intervient-il en dehors de Martigues pour les arnaques photovoltaïques ?",
        a: "Oui. Maître Czub intervient sur toute la France dans ce domaine, devant les tribunaux judiciaires, les cours d'appel et la Cour de cassation.",
      },
      {
        q: "Pompes à chaleur, ballons thermodynamiques, isolation : est-ce le même combat ?",
        a: "Oui. Les mêmes règles du démarchage à domicile et du crédit affecté s'appliquent aux pompes à chaleur, ballons thermodynamiques, systèmes de chauffage, éoliennes de jardin et travaux d'isolation vendus à domicile.",
      },
    ],
    press: ["article-3", "article-1", "article-sos-conso"],
    national: true,
  },

  "fraudes-bancaires": {
    metaTitle: "Avocat fraude bancaire : spoofing, phishing, faux conseiller",
    metaDescription:
      "Victime d'un faux conseiller bancaire (spoofing), phishing, SIM swapping ou faux RIB ? Maître Czub, avocat à Martigues, obtient le remboursement par votre banque. Toute la France.",
    h1: "Avocat fraude bancaire :",
    h1Highlight: "spoofing, phishing, faux RIB",
    intro:
      "Faux conseiller bancaire au téléphone, SMS frauduleux, QR code piégé, carte SIM détournée : les fraudeurs contournent l'authentification forte et vident des comptes en quelques minutes. Votre banque refuse de vous rembourser en invoquant votre « négligence grave » ? La loi et la jurisprudence sont souvent de votre côté.",
    guideTitle: "Fraude bancaire : ce que dit la loi",
    guide: [
      {
        title: "Le principe : la banque rembourse",
        text: "Pour une opération de paiement non autorisée, la banque doit rembourser immédiatement, et au plus tard à la fin du premier jour ouvrable suivant votre signalement (article L. 133-18 du Code monétaire et financier).",
      },
      {
        title: "C'est à la banque de prouver votre négligence grave",
        text: "La banque ne peut refuser le remboursement qu'en démontrant une fraude ou une négligence grave de votre part. Le simple fait qu'une opération ait été validée avec vos identifiants ou votre application ne suffit pas à prouver cette négligence (article L. 133-23 du Code monétaire et financier).",
      },
      {
        title: "Le spoofing, une fraude de plus en plus sanctionnée",
        text: "Lorsque le fraudeur usurpe le numéro de téléphone de votre agence et se fait passer pour votre conseiller, les tribunaux et la Cour de cassation retiennent de plus en plus souvent que la victime, trompée par cette mise en scène, n'a pas commis de négligence grave.",
      },
      {
        title: "Réagissez vite",
        text: "Faites opposition, signalez les opérations à votre banque par écrit et déposez plainte. Vous disposez de 13 mois après le débit pour contester une opération non autorisée (article L. 133-24 du Code monétaire et financier), mais plus vous agissez tôt, meilleures sont vos chances.",
      },
    ],
    faq: [
      {
        q: "Ma banque refuse de me rembourser après un appel d'un faux conseiller : que faire ?",
        a: "Contestez le refus par écrit, en rappelant que la charge de la preuve de la négligence grave pèse sur la banque. Si elle maintient son refus, une action en justice peut être engagée. Maître Czub a obtenu de très nombreuses décisions favorables aux victimes de spoofing.",
      },
      {
        q: "J'ai validé l'opération sur mon application : suis-je encore protégé ?",
        a: "Pas nécessairement privé de recours. Tout dépend des circonstances de la fraude : manipulation par un faux conseiller, usurpation du numéro de la banque, informations dont disposait le fraudeur… Chaque situation doit être examinée.",
      },
      {
        q: "Faux RIB, SIM swapping, quishing : le cabinet traite-t-il ces fraudes ?",
        a: "Oui : fraude au faux RIB, SIM swapping (usurpation de carte SIM), quishing (QR codes piégés), phishing par e-mail ou SMS, logiciels malveillants. Le cabinet intervient sur toute la France.",
      },
      {
        q: "Combien de temps ai-je pour contester une opération frauduleuse ?",
        a: "13 mois à compter de la date de débit pour une opération non autorisée. N'attendez pas : signalez immédiatement la fraude à votre banque et conservez toutes les preuves (SMS, historique d'appels, captures d'écran).",
      },
    ],
    press: ["article-fraudes-bancaires-salon"],
    national: true,
  },

  "droit-de-la-consommation": {
    metaTitle: "Avocat droit de la consommation à Martigues",
    metaDescription:
      "Démarchage abusif, clauses abusives, crédit à la consommation, garantie légale de conformité : Maître Joseph Czub, avocat à Martigues, défend les consommateurs depuis 1994.",
    h1: "Avocat en droit",
    h1Highlight: "de la consommation",
    intro:
      "Depuis 1994, en lien avec l'UFC Que Choisir, le cabinet fait respecter le Code de la consommation face aux professionnels qui abusent : démarchage, ventes à distance, foires et salons, crédits à la consommation, clauses abusives et pratiques commerciales trompeuses.",
    guideTitle: "Consommateurs : vos principaux droits",
    guide: [
      {
        title: "Droit de rétractation de 14 jours",
        text: "Pour un contrat conclu à domicile ou à distance, vous disposez en principe de 14 jours pour vous rétracter sans motif. Si vous n'avez pas été correctement informé de ce droit, le délai est prolongé de 12 mois. Attention : il n'existe pas de droit de rétractation pour un achat en foire ou salon (hors crédit affecté).",
      },
      {
        title: "Des mentions obligatoires à peine de nullité",
        text: "Le professionnel doit vous remettre un contrat comportant de nombreuses informations précises. Leur absence permet souvent d'obtenir l'annulation du contrat et le remboursement des sommes versées.",
      },
      {
        title: "Clauses abusives et pratiques trompeuses",
        text: "Une clause qui crée un déséquilibre significatif à votre détriment est réputée non écrite. Les pratiques commerciales trompeuses ou agressives et l'abus de faiblesse sont également sanctionnés, y compris pénalement.",
      },
      {
        title: "Garantie légale de conformité : 2 ans",
        text: "Pour un bien acheté à un professionnel, vous bénéficiez de 2 ans de garantie légale de conformité : réparation ou remplacement, à défaut réduction du prix ou remboursement.",
      },
    ],
    faq: [
      {
        q: "Un démarcheur m'a fait signer un contrat chez moi : puis-je l'annuler ?",
        a: "Vous pouvez vous rétracter dans les 14 jours. Au-delà, l'annulation reste souvent possible si le contrat ne respecte pas les mentions obligatoires du Code de la consommation. Le cabinet peut vérifier la régularité de votre bon de commande.",
      },
      {
        q: "Le cabinet travaille-t-il avec l'UFC Que Choisir ?",
        a: "Oui. Maître Czub collabore depuis de nombreuses années avec l'UFC Que Choisir de Martigues, notamment dans des actions engagées dans l'intérêt collectif des consommateurs.",
      },
      {
        q: "Faut-il tenter une solution amiable avant d'aller au tribunal ?",
        a: "Oui, c'est en principe obligatoire pour les petits litiges et c'est toujours la démarche du cabinet : une mise en demeure rédigée par un avocat suffit parfois à régler le litige. À défaut, une procédure judiciaire est engagée.",
      },
    ],
    press: ["article-2", "article-viande-avariee", "article-grossiste-viande", "article-geant-casino"],
  },

  assurances: {
    metaTitle: "Avocat refus de garantie assurance à Martigues",
    metaDescription:
      "Votre assureur refuse de vous indemniser après un sinistre (vol, catastrophe naturelle, dégât, invalidité) ? Maître Joseph Czub, avocat à Martigues, fait valoir vos droits.",
    h1: "Avocat en droit",
    h1Highlight: "des assurances",
    intro:
      "Sinistre déclaré, garantie souscrite depuis des années… et pourtant l'assureur refuse de payer, propose une indemnisation dérisoire ou fait traîner le dossier. Le cabinet vous assiste pour contester le refus et obtenir l'indemnisation due.",
    guideTitle: "Refus d'indemnisation : les points clés",
    guide: [
      {
        title: "L'exclusion doit être claire et limitée",
        text: "Une clause d'exclusion de garantie n'est valable que si elle est formelle et limitée, et rédigée en caractères très apparents. Beaucoup de refus reposent sur des clauses qui ne respectent pas ces exigences.",
      },
      {
        title: "Catastrophe naturelle : 30 jours pour déclarer",
        text: "Après la publication de l'arrêté de catastrophe naturelle (sécheresse, inondation, coulée de boue), vous disposez de 30 jours pour déclarer le sinistre à votre assureur. Les fissures dues à la sécheresse sont une source fréquente de litiges.",
      },
      {
        title: "Attention à la prescription de 2 ans",
        text: "Les actions dérivant d'un contrat d'assurance se prescrivent en principe par 2 ans à compter de l'événement qui y donne naissance. Il est donc essentiel de consulter rapidement après un refus.",
      },
    ],
    faq: [
      {
        q: "Mon assureur refuse de m'indemniser : quels recours ?",
        a: "Commencez par demander par écrit la motivation précise du refus et les clauses invoquées. Une réclamation, puis une saisine du médiateur de l'assurance sont possibles ; une action judiciaire peut être engagée si le refus est injustifié.",
      },
      {
        q: "Quelles garanties le cabinet défend-il ?",
        a: "Garantie vol, vandalisme, événements climatiques, catastrophes naturelles, incapacité, invalidité et décès (notamment assurance emprunteur), garantie décennale et assurance dommages-ouvrage.",
      },
    ],
  },

  "construction-immobilier": {
    metaTitle: "Avocat construction, malfaçons et vices cachés à Martigues",
    metaDescription:
      "Malfaçons, retard de livraison, VEFA, CCMI, garantie décennale, piscine défectueuse, vices cachés : Maître Joseph Czub, avocat à Martigues, défend les propriétaires.",
    h1: "Avocat construction",
    h1Highlight: "et immobilier",
    intro:
      "Chantier abandonné, malfaçons, infiltrations, maison ou appartement livré en retard, vices cachés découverts après l'achat : le cabinet défend les particuliers face aux constructeurs, promoteurs, artisans et piscinistes.",
    guideTitle: "Les garanties de la construction",
    guide: [
      {
        title: "Garantie de parfait achèvement : 1 an",
        text: "L'entrepreneur doit réparer tous les désordres signalés à la réception ou apparus dans l'année qui suit.",
      },
      {
        title: "Garantie biennale : 2 ans",
        text: "Elle couvre le bon fonctionnement des équipements dissociables du bâti (volets, radiateurs, portes…).",
      },
      {
        title: "Garantie décennale : 10 ans",
        text: "Elle couvre les désordres qui compromettent la solidité de l'ouvrage ou le rendent impropre à sa destination. L'assurance dommages-ouvrage permet d'être préfinancé sans attendre l'issue d'un procès.",
      },
      {
        title: "Vices cachés : 2 ans après la découverte",
        text: "Lors de l'achat d'un bien, l'action en garantie des vices cachés doit être engagée dans les 2 ans qui suivent la découverte du vice.",
      },
    ],
    faq: [
      {
        q: "Mon constructeur a abandonné le chantier : que faire ?",
        a: "Dans un contrat de construction de maison individuelle (CCMI), la garantie de livraison permet de faire achever les travaux. Il faut agir vite et conserver toutes les preuves (constats, courriers, photos).",
      },
      {
        q: "Mon appartement acheté sur plan (VEFA) est livré en retard : ai-je droit à une indemnisation ?",
        a: "Le plus souvent oui, sauf cause légitime de retard prévue au contrat et réellement justifiée. Le cabinet vérifie ces clauses et réclame l'indemnisation de vos préjudices (loyers, frais, préjudice de jouissance).",
      },
    ],
    press: ["article-comedie"],
  },

  "litiges-automobile": {
    metaTitle: "Avocat litige automobile et vice caché véhicule à Martigues",
    metaDescription:
      "Vice caché sur un véhicule d'occasion, garagiste fautif, garantie de conformité : Maître Joseph Czub, avocat à Martigues, défend les automobilistes.",
    h1: "Avocat litiges",
    h1Highlight: "automobile",
    intro:
      "Moteur cassé quelques semaines après l'achat, kilométrage douteux, réparation mal faite par le garage : le cabinet défend les automobilistes face aux vendeurs, concessionnaires et garagistes.",
    guideTitle: "Vos recours après l'achat ou la réparation d'un véhicule",
    guide: [
      {
        title: "Garantie légale de conformité",
        text: "Pour un véhicule acheté à un professionnel, la garantie légale de conformité s'applique pendant 2 ans ; le défaut est présumé exister au moment de la vente pendant 12 mois pour un véhicule d'occasion et 24 mois pour un véhicule neuf.",
      },
      {
        title: "Garantie des vices cachés",
        text: "Elle s'applique aussi entre particuliers : l'action doit être engagée dans les 2 ans suivant la découverte du vice. Une expertise automobile est souvent déterminante.",
      },
      {
        title: "Le garagiste a une obligation de résultat",
        text: "Le garagiste est tenu d'une obligation de résultat pour les réparations qui lui sont confiées : en cas de nouvelle panne liée à son intervention, sa responsabilité est présumée.",
      },
    ],
    faq: [
      {
        q: "J'ai acheté une voiture d'occasion à un particulier et elle est tombée en panne : ai-je un recours ?",
        a: "Oui, la garantie des vices cachés s'applique aussi entre particuliers, à condition de prouver que le défaut existait avant la vente, était caché et rend le véhicule impropre à son usage. Une expertise est généralement nécessaire.",
      },
    ],
  },

  "responsabilite-contrats": {
    metaTitle: "Avocat litiges contractuels : voyage, vol aérien, agent immobilier",
    metaDescription:
      "Voyage annulé, vol retardé, agent immobilier ou diagnostiqueur fautif, contrat non respecté : Maître Joseph Czub, avocat à Martigues, fait valoir vos droits.",
    h1: "Avocat responsabilité",
    h1Highlight: "et contrats",
    intro:
      "Un professionnel n'a pas respecté ses engagements ? Voyage à forfait qui tourne mal, vol annulé ou retardé, erreur d'un agent immobilier ou d'un diagnostiqueur : le cabinet intervient dans l'ensemble des litiges contractuels du quotidien.",
    guideTitle: "Quelques droits à connaître",
    guide: [
      {
        title: "Transport aérien",
        text: "En cas d'annulation, de refus d'embarquement ou de retard de plus de 3 heures à l'arrivée, le règlement européen n° 261/2004 prévoit une indemnisation forfaitaire de 250 à 600 € selon la distance, sauf circonstances extraordinaires.",
      },
      {
        title: "Voyages à forfait",
        text: "L'organisateur ou l'agence est responsable de plein droit de la bonne exécution de tous les services du voyage, même s'ils sont fournis par d'autres prestataires.",
      },
      {
        title: "Diagnostics immobiliers",
        text: "Un diagnostic erroné (amiante, termites, performance énergétique…) peut engager la responsabilité du diagnostiqueur et ouvrir droit à indemnisation.",
      },
    ],
    faq: [
      {
        q: "La compagnie aérienne refuse de m'indemniser pour mon vol retardé : que faire ?",
        a: "Adressez une réclamation écrite à la compagnie puis, sans réponse satisfaisante, saisissez le médiateur ou le tribunal. Le cabinet peut vous accompagner si la compagnie invoque à tort des circonstances extraordinaires.",
      },
    ],
  },

  "prejudice-corporel": {
    metaTitle: "Avocat accident et préjudice corporel à Martigues",
    metaDescription:
      "Victime d'un accident de la route ou d'une erreur médicale ? Maître Joseph Czub, avocat à Martigues, vous accompagne pour obtenir la juste indemnisation de vos préjudices.",
    h1: "Avocat réparation",
    h1Highlight: "du préjudice corporel",
    intro:
      "Après un accident de la circulation ou une faute médicale, l'indemnisation proposée par l'assureur est souvent inférieure à ce à quoi vous avez droit. Être assisté d'un avocat dès le début permet de faire évaluer correctement chaque poste de préjudice.",
    guideTitle: "Indemnisation des victimes : l'essentiel",
    guide: [
      {
        title: "Accidents de la circulation : la loi Badinter",
        text: "La loi du 5 juillet 1985 protège largement les victimes d'accidents impliquant un véhicule terrestre à moteur, en particulier les piétons, cyclistes et passagers.",
      },
      {
        title: "Chaque préjudice est indemnisé",
        text: "Frais médicaux, pertes de revenus, déficit fonctionnel, souffrances endurées, préjudice esthétique, besoin d'assistance… L'expertise médicale est une étape décisive : il est préférable d'y être accompagné.",
      },
      {
        title: "Responsabilité médicale",
        text: "En cas de faute médicale ou d'accident médical, un recours est possible devant les juridictions ou la commission de conciliation et d'indemnisation (CCI). Le délai pour agir est de 10 ans à compter de la consolidation.",
      },
    ],
    faq: [
      {
        q: "Dois-je accepter l'offre d'indemnisation de l'assureur ?",
        a: "Pas avant de l'avoir fait vérifier. Les offres initiales sont fréquemment sous-évaluées. Un avocat peut contester l'offre et, si nécessaire, saisir le tribunal.",
      },
    ],
  },

  "litiges-bailleurs-locataires": {
    metaTitle: "Avocat litige locatif, loyers impayés et expulsion à Martigues",
    metaDescription:
      "Loyers impayés, expulsion, dépôt de garantie non restitué, réparations locatives : Maître Joseph Czub, avocat à Martigues, conseille bailleurs et locataires.",
    h1: "Avocat litiges",
    h1Highlight: "bailleurs et locataires",
    intro:
      "Propriétaire confronté à des loyers impayés ou locataire à qui l'on refuse de rendre son dépôt de garantie : le cabinet intervient dans tous les contentieux du bail d'habitation, à Martigues et dans les Bouches-du-Rhône.",
    guideTitle: "Bail d'habitation : repères utiles",
    guide: [
      {
        title: "Restitution du dépôt de garantie",
        text: "Le bailleur doit restituer le dépôt de garantie dans un délai d'1 mois si l'état des lieux de sortie est conforme à celui d'entrée, 2 mois dans le cas contraire. Tout retard entraîne une majoration de 10 % du loyer mensuel par mois de retard.",
      },
      {
        title: "Loyers impayés",
        text: "La procédure commence par un commandement de payer délivré par commissaire de justice. Si le bail contient une clause résolutoire, le locataire dispose de 6 semaines pour régulariser avant que le bailleur puisse demander la résiliation du bail et l'expulsion.",
      },
      {
        title: "Réparations locatives",
        text: "Le locataire prend en charge l'entretien courant ; le bailleur, les grosses réparations et la délivrance d'un logement décent. La répartition est souvent source de conflit en fin de bail.",
      },
    ],
    faq: [
      {
        q: "Mon propriétaire ne me rend pas mon dépôt de garantie : que faire ?",
        a: "Envoyez une mise en demeure en rappelant le délai légal et la majoration de 10 % par mois de retard. Sans réponse, la commission départementale de conciliation ou le tribunal peuvent être saisis.",
      },
    ],
  },

  "divorce-amiable": {
    metaTitle: "Avocat divorce amiable par consentement mutuel à Martigues",
    metaDescription:
      "Divorce par consentement mutuel à Martigues : Maître Joseph Czub rédige la convention de divorce et vous accompagne avec discrétion et efficacité.",
    h1: "Avocat divorce",
    h1Highlight: "amiable",
    intro:
      "Lorsque les époux sont d'accord sur le principe du divorce et sur toutes ses conséquences, le divorce par consentement mutuel permet de divorcer rapidement, sans passer devant le juge. Maître Czub vous accompagne à chaque étape.",
    guideTitle: "Comment se déroule un divorce amiable ?",
    guide: [
      {
        title: "Un avocat pour chaque époux",
        text: "Depuis 2017, le divorce par consentement mutuel prend la forme d'une convention signée par les époux et contresignée par leurs avocats. Chaque époux doit avoir son propre avocat.",
      },
      {
        title: "Un délai de réflexion de 15 jours",
        text: "Chaque époux reçoit le projet de convention et dispose d'un délai de réflexion de 15 jours avant de pouvoir la signer.",
      },
      {
        title: "Dépôt chez le notaire",
        text: "La convention est ensuite déposée au rang des minutes d'un notaire, ce qui lui donne date certaine et force exécutoire. Le divorce est alors définitif.",
      },
    ],
    faq: [
      {
        q: "Combien de temps dure un divorce amiable ?",
        a: "Lorsque les époux sont d'accord sur tout, la procédure peut aboutir en quelques semaines à quelques mois, selon la complexité du partage des biens.",
      },
    ],
  },
};
