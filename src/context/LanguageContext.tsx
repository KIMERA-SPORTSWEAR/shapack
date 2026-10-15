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
    'nav.portfolio': 'Nos Réalisations',
    'nav.contact': 'Contact / Devis',
    'nav.quoteBtn': 'Demander un Devis',
    'nav.topTag': 'Votre expert en emballage personnalisé',
    'nav.topQuote': 'Devis chiffré sous 24h ouvrées',
    'nav.phone': '+32 498 22 11 69',
    'nav.hours': 'Lun - Ven : 9h00 - 18h30',

    // Hero
    'hero.badge': 'FABRICANT B2B • RESTAURATION & CHR',
    'hero.title1': 'Développez votre image de marque avec des',
    'hero.title2': 'emballages sur-mesure',
    'hero.subtitle': 'Boîtes burgers, poke bowls, étuis à frites, sacs kraft et gobelets 100% personnalisables. Accessible dès 2 000 pièces avec impression haute définition.',
    'hero.reassurance1': 'Devis gratuit sous 24h ouvrées',
    'hero.reassurance2': 'Petites séries accessibles dès 2 000 pièces',
    'hero.reassurance3': 'Impression offset haute définition',
    'hero.reassurance4': 'Carton kraft et blanc recyclable',
    'hero.btnQuote': 'Demander un Devis en 24h',
    'hero.btnCatalog': 'Consulter le Catalogue',
    'hero.badgeOffset': 'Impression Sur-Mesure',
    'hero.badgeMoq': 'Dès 2 000 pcs',

    // Trusted By
    'trusted.title': 'Ils nous font confiance',
    'trusted.subtitle': 'Des dizaines de restaurants, dark kitchens et chaînes de restauration développent leur marque avec SHAPACK.',

    // Pillars
    'pillars.title': 'Pourquoi choisir SHAPACK ?',
    'pillars.subtitle': 'La solution d\'emballage idéale pour les professionnels de la restauration.',
    'pillars.p1Title': 'Personnalisation graphique totale',
    'pillars.p1Desc': 'Impression haute précision pour apposer votre logo, charte graphique et réseaux sociaux sur l\'ensemble de vos contenants.',
    'pillars.p2Title': 'Petites & Moyennes séries (Dès 2 000 pcs)',
    'pillars.p2Badge': 'Accessible',
    'pillars.p2Desc': 'Fini les minimums inaccessibles de 20 000 pièces. Nous rendons l\'emballage personnalisé abordable pour tous les restaurateurs.',
    'pillars.p2Link': 'Découvrir nos produits →',
    'pillars.p3Title': 'Conformité & écologie',
    'pillars.p3Desc': 'Cartons kraft et blancs recyclables, barrière anti-gras haute tenue, certifiés pour le contact alimentaire direct.',

    // Categories
    'categories.tag': 'Notre Assortiment',
    'categories.title': 'Catalogue des produits proposés',
    'categories.subtitle': 'Tous les classiques du snacking contemporain et de la restauration à emporter.',
    'categories.viewAll': 'Voir les 5 catégories',
    'categories.all': 'Tous les Packagings',
    'categories.chaud': 'Boîtes & Étuis Chauds',
    'categories.salades': 'Plats & Salades',
    'categories.boulangerie': 'Boulangerie & Sandwiches',
    'categories.sacs': 'Sacs & Transport',
    'categories.gobelets': 'Gobelets & Accessoires',
    'categories.discover': 'Découvrir la gamme',

    // Process
    'process.title': 'Comment ça se passe ?',
    'process.subtitle': 'Un processus simple et transparent en 3 étapes de la commande à la livraison.',
    'process.s1Tag': 'Étape 01',
    'process.s1Title': 'Devis sous 24h',
    'process.s1Desc': 'Expression de votre besoin, sélection des formats et proposition tarifaire claire.',
    'process.s2Tag': 'Étape 02',
    'process.s2Title': 'Validation du BAT',
    'process.s2Desc': 'Application de votre logo sur nos gabarits d\'impression et validation du Bon à Tirer.',
    'process.s3Tag': 'Étape 03',
    'process.s3Title': 'Production & Livraison',
    'process.s3Desc': 'Fabrication soignée et livraison directe à votre établissement.',

    // Conditions
    'conditions.moqLabel': 'Quantité Minimale (MOQ)',
    'conditions.moqVal': 'Dès 2 000 pièces',
    'conditions.moqSub': 'Idéal pour tester ou renouveler facilement.',
    'conditions.timeLabel': 'Délais de Production',
    'conditions.timeVal': '3 à 4 semaines',
    'conditions.timeSub': 'Fabrication rapide et livraison suivie.',
    'conditions.quoteLabel': 'Délai de Devis',
    'conditions.quoteVal': 'Sous 24h ouvrées',
    'conditions.quoteSub': 'Étude personnalisée et chiffrage transparent.',

    // Social
    'social.tag': 'Réseaux Sociaux',
    'social.title': 'Suivez nos réalisations sur Instagram',
    'social.subtitle': 'Découvrez les derniers packagings livrés à nos restaurants partenaires.',
    'social.btn': 'Voir notre compte Instagram',

    // Portfolio Page
    'portfolio.tag': 'Galerie Photos',
    'portfolio.title': 'Nos Créations & Réalisations',
    'portfolio.subtitle': 'Découvrez des packagings alimentaires personnalisés conçus pour des enseignes de restauration.',
    'portfolio.requestSimilar': 'Demander un projet similaire pour mon restaurant',
    'portfolio.ctaTitle': 'Vous souhaitez personnaliser vos emballages ?',
    'portfolio.ctaDesc': 'Transmettez-nous vos fichiers et la liste de vos contenants pour recevoir votre étude chiffrée sous 24h.',

    // Contact Page
    'contact.tag': 'Devis Express Sous 24h Ouvrées',
    'contact.title': 'Demande de Devis & Contact Commercial',
    'contact.subtitle': 'Exprimez votre besoin en quelques clics. Notre équipe vous transmet une offre personnalisée sous 24 heures ouvrées.',
    'contact.directTitle': 'Coordonnées directes',
    'contact.phoneLabel': 'Téléphone :',
    'contact.emailLabel': 'Email commercial :',
    'contact.headquarters': 'Service Commercial :',
    'contact.address': 'SHAPACK • Votre expert en emballage',
    'contact.hoursLabel': 'Horaires :',
    'contact.hours': 'Du Lundi au Vendredi, 9h00 – 18h30',
    'contact.commitment': 'Réponse commerciale garantie sous 24h ouvrées.',
    'contact.step1': '1. Types d\'emballages souhaités *',
    'contact.step2': '2. Quantité prévisionnelle',
    'contact.step3': '3. Votre Établissement',
    'contact.restoName': 'Nom du restaurant / Enseigne *',
    'contact.city': 'Ville d\'implantation *',
    'contact.step4': '4. Vos Coordonnées',
    'contact.name': 'Nom & Prénom *',
    'contact.email': 'Email professionnel *',
    'contact.phone': 'Téléphone direct *',
    'contact.logo': 'Logo / Fichier graphique (facultatif)',
    'contact.logoUpload': 'Importer PDF, AI, PNG, SVG',
    'contact.message': 'Précisions ou commentaire libre',
    'contact.messagePlaceholder': 'Dimensions souhaitées, date d\'ouverture...',
    'contact.submitBtn': 'Envoyer ma demande de devis (Réponse sous 24h)',
    'contact.noCommitment': 'Sans engagement • Devis et étude technique gratuits',
    'contact.successTitle': 'Demande bien reçue !',
    'contact.successDesc': 'Votre demande a été enregistrée. Un conseiller vous répondra sous 24h ouvrées.',
    'contact.refLabel': 'Référence du dossier :',
    'contact.btnAnother': 'Envoyer une autre demande',

    // Footer
    'footer.ctaTitle': 'Développez l\'image de marque de votre restaurant',
    'footer.ctaSubtitle': 'Devis chiffré remis sous 24h ouvrées. Accessible dès 2 000 pièces.',
    'footer.ctaBtn': 'Demander mon devis gratuit',
    'footer.about': 'SHAPACK — Votre expert en emballage alimentaire personnalisé pour la restauration rapide, le snacking et le secteur CHR.',
    'footer.nav': 'Navigation',
    'footer.ranges': 'Gammes Packagings',
    'footer.commercialContact': 'Contact Commercial',
    'footer.copyright': '© SHAPACK. Tous droits réservés. Votre expert en emballage.',
    'footer.legal': 'Mentions Légales',
    'footer.terms': 'Conditions Générales',
    'footer.privacy': 'Confidentialité',
  },

  en: {
    // Nav
    'nav.home': 'Home',
    'nav.products': 'Our Products',
    'nav.portfolio': 'Our Work',
    'nav.contact': 'Contact / Quote',
    'nav.quoteBtn': 'Request a Quote',
    'nav.topTag': 'Your packaging expert',
    'nav.topQuote': 'Detailed quote within 24 business hours',
    'nav.phone': '+32 498 22 11 69',
    'nav.hours': 'Mon - Fri : 9:00 AM - 6:30 PM',

    // Hero
    'hero.badge': 'B2B SUPPLIER • RESTAURANTS & HOSPITALITY',
    'hero.title1': 'Elevate your brand identity with custom',
    'hero.title2': 'food packaging',
    'hero.subtitle': 'Burger boxes, poke bowls, fries sleeves, kraft bags and cups — 100% customizable. Accessible from just 2,000 pcs with high-definition printing.',
    'hero.reassurance1': 'Free quote within 24 business hours',
    'hero.reassurance2': 'Low MOQ starting from 2,000 pcs',
    'hero.reassurance3': 'High-definition full offset print',
    'hero.reassurance4': 'Recyclable kraft and white board',
    'hero.btnQuote': 'Get a Quote in 24h',
    'hero.btnCatalog': 'Browse Catalog',
    'hero.badgeOffset': 'Custom Printing',
    'hero.badgeMoq': 'From 2,000 pcs',

    // Trusted By
    'trusted.title': 'They Trusted Us',
    'trusted.subtitle': 'Dozens of restaurants, dark kitchens, and food chains grow their brand with SHAPACK.',

    // Pillars
    'pillars.title': 'Why Choose SHAPACK?',
    'pillars.subtitle': 'The ideal packaging solution for foodservice professionals.',
    'pillars.p1Title': 'Complete Graphic Customization',
    'pillars.p1Desc': 'High-precision full-color printing. Print your logo, branding, and social media on all containers.',
    'pillars.p2Title': 'Accessible Small Batches (From 2,000 pcs)',
    'pillars.p2Badge': 'Accessible',
    'pillars.p2Desc': 'No need to order 20,000 units. We make custom branded packaging available and affordable for all eateries.',
    'pillars.p2Link': 'Discover our products →',
    'pillars.p3Title': 'Compliance & Sustainability',
    'pillars.p3Desc': 'Eco-friendly food containers. 100% recyclable kraft and white boards, certified safe for direct food contact.',

    // Categories
    'categories.tag': 'Our Selection',
    'categories.title': 'Product Catalog',
    'categories.subtitle': 'All the classics of contemporary snacking and takeaway food.',
    'categories.viewAll': 'View all 5 categories',
    'categories.all': 'All Packagings',
    'categories.chaud': 'Hot Boxes & Sleeves',
    'categories.salades': 'Dishes & Bowls',
    'categories.boulangerie': 'Bakery & Sandwiches',
    'categories.sacs': 'Bags & Transport',
    'categories.gobelets': 'Cups & Accessories',
    'categories.discover': 'Discover range',

    // Process
    'process.title': 'How It Works',
    'process.subtitle': 'A simple, transparent 3-step process from order to delivery.',
    'process.s1Tag': 'Step 01',
    'process.s1Title': 'Quote in 24h',
    'process.s1Desc': 'Share your packaging needs, select formats, and receive a clear pricing proposal.',
    'process.s2Tag': 'Step 02',
    'process.s2Title': 'Artwork & Proof',
    'process.s2Desc': 'We place your graphics onto industrial templates and approve print proofs.',
    'process.s3Tag': 'Step 03',
    'process.s3Title': 'Production & Delivery',
    'process.s3Desc': 'High-precision manufacturing and fast direct delivery to your restaurant.',

    // Conditions
    'conditions.moqLabel': 'Minimum Order Quantity (MOQ)',
    'conditions.moqVal': 'From 2,000 pcs',
    'conditions.moqSub': 'Ideal for easy testing and seasonal runs.',
    'conditions.timeLabel': 'Production Lead Time',
    'conditions.timeVal': '3 to 4 weeks',
    'conditions.timeSub': 'Fast manufacturing and tracked shipping.',
    'conditions.quoteLabel': 'Quote Response Time',
    'conditions.quoteVal': 'Within 24 business hours',
    'conditions.quoteSub': 'Personalized consultation and clear pricing.',

    // Social
    'social.tag': 'Social Media',
    'social.title': 'Follow our latest work on Instagram',
    'social.subtitle': 'Check out recent packagings delivered to partner restaurants.',
    'social.btn': 'View our Instagram Profile',

    // Portfolio Page
    'portfolio.tag': 'Photo Gallery',
    'portfolio.title': 'Our Work & Realizations',
    'portfolio.subtitle': 'Explore custom food packagings designed for restaurant brands.',
    'portfolio.requestSimilar': 'Request a similar project for my restaurant',
    'portfolio.ctaTitle': 'Want to customize your packaging?',
    'portfolio.ctaDesc': 'Send us your logos and packaging list to receive your customized quote within 24 hours.',

    // Contact Page
    'contact.tag': 'Express Quote Within 24 Business Hours',
    'contact.title': 'Quote Request & Contact',
    'contact.subtitle': 'Specify your needs in a few clicks. Our sales team will send you a tailored quote within 24 business hours.',
    'contact.directTitle': 'Direct Contact Info',
    'contact.phoneLabel': 'Direct phone line:',
    'contact.emailLabel': 'Sales email:',
    'contact.headquarters': 'Customer Service:',
    'contact.address': 'SHAPACK • Your packaging expert',
    'contact.hoursLabel': 'Business hours:',
    'contact.hours': 'Monday to Friday, 9:00 AM – 6:30 PM',
    'contact.commitment': 'Guaranteed response within 24 business hours.',
    'contact.step1': '1. Desired Packaging Types *',
    'contact.step2': '2. Estimated Volume',
    'contact.step3': '3. Your Restaurant',
    'contact.restoName': 'Restaurant / Brand Name *',
    'contact.city': 'City / Location *',
    'contact.step4': '4. Contact Details',
    'contact.name': 'Full Name *',
    'contact.email': 'Business Email *',
    'contact.phone': 'Direct Phone *',
    'contact.logo': 'Logo / Artwork (optional)',
    'contact.logoUpload': 'Upload PDF, AI, PNG, SVG',
    'contact.message': 'Notes or specific requests',
    'contact.messagePlaceholder': 'Desired sizes, opening date, specific requirements...',
    'contact.submitBtn': 'Submit Quote Request (24h Response)',
    'contact.noCommitment': 'No obligation • Free consultation and quotation',
    'contact.successTitle': 'Request Successfully Received!',
    'contact.successDesc': 'Your quote request has been registered. An advisor will contact you within 24 business hours.',
    'contact.refLabel': 'File reference:',
    'contact.btnAnother': 'Submit another request',

    // Footer
    'footer.ctaTitle': 'Enhance your restaurant\'s brand identity',
    'footer.ctaSubtitle': 'Detailed quote delivered within 24h. Accessible from 2,000 pcs.',
    'footer.ctaBtn': 'Request your free quote',
    'footer.about': 'SHAPACK — Your packaging expert for custom food packagings, street food, and hospitality restaurants.',
    'footer.nav': 'Navigation',
    'footer.ranges': 'Packaging Ranges',
    'footer.commercialContact': 'Sales Contact',
    'footer.copyright': '© SHAPACK. All rights reserved. Your packaging expert.',
    'footer.legal': 'Legal Notice',
    'footer.terms': 'Terms of Service',
    'footer.privacy': 'Privacy Policy',
  },

  de: {
    // Nav
    'nav.home': 'Startseite',
    'nav.products': 'Unsere Produkte',
    'nav.portfolio': 'Unsere Referenzen',
    'nav.contact': 'Kontakt / Angebot',
    'nav.quoteBtn': 'Angebot anfordern',
    'nav.topTag': 'Ihr Verpackungsexperte',
    'nav.topQuote': 'Detailliertes Angebot innerhalb von 24 Arbeitsstunden',
    'nav.phone': '+32 498 22 11 69',
    'nav.hours': 'Mo - Fr : 9:00 - 18:30 Uhr',

    // Hero
    'hero.badge': 'B2B-LIEFERANT • GASTRONOMIE & FOODSERVICE',
    'hero.title1': 'Stärken Sie Ihre Markenidentität mit',
    'hero.title2': 'maßgeschneiderten Verpackungen',
    'hero.subtitle': 'Burgerboxen, Poke Bowls, Pommestüten, Kraftpapiertüten und Becher — 100% individualisierbar. Bereits ab 2.000 Stück verfügbar.',
    'hero.reassurance1': 'Kostenloses Angebot innerhalb von 24h',
    'hero.reassurance2': 'Kleine Serien bereits ab 2.000 Stück',
    'hero.reassurance3': 'Hochauflösender Offsetdruck',
    'hero.reassurance4': 'Recycelbarer Kraft- und Weißkarton',
    'hero.btnQuote': 'Angebot in 24h anfordern',
    'hero.btnCatalog': 'Katalog ansehen',
    'hero.badgeOffset': 'Individueller Druck',
    'hero.badgeMoq': 'Ab 2.000 Stück',

    // Trusted By
    'trusted.title': 'Unternehmen, die uns vertrauen',
    'trusted.subtitle': 'Zahlreiche Restaurants, Dark Kitchens und Franchise-Ketten wachsen mit SHAPACK.',

    // Pillars
    'pillars.title': 'Warum SHAPACK wählen?',
    'pillars.subtitle': 'Die ideale Verpackungslösung für Gastronomieprofis.',
    'pillars.p1Title': 'Vollständige grafische Personalisierung',
    'pillars.p1Desc': 'Präziser Druck. Bringen Sie Ihr Logo, Branding und Social Media auf Ihre Verpackungen.',
    'pillars.p2Title': 'Kleine Serien (Bereits ab 2.000 Stück)',
    'pillars.p2Badge': 'Zugänglich',
    'pillars.p2Desc': 'Keine Riesenmengen nötig. Wir machen bedruckte Verpackungen für alle Gastronomen erschwinglich.',
    'pillars.p2Link': 'Produkte entdecken →',
    'pillars.p3Title': 'Konformität & Nachhaltigkeit',
    'pillars.p3Desc': 'Umweltfreundliche Kartonverpackungen, 100% recycelbar und lebensmittelecht zertifiziert.',

    // Categories
    'categories.tag': 'Unser Sortiment',
    'categories.title': 'Produktkatalog',
    'categories.subtitle': 'Alle Klassiker für modernes Snacking und Take-Away.',
    'categories.viewAll': 'Alle 5 Kategorien ansehen',
    'categories.all': 'Alle Verpackungen',
    'categories.chaud': 'Warme Boxen & Taschen',
    'categories.salades': 'Schalen & Bowls',
    'categories.boulangerie': 'Bäckerei & Sandwiches',
    'categories.sacs': 'Tragetaschen',
    'categories.gobelets': 'Becher & Zubehör',
    'categories.discover': 'Sortiment entdecken',

    // Process
    'process.title': 'Wie funktioniert es?',
    'process.subtitle': 'Ein transparenter 3-Stufen-Prozess von der Anfrage bis zur Lieferung.',
    'process.s1Tag': 'Schritt 01',
    'process.s1Title': 'Angebot in 24h',
    'process.s1Desc': 'Bedarfsanalyse, Formatauswahl und transparente Preisübersicht.',
    'process.s2Tag': 'Schritt 02',
    'process.s2Title': 'Druckfreigabe (Proof)',
    'process.s2Desc': 'Platzierung Ihres Logos auf den Stanzkonturen und Freigabe des Druckmusters.',
    'process.s3Tag': 'Schritt 03',
    'process.s3Title': 'Produktion & Anlieferung',
    'process.s3Desc': 'Präzise Fertigung und direkte Belieferung Ihres Betriebs.',

    // Conditions
    'conditions.moqLabel': 'Mindestbestellmenge (MOQ)',
    'conditions.moqVal': 'Ab 2.000 Stück',
    'conditions.moqSub': 'Ideal zum einfachen Testen und Erneuern.',
    'conditions.timeLabel': 'Produktionszeit',
    'conditions.timeVal': '3 bis 4 Wochen',
    'conditions.timeSub': 'Schnelle Fertigung und zuverlässiger Versand.',
    'conditions.quoteLabel': 'Angebotsfrist',
    'conditions.quoteVal': 'Innerhalb von 24h',
    'conditions.quoteSub': 'Individuelle Beratung und klare Kalkulation.',

    // Social
    'social.tag': 'Social Media',
    'social.title': 'Folgen Sie unseren Projekten auf Instagram',
    'social.subtitle': 'Sehen Sie sich die neuesten Verpackungen für unsere Partner-Restaurants an.',
    'social.btn': 'Instagram-Profil ansehen',

    // Portfolio Page
    'portfolio.tag': 'Fotogalerie',
    'portfolio.title': 'Unsere Referenzen & Projekte',
    'portfolio.subtitle': 'Entdecken Sie maßgeschneiderte Gastronomieverpackungen für bekannte Marken.',
    'portfolio.requestSimilar': 'Ähnliches Projekt für mein Restaurant anfragen',
    'portfolio.ctaTitle': 'Möchten Sie Ihre Verpackungen individualisieren?',
    'portfolio.ctaDesc': 'Senden Sie uns Ihre Vorlagen und Artikelliste für ein Angebot innerhalb von 24 Stunden.',

    // Contact Page
    'contact.tag': 'Express-Angebot Innerhalb von 24 Arbeitsstunden',
    'contact.title': 'Angebotsanfrage & Vertriebskontakt',
    'contact.subtitle': 'Teilen Sie uns Ihren Bedarf in wenigen Klicks mit. Unser Vertriebsteam antwortet innerhalb von 24 Arbeitsstunden.',
    'contact.directTitle': 'Direkte Kontaktdaten',
    'contact.phoneLabel': 'Telefon :',
    'contact.emailLabel': 'Vertriebs-E-Mail :',
    'contact.headquarters': 'Kundenservice :',
    'contact.address': 'SHAPACK • Ihr Verpackungsexperte',
    'contact.hoursLabel': 'Öffnungszeiten :',
    'contact.hours': 'Montag bis Freitag, 9:00 – 18:30 Uhr',
    'contact.commitment': 'Garantierte Antwort innerhalb von 24 Arbeitsstunden.',
    'contact.step1': '1. Gewünschte Verpackungsarten *',
    'contact.step2': '2. Voraussichtliche Stückzahl',
    'contact.step3': '3. Ihr Restaurantbetrieb',
    'contact.restoName': 'Restaurant- / Markenname *',
    'contact.city': 'Standort / Stadt *',
    'contact.step4': '4. Kontaktdaten',
    'contact.name': 'Vor- und Nachname *',
    'contact.email': 'Geschäftliche E-Mail *',
    'contact.phone': 'Telefonnummer *',
    'contact.logo': 'Logo / Druckdaten (optional)',
    'contact.logoUpload': 'PDF, AI, PNG, SVG hochladen',
    'contact.message': 'Bemerkungen oder Sonderwünsche',
    'contact.messagePlaceholder': 'Gewünschte Maße, Eröffnungsdatum, Details...',
    'contact.submitBtn': 'Anfrage absenden (Antwort in 24h)',
    'contact.noCommitment': 'Unverbindlich • Kostenlose Beratung und Kalkulation',
    'contact.successTitle': 'Anfrage erfolgreich eingegangen!',
    'contact.successDesc': 'Ihre Anfrage wurde registriert. Ein Berater wird sich innerhalb von 24h bei Ihnen melden.',
    'contact.refLabel': 'Vorgangsnummer :',
    'contact.btnAnother': 'Weitere Anfrage stellen',

    // Footer
    'footer.ctaTitle': 'Stärken Sie das Image Ihres Restaurants',
    'footer.ctaSubtitle': 'Detailliertes Angebot in 24h. Bereits ab 2.000 Stück verfügbar.',
    'footer.ctaBtn': 'Kostenloses Angebot anfordern',
    'footer.about': 'SHAPACK — Ihr Verpackungsexperte für individuelle Gastronomieverpackungen für Take-Away und Foodservice.',
    'footer.nav': 'Navigation',
    'footer.ranges': 'Verpackungssortiment',
    'footer.commercialContact': 'Vertriebskontakt',
    'footer.copyright': '© SHAPACK. Alle Rechte vorbehalten. Ihr Verpackungsexperte.',
    'footer.legal': 'Impressum',
    'footer.terms': 'AGB',
    'footer.privacy': 'Datenschutz',
  },

  nl: {
    // Nav
    'nav.home': 'Home',
    'nav.products': 'Onze Producten',
    'nav.portfolio': 'Onze Projecten',
    'nav.contact': 'Contact / Offerte',
    'nav.quoteBtn': 'Offerte Aanvragen',
    'nav.topTag': 'Uw expert in verpakkingen',
    'nav.topQuote': 'Gedetailleerde offerte binnen 24 werkuren',
    'nav.phone': '+32 498 22 11 69',
    'nav.hours': 'Ma - Vr : 9:00 - 18:30',

    // Hero
    'hero.badge': 'B2B LEVERANCIER • HORECA & FASTFOOD',
    'hero.title1': 'Versterk uw merkidentiteit met',
    'hero.title2': 'bedrukte verpakkingen op maat',
    'hero.subtitle': 'Burgerboxen, poke bowls, frietzakjes, krafttassen en bekers — 100% personaliseerbaar. Toegankelijk vanaf slechts 2.000 stuks met hoge resolutie druk.',
    'hero.reassurance1': 'Gratis offerte binnen 24 werkuren',
    'hero.reassurance2': 'Kleine oplages vanaf 2.000 stuks',
    'hero.reassurance3': 'Offsetdruk van hoge kwaliteit',
    'hero.reassurance4': 'Recyclebaar kraft en wit karton',
    'hero.btnQuote': 'Offerte aanvragen in 24u',
    'hero.btnCatalog': 'Bekijk de Catalogus',
    'hero.badgeOffset': 'Bedrukking op Maat',
    'hero.badgeMoq': 'Vanaf 2.000 stuks',

    // Trusted By
    'trusted.title': 'Zij vertrouwden op ons',
    'trusted.subtitle': 'Tientallen restaurants, dark kitchens en horecaketens laten hun merk groeien met SHAPACK.',

    // Pillars
    'pillars.title': 'Waarom kiezen voor SHAPACK?',
    'pillars.subtitle': 'De ideale verpakkingsoplossing voor horecaprofessionals.',
    'pillars.p1Title': 'Volledige grafische personalisatie',
    'pillars.p1Desc': 'Nauwkeurige bedrukking. Druk uw logo, huisstijl en social media af op al uw bakjes.',
    'pillars.p2Title': 'Kleine oplages (Vanaf 2.000 stuks)',
    'pillars.p2Badge': 'Toegankelijk',
    'pillars.p2Desc': 'Geen torenhoge minimums van 20.000 stuks meer. Wij maken bedrukte verpakkingen haalbaar voor elke horecazaak.',
    'pillars.p2Link': 'Ontdek onze producten →',
    'pillars.p3Title': 'Duurzaamheid & voedselveiligheid',
    'pillars.p3Desc': 'Milieuvriendelijk kraft- en witkarton, gecertificeerd voor direct contact met warm en vet eten.',

    // Categories
    'categories.tag': 'Ons Assortiment',
    'categories.title': 'Productcatalogus',
    'categories.subtitle': 'Alle klassiekers van eigentijdse snacking en take-away.',
    'categories.viewAll': 'Bekijk alle 5 categorieën',
    'categories.all': 'Alle Verpakkingen',
    'categories.chaud': 'Warme Dozen & Sleeves',
    'categories.salades': 'Schalen & Bowls',
    'categories.boulangerie': 'Bakkerij & Sandwiches',
    'categories.sacs': 'Draagtassen',
    'categories.gobelets': 'Bekers & Accessoires',
    'categories.discover': 'Ontdek het assortiment',

    // Process
    'process.title': 'Hoe werkt het?',
    'process.subtitle': 'Een transparant 3-stappenplan van bestelling tot levering.',
    'process.s1Tag': 'Stap 01',
    'process.s1Title': 'Offerte in 24u',
    'process.s1Desc': 'Inventarisatie van uw wensen, formaatkeuze en heldere prijscalculatie.',
    'process.s2Tag': 'Stap 02',
    'process.s2Title': 'Drukproef (Proof)',
    'process.s2Desc': 'Plaatsing van uw logo op stansvormen en goedkeuring van de digitale proef.',
    'process.s3Tag': 'Stap 03',
    'process.s3Title': 'Productie & Levering',
    'process.s3Desc': 'Hoogwaardige fabricage en rechtstreekse levering aan uw zaak.',

    // Conditions
    'conditions.moqLabel': 'Minimale Bestelhoeveelheid (MOQ)',
    'conditions.moqVal': 'Vanaf 2.000 stuks',
    'conditions.moqSub': 'Ideaal om makkelijk te testen en wisselen.',
    'conditions.timeLabel': 'Productietermijn',
    'conditions.timeVal': '3 tot 4 weken',
    'conditions.timeSub': 'Snelle fabricage en betrouwbare levering.',
    'conditions.quoteLabel': 'Offertetermijn',
    'conditions.quoteVal': 'Binnen 24 werkuren',
    'conditions.quoteSub': 'Persoonlijk advies en duidelijke calculatie.',

    // Social
    'social.tag': 'Sociale Media',
    'social.title': 'Volg onze realisaties op Instagram',
    'social.subtitle': 'Bekijk de nieuwste verpakkingen geleverd aan partnerrestaurants.',
    'social.btn': 'Bekijk ons Instagram-profiel',

    // Portfolio Page
    'portfolio.tag': 'Fotogalerij',
    'portfolio.title': 'Onze Projecten & Realisaties',
    'portfolio.subtitle': 'Bekijk op maat gemaakte voedselverpakkingen voor toonaangevende horecazaken.',
    'portfolio.requestSimilar': 'Vergelijkbaar project aanvragen voor mijn zaak',
    'portfolio.ctaTitle': 'Wilt u uw eigen verpakkingen personaliseren?',
    'portfolio.ctaDesc': 'Stuur ons uw logo en verpakkingswensen voor een offerte binnen 24 uur.',

    // Contact Page
    'contact.tag': 'Snelle Offerte Binnen 24 Werkuren',
    'contact.title': 'Offerteaanvraag & Contact',
    'contact.subtitle': 'Geef uw wensen door in enkele klikken. Ons salesteam stuurt u binnen 24 werkuren een offerte op maat.',
    'contact.directTitle': 'Directe Contactgegevens',
    'contact.phoneLabel': 'Telefoon :',
    'contact.emailLabel': 'Verkoop e-mail :',
    'contact.headquarters': 'Klantenservice :',
    'contact.address': 'SHAPACK • Uw expert in verpakking',
    'contact.hoursLabel': 'Openingstijden :',
    'contact.hours': 'Maandag tot vrijdag, 9:00 – 18:30',
    'contact.commitment': 'Gegarandeerde reactie binnen 24 werkuren.',
    'contact.step1': '1. Gewenste type verpakkingen *',
    'contact.step2': '2. Verwachte afname',
    'contact.step3': '3. Uw Restaurant',
    'contact.restoName': 'Restaurant- / Zaaknaam *',
    'contact.city': 'Locatie / Stad *',
    'contact.step4': '4. Uw Contactgegevens',
    'contact.name': 'Voor- en achternaam *',
    'contact.email': 'Zakelijk e-mailadres *',
    'contact.phone': 'Telefoonnummer *',
    'contact.logo': 'Logo / Drukbestand (optioneel)',
    'contact.logoUpload': 'Upload PDF, AI, PNG, SVG',
    'contact.message': 'Opmerkingen of specifieke wensen',
    'contact.messagePlaceholder': 'Gewenste afmetingen, openingsdatum, bijzonderheden...',
    'contact.submitBtn': 'Aanvraag verzenden (Reactie binnen 24u)',
    'contact.noCommitment': 'Vrijblijvend • Kosteloze offerte en technisch advies',
    'contact.successTitle': 'Aanvraag succesvol ontvangen!',
    'contact.successDesc': 'Uw aanvraag is geregistreerd. Een adviseur neemt binnen 24 uur contact op.',
    'contact.refLabel': 'Dossiernummer :',
    'contact.btnAnother': 'Nog een aanvraag indienen',

    // Footer
    'footer.ctaTitle': 'Versterk de merkidentiteit van uw restaurant',
    'footer.ctaSubtitle': 'Offerte binnen 24u. Toegankelijk vanaf 2.000 stuks.',
    'footer.ctaBtn': 'Vraag uw gratis offerte aan',
    'footer.about': 'SHAPACK — Uw expert in bedrukte voedselverpakkingen voor horeca en fastfood.',
    'footer.nav': 'Navigatie',
    'footer.ranges': 'Verpakkingslijnen',
    'footer.commercialContact': 'Commercieel Contact',
    'footer.copyright': '© SHAPACK. Alle rechten voorbehouden. Uw verpakkingsexperte.',
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
