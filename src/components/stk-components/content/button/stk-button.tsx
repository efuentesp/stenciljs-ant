import { Component, h, Prop, Element } from "@stencil/core";
import { HTMLStencilElement } from "@stencil/core/internal";

export type StkButtonType = "default" | "primary" | "danger" | "link";

@Component({
  tag: "stk-button",
  styleUrl: "stk-button.antd.css",
  shadow: false
})
export class StkButton {
  @Prop({ reflectToAttr: true }) type: StkButtonType = "default";
  @Prop({ reflectToAttr: true }) icon: string = null;
  @Prop({ reflectToAttr: true }) disabled: boolean = false;
  @Prop({ reflectToAttr: true }) loading: boolean = false;
  @Prop({ reflectToAttr: true }) block: boolean = false;

  buttonText: string = "";

  @Element() hostElement: HTMLStencilElement;

  componentWillLoad() {
    // console.log(this.hostElement.querySelector("button>span").textContent);
    // this.buttonText = this.hostElement.querySelector("button>span").textContent;
  }

  render() {
    return (
      <button
        class={{
          default: this.type == "default",
          primary: this.type == "primary",
          danger: this.type == "danger",
          link: this.type == "link",
          loading: this.loading,
          block: this.block
        }}
        disabled={this.disabled}
      >
        {this.renderIcon()}
        <span data-content={this.buttonText}>
          <slot />
        </span>
      </button>
    );
  }

  renderIcon() {
    if (this.loading) {
      return <i class="fas fa-spinner fa-spin" />;
    }

    return this.icon !== null ? <i class={this.icon} /> : null;
  }
}
