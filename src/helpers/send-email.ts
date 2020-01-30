import { Result } from '../interfaces/result.interface';
import { CC_EMAILS, EMAIL_SUBJECT, EMAIL_BODY } from '../app.configuration';
import { EmailException } from '../exceptions/EmailException';

export const sendEmail = (result: Result): void => {
  console.log(`Sending notification email to ${result.notificationEmail}`, {
    ...result,
    password: 'redacted',
  });
  try {
    MailApp.sendEmail({
      to: result.notificationEmail,
      cc: CC_EMAILS,
      noReply: true,

      subject: EMAIL_SUBJECT(result.role),

      body: EMAIL_BODY(result.role, result.resetEmail, result.password),
    });
  } catch (error) {
    console.log(
      `There was an error sending reset email of ${result.resetEmail}: ${error.message}`,
      error.stack,
    );
    throw new EmailException();
  }
};
