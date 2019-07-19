import { Component, h, Prop } from '@stencil/core';

@Component({
	tag: 'stk-layout',
	styleUrl: 'stk-layout.css',
	shadow: true
})
export class StkLayout {
	@Prop({ reflectToAttr: true })
	innerLayout: boolean = false;

	render() {
		return (
			<div class={{ 'inner-layout': this.innerLayout }}>
				<slot />
			</div>
		);
	}
}
