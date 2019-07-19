import { Component, h } from '@stencil/core';

@Component({
	tag: 'stk-header-menu',
	styleUrl: 'stk-header-menu.css',
	shadow: true
})
export class StkHeaderMenu {
	render() {
		return (
			<ul>
				<slot />
			</ul>
		);
	}
}
