const attributes = {
	profiles: {
		type: "array",
		default: [],
	},
	fontSize: {
		type: "number",
	},
	iconSpacing: {
		type: "number",
	},
	iconAlign: {
		type: "string",
		default: "flex-start",
	},
	iconColor: {
		type: "string",
	},
	borderRadius: {
		type: "number",
	},
	backgroundColor: {
		type: "string",
	},
	customColor: {
		type: "boolean",
		default: false,
	},
	iconShape: {
		type: "string",
		default: "square",
	},
	iconPadding: {
		type: "number",
	},
	borderSize: {
		type: "number",
	},
	borderType: {
		type: "string",
		default: "solid",
	},
	borderColor: {
		type: "string",
	},
	hoverAnimation: {
		selector: ".eb-social-container",
		source: "attribute",
		attribute: "data-hover-animation",
		default: "",
	},
	boxHOffset: {
		type: "number",
	},
	boxVOffset: {
		type: "number",
	},
	shadowBlur: {
		type: "number",
	},
	shadowSpread: {
		type: "number",
	},
	boxShadowColor: {
		type: "string",
	},
	textHOffset: {
		type: "number",
	},
	textVOffset: {
		type: "number",
	},
	shadowRadius: {
		type: "number",
	},
	textShadowColor: {
		type: "string",
	},
	profilesString: {
		selector: ".eb-social-container",
		source: "attribute",
		attribute: "data-profiles",
		default: "facebook-f ,twitter ,instagram ,youtube ,linkedin ",
	},
	containerBackground: {
		type: "string",
	},
	marginTop: {
		type: "number",
	},
	marginRight: {
		type: "number",
	},
	marginBottom: {
		type: "number",
	},
	marginLeft: {
		type: "number",
	},
	paddingTop: {
		type: "number",
	},
	paddingRight: {
		type: "number",
	},
	paddingBottom: {
		type: "number",
	},
	paddingLeft: {
		type: "number",
	},
	marginUnit: {
		type: "string",
		default: "px",
	},
	paddingUnit: {
		type: "string",
		default: "px",
	},
	fontSizeUnit: {
		type: "string",
		default: "px",
	},
	iconSpacingUnit: {
		type: "string",
		default: "px",
	},
	iconPaddingUnit: {
		type: "string",
		default: "px",
	},
	radiusUnit: {
		type: "string",
		default: "px",
	},
};
export default attributes;
