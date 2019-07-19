import { Component, h, Prop } from '@stencil/core';

@Component({
	tag: 'stk-breadcrumb-item',
	styleUrl: 'stk-breadcrumb-item.css',
	shadow: true
})
export class StkBreadcrumbItem {
	@Prop({ reflectToAttr: true })
	label: string = '';

	render() {
		return <span>{this.label}</span>;
	}
}
