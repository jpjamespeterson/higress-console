import { Component, Input, Output, EventEmitter } from "@angular/core";

export interface SearchParam {
  label: string;
  name: string;
  placeholder: string;
  type?: "select";
  optionList?: Array<{ label: string; value: string }>;
}

@Component({
  selector: "app-high-search",
  templateUrl: "./high-search.html",
  styleUrls: ["./high-search.scss"]
})
export class HighSearchComponent {
  @Input() searchParamsList: SearchParam[] = [];
  @Input() activeSearchName: string;
  @Input() activeSearchValue: string;
  @Output() searchNameChange = new EventEmitter<string>();
  @Output() searchValueChange = new EventEmitter<string>();
  @Output() search = new EventEmitter<void>();

  get currentType() {
    return this.searchParamsList.find((item) => item.name === this.activeSearchName)?.type;
  }

  get currentOptions() {
    return this.searchParamsList.find((item) => item.name === this.activeSearchName)?.optionList || [];
  }

  get currentPlaceholder() {
    return this.searchParamsList.find((item) => item.name === this.activeSearchName)?.placeholder || "";
  }

  onSearchNameChange(name: string) {
    this.searchNameChange.emit(name);
  }

  onSearchValueChange(value: string) {
    this.searchValueChange.emit(value);
  }

  onSearch() {
    this.search.emit();
  }
}
