import { Component, ChangeDetectionStrategy } from "@angular/core";

import { PageWrapper } from "../../../shared/components/page-wrapper/page-wrapper";
import { FormStore } from "../form-store/form-store";

@Component({
  selector: "app-edit-store",
  imports: [PageWrapper, FormStore],
  templateUrl: "./edit-store.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./edit-store.scss",
})
export class EditStore {}
