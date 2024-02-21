import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { BudgetServiceService } from 'src/app/budget-service.service';
import { Amount } from 'src/app/models/amount';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent {

  budget$: Observable<number> = this.budgetService.getTotalBudget()

  constructor(private budgetService: BudgetServiceService) { }
}
