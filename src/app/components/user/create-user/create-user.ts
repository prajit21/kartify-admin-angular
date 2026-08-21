import { Component, ChangeDetectionStrategy } from "@angular/core";

import { PageWrapper } from "../../../shared/components/page-wrapper/page-wrapper";
import { FormUser } from "../form-user/form-user";

@Component({
  selector: "app-create-user",
  imports: [PageWrapper, FormUser],
  templateUrl: "./create-user.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./create-user.scss",
})
export class CreateUser {}
