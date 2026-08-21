import { Component, input, ChangeDetectionStrategy } from "@angular/core";

import { Category } from "../category";

@Component({
  selector: "app-edit-category",
  imports: [Category],
  templateUrl: "./edit-category.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./edit-category.scss",
})
export class EditCategory {
  readonly categoryType = input<string | null>("product");
}
