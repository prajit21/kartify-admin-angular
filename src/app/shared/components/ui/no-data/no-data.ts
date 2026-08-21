import { Component, input, ChangeDetectionStrategy } from "@angular/core";

import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-no-data",
  imports: [TranslateModule],
  templateUrl: "./no-data.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./no-data.scss",
})
export class NoData {
  readonly class = input<string>("no-data-added");
  readonly image = input<string>(undefined);
  readonly text = input<string>(undefined);
}
