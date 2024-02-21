import { Injectable } from '@angular/core';

import { Amount } from './models/amount';
import { BehaviorSubject } from 'rxjs'; //importacion del sujeto

@Injectable({
  providedIn: 'root',
})
export class BudgetServiceService {
  amounts: Amount[] = []; //porque Amount lleva []
  totalBudget: number = 0;
  totalBudgetSubject: BehaviorSubject<number> = new BehaviorSubject(0); //creacion del sujeto
  constructor() {}

  addAmount(newAmount: Amount) {
    this.amounts.push(newAmount);
    this.totalBudget = this.amounts.reduce((cum, curr) => cum + curr.amount, 0);
    this.totalBudgetSubject.next(this.totalBudget); //notificacio n al observable
  }

  getAmount() {
    return this.amounts;
  }

  getTotalBudget() {
    return this.totalBudgetSubject;
  }

  removeAmount(index: number) {
    this.amounts.splice(index, 1);
  }
}
