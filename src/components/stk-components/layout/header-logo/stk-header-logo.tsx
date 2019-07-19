import { Component, h } from '@stencil/core';

@Component({
	tag: 'stk-header-logo',
	styleUrl: 'stk-header-logo.css',
	shadow: true
})
export class StkHeaderLogo {
	render() {
		return <div class="logo" />;
	}
}
