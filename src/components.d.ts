/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  StkButtonType,
} from './components/stk-components/general/button/stk-button';
import {
  StkSpan,
} from './components/stk-components/grid/stk-col/stk-col';
import {
  inputType,
} from './components/stk-components/data-entry/input/stk-input';
import {
  RadioGroupOptions,
  RadioGroupOrientation,
} from './components/stk-components/data-entry/radio-group/stk-radio-group';
import {
  selectType,
} from './components/stk-components/data-entry/select/stk-select';
import {
  selectType as selectType1,
} from './components/stk-components/data-entry/select/stk-select';

export namespace Components {
  interface CbfTags {
    'caption': string;
  }
  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface StkBreadcrumb {}
  interface StkBreadcrumbItem {
    'label': string;
  }
  interface StkButton {
    'block': boolean;
    'disabled': boolean;
    'icon': string;
    'loading': boolean;
    'type': StkButtonType;
  }
  interface StkButtonGroup {}
  interface StkCol {
    'lg': StkSpan;
    'lgOffset': StkSpan;
    'md': StkSpan;
    'mdOffset': StkSpan;
    'offset': StkSpan;
    'sm': StkSpan;
    'smOffset': StkSpan;
    'span': StkSpan;
    'xl': StkSpan;
    'xlOffset': StkSpan;
    'xs': StkSpan;
    'xsOffset': StkSpan;
  }
  interface StkContent {}
  interface StkFooter {}
  interface StkHeader {}
  interface StkHeaderLogo {}
  interface StkHeaderMenu {}
  interface StkInput {
    'allowClear': boolean;
    'defaultValue': string;
    'disabled': boolean;
    'max': number;
    'maxLength': number;
    'min': number;
    'placeholder': string;
    'rows': number;
    'step': number;
    'type': inputType;
    'value': string;
  }
  interface StkLayout {
    'innerLayout': boolean;
  }
  interface StkMenuItem {
    'label': string;
  }
  interface StkRadio {
    'defaultValue': string;
    'disabled': boolean;
    'value': string;
  }
  interface StkRadioGroup {
    'options': RadioGroupOptions;
    'orientation': RadioGroupOrientation;
    'value': string;
  }
  interface StkRow {}
  interface StkSelect {
    'defaultValue': string;
    'disabled': boolean;
    'loading': boolean;
    'placeholder': string;
    'tokenSeparators': string[];
    'type': selectType;
    'value': string;
  }
  interface StkSelectOption {
    'disabled': boolean;
    'selected': boolean;
    'type': selectType;
    'value': string;
  }
  interface StkSelectOptionGroup {
    'label': string;
  }
  interface StkSider {}
  interface StkSiderMenu {}
}

declare global {


  interface HTMLCbfTagsElement extends Components.CbfTags, HTMLStencilElement {}
  var HTMLCbfTagsElement: {
    prototype: HTMLCbfTagsElement;
    new (): HTMLCbfTagsElement;
  };

  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLStkBreadcrumbElement extends Components.StkBreadcrumb, HTMLStencilElement {}
  var HTMLStkBreadcrumbElement: {
    prototype: HTMLStkBreadcrumbElement;
    new (): HTMLStkBreadcrumbElement;
  };

  interface HTMLStkBreadcrumbItemElement extends Components.StkBreadcrumbItem, HTMLStencilElement {}
  var HTMLStkBreadcrumbItemElement: {
    prototype: HTMLStkBreadcrumbItemElement;
    new (): HTMLStkBreadcrumbItemElement;
  };

  interface HTMLStkButtonElement extends Components.StkButton, HTMLStencilElement {}
  var HTMLStkButtonElement: {
    prototype: HTMLStkButtonElement;
    new (): HTMLStkButtonElement;
  };

  interface HTMLStkButtonGroupElement extends Components.StkButtonGroup, HTMLStencilElement {}
  var HTMLStkButtonGroupElement: {
    prototype: HTMLStkButtonGroupElement;
    new (): HTMLStkButtonGroupElement;
  };

  interface HTMLStkColElement extends Components.StkCol, HTMLStencilElement {}
  var HTMLStkColElement: {
    prototype: HTMLStkColElement;
    new (): HTMLStkColElement;
  };

  interface HTMLStkContentElement extends Components.StkContent, HTMLStencilElement {}
  var HTMLStkContentElement: {
    prototype: HTMLStkContentElement;
    new (): HTMLStkContentElement;
  };

  interface HTMLStkFooterElement extends Components.StkFooter, HTMLStencilElement {}
  var HTMLStkFooterElement: {
    prototype: HTMLStkFooterElement;
    new (): HTMLStkFooterElement;
  };

  interface HTMLStkHeaderElement extends Components.StkHeader, HTMLStencilElement {}
  var HTMLStkHeaderElement: {
    prototype: HTMLStkHeaderElement;
    new (): HTMLStkHeaderElement;
  };

  interface HTMLStkHeaderLogoElement extends Components.StkHeaderLogo, HTMLStencilElement {}
  var HTMLStkHeaderLogoElement: {
    prototype: HTMLStkHeaderLogoElement;
    new (): HTMLStkHeaderLogoElement;
  };

  interface HTMLStkHeaderMenuElement extends Components.StkHeaderMenu, HTMLStencilElement {}
  var HTMLStkHeaderMenuElement: {
    prototype: HTMLStkHeaderMenuElement;
    new (): HTMLStkHeaderMenuElement;
  };

  interface HTMLStkInputElement extends Components.StkInput, HTMLStencilElement {}
  var HTMLStkInputElement: {
    prototype: HTMLStkInputElement;
    new (): HTMLStkInputElement;
  };

  interface HTMLStkLayoutElement extends Components.StkLayout, HTMLStencilElement {}
  var HTMLStkLayoutElement: {
    prototype: HTMLStkLayoutElement;
    new (): HTMLStkLayoutElement;
  };

  interface HTMLStkMenuItemElement extends Components.StkMenuItem, HTMLStencilElement {}
  var HTMLStkMenuItemElement: {
    prototype: HTMLStkMenuItemElement;
    new (): HTMLStkMenuItemElement;
  };

  interface HTMLStkRadioElement extends Components.StkRadio, HTMLStencilElement {}
  var HTMLStkRadioElement: {
    prototype: HTMLStkRadioElement;
    new (): HTMLStkRadioElement;
  };

  interface HTMLStkRadioGroupElement extends Components.StkRadioGroup, HTMLStencilElement {}
  var HTMLStkRadioGroupElement: {
    prototype: HTMLStkRadioGroupElement;
    new (): HTMLStkRadioGroupElement;
  };

  interface HTMLStkRowElement extends Components.StkRow, HTMLStencilElement {}
  var HTMLStkRowElement: {
    prototype: HTMLStkRowElement;
    new (): HTMLStkRowElement;
  };

  interface HTMLStkSelectElement extends Components.StkSelect, HTMLStencilElement {}
  var HTMLStkSelectElement: {
    prototype: HTMLStkSelectElement;
    new (): HTMLStkSelectElement;
  };

  interface HTMLStkSelectOptionElement extends Components.StkSelectOption, HTMLStencilElement {}
  var HTMLStkSelectOptionElement: {
    prototype: HTMLStkSelectOptionElement;
    new (): HTMLStkSelectOptionElement;
  };

  interface HTMLStkSelectOptionGroupElement extends Components.StkSelectOptionGroup, HTMLStencilElement {}
  var HTMLStkSelectOptionGroupElement: {
    prototype: HTMLStkSelectOptionGroupElement;
    new (): HTMLStkSelectOptionGroupElement;
  };

  interface HTMLStkSiderElement extends Components.StkSider, HTMLStencilElement {}
  var HTMLStkSiderElement: {
    prototype: HTMLStkSiderElement;
    new (): HTMLStkSiderElement;
  };

  interface HTMLStkSiderMenuElement extends Components.StkSiderMenu, HTMLStencilElement {}
  var HTMLStkSiderMenuElement: {
    prototype: HTMLStkSiderMenuElement;
    new (): HTMLStkSiderMenuElement;
  };
  interface HTMLElementTagNameMap {
    'cbf-tags': HTMLCbfTagsElement;
    'my-component': HTMLMyComponentElement;
    'stk-breadcrumb': HTMLStkBreadcrumbElement;
    'stk-breadcrumb-item': HTMLStkBreadcrumbItemElement;
    'stk-button': HTMLStkButtonElement;
    'stk-button-group': HTMLStkButtonGroupElement;
    'stk-col': HTMLStkColElement;
    'stk-content': HTMLStkContentElement;
    'stk-footer': HTMLStkFooterElement;
    'stk-header': HTMLStkHeaderElement;
    'stk-header-logo': HTMLStkHeaderLogoElement;
    'stk-header-menu': HTMLStkHeaderMenuElement;
    'stk-input': HTMLStkInputElement;
    'stk-layout': HTMLStkLayoutElement;
    'stk-menu-item': HTMLStkMenuItemElement;
    'stk-radio': HTMLStkRadioElement;
    'stk-radio-group': HTMLStkRadioGroupElement;
    'stk-row': HTMLStkRowElement;
    'stk-select': HTMLStkSelectElement;
    'stk-select-option': HTMLStkSelectOptionElement;
    'stk-select-option-group': HTMLStkSelectOptionGroupElement;
    'stk-sider': HTMLStkSiderElement;
    'stk-sider-menu': HTMLStkSiderMenuElement;
  }
}

declare namespace LocalJSX {
  interface CbfTags extends JSXBase.HTMLAttributes<HTMLCbfTagsElement> {
    'caption'?: string;
  }
  interface MyComponent extends JSXBase.HTMLAttributes<HTMLMyComponentElement> {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }
  interface StkBreadcrumb extends JSXBase.HTMLAttributes<HTMLStkBreadcrumbElement> {}
  interface StkBreadcrumbItem extends JSXBase.HTMLAttributes<HTMLStkBreadcrumbItemElement> {
    'label'?: string;
  }
  interface StkButton extends JSXBase.HTMLAttributes<HTMLStkButtonElement> {
    'block'?: boolean;
    'disabled'?: boolean;
    'icon'?: string;
    'loading'?: boolean;
    'type'?: StkButtonType;
  }
  interface StkButtonGroup extends JSXBase.HTMLAttributes<HTMLStkButtonGroupElement> {}
  interface StkCol extends JSXBase.HTMLAttributes<HTMLStkColElement> {
    'lg'?: StkSpan;
    'lgOffset'?: StkSpan;
    'md'?: StkSpan;
    'mdOffset'?: StkSpan;
    'offset'?: StkSpan;
    'sm'?: StkSpan;
    'smOffset'?: StkSpan;
    'span'?: StkSpan;
    'xl'?: StkSpan;
    'xlOffset'?: StkSpan;
    'xs'?: StkSpan;
    'xsOffset'?: StkSpan;
  }
  interface StkContent extends JSXBase.HTMLAttributes<HTMLStkContentElement> {}
  interface StkFooter extends JSXBase.HTMLAttributes<HTMLStkFooterElement> {}
  interface StkHeader extends JSXBase.HTMLAttributes<HTMLStkHeaderElement> {}
  interface StkHeaderLogo extends JSXBase.HTMLAttributes<HTMLStkHeaderLogoElement> {}
  interface StkHeaderMenu extends JSXBase.HTMLAttributes<HTMLStkHeaderMenuElement> {}
  interface StkInput extends JSXBase.HTMLAttributes<HTMLStkInputElement> {
    'allowClear'?: boolean;
    'defaultValue'?: string;
    'disabled'?: boolean;
    'max'?: number;
    'maxLength'?: number;
    'min'?: number;
    'placeholder'?: string;
    'rows'?: number;
    'step'?: number;
    'type'?: inputType;
    'value'?: string;
  }
  interface StkLayout extends JSXBase.HTMLAttributes<HTMLStkLayoutElement> {
    'innerLayout'?: boolean;
  }
  interface StkMenuItem extends JSXBase.HTMLAttributes<HTMLStkMenuItemElement> {
    'label'?: string;
  }
  interface StkRadio extends JSXBase.HTMLAttributes<HTMLStkRadioElement> {
    'defaultValue'?: string;
    'disabled'?: boolean;
    'value'?: string;
  }
  interface StkRadioGroup extends JSXBase.HTMLAttributes<HTMLStkRadioGroupElement> {
    'options'?: RadioGroupOptions;
    'orientation'?: RadioGroupOrientation;
    'value'?: string;
  }
  interface StkRow extends JSXBase.HTMLAttributes<HTMLStkRowElement> {}
  interface StkSelect extends JSXBase.HTMLAttributes<HTMLStkSelectElement> {
    'defaultValue'?: string;
    'disabled'?: boolean;
    'loading'?: boolean;
    'placeholder'?: string;
    'tokenSeparators'?: string[];
    'type'?: selectType;
    'value'?: string;
  }
  interface StkSelectOption extends JSXBase.HTMLAttributes<HTMLStkSelectOptionElement> {
    'disabled'?: boolean;
    'selected'?: boolean;
    'type'?: selectType;
    'value'?: string;
  }
  interface StkSelectOptionGroup extends JSXBase.HTMLAttributes<HTMLStkSelectOptionGroupElement> {
    'label'?: string;
  }
  interface StkSider extends JSXBase.HTMLAttributes<HTMLStkSiderElement> {}
  interface StkSiderMenu extends JSXBase.HTMLAttributes<HTMLStkSiderMenuElement> {}

  interface IntrinsicElements {
    'cbf-tags': CbfTags;
    'my-component': MyComponent;
    'stk-breadcrumb': StkBreadcrumb;
    'stk-breadcrumb-item': StkBreadcrumbItem;
    'stk-button': StkButton;
    'stk-button-group': StkButtonGroup;
    'stk-col': StkCol;
    'stk-content': StkContent;
    'stk-footer': StkFooter;
    'stk-header': StkHeader;
    'stk-header-logo': StkHeaderLogo;
    'stk-header-menu': StkHeaderMenu;
    'stk-input': StkInput;
    'stk-layout': StkLayout;
    'stk-menu-item': StkMenuItem;
    'stk-radio': StkRadio;
    'stk-radio-group': StkRadioGroup;
    'stk-row': StkRow;
    'stk-select': StkSelect;
    'stk-select-option': StkSelectOption;
    'stk-select-option-group': StkSelectOptionGroup;
    'stk-sider': StkSider;
    'stk-sider-menu': StkSiderMenu;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


