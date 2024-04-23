/**
 * Radio component props
 * @type {import("$common/props").JSXComponent<import("$components/inputs.component").RadioInputProps>}
 */
export function Radio(props) {
	const { children, class: className, id, ...restProps } = props;
	return (
		<div>
			<input type="radio" id={id} class="hidden peer" {...restProps} />
			<label for={id} class={className}>
				{children}
			</label>
		</div>
	);
}
