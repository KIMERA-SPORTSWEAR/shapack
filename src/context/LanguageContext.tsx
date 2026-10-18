import React, { createContext, useContext, useState } from 'react';

export type Language = 'fr' | 'en' | 'de' | 'nl';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Nav
    'nav.home': 'Accueil',
    'nav.products': 'Nos Produits',
    'nav.portfolio': 'Réalisations',
    'nav.contact': 'Contact & Devis',
    'nav.quoteBtn': 'Demander un Devis',
    'nav.topTag': 'Fabricant d\'emballages basé à Bruxelles',
    'nav.topQuote': 'Devis sous 24h',
    'nav.phone': '+32 498 22 11 69',
    'nav.hours': 'Lun à Ven : 9h00 à 18h30',

    // Hero
    'hero.badge': 'Basé à Bruxelles • Fabricant B2B Restauration',
    'hero.title1': 'Vos emballages personnalisés',
    'hero.title2': 'sur-mesure',
    'hero.subtitle': 'Boîtes burgers, poke bowls, étuis à frites, sacs kraft et gobelets imprimés à vos couleurs. Entreprise basée à Bruxelles, livraison rapide en Belgique et dans toute l\'Europe.',
    'hero.reassurance1': 'Devis gratuit sous 24h',
    'hero.reassurance2': 'Quantités flexibles sur-mesure',
    'hero.reassurance3': 'Impression offset haute définition',
    'hero.reassurance4': 'Carton kraft et blanc recyclable',
    'hero.btnQuote': 'Demander un Devis en 24h',
    'hero.btnCatalog': 'Consulter le Catalogue',
    'hero.badgeOffset': 'Impression Offset',
    'hero.badgeMoq': 'Sur Devis',

    // Trusted By
    'trusted.title': 'Ils nous font confiance à Bruxelles et en Belgique',
    'trusted.subtitle': 'Restaurants, dark kitchens et commerces de bouche qui emballent avec SHAPACK.',

    // Pillars
    'pillars.title': 'La qualité SHAPACK',
    'pillars.subtitle': 'Des emballages solides, personnalisés et livrés rapidement.',
    'pillars.p1Title': 'Impression sur-mesure',
    'pillars.p1Desc': 'Impression offset de votre logo, visuels et couleurs sur tous vos contenants.',
    'pillars.p2Title': 'Quantités adaptées & flexibles',
    'pillars.p2Badge': 'Sur-mesure',
    'pillars.p2Desc': 'Production personnalisée adaptée aux restaurants indépendants comme aux enseignes multi-sites.',
    'pillars.p2Link': 'Voir les produits',
    'pillars.p3Title': 'Qualité alimentaire et écologie',
    'pillars.p3Desc': 'Cartons kraft et blancs rigides, barrière anti-gras et contact alimentaire certifié.',

    // Categories
    'categories.tag': 'Catalogue',
    'categories.title': 'Nos gammes d\'emballages',
    'categories.subtitle': 'Tous les formats indispensables pour le snacking et la vente à emporter.',
    'categories.viewAll': 'Voir tout le catalogue',
    'categories.all': 'Tous les produits',
    'categories.chaud': 'Boîtes & Étuis Chauds',
    'categories.salades': 'Plats & Salades',
    'categories.boulangerie': 'Boulangerie & Sandwiches',
    'categories.sacs': 'Sacs & Transport',
    'categories.gobelets': 'Gobelets & Accessoires',
    'categories.luxe': 'Luxe & Cadeaux',
    'categories.discover': 'Découvrir',

    // Process
    'process.title': 'Fonctionnement',
    'process.subtitle': 'De votre première demande à la livraison de vos palettes.',
    'process.s1Tag': 'Étape 1',
    'process.s1Title': 'Devis sous 24h',
    'process.s1Desc': 'Sélection de vos contenants et chiffrage clair selon vos volumes.',
    'process.s2Tag': 'Étape 2',
    'process.s2Title': 'Validation du BAT',
    'process.s2Desc': 'Ajustement de vos graphismes sur nos gabarits et validation avant impression.',
    'process.s3Tag': 'Étape 3',
    'process.s3Title': 'Production & Livraison',
    'process.s3Desc': 'Impression, façonnage et livraison directe dans votre établissement.',

    // Conditions
    'conditions.moqLabel': 'Devis & Quantités',
    'conditions.moqVal': 'Sur Devis',
    'conditions.moqSub': 'Adapté à votre activité sans contrainte.',
    'conditions.timeLabel': 'Délai de fabrication',
    'conditions.timeVal': '3 à 4 semaines',
    'conditions.timeSub': 'Fabrication soignée et livraison suivie.',
    'conditions.quoteLabel': 'Délai de devis',
    'conditions.quoteVal': 'Sous 24h ouvrées',
    'conditions.quoteSub': 'Chiffrage clair et direct.',

    // Social
    'social.tag': 'Instagram',
    'social.title': 'Dernières réalisations',
    'social.subtitle': 'Retrouvez nos emballages en situation chez nos restaurants partenaires.',
    'social.btn': 'Suivre @shapack.be',

    // Portfolio Page
    'portfolio.tag': 'Réalisations',
    'portfolio.title': 'Nos réalisations pour les restaurants',
    'portfolio.subtitle': 'Exemples d\'emballages personnalisés livrés à Bruxelles, en Belgique et en Europe.',
    'portfolio.requestSimilar': 'Demander un devis similaire',
    'portfolio.ctaTitle': 'Envie de personnaliser vos contenants ?',
    'portfolio.ctaDesc': 'Envoyez-nous vos logos et votre sélection pour recevoir votre proposition tarifaire.',

    // Contact Page
    'contact.tag': 'Devis sous 24h',
    'contact.title': 'Demande de devis',
    'contact.subtitle': 'Remplissez le formulaire ci-dessous. Notre équipe basée à Bruxelles vous répond sous 24 heures ouvrées.',
    'contact.directTitle': 'Contact direct',
    'contact.phoneLabel': 'Téléphone :',
    'contact.emailLabel': 'Email :',
    'contact.headquarters': 'Siège & Service commercial :',
    'contact.address': 'SHAPACK Packaging • Bruxelles, Belgique',
    'contact.hoursLabel': 'Horaires :',
    'contact.hours': 'Du lundi au vendredi de 9h00 à 18h30',
    'contact.commitment': 'Réponse commerciale sous 24h ouvrées.',
    'contact.step1': 'Types d\'emballages souhaités',
    'contact.step2': 'Quantité estimée',
    'contact.step3': 'Votre établissement',
    'contact.restoName': 'Nom du restaurant / Enseigne *',
    'contact.city': 'Ville *',
    'contact.step4': 'Vos coordonnées',
    'contact.name': 'Nom & Prénom *',
    'contact.email': 'Email professionnel *',
    'contact.phone': 'Téléphone *',
    'contact.logo': 'Logo ou fichier graphique (facultatif)',
    'contact.logoUpload': 'Importer PDF, AI, PNG, SVG',
    'contact.message': 'Précisions complémentaires',
    'contact.messagePlaceholder': 'Formats précis, date d\'ouverture ou questions...',
    'contact.submitBtn': 'Envoyer la demande',
    'contact.noCommitment': 'Devis gratuit et sans engagement',
    'contact.successTitle': 'Demande envoyée !',
    'contact.successDesc': 'Votre demande a bien été transmise. Notre équipe vous répond sous 24h ouvrées.',
    'contact.refLabel': 'Référence :',
    'contact.btnAnother': 'Envoyer un autre message',

    // Footer
    'footer.ctaTitle': 'Prêt à lancer vos emballages personnalisés ?',
    'footer.ctaSubtitle': 'Devis clair et chiffré remis sous 24h ouvrées.',
    'footer.ctaBtn': 'Demander un devis',
    'footer.about': 'Fabricant et distributeur d\'emballages alimentaires personnalisés basé à Bruxelles. Livraison rapide en Belgique et dans toute l\'Europe.',
    'footer.nav': 'Navigation',
    'footer.ranges': 'Gammes',
    'footer.commercialContact': 'Contact',
    'footer.copyright': '© SHAPACK. Tous droits réservés. Bruxelles, Belgique.',
    'footer.legal': 'Mentions Légales',
    'footer.terms': 'Conditions Générales',
    'footer.privacy': 'Confidentialité',
  },

  en: {
    // Nav
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.portfolio': 'Our Work',
    'nav.contact': 'Contact & Quote',
    'nav.quoteBtn': 'Request a Quote',
    'nav.topTag': 'Packaging manufacturer based in Brussels',
    'nav.topQuote': 'Quote within 24 business hours',
    'nav.phone': '+32 498 22 11 69',
    'nav.hours': 'Mon to Fri : 9:00 AM to 6:30 PM',

    // Hero
    'hero.badge': 'Based in Brussels • B2B Foodservice Packaging',
    'hero.title1': 'Custom food packaging',
    'hero.title2': 'tailor-made',
    'hero.subtitle': 'Custom-printed burger boxes, poke bowls, fries sleeves, kraft bags and cups. Based in Brussels, with fast delivery across Belgium and Europe.',
    'hero.reassurance1': 'Free quote within 24 hours',
    'hero.reassurance2': 'Flexible custom order quantities',
    'hero.reassurance3': 'High-definition offset printing',
    'hero.reassurance4': 'Recyclable kraft and white board',
    'hero.btnQuote': 'Get a Quote in 24h',
    'hero.btnCatalog': 'Browse Catalog',
    'hero.badgeOffset': 'Offset Printing',
    'hero.badgeMoq': 'Custom Quote',

    // Trusted By
    'trusted.title': 'Trusted in Brussels and across Belgium',
    'trusted.subtitle': 'Restaurants, food concepts and dark kitchens packaging with SHAPACK.',

    // Pillars
    'pillars.title': 'The SHAPACK Standard',
    'pillars.subtitle': 'Sturdy, branded packagings delivered directly to your kitchen.',
    'pillars.p1Title': 'Full Custom Print',
    'pillars.p1Desc': 'High-precision offset printing of your logo, brand colors and visual identity on every box.',
    'pillars.p2Title': 'Flexible Quantities',
    'pillars.p2Badge': 'Tailored',
    'pillars.p2Desc': 'Flexible order sizes tailored for independent restaurants and growing chains alike.',
    'pillars.p2Link': 'View products',
    'pillars.p3Title': 'Certified Food Safety',
    'pillars.p3Desc': 'Rigid kraft and white boards with certified greaseproof barriers for direct hot food contact.',

    // Categories
    'categories.tag': 'Catalog',
    'categories.title': 'Packaging Categories',
    'categories.subtitle': 'Essential packaging formats for takeout, fast food, and street food.',
    'categories.viewAll': 'View full catalog',
    'categories.all': 'All products',
    'categories.chaud': 'Hot Boxes & Sleeves',
    'categories.salades': 'Dishes & Bowls',
    'categories.boulangerie': 'Bakery & Sandwiches',
    'categories.sacs': 'Bags & Transport',
    'categories.gobelets': 'Cups & Accessories',
    'categories.luxe': 'Luxury & Gifts',
    'categories.discover': 'Explore',

    // Process
    'process.title': 'How It Works',
    'process.subtitle': 'From your initial inquiry to final delivery at your doors.',
    'process.s1Tag': 'Step 1',
    'process.s1Title': 'Quote in 24h',
    'process.s1Desc': 'Select your items and get clear pricing based on your run sizes.',
    'process.s2Tag': 'Step 2',
    'process.s2Title': 'Artwork & Proof',
    'process.s2Desc': 'We place your design on industrial dielines and review the digital proof together.',
    'process.s3Tag': 'Step 3',
    'process.s3Title': 'Production & Delivery',
    'process.s3Desc': 'Offset printing, folding, and direct tracked delivery to your restaurant.',

    // Conditions
    'conditions.moqLabel': 'Quote & Quantities',
    'conditions.moqVal': 'Custom Quote',
    'conditions.moqSub': 'Tailored to your needs without constraint.',
    'conditions.timeLabel': 'Lead time',
    'conditions.timeVal': '3 to 4 weeks',
    'conditions.timeSub': 'High-precision production and tracked shipment.',
    'conditions.quoteLabel': 'Quote turnaround',
    'conditions.quoteVal': 'Within 24 business hours',
    'conditions.quoteSub': 'Straightforward and detailed quote.',

    // Social
    'social.tag': 'Instagram',
    'social.title': 'Recent Packaging Runs',
    'social.subtitle': 'See custom packagings live in action at our partner restaurants.',
    'social.btn': 'Follow @shapack.be',

    // Portfolio Page
    'portfolio.tag': 'Portfolio',
    'portfolio.title': 'Client Projects',
    'portfolio.subtitle': 'Custom packaging projects delivered across Brussels, Belgium and Europe.',
    'portfolio.requestSimilar': 'Request a similar quote',
    'portfolio.ctaTitle': 'Ready to brand your packaging?',
    'portfolio.ctaDesc': 'Send us your artwork and packaging list to receive a fast quote.',

    // Contact Page
    'contact.tag': 'Quote in 24h',
    'contact.title': 'Request a Quote',
    'contact.subtitle': 'Fill out the form below. Our Brussels-based team responds within 24 business hours.',
    'contact.directTitle': 'Direct Contact',
    'contact.phoneLabel': 'Phone:',
    'contact.emailLabel': 'Email:',
    'contact.headquarters': 'Headquarters & Sales:',
    'contact.address': 'SHAPACK Packaging • Brussels, Belgium',
    'contact.hoursLabel': 'Hours:',
    'contact.hours': 'Monday to Friday, 9:00 AM to 6:30 PM',
    'contact.commitment': 'Sales response within 24 business hours.',
    'contact.step1': 'Packaging Types Needed',
    'contact.step2': 'Estimated Quantity',
    'contact.step3': 'Your Restaurant',
    'contact.restoName': 'Restaurant or Brand Name *',
    'contact.city': 'City *',
    'contact.step4': 'Your Contact Details',
    'contact.name': 'Full Name *',
    'contact.email': 'Business Email *',
    'contact.phone': 'Phone *',
    'contact.logo': 'Logo or artwork (optional)',
    'contact.logoUpload': 'Upload PDF, AI, PNG, SVG',
    'contact.message': 'Additional details',
    'contact.messagePlaceholder': 'Specific dimensions, opening dates, or questions...',
    'contact.submitBtn': 'Send Request',
    'contact.noCommitment': 'Free quote with no obligation',
    'contact.successTitle': 'Request Sent',
    'contact.successDesc': 'Your request has been received. Our team will contact you within 24 business hours.',
    'contact.refLabel': 'Reference:',
    'contact.btnAnother': 'Send another message',

    // Footer
    'footer.ctaTitle': 'Ready to start your custom packaging?',
    'footer.ctaSubtitle': 'Clear and detailed quote within 24 business hours.',
    'footer.ctaBtn': 'Get your quote',
    'footer.about': 'Custom food packaging manufacturer based in Brussels. Fast delivery across Belgium and Europe.',
    'footer.nav': 'Navigation',
    'footer.ranges': 'Categories',
    'footer.commercialContact': 'Contact',
    'footer.copyright': '© SHAPACK. All rights reserved. Brussels, Belgium.',
    'footer.legal': 'Legal Notice',
    'footer.terms': 'Terms',
    'footer.privacy': 'Privacy',
  },

  de: {
    // Nav
    'nav.home': 'Startseite',
    'nav.products': 'Produkte',
    'nav.portfolio': 'Referenzen',
    'nav.contact': 'Kontakt & Angebot',
    'nav.quoteBtn': 'Angebot anfordern',
    'nav.topTag': 'Verpackungshersteller mit Sitz in Brüssel',
    'nav.topQuote': 'Angebot innerhalb von 24h',
    'nav.phone': '+32 498 22 11 69',
    'nav.hours': 'Mo bis Fr : 9:00 bis 18:30 Uhr',

    // Hero
    'hero.badge': 'Mit Sitz in Brüssel • B2B Gastronomie Verpackungen',
    'hero.title1': 'Individuelle Gastronomieverpackungen',
    'hero.title2': 'nach Maß',
    'hero.subtitle': 'Burgerboxen, Poke Bowls, Pommestüten, Kraftpapiertüten und Becher in Ihrem Design. Mit Sitz in Brüssel, schnelle Lieferung in Belgien und ganz Europa.',
    'hero.reassurance1': 'Kostenloses Angebot innerhalb von 24h',
    'hero.reassurance2': 'Flexible Bestellmengen nach Maß',
    'hero.reassurance3': 'Hochauflösender Offsetdruck',
    'hero.reassurance4': 'Recycelbarer Kraft- und Weißkarton',
    'hero.btnQuote': 'Angebot in 24h anfordern',
    'hero.btnCatalog': 'Katalog ansehen',
    'hero.badgeOffset': 'Offsetdruck',
    'hero.badgeMoq': 'Auf Anfrage',

    // Trusted By
    'trusted.title': 'Partnerbetriebe in Brüssel und Belgien',
    'trusted.subtitle': 'Restaurants, Dark Kitchens und Gastronomiekonzepte vertrauen auf SHAPACK.',

    // Pillars
    'pillars.title': 'Der SHAPACK Vorteil',
    'pillars.subtitle': 'Stabile, markenindividuelle Verpackungen direkt in Ihren Betrieb geliefert.',
    'pillars.p1Title': 'Kompletter individueller Druck',
    'pillars.p1Desc': 'Offsetdruck Ihres Logos, Ihrer Farben und Schriften auf all Ihren Verpackungen.',
    'pillars.p2Title': 'Flexible Bestellmengen',
    'pillars.p2Badge': 'Flexibel',
    'pillars.p2Desc': 'Wirtschaftliche Mengen angepasst an Einzelgastronomen und Ketten.',
    'pillars.p2Link': 'Produkte ansehen',
    'pillars.p3Title': 'Zertifizierte Lebensmittelechtheit',
    'pillars.p3Desc': 'Fettbeständiger, stabiler Kraftkarton für warme und fettige Speisen.',

    // Categories
    'categories.tag': 'Sortiment',
    'categories.title': 'Verpackungskategorien',
    'categories.subtitle': 'Alle gängigen Formate für modernes Snacking und Take-Away.',
    'categories.viewAll': 'Gesamtes Sortiment',
    'categories.all': 'Alle Produkte',
    'categories.chaud': 'Warme Boxen & Taschen',
    'categories.salades': 'Schalen & Bowls',
    'categories.boulangerie': 'Bäckerei & Sandwiches',
    'categories.sacs': 'Tragetaschen',
    'categories.gobelets': 'Becher & Zubehör',
    'categories.luxe': 'Luxus & Geschenke',
    'categories.discover': 'Entdecken',

    // Process
    'process.title': 'Ablauf',
    'process.subtitle': 'Von Ihrer Anfrage bis zur direkten Palettenlieferung.',
    'process.s1Tag': 'Schritt 1',
    'process.s1Title': 'Angebot in 24h',
    'process.s1Desc': 'Auswahl Ihrer Formate und klare Preisübersicht.',
    'process.s2Tag': 'Schritt 2',
    'process.s2Title': 'Druckfreigabe',
    'process.s2Desc': 'Einpassung Ihres Logos auf Stanzkonturen und gemeinsame Freigabe.',
    'process.s3Tag': 'Schritt 3',
    'process.s3Title': 'Produktion & Lieferung',
    'process.s3Desc': 'Offsetfertigung und direkte Anlieferung an Ihren Standort.',

    // Conditions
    'conditions.moqLabel': 'Mengen & Angebot',
    'conditions.moqVal': 'Auf Anfrage',
    'conditions.moqSub': 'Flexibel an Ihren Bedarf angepasst.',
    'conditions.timeLabel': 'Produktionszeit',
    'conditions.timeVal': '3 bis 4 Wochen',
    'conditions.timeSub': 'Sorgfältige Fertigung und Sendungsverfolgung.',
    'conditions.quoteLabel': 'Angebotsdauer',
    'conditions.quoteVal': 'Innerhalb von 24h',
    'conditions.quoteSub': 'Klare, verbindliche Preiskalkulation.',

    // Social
    'social.tag': 'Instagram',
    'social.title': 'Aktuelle Arbeiten',
    'social.subtitle': 'Verpackungen im Praxiseinsatz unserer Gastro-Partner.',
    'social.btn': 'Folgen auf @shapack.be',

    // Portfolio Page
    'portfolio.tag': 'Referenzen',
    'portfolio.title': 'Projekte für Gastronomiebetriebe',
    'portfolio.subtitle': 'Maßgeschneiderte Verpackungslösungen in Brüssel und ganz Europa.',
    'portfolio.requestSimilar': 'Ähnliches Angebot anfordern',
    'portfolio.ctaTitle': 'Möchten Sie Ihre Verpackungen bedrucken?',
    'portfolio.ctaDesc': 'Senden Sie uns Ihr Logo und Ihre Artikelauswahl für ein zügiges Angebot.',

    // Contact Page
    'contact.tag': 'Angebot in 24h',
    'contact.title': 'Angebotsanfrage',
    'contact.subtitle': 'Füllen Sie das Formular aus. Unser Vertrieb mit Sitz in Brüssel antwortet innerhalb von 24 Arbeitsstunden.',
    'contact.directTitle': 'Direkter Kontakt',
    'contact.phoneLabel': 'Telefon :',
    'contact.emailLabel': 'E-Mail :',
    'contact.headquarters': 'Firmensitz & Vertrieb :',
    'contact.address': 'SHAPACK Packaging • Brüssel, Belgien',
    'contact.hoursLabel': 'Öffnungszeiten :',
    'contact.hours': 'Montag bis Freitag von 9:00 bis 18:30 Uhr',
    'contact.commitment': 'Rückmeldung innerhalb von 24 Arbeitsstunden.',
    'contact.step1': 'Gewünschte Verpackungsarten',
    'contact.step2': 'Geschätzte Stückzahl',
    'contact.step3': 'Ihr Restaurantbetrieb',
    'contact.restoName': 'Restaurant- oder Markenname *',
    'contact.city': 'Stadt *',
    'contact.step4': 'Ihre Kontaktdaten',
    'contact.name': 'Vor- und Nachname *',
    'contact.email': 'Geschäftliche E-Mail *',
    'contact.phone': 'Telefon *',
    'contact.logo': 'Logo oder Druckdaten (optional)',
    'contact.logoUpload': 'PDF, AI, PNG, SVG hochladen',
    'contact.message': 'Zusätzliche Angaben',
    'contact.messagePlaceholder': 'Genaue Maße, Eröffnungstermin oder Fragen...',
    'contact.submitBtn': 'Anfrage absenden',
    'contact.noCommitment': 'Kostenlose und unverbindliche Kalkulation',
    'contact.successTitle': 'Anfrage übermittelt',
    'contact.successDesc': 'Ihre Anfrage ist eingegangen. Wir melden uns innerhalb von 24 Arbeitsstunden.',
    'contact.refLabel': 'Referenz :',
    'contact.btnAnother': 'Weitere Nachricht senden',

    // Footer
    'footer.ctaTitle': 'Bereit für Ihre eigenen Verpackungen?',
    'footer.ctaSubtitle': 'Detailliertes Angebot in 24h.',
    'footer.ctaBtn': 'Angebot anfordern',
    'footer.about': 'Hersteller für individuelle Gastronomieverpackungen mit Sitz in Brüssel. Schnelle Lieferung in Belgien und Europa.',
    'footer.nav': 'Navigation',
    'footer.ranges': 'Sortiment',
    'footer.commercialContact': 'Kontakt',
    'footer.copyright': '© SHAPACK. Alle Rechte vorbehalten. Brüssel, Belgien.',
    'footer.legal': 'Impressum',
    'footer.terms': 'AGB',
    'footer.privacy': 'Datenschutz',
  },

  nl: {
    // Nav
    'nav.home': 'Home',
    'nav.products': 'Producten',
    'nav.portfolio': 'Projecten',
    'nav.contact': 'Contact & Offerte',
    'nav.quoteBtn': 'Offerte Aanvragen',
    'nav.topTag': 'Verpakkingsfabrikant gevestigd in Brussel',
    'nav.topQuote': 'Offerte binnen 24 werkuren',
    'nav.phone': '+32 498 22 11 69',
    'nav.hours': 'Ma tot Vr : 9:00 tot 18:30',

    // Hero
    'hero.badge': 'Gevestigd in Brussel • B2B Horeca Verpakkingen',
    'hero.title1': 'Bedrukte voedselverpakkingen',
    'hero.title2': 'op maat',
    'hero.subtitle': 'Burgerboxen, poke bowls, frietzakjes, krafttassen en bekers in uw eigen huisstijl. Gevestigd in Brussel, snelle levering in België en Europa.',
    'hero.reassurance1': 'Gratis offerte binnen 24 uur',
    'hero.reassurance2': 'Flexibele bestelhoeveelheden op maat',
    'hero.reassurance3': 'Offsetdruk van hoge kwaliteit',
    'hero.reassurance4': 'Recyclebaar kraft en wit karton',
    'hero.btnQuote': 'Offerte aanvragen in 24u',
    'hero.btnCatalog': 'Bekijk de Catalogus',
    'hero.badgeOffset': 'Offsetdruk',
    'hero.badgeMoq': 'Op Offerte',

    // Trusted By
    'trusted.title': 'Zij vertrouwen op ons in Brussel en België',
    'trusted.subtitle': 'Restaurants, dark kitchens en horecazaken die verpakken met SHAPACK.',

    // Pillars
    'pillars.title': 'De kwaliteit van SHAPACK',
    'pillars.subtitle': 'Stevige, bedrukte verpakkingen direct aan uw zaak geleverd.',
    'pillars.p1Title': 'Bedrukking op maat',
    'pillars.p1Desc': 'Offsetdruk van uw logo, kleuren en huisstijl op al uw verpakkingen.',
    'pillars.p2Title': 'Flexibele Aantallen',
    'pillars.p2Badge': 'Op Maat',
    'pillars.p2Desc': 'Flexibele bestelhoeveelheden voor zowel zelfstandigen als ketens.',
    'pillars.p2Link': 'Bekijk producten',
    'pillars.p3Title': 'Voedselveilig en gecertificeerd',
    'pillars.p3Desc': 'Vetbestendig kraft- en witkarton, gecertificeerd voor direct contact met warm eten.',

    // Categories
    'categories.tag': 'Assortiment',
    'categories.title': 'Onze verpakkingslijnen',
    'categories.subtitle': 'Alle onmisbare formaten voor snacking en take-away.',
    'categories.viewAll': 'Bekijk het hele assortiment',
    'categories.all': 'Alle producten',
    'categories.chaud': 'Warme Dozen & Sleeves',
    'categories.salades': 'Schalen & Bowls',
    'categories.boulangerie': 'Bakkerij & Sandwiches',
    'categories.sacs': 'Draagtassen',
    'categories.gobelets': 'Bekers & Accessoires',
    'categories.luxe': 'Luxe & Geschenk',
    'categories.discover': 'Ontdekken',

    // Process
    'process.title': 'Werkwijze',
    'process.subtitle': 'Van uw eerste aanvraag tot levering op locatie.',
    'process.s1Tag': 'Stap 1',
    'process.s1Title': 'Offerte in 24u',
    'process.s1Desc': 'Selecteer uw modellen en ontvang een duidelijke prijs op basis van uw aantallen.',
    'process.s2Tag': 'Stap 2',
    'process.s2Title': 'Goedkeuring drukproef',
    'process.s2Desc': 'Plaatsing van uw ontwerp op stansmallen en gezamenlijke controle.',
    'process.s3Tag': 'Stap 3',
    'process.s3Title': 'Productie & Levering',
    'process.s3Desc': 'Offsetdruk, afwerking en rechtstreekse levering met tracking.',

    // Conditions
    'conditions.moqLabel': 'Offerte & Aantallen',
    'conditions.moqVal': 'Op Offerte',
    'conditions.moqSub': 'Flexibel afgestemd op uw zaak.',
    'conditions.timeLabel': 'Productietijd',
    'conditions.timeVal': '3 tot 4 weken',
    'conditions.timeSub': 'Zorgvuldige productie en betrouwbare verzending.',
    'conditions.quoteLabel': 'Offertetermijn',
    'conditions.quoteVal': 'Binnen 24 werkuren',
    'conditions.quoteSub': 'Duidelijke en transparante offerte.',

    // Social
    'social.tag': 'Instagram',
    'social.title': 'Recente realisaties',
    'social.subtitle': 'Bekijk onze verpakkingen in de praktijk bij aangesloten horecazaken.',
    'social.btn': 'Volg @shapack.be',

    // Portfolio Page
    'portfolio.tag': 'Realisaties',
    'portfolio.title': 'Projecten voor horecazaken',
    'portfolio.subtitle': 'Voorbeelden van bedrukte verpakkingen geleverd in Brussel, België en Europa.',
    'portfolio.requestSimilar': 'Vergelijkbare offerte aanvragen',
    'portfolio.ctaTitle': 'Uw eigen verpakkingen laten bedrukken?',
    'portfolio.ctaDesc': 'Stuur ons uw logo en wensen om een gerichte prijsopgave te ontvangen.',

    // Contact Page
    'contact.tag': 'Offerte in 24u',
    'contact.title': 'Offerte aanvragen',
    'contact.subtitle': 'Vul het formulier in. Ons salesteam gevestigd in Brussel reageert binnen 24 werkuren.',
    'contact.directTitle': 'Direct contact',
    'contact.phoneLabel': 'Telefoon :',
    'contact.emailLabel': 'E-mail :',
    'contact.headquarters': 'Hoofdzetel & Verkoop :',
    'contact.address': 'SHAPACK Packaging • Brussel, België',
    'contact.hoursLabel': 'Openingstijden :',
    'contact.hours': 'Maandag tot vrijdag van 9:00 tot 18:30',
    'contact.commitment': 'Reactie binnen 24 werkuren.',
    'contact.step1': 'Gewenste verpakkingen',
    'contact.step2': 'Verwachte afname',
    'contact.step3': 'Uw zaak',
    'contact.restoName': 'Restaurant- of Zaaknaam *',
    'contact.city': 'Plaats *',
    'contact.step4': 'Uw gegevens',
    'contact.name': 'Voor- en achternaam *',
    'contact.email': 'Zakelijk e-mailadres *',
    'contact.phone': 'Telefoonnummer *',
    'contact.logo': 'Logo of drukbestand (optioneel)',
    'contact.logoUpload': 'Upload PDF, AI, PNG, SVG',
    'contact.message': 'Aanvullende opmerkingen',
    'contact.messagePlaceholder': 'Gewenste afmetingen, openingsdatum of specifieke vragen...',
    'contact.submitBtn': 'Aanvraag verzenden',
    'contact.noCommitment': 'Gratis en vrijblijvende offerte',
    'contact.successTitle': 'Aanvraag verzonden',
    'contact.successDesc': 'Uw aanvraag is goed ontvangen. We nemen binnen 24 werkuren contact op.',
    'contact.refLabel': 'Referentie :',
    'contact.btnAnother': 'Nog een bericht sturen',

    // Footer
    'footer.ctaTitle': 'Klaar om uw eigen verpakkingen te bedrukken?',
    'footer.ctaSubtitle': 'Duidelijke offerte binnen 24u.',
    'footer.ctaBtn': 'Vraag een offerte aan',
    'footer.about': 'Fabrikant van bedrukte voedselverpakkingen gevestigd in Brussel. Snelle levering in België en Europa.',
    'footer.nav': 'Navigatie',
    'footer.ranges': 'Verpakkingslijnen',
    'footer.commercialContact': 'Contact',
    'footer.copyright': '© SHAPACK. Alle rechten voorbehouden. Brussel, België.',
    'footer.legal': 'Juridische Informatie',
    'footer.terms': 'Algemene Voorwaarden',
    'footer.privacy': 'Privacybeleid',
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'fr',
  setLanguage: () => {},
  t: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('shapack_lang') as Language;
    return saved && ['fr', 'en', 'de', 'nl'].includes(saved) ? saved : 'fr';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('shapack_lang', lang);
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.fr[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
