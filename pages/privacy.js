import {useState} from 'react';

const PrivacyPage = () => {
    const [language, setLanguage] = useState('de');

    const content = {
        de: {
            tldr: 'Zusammenfassung: Deine Stimme wird niemals mit dir verknüpft. Wir speichern ob du abgestimmt hast, teilen das aber nicht. Es wird nur veröffentlich wie viele x wahlen, und gerundet auf 5 die gesamten Teilnehmer. Der code ist öffentlich!',
            details: `
        <h2 class="text-2xl font-bold mb-4">Datenschutzrichtlinie</h2>

        <h3 class="text-xl font-semibold mb-2">Einleitung</h3>
        <p class="mb-4">Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese Datenschutzrichtlinie erläutert, wie wir Ihre Daten erfassen, verwenden und schützen.</p>

        <h3 class="text-xl font-semibold mb-2">Datenverarbeitung</h3>
        <ul class="list-disc list-inside mb-4">
          <li><strong>Stimmabgabe:</strong> Ihre Stimme wird niemals mit Ihrer E-Mail-Adresse verknüpft. Wir überwachen nur, ob eine Person abgestimmt hat oder nicht.</li>
          <li><strong>Nutzung der Daten:</strong> Diese Informationen werden ausschließlich für interne Entwicklungszwecke verwendet und unter <strong>KEINEN</strong> umständen an Dritte personen oder anderes weitergegeben.</li>
        </ul>

        <h3 class="text-xl font-semibold mb-2">Dienste von Drittanbietern</h3>
        <p class="mb-4">Wir verwenden die folgenden Dienste:</p>
        <ul class="list-disc list-inside mb-4">
          <li><strong>Microsoft EntraID:</strong> Für die Authentifizierung. <a href="https://learn.microsoft.com/de-de/entra/identity/conditional-access/terms-of-use" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">Datenschutzrichtlinie</a></li>
          <li><strong>Supabase:</strong> Für die Datenbankverwaltung. Die Supabase-Datenbank befindet sich in Frankfurt, Deutschland. <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">Datenschutzrichtlinie</a></li>
        </ul>

        <h3 class="text-xl font-semibold mb-2">Kontenverwaltung</h3>
        <p class="mb-4">Die Konten wurden von Ihrem ENTRA ID-Administrator erstellt, und wir haben keine Kontrolle darüber.</p>

        <h3 class="text-xl font-semibold mb-2">Hosting</h3>
        <p class="mb-4">Die Website wird in einem deutschen Rechenzentrum gehostet.</p>

        <h3 class="text-xl font-semibold mb-2">Ihre Rechte</h3>
        <p class="mb-4">Sie haben das Recht, jederzeit Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten. Ebenso haben Sie das Recht auf Berichtigung, Sperrung oder Löschung Ihrer personenbezogenen Daten.</p>

        <h3 class="text-xl font-semibold mb-2">Kontakt</h3>
        <p class="mb-4">Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei Auskünften, Berichtigung, Sperrung oder Löschung von Daten sowie Widerruf erteilter Einwilligungen wenden Sie sich bitte an:</p>
      `,
            contact: 'Kontakt: hello(att)thiswhity.uk // Tom Daamen / Am Sportplatz 1 / 48712 Gescher / Germany',
            links: {
                entraID: 'https://learn.microsoft.com/de-de/entra/identity/conditional-access/terms-of-use',
                supabase: 'https://supabase.com/privacy',
            },
        },
        en: {
            tldr: 'TL;DR: Your vote is never associated with your email. We only monitor if a person voted or not. Later we will only publish the percentage of each partys votes, and rounded how many participated by 5 to ensure privacy! Der code ist öffentlich!',
            details: `
        <h2 class="text-2xl font-bold mb-4">Privacy Policy</h2>

        <h3 class="text-xl font-semibold mb-2">Introduction</h3>
        <p class="mb-4">We take the protection of your personal data very seriously. This privacy policy explains how we collect, use, and protect your data.</p>

        <h3 class="text-xl font-semibold mb-2">Data Processing</h3>
        <ul class="list-disc list-inside mb-4">
          <li><strong>Voting:</strong> Your vote is never associated with your email. We only monitor if a person voted or not.</li>
          <li><strong>Use of Data:</strong> This information will only be used for internal development purposes and will not be shared with third parties.</li>
        </ul>

        <h3 class="text-xl font-semibold mb-2">Third-Party Services</h3>
        <p class="mb-4">We use the following services:</p>
        <ul class="list-disc list-inside mb-4">
          <li><strong>Microsoft:</strong> For authentication. <a href="https://learn.microsoft.com/de-de/entra/identity/conditional-access/terms-of-use" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">Privacy Policy</a></li>
          <li><strong>Supabase:</strong> For database management. The Supabase database is located in Frankfurt, Germany. <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">Privacy Policy</a></li>
        </ul>

        <h3 class="text-xl font-semibold mb-2">Account Management</h3>
        <p class="mb-4">The accounts have been created by your ENTRA ID admin, and we have no control over them.</p>

        <h3 class="text-xl font-semibold mb-2">Hosting</h3>
        <p class="mb-4">The site is hosted in a German data center.</p>

        <h3 class="text-xl font-semibold mb-2">Your Rights</h3>
        <p class="mb-4">You have the right to obtain information about your personal data stored with us at any time. You also have the right to correct, block, or delete your personal data.</p>

        <h3 class="text-xl font-semibold mb-2">Contact</h3>
        <p class="mb-4">If you have any questions about the collection, processing, or use of your personal data, or if you wish to request information, correction, blocking, or deletion of data, please contact:</p>
      `,
            contact: 'hello(att)thiswhity.uk // Tom Daamen / Am Sportplatz 1 / 48712 Gescher / Germany',
            links: {
                entraID: 'https://learn.microsoft.com/de-de/entra/identity/conditional-access/terms-of-use',
                supabase: 'https://supabase.com/privacy',
            },
        },
    };

    const {tldr, details, contact, links} = content[language];

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <div className="max-w-3xl mx-auto">
                <div className="flex justify-end mb-4">
                    <button
                        onClick={() => setLanguage('de')}
                        className={`px-4 py-2 ${language === 'de' ? 'bg-blue-600' : 'bg-gray-700'} rounded-md mr-2`}
                    >
                        Deutsch
                    </button>
                    <button
                        onClick={() => setLanguage('en')}
                        className={`px-4 py-2 ${language === 'en' ? 'bg-blue-600' : 'bg-gray-700'} rounded-md`}
                    >
                        English
                    </button>
                </div>
                <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
                <div className="flex justify-center my-10">
                    <img src="https://files.catbox.moe/iylc6o.png" alt="Logo" className="w-32 h-auto"/>
                </div>
                <p className="text-xl mb-4">{tldr}</p>
                <div className="mb-4" dangerouslySetInnerHTML={{__html: details}}/>
                <p className="mb-4">{contact}</p>
                <p className="mb-4">
                    <a href={links.entraID} className="text-blue-500 underline" target="_blank"
                       rel="noopener noreferrer">
                        Microsoft EntraID Privacy Policy
                    </a>
                </p>
                <p className="mb-4">
                    <a href={links.supabase} className="text-blue-500 underline" target="_blank"
                       rel="noopener noreferrer">
                        Supabase Privacy Policy
                    </a>
                </p>
            </div>
        </div>
    );
};

export default PrivacyPage;