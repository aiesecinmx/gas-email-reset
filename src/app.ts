/// <reference path="global.d.ts" />

import { RESET_QUEUE_SHEET, RESULTS_SHEET } from './app.configuration';
import {
  readEmailQueue,
  mapQueueIntoInstructions,
  resetPassword,
  sendEmail,
  reportResultInSpreadsheet,
} from './helpers';
import { Result } from './interfaces/result.interface';
import { Status } from './interfaces/types';

function resetEmailsFromQueue() {
  const emailQueueSheet = SpreadsheetApp.getActive().getSheetByName(
    RESET_QUEUE_SHEET,
  );
  const resultsSheet = SpreadsheetApp.getActive().getSheetByName(RESULTS_SHEET);

  console.log(`Reading email queue from '${RESET_QUEUE_SHEET}' sheet`);
  const emailQueue = readEmailQueue(emailQueueSheet);
  
  const resetInstructions = mapQueueIntoInstructions(emailQueue);
  resetInstructions.forEach(instruction => {
    /** If something fails, status is overwritten to "failed" */
    const result: Result = { ...instruction, status: Status.SUCCESS };

    try {
      result.password = resetPassword(instruction.resetEmail);
      sendEmail(result);
    } catch (error) {
      result.status = Status.FAILURE;
    }

    reportResultInSpreadsheet(result, emailQueueSheet, resultsSheet);
  });
}

global.resetEmailsFromQueue = resetEmailsFromQueue;
