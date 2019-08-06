import { Component, h, Prop, State, Listen, Event,EventEmitter } from "@stencil/core";
import { Validator, defaultValidator, ValidatorEntry } from '../../../../validators/validator';
import { getValidator } from '../../../../validators/validator.factory';

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
  | "email2"

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
  @Prop({ reflect: true }) step: number = 1;
  @Prop({ reflect: true }) min: number = 10;
  @Prop({ reflect: true }) max: number = 1000000;
  @State() clear: boolean=false;
  @State() valid: boolean=true;
  @State() errormsg: string="";

  textInput!: HTMLInputElement;



  @Prop() validator: Array<string | ValidatorEntry | Validator<string>>;

  @Event() changed: EventEmitter<string>;

  _validator: Validator<string> = defaultValidator;

  componentWillLoad() {
    this._validator = getValidator<string>(this.validator);
  }

  componentWillUpdate() {
    this._validator = getValidator<string>(this.validator);
  }

  handleChange(ev) {
    this.value = ev.target ? ev.target.value : null;
    this.changed.emit(this.value);
  }


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
    /*
   var comp = document.querySelector('stk-input');
   console.log('comp', comp.validator);
   let validator = [{
    name: 'length',
    options: {
      min: this.min,
      max: this.max,
    }
   }];
    comp.validator = validator;
    */
    return this.renderInput();
  }


  renderInput() {
    switch (this.type) {
      case "text":
        if (this.allowClear && !this.disabled) {
          return (
            <div>
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
                onInput={(ev) => this.handleChange(ev)}
              />
              <span class="stk-input-suffix" >
               {!this.clear
                 ? <i class="fas fa-times-circle" onClick={this.handleClearText}/>
                 : <i class=""/>
               }
              </span>
            </span>
             {!this._validator.validate(this.value) ? 
               <span class="validation-error">{this._validator.errorMessage}</span>
               : null }
            </div>
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
            <div>
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
                onInput={(ev) => this.handleChange(ev)}
              />
              <span class="stk-input-suffix" >
               {!this.clear
                 ? <i class="fas fa-times-circle" onClick={this.handleClearText}/>
                 : <i class=""/>
               }
              </span>
            </span>
            {!this._validator.validate(this.value) ? 
              <span class="validation-error">{this._validator.errorMessage}</span>
              : null }
           </div>
      );     

      case "email2":
        return (
          <stk-input-email
                value={!this.value ? this.defaultValue : this.value}
                placeholder={this.placeholder}
                disabled={this.disabled}
               // class="stk-input"
                validator={[
                  {
                   name: 'length',
                    options: {
                     min: this.min,
                     max: this.max,
                    },
                  }, 
                   'email']}
               // ref={(el) => this.textInput = el as HTMLInputElement}
                //onInput={(ev) => this.handleChange(ev)}
              />
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

          case "integer":
          return (
              <span class="stk-input-affix-wrapper">
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

