import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private snackbar: MatSnackBar) {}

  createMessage(data: string) {
    this.snackbar.open(data, 'Cerrar');
  }
}
