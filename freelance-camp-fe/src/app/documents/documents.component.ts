import { Component } from '@angular/core';
import { Document } from './document';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html'
})

export class DocumentsComponent {
	pageTitle: string = "Document Dashboard"
	documents: Document[] = [
		{
			title: "My First Doc",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur perferendis, quae eum nisi ea animi dicta non nostrum necessitatibus consectetur vero explicabo, ipsam quod laudantium officiis quasi. Culpa, saepe, eveniet.",
			file_url: "http://google.com",
			updated_at: "7/4/17",
			image_url: 'http://google.com'
		},
		{
			title: "My Second Doc",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur perferendis, quae eum nisi ea animi dicta non nostrum necessitatibus consectetur vero explicabo, ipsam quod laudantium officiis quasi. Culpa, saepe, eveniet.",
			file_url: "http://google.com",
			updated_at: "7/4/17",
			image_url: 'http://google.com'
		},
		{
			title: "My Last Doc",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur perferendis, quae eum nisi ea animi dicta non nostrum necessitatibus consectetur vero explicabo, ipsam quod laudantium officiis quasi. Culpa, saepe, eveniet.",
			file_url: "http://google.com",
			updated_at: "7/4/17",
			image_url: 'http://google.com'
		}
	]
}