import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "stk-radio",
  styleUrl: "stk-radio.css",
  shadow: false
})
export class StkRadio {
  @Prop({ reflectToAttr: true }) value: string = "";
  @Prop({ reflectToAttr: true }) defaultValue: string = "";
  @Prop({ reflectToAttr: true }) disabled: boolean = false;

  render() {
    return (
      <label
        class={{
          "stk-radio-wrapper": true,
          "stk-radio-wrapper-disabled": this.disabled
        }}
      >
        <span
          class={{ "stk-radio": true, "stk-radio-disabled": this.disabled }}
        >
          <input
            type="radio"
            class="stk-radio-input"
            value={!this.value ? this.defaultValue : this.value}
            disabled={this.disabled}
          />
          <span class="stk-radio-inner" />
        </span>
        <span>
          <slot />
        </span>
      </label>
    );
  }
}
