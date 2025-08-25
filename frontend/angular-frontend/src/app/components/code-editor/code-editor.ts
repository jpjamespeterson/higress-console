import { Component, Input } from "@angular/core";

@Component({
  selector: "app-code-editor",
  templateUrl: "./code-editor.html",
  styleUrls: ["./code-editor.scss"]
})
export class CodeEditorComponent {
  @Input() code: string;
  @Input() language: string;

  editorOptions = {
    theme: "vs-dark",
    language: "yaml"
  };
}
