import { Component, ChangeDetectionStrategy } from "@angular/core";

import { PageWrapper } from "../../../shared/components/page-wrapper/page-wrapper";
import { FormFaq } from "../form-faq/form-faq";

@Component({
  selector: "app-create-faq",
  imports: [PageWrapper, FormFaq],
  templateUrl: "./create-faq.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./create-faq.scss",
})
export class CreateFaq {}
