import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { ModalService } from '../../services/modal.service';
import { ProductsService } from '../../services/products.service';
import { CreateProductComponent } from '../../components/create-product/create-product.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { ProductComponent } from '../../components/product/product.components';
import { FilterProductsPipe } from '../../pipes/filter-products.pipe';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    CommonModule,
    ProductComponent,
    FilterProductsPipe,
    ModalComponent,
    CreateProductComponent,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent implements OnInit {
  constructor(
    public productsService: ProductsService,
    public modalService: ModalService
  ) {}

  title = 'angular course';
  loading = false;
  term = '';

  ngOnInit(): void {
    this.loading = true;
    this.productsService.getAll().subscribe(() => {
      this.loading = false;
    });
  }
}
