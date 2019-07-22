import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "stk-select-option-group",
  styleUrl: "stk-select-option-group.css",
  shadow: false
})
export class StkSelectOptionGroup {
  @Prop({ reflectToAttr: true }) label: string;

  render() {
    return (
      <li class=" stk-select-dropdown-menu-item-group">
        <div
          class="stk-select-dropdown-menu-item-group-title"
          title={this.label}
        >
          {this.label}
        </div>
        <ul class="stk-select-dropdown-menu-item-group-list">
          <slot />
        </ul>
      </li>
    );
  }
}
