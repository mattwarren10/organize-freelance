import { Component } from '@angular/core';
import { Proposal } from './proposal'

@Component({
	moduleId: module.id,
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html'
})

export class ProposalListComponent {
	proposalOne: Proposal = new Proposal(15, 'ABC Company', 'http://mattwarren.us', 'Ruby on Rails', 150, 120, 15, 'malwarr@indiana.edu');
	proposalTwo: Proposal = new Proposal(99, 'XYZ Company', 'http://mattwarren.us', 'Ruby on Rails', 150, 120, 15, 'malwarr@indiana.edu');
	proposalThree: Proposal = new Proposal(300, 'MNO Company', 'http://mattwarren.us', 'Ruby on Rails', 150, 120, 15, 'malwarr@indiana.edu')

	proposals: Proposal[] = [ 
		this.proposalOne, 
		this.proposalTwo, 
		this.proposalThree]
}