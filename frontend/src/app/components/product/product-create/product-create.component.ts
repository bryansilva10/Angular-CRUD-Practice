import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-product-create',
	templateUrl: './product-create.component.html',
	styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

	product: Product = {
		name: '',
		price: null
	}

	//inject router
	constructor(private router: Router, private productService: ProductService) { }

	ngOnInit(): void {

	}

	createProduct() {
		this.productService.create(this.product).subscribe(() => {
			//show message alert
			this.productService.showMessage('Product created');
			//navigate to products
			this.router.navigate(['/products']);
		})


	}

	cancel() {
		this.router.navigate(['/products']);
	}
}
