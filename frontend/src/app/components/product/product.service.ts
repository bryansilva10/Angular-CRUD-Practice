import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ProductService {

	baseUrl = 'http://localhost:3001/products'

	constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

	showMessage(msg: string): void {
		this.snackBar.open(msg, 'X', {
			duration: 3000,
			horizontalPosition: "right",
			verticalPosition: 'top'
		})
	}

	//method to create new prod
	create(product: Product): Observable<Product> {
		return this.http.post<Product>(this.baseUrl, product);
	}

	//method to read prods from server
	read(): Observable<Product[]> {
		return this.http.get<Product[]>(this.baseUrl);
	}

	//method to get specific product
	readById(id: string): Observable<Product> {
		//url
		const url = `${this.baseUrl}/${id}`;
		return this.http.get<Product>(url);
	}

	//method to update
	update(product: Product): Observable<Product> {
		//url
		const url = `${this.baseUrl}/${product.id}`;
		return this.http.put<Product>(url, product);
	}

	//delete 
	delete(id: String): Observable<Product> {
		//url
		const url = `${this.baseUrl}/${id}`;
		return this.http.delete<Product>(url);
	}
}
