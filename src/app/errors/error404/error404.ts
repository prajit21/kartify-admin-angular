import { Location } from "@angular/common";
import { Component, inject, ChangeDetectionStrategy } from "@angular/core";

import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-error404",
  imports: [TranslateModule],
  templateUrl: "./error404.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./error404.scss",
})
export class Error404 {
  private location = inject(Location);

  back() {
    this.location.back();
  }
}
