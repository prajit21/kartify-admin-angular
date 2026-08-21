import { Component, ChangeDetectionStrategy } from "@angular/core";

import { EditTag } from "../../../tag/edit-tag/edit-tag";

@Component({
  selector: "app-edit-blog-tag",
  imports: [EditTag],
  templateUrl: "./edit-blog-tag.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./edit-blog-tag.scss",
})
export class EditBlogTag {}
