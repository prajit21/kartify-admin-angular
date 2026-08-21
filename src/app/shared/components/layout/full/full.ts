import { isPlatformBrowser } from "@angular/common";
import {
  Component,
  PLATFORM_ID,
  inject,
  ChangeDetectionStrategy,
} from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-full",
  imports: [RouterModule],
  templateUrl: "./full.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./full.scss",
})
export class Full {
  private platformId = inject<Object>(PLATFORM_ID);

  public isBrowser: boolean;

  constructor() {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
}
