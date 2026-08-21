import {
  Component,
  output,
  input,
  ChangeDetectionStrategy,
} from "@angular/core";

import { TranslateModule } from "@ngx-translate/core";

import { IUserAddress } from "../../../../shared/interface/user.interface";

@Component({
  selector: "app-address-block",
  imports: [TranslateModule],
  templateUrl: "./address-block.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./address-block.scss",
})
export class AddressBlock {
  readonly addresses = input<IUserAddress[]>([]);
  readonly type = input<string>("shipping");

  readonly selectAddress = output<number>();

  constructor() {}

  set(event: Event) {
    this.selectAddress.emit(+(<HTMLInputElement>event.target)?.value);
  }
}
