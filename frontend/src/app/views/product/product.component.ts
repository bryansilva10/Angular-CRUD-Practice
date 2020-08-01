import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

	//inject router
	constructor(private router: Router, private headerService: HeaderService) {
		headerService.headerData = {
			title: 'Register Product',
			icon: 'storefront',
			routeUrl: '/products'
		}
	}

	ngOnInit(): void {

	}

	//method to navigate to product creation
	navigateToProductCreate() {
		this.router.navigate(['/products/create']);
	}
}
