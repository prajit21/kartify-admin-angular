import { Component, input, ChangeDetectionStrategy } from "@angular/core";

import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-loader",
  imports: [TranslateModule],
  templateUrl: "./loader.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./loader.scss",
})
export class Loader {
  readonly loaderClass = input<string>("loader-wrapper");
}
