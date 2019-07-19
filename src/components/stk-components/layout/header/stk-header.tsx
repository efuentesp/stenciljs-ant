import { Component, h } from '@stencil/core';

@Component({
	tag: 'stk-header',
	styleUrl: 'stk-header.css',
	shadow: true
})
export class StkHeader {
	render() {
		return (
			<header>
				<slot />
			</header>
		);
	}
}
