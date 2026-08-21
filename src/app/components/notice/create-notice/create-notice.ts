import { Component, ChangeDetectionStrategy } from "@angular/core";

import { PageWrapper } from "../../../shared/components/page-wrapper/page-wrapper";
import { FormNotice } from "../form-notice/form-notice";

@Component({
  selector: "app-create-notice",
  imports: [PageWrapper, FormNotice],
  templateUrl: "./create-notice.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./create-notice.scss",
})
export class CreateNotice {}
