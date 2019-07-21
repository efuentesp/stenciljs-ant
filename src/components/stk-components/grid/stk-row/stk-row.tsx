import { Component, h } from "@stencil/core";

@Component({
  tag: "stk-row",
  styleUrl: "stk-row.css",
  shadow: false
})
export class StkRow {
  render() {
    return <slot />;
  }
}
