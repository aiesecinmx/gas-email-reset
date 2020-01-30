import { Sheet, Table } from '../interfaces/types';

export const readEmailQueue = (sheet: Sheet): Table => {
  const table: Table = sheet.getDataRange().getValues();
  table.shift(); /** Remove first row (headers) */
  return table;
};
