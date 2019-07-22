import { Component, h, Prop } from "@stencil/core";
import { selectType } from "../select/stk-select";

@Component({
  tag: "stk-select-option",
  styleUrl: "stk-select-option.css",
  shadow: false
})
export class StkSelectOption {
  @Prop({ reflectToAttr: true }) type: selectType = "default";
  @Prop({ reflectToAttr: true }) value: string;
  @Prop({ reflectToAttr: true }) disabled: boolean = false;
  @Prop({ reflectToAttr: true }) selected: boolean = false;

  render() {
    switch (this.type) {
      case "default":
        return this.renderSelectOptionDefault();

      case "multiple":
      case "tags":
        return this.renderSelectOptionMultiple();

      default:
        break;
    }
  }

  renderSelectOptionDefault() {
    return (
      <li
        role="option"
        value={this.value}
        unselectable={true}
        class={{
          "stk-select-dropdown-menu-item": true,
          "stk-select-dropdown-menu-item-selected": this.selected,
          "stk-select-dropdown-menu-item-disabled": this.disabled
        }}
        aria-selected="false"
        style={{ "user-select": "none" }}
      >
        <slot />
      </li>
    );
  }

  renderSelectOptionMultiple() {
    return (
      <li
        unselectable={true}
        class="stk-select-selection__choice"
        role="presentation"
        title={this.value}
        style={{ "user-select": "none" }}
      >
        <div class="stk-select-selection__choice__content">
          <slot />
        </div>
        <span class="stk-select-selection__choice__remove">
          <i
            aria-label="icon: close"
            class="stkicon stkicon-close stk-select-remove-icon"
          >
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              class=""
              data-icon="close"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
            </svg>
          </i>
        </span>
      </li>
    );
  }
}
