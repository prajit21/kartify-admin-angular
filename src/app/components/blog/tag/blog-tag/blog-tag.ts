import { Component, ChangeDetectionStrategy } from "@angular/core";

import { Tag } from "../../../tag/tag";

@Component({
  selector: "app-blog-tag",
  imports: [Tag],
  templateUrl: "./blog-tag.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./blog-tag.scss",
})
export class BlogTag {}
