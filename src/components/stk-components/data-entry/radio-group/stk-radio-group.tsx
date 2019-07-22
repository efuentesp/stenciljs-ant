import { Component, h, Prop } from "@stencil/core";

export type RadioGroupOrientation = "horizontal" | "vertical";

export interface RadioGroupOptions {
  label: string;
  value: string;
  disabled?: boolean;
}

@Component({
  tag: "stk-radio-group",
  styleUrl: "stk-radio-group.css",
  shadow: false
})
export class StkRadioGroup {
  @Prop({ reflectToAttr: true }) orientation: RadioGroupOrientation =
    "horizontal";
  @Prop() options: RadioGroupOptions;
  @Prop({ reflectToAttr: true }) value: string;

  render() {
    return (
      <div class="stk-radio-group stk-radio-group-outline">
        <slot />
      </div>
    );
  }
}
