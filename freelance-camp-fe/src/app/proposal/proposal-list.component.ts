import { Component, OnInit } from '@angular/core';
import { Proposal } from './proposal'
import { ProposalService } from './proposal.service'
import { Observable } from 'rxjs/rx'
import { Router } from '@angular/router'

@Component({
	moduleId: module.id,
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html',
	providers: [ ProposalService ]
})

export class ProposalListComponent implements OnInit {
	proposals: Proposal[];
	errorMessage: string;
	mode = "Observable";

	constructor(
		private proposalsService: ProposalService,
		private router: Router
	) {}

	ngOnInit() {
		let timer = Observable.timer(0, 5000);
		timer.subscribe(() => this.getProposals());
	}

	getProposals() {
		this.proposalsService.getProposals()
			.subscribe(
				proposals => this.proposals = proposals,
				error => this.errorMessage = <any>error
			);
	}

	goToShow(proposal: Proposal): void {
		let link = ['/proposal', proposal.id];
		this.router.navigate(link);
	}
}