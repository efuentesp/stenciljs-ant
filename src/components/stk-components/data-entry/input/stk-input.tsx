import { Component, h, Prop, State, Listen} from "@stencil/core";

export type inputType =
  | "text"
  | "textarea"
  | "password"
  | "number"
  | "integer"
  | "currency"
  | "percentage"
  | "email"
  | "phone"

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
  @State() clear: boolean=false;

  textInput!: HTMLInputElement;
  
  @Listen('keydown')
  handleKeyDown(){
    if (this.textInput.value!==null)
      this.clear=false
    else
      this.clear=true
  }

  handleClearText = () => {
    this.clear=!this.clear;
    this.textInput.value=null;
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
              <span class="stk-input-prefix">
                <i class="fa fa-user-o" />
              </span>
              <input
                type="text"
                value={!this.value ? this.defaultValue : this.value}
                placeholder={this.placeholder}
                disabled={this.disabled}
                class="stk-input"
                ref={(el) => this.textInput = el as HTMLInputElement}
              />
              <span class="stk-input-suffix" >
               {!this.clear
                 ? <i class="fas fa-times-circle" onClick={this.handleClearText}/>
                 : <i class=""/>
               }
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
            <span class="stk-input-prefix">
                <i class="fa fa-lock" />
            </span>
            <input
              type="password"
              value={!this.value ? this.defaultValue : this.value}
              placeholder={this.placeholder}
              disabled={this.disabled}
              class="stk-input"
              ref={(el) => this.textInput = el as HTMLInputElement}
            />
            <span class="stk-input-suffix" >
               {!this.clear
                 ? <i class="fas fa-times-circle" onClick={this.handleClearText}/>
                 : <i class=""/>
               }
            </span>
          </span>
        );

      case "email":
          return (
            <span class="stk-input-password stk-input-affix-wrapper">
              <span class="stk-input-prefix">
                <i class="fa fa-envelope-o" />
              </span>
              <input
                type="email"
                value={!this.value ? this.defaultValue : this.value}
                placeholder={this.placeholder}
                disabled={this.disabled}
                class="stk-input"
                ref={(el) => this.textInput = el as HTMLInputElement}
              />
              <span class="stk-input-suffix" >
               {!this.clear
                 ? <i class="fas fa-times-circle" onClick={this.handleClearText}/>
                 : <i class=""/>
               }
              </span>
            </span>
      );     

      case "phone":
          return (
            <span class="stk-input-password stk-input-affix-wrapper">
              <span class="stk-input-prefix">
                <i class="fa fa-phone"/>
              </span>
              <input
                type="phone"
                value={!this.value ? this.defaultValue : this.value}
                placeholder={this.placeholder}
                disabled={this.disabled}
                class="stk-input"
                ref={(el) => this.textInput = el as HTMLInputElement}
              />
              <span class="stk-input-suffix" >
               {!this.clear
                 ? <i class="fas fa-times-circle" onClick={this.handleClearText}/>
                 : <i class=""/>
               }
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
                type="number"
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

        case "currency":
          return (
              <span class="stk-input-affix-wrapper">
                <span class="stk-input-prefix">
                 <i class="fa fa-usd" />
                </span>
                <input
                  type="number"
                  class="stk-input"
                  min={this.min}
                  max={this.max}
                  step={this.step}
                  value={!this.value ? this.defaultValue : this.value}
                  placeholder={this.placeholder}
                  disabled={this.disabled}
                  ref={(el) => this.textInput = el as HTMLInputElement}
                />
                <span class="stk-input-suffix" >
                 {!this.clear
                  ? <i class="fas fa-times-circle" onClick={this.handleClearText}/>
                  : <i class=""/>
                 }
               </span>
              </span>
          );
      default:
        break;
    }
  }
}
