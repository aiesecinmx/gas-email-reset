import { Instruction } from './instruction.interface';
import { Status } from './types';

export interface Result extends Instruction {
  status: Status;
  password?: string;
}
