import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { Menu } from "../menu";

@Component({
  selector: "app-edit-menu",
  imports: [Menu, FormsModule],
  templateUrl: "./edit-menu.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./edit-menu.scss",
})
export class EditMenu {}
