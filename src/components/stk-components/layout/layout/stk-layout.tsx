import { Component, h, Prop, Element } from '@stencil/core';

@Component({
	tag: 'stk-layout',
	styleUrl: 'stk-layout.css',
	shadow: true
})
export class StkLayout {
	@Element() el: HTMLElement;

	@Prop({ reflectToAttr: true })
	innerLayout: boolean = false;

	render() {
		this.el.style.padding = 'padding: 0 24px 24px;';

		return <slot />;
	}
}
