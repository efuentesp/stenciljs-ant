import { Component, h } from '@stencil/core';

@Component({
	tag: 'stk-footer',
	styleUrl: 'stk-footer.css',
	shadow: true
})
export class StkFooter {
	render() {
		return (
			<footer>
				<slot />
			</footer>
		);
	}
}
