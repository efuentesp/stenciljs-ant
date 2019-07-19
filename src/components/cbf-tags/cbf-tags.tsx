import { Component, State, Element, Prop, h } from '@stencil/core';

@Component({
	tag: 'cbf-tags',
	styleUrl: 'cbf-tags.css',
	shadow: true
})
export class CbfTags {
	@Prop({ reflectToAttr: true })
	caption: string = '';

	@Element() el: HTMLElement;

	@State() tagsSelected: string[] = [];
	@State() tagUserInput: string = '';
	@State() tagUserInputValid: boolean = false;

	//@Event({bubbles: true, composed: true}) cbfTagItemSelected: EventEmitter<string>;

	render() {
		return (
			<div>
				<label>{this.caption}</label>
				<br />
				<input
					id="tag-input"
					class="input"
					value={this.tagUserInput}
					onInput={this.onTagUserInput.bind(this)}
				/>

				<button
					id="add-tag-button"
					class="btn btn-primary btn-circle"
					onClick={this.onClickAddTag.bind(this)}
					disabled={!this.tagUserInputValid}
				>
					+
				</button>

				<button
					id="remove-tag-button"
					class="btn btn-danger btn-circle"
					onClick={this.onClickRemoveTag.bind(this)}
					disabled={!this.tagUserInputValid}
				>
					-
				</button>

				<ul>
					{this.tagsSelected.map((tag) => <li onClick={this.onTagItemSelected.bind(this, tag)}>{tag}</li>)}
				</ul>
			</div>
		);
	}

	onTagUserInput(event: Event) {
		this.tagUserInput = (event.target as HTMLInputElement).value;
		if (this.tagUserInput.trim() !== '') {
			this.tagUserInputValid = true;
		} else {
			this.tagUserInputValid = false;
		}
	}

	onClickAddTag() {
		//let tagInput = (this.el.shadowRoot.querySelector("#tag-input") as HTMLInputElement).value;
		this.tagsSelected = [ ...this.tagsSelected, this.tagUserInput ];
		this.tagUserInput = '';
		this.tagUserInputValid = false;
	}

	onClickRemoveTag() {
		this.tagsSelected = this.tagsSelected.filter((tag) => tag !== this.tagUserInput);
		this.tagUserInput = '';
		this.tagUserInputValid = false;
	}

	onTagItemSelected(tag: string) {
		this.tagUserInput = tag;
		this.tagUserInputValid = true;
		//this.cbfTagItemSelected.emit(tag)
	}
}
