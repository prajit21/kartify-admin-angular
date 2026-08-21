import { Component, ChangeDetectionStrategy } from "@angular/core";

import { PageWrapper } from "../../../shared/components/page-wrapper/page-wrapper";
import { FormLicenseKey } from "../form-license-key/form-license-key";

@Component({
  selector: "app-create-license-key",
  imports: [PageWrapper, FormLicenseKey],
  templateUrl: "./create-license-key.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./create-license-key.scss",
})
export class CreateLicenseKey {}
