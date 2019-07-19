import { Component, h } from '@stencil/core';

@Component({
	tag: 'stk-sider-menu',
	styleUrl: 'stk-sider-menu.css',
	shadow: true
})
export class StkSiderMenu {
	render() {
		return <slot />;
	}
}
