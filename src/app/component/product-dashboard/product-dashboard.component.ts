import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { product } from 'src/app/model/products';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
 productArr!:   product[]
 searchInput: FormControl = new FormControl('');


 trackById(index: number, product:product){
  return product.id
 }

constructor(private _productser:ProductService,
  private _snackbar: MatSnackBar
){}

  ngOnInit(): void {
    this.getval();
   
  }

  Snackbar(message: string, icon="Close", {
    
  }){
    this._snackbar.open(message, icon, {horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3000
    })
  }


  getval() {
    this.searchInput.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(val => this._productser.FetchSearchedproduct(val))
    )
    .subscribe({
      next: data => {
        this.productArr = data.products;
      },
      error: err => {
        this.Snackbar(err,'Close', {})
        
      }
    });
  }

  // getval(){
  //   this.searchInput.valueChanges.pipe(
  //     switchMap(val=>this._productser.FetchSearchedproduct(val))
  //   )
  //   .subscribe(data=>{
  //     console.log(data);
      
  //   })
  // }

  
}
