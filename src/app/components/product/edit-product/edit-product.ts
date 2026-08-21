import { Component, ChangeDetectionStrategy } from "@angular/core";

import { PageWrapper } from "../../../shared/components/page-wrapper/page-wrapper";
import { FormProduct } from "../form-product/form-product";

@Component({
  selector: "app-edit-product",
  imports: [PageWrapper, FormProduct],
  templateUrl: "./edit-product.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./edit-product.scss",
})
export class EditProduct {}
