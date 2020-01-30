import { Result } from '../interfaces/result.interface';
import { Sheet } from '../interfaces/types';
import { mapResultIntoRow } from './map-result';

export const reportResultInSpreadsheet = (
  result: Result,
  emailQueueSheet: Sheet,
  reportSheet: Sheet,
) => {
  console.log(
    `Reporting ${result.status} status for ${result.resetEmail} email reset`,
  );
  const firstDataRow = emailQueueSheet
    .getDataRange()
    .offset(1, 0)
    .getRow();
  emailQueueSheet.deleteRow(firstDataRow);

  reportSheet.appendRow(mapResultIntoRow(result));
};
