import { Table } from '../interfaces/types';
import { mapRowIntoInstruction } from './map-row';
import { Instruction } from '../interfaces/instruction.interface';

export const mapQueueIntoInstructions = (queue: Table): Instruction[] =>
  queue.map(row => mapRowIntoInstruction(row));
