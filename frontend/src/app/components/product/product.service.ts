import { map, catchError } from 'rxjs/operators';
import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class ProductService {

	baseUrl = 'http://localhost:3001/products'

	constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

	showMessage(msg: string, isError: boolean = false): void {
		this.snackBar.open(msg, 'X', {
			duration: 3000,
			horizontalPosition: "right",
			verticalPosition: 'top',
			panelClass: isError ? ['msg-error'] : ['msg-success']
		})
	}

	//method to create new prod
	create(product: Product): Observable<Product> {
		return this.http.post<Product>(this.baseUrl, product).pipe(
			map(obj => obj),
			catchError(e => this.errorHandler(e))
		)
	}

	//method to read prods from server
	read(): Observable<Product[]> {
		return this.http.get<Product[]>(this.baseUrl).pipe(
			map(obj => obj),
			catchError(e => this.errorHandler(e))
		)
	}

	//method to get specific product
	readById(id: number): Observable<Product> {
		//url
		const url = `${this.baseUrl}/${id}`;
		return this.http.get<Product>(url).pipe(
			map(obj => obj),
			catchError(e => this.errorHandler(e))
		)
	}

	//method to update
	update(product: Product): Observable<Product> {
		//url
		const url = `${this.baseUrl}/${product.id}`;
		return this.http.put<Product>(url, product).pipe(
			map(obj => obj),
			catchError(e => this.errorHandler(e))
		)
	}

	//delete 
	delete(id: number): Observable<Product> {
		//url
		const url = `${this.baseUrl}/${id}`;
		return this.http.delete<Product>(url).pipe(
			map(obj => obj),
			catchError(e => this.errorHandler(e))
		)
	}

	errorHandler(e: any): Observable<any> {
		this.showMessage('An Error occured', true);
		return EMPTY;
	}
}
