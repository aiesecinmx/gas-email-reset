export const EMAIL_SUBJECT = (role: string) =>
  `La contraseña para tu correo de ${role} 🎉`;
export const EMAIL_BODY = (
  role: string,
  email: string,
  password: string,
) => `Hola, ${role}! (ahora sí, ya es oficial 😏)

A continuación te presentamos la contraseña temporal de tu correo organizacional (el aiesec.org.mx). Esta contraseña será válida por las próximas 48 horas, por lo tanto inicia sesión y cámbiala lo antes posible.

Recuerda que por motivos de seguridad, no debes compartir esta contraseña y debes cuidar el acceso a tu correo y Drive. No lo tomes a la ligera.

Tu correo: ${email}
Tu contraseña temporal: ${password}

Saludos.

PD. Soy un correo automático. Favor de no contestar.
#LightUpMexico🔥`;
export const CC_EMAILS = 'organizational.development@aiesec.org.mx';
export const RESET_QUEUE_SHEET = 'Reset Queue';
export const RESULTS_SHEET = 'Processed Emails';
