import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({ 
  selector: 'app-transaction-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']

})
export class TransactionFormComponent {
  @Output() submitTransaction = new EventEmitter<any>();

  description = '';
  amount = 0;
  type = 'expense';

  submit() {
    if (this.description.trim() && this.amount > 0) {
      this.submitTransaction.emit({ 
        description: this.description, 
        amount: this.amount, 
        type: this.type 
      });
      this.description = '';
      this.amount = 0;
      this.type = 'expense';
    }
  }
}

