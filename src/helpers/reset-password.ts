import { GoogleAdminException } from '../exceptions/GoogleAdminException';

/**
 * Requests a password reset to the AdminDirectory Service (Google Admin)
 *
 * @param email Valid aiesec.org.mx address to be reset
 *
 * @returns The pseudo-random autogenerated temporary password for the user
 * @throws if password reset is not allowed by Google Admin
 */
export const resetPassword = (email: string): string => {
  /** Generate a base-36 pseudo random number */
  const temporaryPassword = Math.random()
    .toString(36)
    .substring(2);
  try {
    console.log(`Changing password to ${email} in Google Admin`);
    AdminDirectory.Users.update(
      {
        password: temporaryPassword,
        changePasswordAtNextLogin: true,
      },
      email,
    );
    return temporaryPassword;
  } catch (error) {
    console.log(
      `Google Admin was not able to change password for email ${email}: ${error.message}`,
      error.stack,
    );
    throw new GoogleAdminException();
  }
};