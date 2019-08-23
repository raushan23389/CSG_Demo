import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  styleUrls: ['./product.component.css'],
  template: `  
                <div>  
                        Select City :  
                        <select  [(ngModel)]="ProductHeader.name" (ngModelChange)="SearchProduct(ProductHeader.name)">  
                             <option *ngFor="let prod of ProductHeader">{{prod.name}} </option>  
                         </select>  
  
  
  
<div *ngIf="ProductHeader.name">  
    <h5>You have selected: {{ProductHeader.name}}</h5>  
</div>  
                </div>  
<div>  
<h4>Country Details:</h4>  
<table class="TFtable">  
<tr >   
    <th>Name</th> 
</tr>  
 <tr  *ngFor="let Prod of ProductDetails">  
    <td>{{Prod.title}}</td>  
</tr>  
  
</table>  
</div>  
               `,  
})  
  
export class ProductComponent {  
gi
  //Create a object for storing filter data and bind to html table.
    public ProductDetails: object = [];  

  //filter product details on name and return productDetails object.
    public ProductHeader = [{ name: 'London' }, { name: 'Birmingham'}, { name: 'NewDelhi' },{ name: 'Newyork' },{ name: 'Dublin' }];  
    
    public Products = [  
        {Name:'London', title: 'England'},  
        { Name: 'Birmingham', title: 'England'},  
        { Name: 'NewDelhi', title: 'India'},  
        { Name: 'Newyork', title: 'USA'},  
        { Name: 'London', title: 'USA '},  
        { Name: 'Dublin', title: 'USA'},  
        { Name: 'Dublin', title: 'Ireland'},  
       ];  
  
    constructor() {  
      
        this.getProducts();  
    }  
    getProducts() {  
        console.log("getProducts");  
        return this.ProductHeader;  
    }  
  
  
    SearchProduct(name: string) {  
  
        let obj = this.Products.filter(m => m.Name == name);  
        this.ProductDetails = obj;  
        return this.ProductDetails;  
    }  
  
  
}  