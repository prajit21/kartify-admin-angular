import { Component, ChangeDetectionStrategy } from "@angular/core";

import { PageWrapper } from "../../../shared/components/page-wrapper/page-wrapper";
import { FormCoupon } from "../form-coupon/form-coupon";

@Component({
  selector: "app-edit-coupon",
  imports: [PageWrapper, FormCoupon],
  templateUrl: "./edit-coupon.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./edit-coupon.scss",
})
export class EditCoupon {}
