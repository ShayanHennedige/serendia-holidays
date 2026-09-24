import type { Locale } from './i18n';

type BookingCopy = {
  plan: string;
  bookNow: string;
  name: string;
  email: string;
  contactNumber: string;
  message: string;
  submit: string;
  sending: string;
  sent: string;
  sendFailed: string;
};

export const tripBookingCopy: Record<Locale, BookingCopy> = {
  en: { plan: 'Plan your trip', bookNow: 'Book Now', name: 'Name *', email: 'E-Mail *', contactNumber: 'Contact number', message: 'Message *', submit: 'Submit', sending: 'Sending…', sent: 'Your inquiry has been emailed to our travel team. This page will refresh shortly.', sendFailed: 'We could not send your inquiry. Please try again or contact us on WhatsApp.' },
  fr: { plan: 'Planifiez votre voyage', bookNow: 'Réserver', name: 'Nom *', email: 'E-mail *', contactNumber: 'Numéro de téléphone', message: 'Message *', submit: 'Envoyer', sending: 'Envoi…', sent: 'Votre demande a été envoyée par e-mail à notre équipe de voyage. Cette page va bientôt se rafraîchir.', sendFailed: 'Nous n’avons pas pu envoyer votre demande. Réessayez ou contactez-nous sur WhatsApp.' },
  de: { plan: 'Planen Sie Ihre Reise', bookNow: 'Jetzt buchen', name: 'Name *', email: 'E-Mail *', contactNumber: 'Telefonnummer', message: 'Nachricht *', submit: 'Senden', sending: 'Wird gesendet…', sent: 'Ihre Anfrage wurde per E-Mail an unser Reiseteam gesendet. Diese Seite wird in Kürze aktualisiert.', sendFailed: 'Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns per WhatsApp.' },
  it: { plan: 'Pianifica il tuo viaggio', bookNow: 'Prenota ora', name: 'Nome *', email: 'E-mail *', contactNumber: 'Numero di telefono', message: 'Messaggio *', submit: 'Invia', sending: 'Invio…', sent: 'La tua richiesta è stata inviata via e-mail al nostro team di viaggio. La pagina si aggiornerà a breve.', sendFailed: 'Non siamo riusciti a inviare la tua richiesta. Riprova o contattaci su WhatsApp.' },
  es: { plan: 'Planifica tu viaje', bookNow: 'Reservar ahora', name: 'Nombre *', email: 'Correo electrónico *', contactNumber: 'Número de contacto', message: 'Mensaje *', submit: 'Enviar', sending: 'Enviando…', sent: 'Tu consulta se ha enviado por correo electrónico a nuestro equipo de viajes. Esta página se actualizará en breve.', sendFailed: 'No pudimos enviar tu consulta. Inténtalo de nuevo o contáctanos por WhatsApp.' },
  lt: { plan: 'Planuokite kelionę', bookNow: 'Užsakyti dabar', name: 'Vardas *', email: 'El. paštas *', contactNumber: 'Kontaktinis numeris', message: 'Žinutė *', submit: 'Siųsti', sending: 'Siunčiama…', sent: 'Jūsų užklausa išsiųsta el. paštu mūsų kelionių komandai. Šis puslapis netrukus bus atnaujintas.', sendFailed: 'Nepavyko išsiųsti užklausos. Bandykite dar kartą arba susisiekite per WhatsApp.' },
};

const translatedBookingText: Partial<Record<Locale, Record<string, string>>> = {
  fr: {
    'Venom Holidays (Pvt) Ltd. can arrange the excursion, transport, and local support for the day.': 'Venom Holidays (Pvt) Ltd. peut organiser l’excursion, le transport et l’assistance locale pour la journée.',
    'WhatsApp/Call: +94 77 398 6504': 'WhatsApp / téléphone : +94 77 398 6504',
    'Email: dharshan@venomholidays.com': 'E-mail : dharshan@venomholidays.com',
  },
  de: {
    'Venom Holidays (Pvt) Ltd. can arrange the excursion, transport, and local support for the day.': 'Venom Holidays (Pvt) Ltd. organisiert für Sie den Ausflug, den Transport und die Betreuung vor Ort.',
    'WhatsApp/Call: +94 77 398 6504': 'WhatsApp / Telefon: +94 77 398 6504',
    'Email: dharshan@venomholidays.com': 'E-Mail: dharshan@venomholidays.com',
  },
  it: {
    'Venom Holidays (Pvt) Ltd. can arrange the excursion, transport, and local support for the day.': 'Venom Holidays (Pvt) Ltd. può organizzare l’escursione, il trasporto e l’assistenza locale per la giornata.',
    'WhatsApp/Call: +94 77 398 6504': 'WhatsApp / telefono: +94 77 398 6504',
    'Email: dharshan@venomholidays.com': 'E-mail: dharshan@venomholidays.com',
  },
  es: {
    'Venom Holidays (Pvt) Ltd. can arrange the excursion, transport, and local support for the day.': 'Venom Holidays (Pvt) Ltd. puede organizar la excursión, el transporte y el apoyo local para el día.',
    'WhatsApp/Call: +94 77 398 6504': 'WhatsApp / llamada: +94 77 398 6504',
    'Email: dharshan@venomholidays.com': 'Correo electrónico: dharshan@venomholidays.com',
  },
  lt: {
    'Venom Holidays (Pvt) Ltd. can arrange the excursion, transport, and local support for the day.': 'Venom Holidays (Pvt) Ltd. gali organizuoti ekskursiją, transportą ir vietinę pagalbą šiai dienai.',
    'WhatsApp/Call: +94 77 398 6504': 'WhatsApp / skambutis: +94 77 398 6504',
    'Email: dharshan@venomholidays.com': 'El. paštas: dharshan@venomholidays.com',
  },
};

export function localizeBookingText(locale: Locale, text: string) {
  return translatedBookingText[locale]?.[text] ?? text;
}
