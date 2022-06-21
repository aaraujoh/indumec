import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
import { JobsService } from '../../../services/jobs.service';
import { Job } from '../../../interfaces/job';
import { Kind } from 'src/app/interfaces/kind';

@Component({
  selector: 'app-select-job',
  templateUrl: './select-job.component.html',
  styleUrls: ['./select-job.component.scss']
})
export class SelectJobComponent implements OnInit {

	public jobs:[];

	@Output() selectedComponent = new EventEmitter<Job>();

    public kind: Kind = {
		id:      0,
    	name:    '',
    	context: '',
    	created: ''
	}

	public job: Job = 
	{
		id: 0, 
		number: '', 
		item: '', 
		description: '', 
		kind: this.kind, 
		components:[], 
		pictures:[], 
		planes:[], 
		documents:[], 
		searchField: ''
	};

	constructor(private jobsService:JobsService) {
		this.jobsService.search("").subscribe((response) => {
						this.jobs = response as [];
						this.jobs.forEach((job:any) => job.searchField = job.number + "-" + job.item + " - " + job.description)
        }); 
	}

	ngOnInit() {}

	public typeaheadOnSelect(e: TypeaheadMatch): void {
		this.selectedComponent.emit(e.item);
		
    }
}
