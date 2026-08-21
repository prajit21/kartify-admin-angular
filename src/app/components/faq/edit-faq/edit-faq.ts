import { Component, ChangeDetectionStrategy } from "@angular/core";

import { PageWrapper } from "../../../shared/components/page-wrapper/page-wrapper";
import { FormFaq } from "../form-faq/form-faq";

@Component({
  selector: "app-edit-faq",
  imports: [PageWrapper, FormFaq],
  templateUrl: "./edit-faq.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./edit-faq.scss",
})
export class EditFaq {}
