import { CommonModule } from "@angular/common";
import { Component, inject, ChangeDetectionStrategy } from "@angular/core";

import { Store } from "@ngxs/store";
import { Observable } from "rxjs";

import { IValues } from "../../interface/setting.interface";
import { SettingState } from "../../store/state/setting.state";

@Component({
  selector: "app-footer",
  imports: [CommonModule],
  templateUrl: "./footer.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./footer.scss",
})
export class Footer {
  setting$: Observable<IValues> = inject(Store).select(
    SettingState.setting,
  ) as Observable<IValues>;
}
