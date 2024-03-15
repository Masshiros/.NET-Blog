import { MessageService } from 'primeng/api';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AlertService {
  constructor(private readonly messageService: MessageService) {}

  showSuccess(message: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Successfully',
      detail: message,
    });
  }

  showError(message: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: message,
    });
  }
}
