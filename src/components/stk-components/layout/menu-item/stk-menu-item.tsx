import { Component, h, Prop } from '@stencil/core';

@Component({
	tag: 'stk-menu-item',
	styleUrl: 'stk-menu-item.css',
	shadow: true
})
export class StkMenuItem {
	@Prop({ reflectToAttr: true })
	label: string = '';

	render() {
		return <li>{this.label}</li>;
	}
}
