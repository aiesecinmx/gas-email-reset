import { Instruction } from '../interfaces/instruction.interface';

export const mapRowIntoInstruction = (row: string[]): Instruction => ({
  resetEmail: row[0],
  role: row[1],
  notificationEmail: row[2],
});
