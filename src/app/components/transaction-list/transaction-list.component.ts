import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({ 
  selector: 'app-transaction-list',
  imports:[CommonModule],
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent {
  @Input() transactions: any[] = [];

  @Output()
  clearAll = new EventEmitter<void>();

  @Output()
  delete = new EventEmitter<number>();

  onClearAllClick(){
    this.clearAll.emit();
  }

  onDelete(index: number){
    this.delete.emit(index);
  }
}
