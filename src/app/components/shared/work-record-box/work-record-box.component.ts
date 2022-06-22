import { Component, OnInit, Input } from '@angular/core';
import { WorkRecord } from '../../../interfaces/work-record';
import { Worker } from '../../../interfaces/worker';
import { JobOrder } from '../../../interfaces/job-order';
import { WorkRecordsService } from '../../../services/work-records.service';
import { Page } from '../../../interfaces/page';
import { WorkersService } from '../../../services/workers.service';
import { Kind } from 'src/app/interfaces/kind';
const swal = require('sweetalert');

@Component({
    selector: 'app-work-record-box',
    templateUrl: './work-record-box.component.html',
    styleUrls: ['./work-record-box.component.scss']
})
export class WorkRecordBoxComponent implements OnInit {

    public workRecords: Array<WorkRecord> = [];

    kind: Kind = {
        id: 0,
        name: '',
        context: '',
        created: ''
    }

    @Input() jobOrder: JobOrder = {
        id: 0,
        purchase_order_number: '',
        in_date: '',
        compromised_date: '',
        delivery_date: '',
        jobs_amount: 0,
        budgeted_hours: 0,
        percentage_advance: 0,
        description: '',
        bill_number: '',
        remit_number: '',
        real_hours_production: 0,
        observations: '',
        current_state: '',
        job: Job,
        kind: this.kind,
        states: Array<State>,
        documents: Array<any>
    };

    public worker: Worker =
        {
            id: 0,
            name: '',
            created: ''
        };

    

    public workRecord: WorkRecord = 
    { 
        id: 0, 
        hours: 0, 
        worker: this.worker, 
        jobOrder: null, 
        registerDate: '', 
        created: '' };

    

    public workers: Array<Worker> = [];

    constructor(private workRecordsService: WorkRecordsService, private workersService: WorkersService) { }

    ngOnInit() {
        if (this.jobOrder && this.jobOrder.id) {
            this.workRecordsService.findAll(1000, 1, "registerDate", "DESC", "jobOrder", this.jobOrder.id).subscribe((response) => this.workRecords = response as Array<WorkRecord>);
            this.workersService.findAll(1000, 1, "name", "ASC").subscribe((response) => this.workers = response as Array<Worker>);;
        }
    }

    /**
     * save
     */
    public save(modal: any) {
        this.workRecord.jobOrder = this.jobOrder;
        this.workRecordsService.save(this.workRecord).subscribe(() => {
            this.workRecordsService.findAll(1000, 1, "registerDate", "DESC", "jobOrder", this.jobOrder.id).subscribe((response) => {
                this.workRecords = response as WorkRecord[];
                swal('Operación exitosa!', 'La operación se realizó con exito.', 'success');
                modal.hide();
            });
        });
    }

    /**
     * deleteWorkRecord
     */
    public delete(id: number) {

        swal({
            title: 'Estás seguro?',
            text: 'El registro se eliminará de forma permanente en el sistema.',
            icon: 'warning',
            buttons: {
                cancel: {
                    text: 'No, cancelar!',
                    value: null,
                    visible: true,
                    className: "",
                    closeModal: false
                },
                confirm: {
                    text: 'Si, continuar!',
                    value: true,
                    visible: true,
                    className: "bg-danger",
                    closeModal: false
                }
            }
        }).then((isConfirm: any) => {
            if (isConfirm) {
                /** Confirmación  **/
                this.workRecordsService.delete(id).subscribe((response: any) => {
                    swal('Operación exitosa!', 'La operación se realizó con exito.', 'success');
                    this.workRecords = this.workRecords.filter((workRecord: WorkRecord) => workRecord.id !== response.id);
                })
                /** Confirmación  **/
            } else {
                swal('Cancelado!', 'La acción se canceló :)', 'error');
            }
        });
    }

    /**
     * totalHours
     */
    public totalHours() {
        let totalHours: number = 0;
        for (let i = 0; i < this.workRecords.length; i++)
            totalHours += this.workRecords[i].hours;

        return totalHours;
    }
}
