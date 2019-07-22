import { Component, h, Prop } from "@stencil/core";

export type selectType = "default" | "multiple" | "tags";

@Component({
  tag: "stk-select",
  styleUrl: "stk-select.css",
  shadow: false
})
export class StkSelect {
  @Prop({ reflectToAttr: true }) type: selectType = "default";
  @Prop({ reflectToAttr: true }) value: string;
  @Prop({ reflectToAttr: true }) defaultValue: string;
  @Prop({ reflectToAttr: true }) placeholder: string;
  @Prop({ reflectToAttr: true }) disabled: boolean = false;
  @Prop({ reflectToAttr: true }) loading: boolean = false;
  @Prop({ reflectToAttr: true }) tokenSeparators: string[];

  render() {
    switch (this.type) {
      case "default":
        return this.renderSelectDefault();

      case "multiple":
      case "tags":
        return this.renderSelectMultiple();

      default:
        break;
    }
  }

  renderSelectDefault() {
    return [
      <div
        class={{
          "stk-select": true,
          "stk-select-enabled": !this.disabled,
          "stk-select-disabled": this.disabled,
          "stk-select-loading": this.loading
        }}
        style={{ width: "120px" }}
      >
        <div
          class="stk-select-selection
          stk-select-selection--single"
          role="combobox"
          aria-autocomplete="list"
          aria-haspopup="true"
          aria-controls="c8710a13-0631-4110-fa25-7b94bd040f4f"
          aria-expanded="false"
          tabindex="0"
        >
          <div class="stk-select-selection__rendered">
            <div
              class="stk-select-selection-selected-value"
              title={!this.value ? this.defaultValue : this.value}
              style={{ display: "block", opacity: "1" }}
            >
              Lucy
            </div>
          </div>
          <span
            class="stk-select-arrow"
            unselectable={true}
            style={{ "user-select": "none" }}
          >
            {!this.loading ? (
              <i class="fas fa-chevron-down stkicon stkicon-down stk-select-arrow-icon" />
            ) : (
              <i class="fas fa-spinner fa-spin stkicon stkicon stkicon-loading" />
            )}
          </span>
        </div>
      </div>,
      <div
        style={{ position: "absolute", top: "0px", left: "0px", width: "100%" }}
      >
        <div>
          <div
            class="stk-select-dropdown stk-select-dropdown--single stk-select-dropdown-placement-bottomLeft  stk-select-dropdown-hidden"
            style={{ width: "120px", left: "370px", top: "506px" }}
          >
            <div
              id="c8710a13-0631-4110-fa25-7b94bd040f4f"
              style={{ overflow: "auto", transform: "translateZ(0px)" }}
            >
              <ul
                role="listbox"
                class="stk-select-dropdown-menu  stk-select-dropdown-menu-root stk-select-dropdown-menu-vertical"
                tabindex="0"
              >
                <slot />
              </ul>
            </div>
          </div>
        </div>
      </div>
    ];
  }

  renderSelectMultiple() {
    return (
      <div
        class={{
          "stk-select": true,
          "stk-select-enabled": !this.disabled,
          "stk-select-disabled": this.disabled
        }}
        style={{ width: "100%" }}
      >
        <div
          class="stk-select-selection
    stk-select-selection--multiple"
          role="combobox"
          aria-autocomplete="list"
          aria-haspopup="true"
          aria-controls="2dc5b715-8639-49ee-a094-013788dd8543"
          aria-expanded="false"
        >
          <div class="stk-select-selection__rendered">
            <div
              unselectable={true}
              class="stk-select-selection__placeholder"
              style={{ display: "none", "user-select": "none" }}
            >
              {this.placeholder}
            </div>
            <ul>
              <slot />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
