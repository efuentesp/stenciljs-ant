import { Component, h, Prop, State, Listen, Event,EventEmitter } from "@stencil/core";
import { Validator, defaultValidator, ValidatorEntry } from '../../../../validators/validator';
import { getValidator } from '../../../../validators/validator.factory';

@Component({
  tag: "stk-input-email",
  styleUrl: "stk-input.css",
  shadow: false
})
export class StkInputEmail {
  @Prop({ reflect: true }) defaultValue: string = "default";
  @Prop({ mutable:true })  value: string ;
  @Prop({ reflect: true }) placeholder: string = "";
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop({ reflect: true }) allowClear: boolean = false;
  @Prop({ reflect: true }) maxLength: number = 128;
  @Prop({ reflect: true }) rows: number = 4;
  @Prop({ reflect: true }) step: number = 1;
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
  }


  
}

