import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Budget } from '../../../../interfaces/budget';
import {Kind} from '../../../../interfaces/kind';
import {Page} from '../../../../interfaces/page';
import { Purchase } from '../../../../interfaces/purchase';
import {PurchaseCondition} from '../../../../interfaces/purchase-condition';
import {PurchaseConditionsService} from '../../../../services/purchase-conditions.service';
import { PurchaseOrder } from '../../../../interfaces/purchase-order';
import { PurchaseOrdersService } from '../../../../services/purchaseOrders.service';
import { PurchasesService } from '../../../../services/purchases.service';
import {Requisition} from '../../../../interfaces/requisition';

const swal = require('sweetalert');

@Component({
  selector: 'app-save-purchase-orders',
  templateUrl: './save-purchase-orders.component.html',
  styleUrls: ['./save-purchase-orders.component.scss']
})
export class SavePurchaseOrdersComponent implements OnInit {

  @Output() savedPurchaseOrder = new EventEmitter<Purchase>();
  @Input() purchase!: Purchase;
  @Input() budget!: Budget;
  public purchaseConditions: Array<PurchaseCondition> = [];
  public purchaseOrder!: PurchaseOrder;//{id: null, fiscal_condition: '', purchase_condition: null, transport: '', currency: '', other_tax: null, description: '', delivery_address: 'Lateral Ruta 40 Norte Y Callejon Padilla 1956 - Chimbas, San Juan', emission_date: null, estimated_delivery_date: null, provider: {id:null, description:'', cuit:'', address:'', name:'', mail:'', contact:'', phone:''}, created: null, items: []};

  constructor(private purchasesService: PurchasesService, private purchaseOrdersService: PurchaseOrdersService, private purchaseConditionsService: PurchaseConditionsService) {
    this.purchaseConditionsService.findAll(10000, 1, 'name', 'ASC').subscribe((response) => {
      this.purchaseConditions = response as PurchaseCondition[];
    });
  }

  ngOnInit() {
    if (this.budget.purchase_order)
      this.purchaseOrder = this.budget.purchase_order;
    else {
      this.purchaseOrder.provider = this.budget.provider;
      if (this.purchase.requisitions.length) {
        this.purchase.requisitions.forEach((requisition: Requisition, index: number) => {
          this.purchaseOrder.items.push
            (
              {
                id: 0, item_number: index + 1, description: requisition.description, amount: requisition.amount, unit_of_measurement: Number(requisition.unit_of_measurement), aliquot: 0, price: 0, created: ''
              }              )
        });
      } else {
        this.purchaseOrder.items.push({ id: 0, item_number: 1, description: '', amount: 0, unit_of_measurement: 0, aliquot: 0, price: 0, created: '' })
      }
    }
  }


  public addPurchaseOrderItem(purchaseOrder: PurchaseOrder, itemNumber: number) {
    purchaseOrder.items.push(
      {
        id: 0, 
        item_number: itemNumber, 
        description: '', 
        amount: 0, 
        unit_of_measurement: 0, 
        aliquot: 0, 
        price: 0, 
        created: ''
      }
    );
  }

  public deletePurchaseOrderItem(i:number){
    this.purchaseOrder.items.splice(i, 1);
    for(let i = 0;i < this.purchaseOrder.items.length;i++){
      this.purchaseOrder.items[i].item_number = i + 1;
    }
  }

  public totalPurchaseOrder(purchaseOrder: PurchaseOrder){
    let total = 0.0;
    purchaseOrder.items.forEach((item) => total += item.amount * item.price);
    return total;
  }

  public save() {

    this.purchaseOrdersService.save(this.purchaseOrder).subscribe(
      (response) => {
        this.purchaseOrder = response as PurchaseOrder;
        for(let i = 0;i < this.purchase.budgets.length;i++){
          if(this.purchase.budgets[i].id == this.budget.id){
            this.budget.purchase_order = this.purchaseOrder;
            this.purchase.budgets[i] = this.budget;
          }
        }

        // elimine this.purchasesService.save(this.purchase).subscribe((purchase:Purchase)

        this.purchasesService.save(this.purchase).subscribe((Purchase) => {
          swal('Operaci??n exitosa!', 'La operaci??n se realiz?? con exito.', 'success');
          this.savedPurchaseOrder.emit(this.purchase);
        });
      })
  }

  public selected(value: number): void {
    this.purchaseOrder.purchase_condition = this.purchaseConditions.filter(pC => pC.id === value)[0];
  }
}
