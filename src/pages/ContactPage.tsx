import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, MapPin, Clock, CheckCircle2, Send, Upload, ShieldCheck, Loader2, AlertCircle, ExternalLink } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const prefilledProduct = searchParams.get('produit') || '';

  const [restaurantName, setRestaurantName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<string[]>(
    prefilledProduct ? [prefilledProduct] : ['Boîtes à burgers kraft & carton']
  );
  const [volume, setVolume] = useState('Petite série (test ou démarrage)');
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoFileName, setLogoFileName] = useState<string>('');
  const [message, setMessage] = useState(
    prefilledProduct ? `Devis / Quote: ${prefilledProduct}` : ''
  );
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const packagingOptions = [
    'Boîtes à burgers kraft & carton',
    'Étuis à frites & starters',
    'Saladiers ronds / Poke bowls',
    'Boîtes à pâtes & pasta cups',
    'Boîtes sandwichs triangles',
    'Sacs cabas kraft fond large',
    'Sacs SOS livraison Deliveroo/Uber',
    'Gobelets boissons chaudes & froides',
    'Papier ingraissable burger personnalisé',
    'Sacs en papier de luxe (poignées ruban)',
    'Boîtes rigides & coffrets de luxe aimantés',
    'Pochettes & emballages cadeaux'
  ];

  const handleToggleType = (opt: string) => {
    if (selectedTypes.includes(opt)) {
      setSelectedTypes(selectedTypes.filter(t => t !== opt));
    } else {
      setSelectedTypes([...selectedTypes, opt]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    const generatedRef = `SHA-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setRefId(generatedRef);

    try {
      const formData = new FormData();
      formData.append('access_key', 'cd32f65f-e9b0-41ea-8d78-7d1a5964789f');
      formData.append('subject', `📦 Devis SHAPACK - ${restaurantName || 'Restaurant'} [${generatedRef}]`);
      formData.append('from_name', 'SHAPACK Devis (Bruxelles)');
      formData.append('replyto', email);

      // Clés sans accents pour garantir un affichage parfait dans l'email sans caractères corrompus (RÃ©fÃ©rence...)
      formData.append('Reference_Devis', generatedRef);
      formData.append('Restaurant_Etablissement', restaurantName);
      formData.append('Nom_du_Contact', contactName);
      formData.append('Email_Client', email);
      formData.append('Telephone_Direct', phone);
      formData.append('Ville_Localisation', city || 'Bruxelles');
      formData.append('Packagings_Demandes', selectedTypes.join(', '));
      formData.append('Volume_Estime', volume);
      if (message) {
        formData.append('Message_Client', message);
      }
      if (logoFile) {
        formData.append('attachment', logoFile);
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(result.message || "Une erreur est survenue lors de l'envoi de votre demande.");
      }
    } catch (err) {
      console.error('Erreur Web3Forms:', err);
      setErrorMessage("Une erreur de communication est survenue. Veuillez vérifier votre connexion ou nous contacter directement au +32 498 22 11 69.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
            {t('contact.tag')}
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t('contact.title')}
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {t('contact.directTitle')}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  SHAPACK Commercial & Logistics Support
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <a 
                  href="tel:+32498221169" 
                  className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-500 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">{t('contact.phoneLabel')}</span>
                    <span className="font-bold text-slate-900">+32 498 22 11 69</span>
                  </div>
                </a>

                <a 
                  href="mailto:hello@shapack.be" 
                  className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-500 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">{t('contact.emailLabel')}</span>
                    <span className="font-bold text-slate-900">hello@shapack.be</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">{t('contact.headquarters')}</span>
                    <span className="font-semibold text-slate-800 text-xs">
                      SHAPACK Packaging • Bruxelles, Belgique
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">{t('contact.hoursLabel')}</span>
                    <span className="font-semibold text-slate-800 text-xs">
                      {t('contact.hours')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Commitment badge */}
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 space-y-1">
                <span className="text-xs font-bold text-blue-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  SHAPACK B2B Support
                </span>
                <p className="text-xs text-blue-800 leading-relaxed">
                  {t('contact.commitment')}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-8 sm:p-12 rounded-2xl bg-blue-50 border border-blue-200 text-center space-y-5">
                <div className="w-14 h-14 rounded-full bg-blue-600 text-white mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-blue-600 uppercase">{t('contact.successTitle')}</span>
                  <h3 className="text-2xl font-black text-slate-900">
                    Merci {contactName || ''} !
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    {t('contact.successDesc')} ({restaurantName}).
                  </p>
                </div>

                <div className="p-3 bg-white rounded-lg border border-blue-200 max-w-xs mx-auto text-xs text-slate-700">
                  {t('contact.refLabel')} <strong className="text-blue-600 font-mono">{refId}</strong>
                </div>

                <div className="pt-3">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="px-5 py-2.5 rounded-lg bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition-colors"
                  >
                    {t('contact.btnAnother')}
                  </button>
                </div>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-6"
              >
                {/* 1. Packagings selection */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                    {t('contact.step1')}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {packagingOptions.map((opt) => {
                      const isChecked = selectedTypes.includes(opt);
                      return (
                        <div
                          key={opt}
                          onClick={() => handleToggleType(opt)}
                          className={`p-2.5 rounded-lg border text-xs font-medium flex items-center justify-between cursor-pointer transition-all ${
                            isChecked
                              ? 'bg-blue-50 border-blue-500 text-blue-900 font-semibold'
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <span>{opt}</span>
                          <span className={`w-4 h-4 rounded flex items-center justify-center border ${
                            isChecked ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300'
                          }`}>
                            {isChecked && '✓'}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Volume Estimé */}
                <div className="pt-2 border-t border-slate-100">
                  <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1.5">
                    {t('contact.step2')}
                  </label>
                  <select
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-xs text-slate-800 font-medium focus:outline-none focus:border-blue-600"
                  >
                    <option value="Petite série (test ou démarrage)">Petite série / Sur-mesure</option>
                    <option value="2 500 à 5 000 pièces">2 500 à 5 000 pièces</option>
                    <option value="10 000 pièces">10 000 pièces (tarif dégressif)</option>
                    <option value="20 000+ pièces">20 000+ pièces (multi-sites / chaînes)</option>
                    <option value="Autre / À définir">Autre quantité (sur devis)</option>
                  </select>
                </div>

                {/* 3. Restaurant Information */}
                <div className="space-y-3 pt-2 border-t border-slate-100">
                  <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                    {t('contact.step3')}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <span className="text-[11px] text-slate-500 block mb-1">{t('contact.restoName')}</span>
                      <input
                        type="text"
                        required
                        value={restaurantName}
                        onChange={(e) => setRestaurantName(e.target.value)}
                        placeholder="Ex: Stack Burger Co."
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-blue-600"
                      />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-500 block mb-1">{t('contact.city')}</span>
                      <input
                        type="text"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Ex: Paris, Berlin, Amsterdam..."
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>
                </div>

                {/* 4. Contact Details */}
                <div className="space-y-3 pt-2 border-t border-slate-100">
                  <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                    {t('contact.step4')}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <span className="text-[11px] text-slate-500 block mb-1">{t('contact.name')}</span>
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="Alexandre Dupont"
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-blue-600"
                      />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-500 block mb-1">{t('contact.email')}</span>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="contact@restaurant.com"
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-blue-600"
                      />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-500 block mb-1">{t('contact.phone')}</span>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+32 4XX XX XX XX"
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>
                </div>

                {/* 5. Logo upload & Message */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-100">
                  <div>
                    <span className="text-[11px] text-slate-500 block mb-1">{t('contact.logo')}</span>
                    <label className="border border-dashed border-slate-300 hover:border-blue-500 rounded-lg p-2.5 flex items-center justify-center gap-2 cursor-pointer bg-slate-50 text-xs text-slate-600 transition-colors">
                      <Upload className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span className="truncate">{logoFileName ? logoFileName : t('contact.logoUpload')}</span>
                      <input
                        type="file"
                        accept=".pdf,.png,.jpg,.jpeg,.svg,.ai"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            setLogoFile(e.target.files[0]);
                            setLogoFileName(e.target.files[0].name);
                          }
                        }}
                        className="hidden"
                      />
                    </label>
                  </div>

                  <div>
                    <span className="text-[11px] text-slate-500 block mb-1">{t('contact.message')}</span>
                    <textarea
                      rows={2}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t('contact.messagePlaceholder')}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-blue-600 resize-none"
                    />
                  </div>
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3.5 px-6 rounded-lg text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 transition-all ${
                      isSubmitting
                        ? 'bg-blue-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Envoi du devis en cours...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t('contact.submitBtn')}</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-slate-500 text-center mt-2">
                    {t('contact.noCommitment')}
                  </p>
                </div>

              </form>
            )}
          </div>

        </div>

        {/* Google Map & Local Presence Section for Local SEO */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
              Implantation Locale & Logistique B2B
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Basé à Bruxelles • Distribution en Belgique & Europe
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Notre siège commercial et notre réseau logistique sont ancrés à Bruxelles pour assurer un service réactif et des livraisons suivies dans tout le Benelux et en France.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Interactive Google Map iframe */}
            <div className="lg:col-span-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-80 sm:h-96 relative bg-slate-100">
              <iframe
                title="SHAPACK Packaging Bruxelles Google Maps"
                src="https://maps.google.com/maps?q=Bruxelles%2C%20Belgique&t=&z=12&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Bruxelles+Belgique"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-lg text-xs font-bold text-slate-800 shadow-md hover:bg-blue-600 hover:text-white transition-all flex items-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-blue-600 group-hover:text-white" />
                <span>Ouvrir dans Google Maps</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>

            {/* Local Hub Info Card */}
            <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                  <span>Hub Logistique B2B</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  SHAPACK Packaging Bruxelles
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Conception graphique, validation des BAT industriels et coordination logistique directe pour vos emballages alimentaires et packaging de luxe.
                </p>

                <div className="space-y-3 pt-2 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Zone d'intervention :</strong>
                      <span>Bruxelles (19 communes), Brabant, Flandre, Wallonie, France & Luxembourg</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Ligne directe devis :</strong>
                      <span>+32 498 22 11 69 (Lun - Ven • 8h30 - 18h30)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Email professionnel :</strong>
                      <span>hello@shapack.be</span>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Bruxelles+Belgique"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs text-center transition-colors shadow-md shadow-blue-500/20 block"
              >
                Calculer l'itinéraire Google Maps
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
