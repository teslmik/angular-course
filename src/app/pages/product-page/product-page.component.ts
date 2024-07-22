import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateProductComponent } from '../../components/create-product/create-product.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { ProductComponent } from '../../components/product/product.components';
import { FilterProductsPipe } from '../../pipes/filter-products.pipe';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule,
    ProductComponent,
    FormsModule,
    FilterProductsPipe,
    ModalComponent,
    CreateProductComponent,],
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
    })
  }
}
