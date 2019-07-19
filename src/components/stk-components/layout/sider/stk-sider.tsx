import { Component, h } from '@stencil/core';

@Component({
	tag: 'stk-sider',
	styleUrl: 'stk-sider.css',
	shadow: true
})
export class StkSider {
	render() {
		return [
			<aside>
				<slot />
			</aside>
		];
	}
}
