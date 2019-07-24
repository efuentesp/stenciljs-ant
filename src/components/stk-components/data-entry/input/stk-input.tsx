import { Component, h, Prop } from "@stencil/core";

export type inputType =
  | "text"
  | "textarea"
  | "password"
  | "number"
  | "integer"
  | "currency"
  | "percentage";

@Component({
  tag: "stk-input",
  styleUrl: "stk-input.css",
  shadow: false
})
export class StkInput {
  @Prop({ reflect: true }) type: inputType = "text";
  @Prop({ reflect: true }) defaultValue: string = "default";
  @Prop({ mutable:true })  value: string ;
  @Prop({ reflect: true }) placeholder: string = "";
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop({ reflect: true }) allowClear: boolean = false;
  @Prop({ reflect: true }) maxLength: number = 128;
  @Prop({ reflect: true }) rows: number = 4;
  @Prop({ reflect: true }) min: number = 0;
  @Prop({ reflect: true }) max: number = 100000000;
  @Prop({ reflect: true }) step: number = 1;
  
  textInput!: HTMLInputElement;

  handleClearText = () => {
    this.textInput.value='';
  }

  render() {
    return this.renderInput();
  }

  renderInput() {
    switch (this.type) {
      case "text":
        if (this.allowClear && !this.disabled) {
          return (
            <span class="stk-input-affix-wrapper">
              <input
                type="text"
                value={!this.value ? this.defaultValue : this.value}
                placeholder={this.placeholder}
                disabled={this.disabled}
                class="stk-input"
                ref={(el) => this.textInput = el as HTMLInputElement}
              />
              <span class="stk-input-suffix" >
                <i class="fas fa-times-circle" onClick={this.handleClearText}/>
              </span>
            </span>
          );
        } else {
          return (
            <input
              type="text"
              value={!this.value ? this.defaultValue : this.value}
              placeholder={this.placeholder}
              disabled={this.disabled}
              class="stk-input"
            />
          );
        }

      case "textarea":
        return (
          <textarea
            value={!this.value ? this.defaultValue : this.value}
            placeholder={this.placeholder}
            rows={this.rows}
            disabled={this.disabled}
            class="stk-input"
          />
        );

      case "password":
        return (
          <span class="stk-input-password stk-input-affix-wrapper">
            <input
              type="password"
              value={!this.value ? this.defaultValue : this.value}
              placeholder={this.placeholder}
              disabled={this.disabled}
              class="stk-input"
            />
            <span class="stk-input-suffix">
              <i class="fas fa-eye-slash" />
            </span>
          </span>
        );

      case "number":
        return (
          <div
            class={{
              "stk-input-number": true,
              "stk-input-number-disabled": this.disabled
            }}
          >
            <div class="stk-input-number-handler-wrap">
              <span
                unselectable={true}
                role="button"
                aria-label="Increase Value"
                aria-disabled="false"
                class="stk-input-number-handler stk-input-number-handler-up "
              >
                <i class="fas fa-chevron-up" />
              </span>
              <span
                unselectable={true}
                role="button"
                aria-label="Decrease Value"
                aria-disabled="false"
                class="stk-input-number-handler stk-input-number-handler-down "
              >
                <i class="fas fa-chevron-down" />
              </span>
            </div>
            <div
              class="stk-input-number-input-wrap"
              role="spinbutton"
              aria-valuemin={this.min}
              aria-valuemax={this.max}
              aria-valuenow={!this.value ? this.defaultValue : this.value}
            >
              <input
                class="stk-input-number-input"
                autocomplete="off"
                min={this.min}
                max={this.max}
                step={this.step}
                value={!this.value ? this.defaultValue : this.value}
                disabled={this.disabled}
              />
            </div>
          </div>
        );

      default:
        break;
    }
  }
}
