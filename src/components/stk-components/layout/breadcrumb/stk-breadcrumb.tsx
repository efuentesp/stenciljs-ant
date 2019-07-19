import { Component, h } from '@stencil/core';

@Component({
	tag: 'stk-breadcrumb',
	styleUrl: 'stk-breadcrumb.css',
	shadow: true
})
export class StkBreadcrumb {
	render() {
		return <slot />;
	}
}
