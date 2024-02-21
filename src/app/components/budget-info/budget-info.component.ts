import { Component } from '@angular/core';

import { Amount } from 'src/app/models/amount';

import { BudgetServiceService } from 'src/app/budget-service.service';

@Component({
  selector: 'app-budget-info',
  templateUrl: './budget-info.component.html',
  styleUrls: ['./budget-info.component.css']
})
export class BudgetInfoComponent {
  amounts: Amount[] = this.budgetService.getAmount()

  constructor(private budgetService: BudgetServiceService) { }

}
