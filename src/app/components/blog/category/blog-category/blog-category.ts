import { Component, ChangeDetectionStrategy } from "@angular/core";

import { Category } from "../../../category/category";

@Component({
  selector: "app-blog-category",
  imports: [Category],
  templateUrl: "./blog-category.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./blog-category.scss",
})
export class BlogCategory {}
