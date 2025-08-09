import { Component } from '@angular/core';
import { SummaryComponent } from './components/summary/summary.component';
import { TransactionFormComponent } from './components/transaction-form/transaction-form.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';

@Component({ 
  selector: 'app-root',
  standalone: true,
  imports: [SummaryComponent, TransactionFormComponent, TransactionListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  transactions: any[] = [];

  constructor() {
    const saved = localStorage.getItem('transactions');
    if (saved) this.transactions = JSON.parse(saved);
  }

  get income() {
    return this.transactions
      .filter((t) => t.type === 'income')
      .reduce((sum, t) => sum + Number(t.amount), 0);
  }

  get expense() {
    return this.transactions
      .filter((t) => t.type === 'expense')
      .reduce((sum, t) => sum + Number(t.amount), 0);
  }

  get totalBalance() {
    return this.income - this.expense;
  }

  addTransaction(transaction: any) {
    this.transactions.push(transaction);
    localStorage.setItem('transactions', JSON.stringify(this.transactions));
  }

  clearAll() {
    this.transactions = []; 
    localStorage.removeItem('transactions'); 
  }

  deleteTransaction(index: number) {
    this.transactions.splice(index, 1);
    localStorage.setItem('transactions', JSON.stringify(this.transactions)); 
  }
}

