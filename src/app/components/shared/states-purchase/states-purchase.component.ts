import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { Purchase } from '../../../interfaces/purchase';
import { PurchaseState } from '../../../interfaces/purchase-state';
import { PurchasesService } from '../../../services/purchases.service';
import { State } from '../../../interfaces/state';
import {purchaseStates} from '../../../../assets/source-data/states';

const swal = require('sweetalert');

@Component({
  selector: 'app-states-purchase',
  templateUrl: './states-purchase.component.html',
  styleUrls: ['./states-purchase.component.scss']
})
export class StatesPurchaseComponent implements OnInit {

  @Input() states:Array<State> = [];

  @Input() purchaseId: number = 0;

  @Input() currentState: PurchaseState=
  {
    id: 0,
    name:'',
    hours_active:0
  };

  public state: State =
    {
      id: 0,
      name: '',
      hours_active: 0
    };
  public purchaseStates:Array<State> = purchaseStates;
  public purchase: Purchase;

  constructor(private purchasesService:PurchasesService) { }

  ngOnInit() { 
  }

  ngOnChanges(): void {
    if(this.purchaseId)
      this.purchasesService.find(this.purchaseId).subscribe((response) => this.purchase = response as Purchase);
    
  }

  public changeState(modal:any){
    this.purchasesService.changeState(this.purchaseId, this.state).subscribe((response) => {
        this.states = response as [];
        this.currentState = this.state;
        modal.hide();
    });
    
  }
}
