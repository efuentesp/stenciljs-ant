import { Component, h } from "@stencil/core";

@Component({
  tag: "stk-button-group",
  styleUrl: "stk-button-group.css",
  shadow: false
})
export class StkButtonGroup {
  render() {
    return (
      <div class="btn-group">
        <slot />
      </div>
    );
  }
}
