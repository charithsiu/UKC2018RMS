import {Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {ArticlesService} from '../articles.service';

@Component({
	selector: 'list',
	templateUrl: 'app/articles/list/list.template.html'
})
export class ListComponent{
	article: any = {};
	articles: any;
	errorMessage: string;

	constructor(private _router:Router, 
		private _route: ActivatedRoute,private _articlesService: ArticlesService) {}

	ngOnInit() {
		this._articlesService.list().subscribe(articles  => this.articles = articles);
	}
	update(value) {
		this.article=value;
		console.log('Name:'+this.article.firstName);
		this._articlesService.update(this.article).subscribe(savedArticle => this._router.navigate(['/articles']),
		error =>  this.errorMessage = error); 
	}
	

 
}