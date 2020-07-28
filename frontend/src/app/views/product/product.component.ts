import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

	//inject router
	constructor(private router: Router) { }

	ngOnInit(): void {

	}

	//method to navigate to product creation
	navigateToProductCreate() {
		this.router.navigate(['/products/create']);
	}
}
