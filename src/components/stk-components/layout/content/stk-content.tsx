import { Component, h } from '@stencil/core';

@Component({
	tag: 'stk-content',
	styleUrl: 'stk-content.css',
	shadow: true
})
export class StkContent {
	render() {
		return [
			<main>
				<slot />
			</main>
		];
	}
}
