import { Result } from '../interfaces/result.interface';

export const mapResultIntoRow = (result: Result): string[] => [
  result.resetEmail,
  result.password || '',
  result.role,
  result.notificationEmail,
  new Date().toISOString(),
  result.status,
];
