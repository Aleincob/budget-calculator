import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { Amount } from 'src/app/models/amount';
import { BudgetServiceService } from '../../budget-service.service';

@Component({
  selector: 'app-add-amount',
  templateUrl: './add-amount.component.html',
  styleUrls: ['./add-amount.component.css'],
})
export class AddAmountComponent implements OnInit {
  amount: String = '';

  dataForm = this.formBuilder.group({
    amount: new FormControl(0, [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  constructor(
    private budgetService: BudgetServiceService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {}

  addAmount() {
    const newAmount: Amount = {
      amount: this.dataForm.value.amount ?? 0,
      description: this.dataForm.value.description ?? '',
    };
    this.budgetService.addAmount(newAmount);
    console.log('recibido');
    // const result: number = newAmount.amount++
  }
}
