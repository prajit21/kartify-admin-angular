import { Component, ChangeDetectionStrategy } from "@angular/core";

import { PageWrapper } from "../../../shared/components/page-wrapper/page-wrapper";
import { FormStore } from "../form-store/form-store";

@Component({
  selector: "app-create-store",
  imports: [PageWrapper, FormStore],
  templateUrl: "./create-store.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./create-store.scss",
})
export class CreateStore {}
