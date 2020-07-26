import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import "./style.scss";

import Edit from "./edit";
import save from "./save";
import icon from "./icon";
import attributes from "./attributes";

registerBlockType("block/social", {
	title: __("Social", "block"),
	description: __("", "block"),
	category: "widgets",
	icon,
	attributes,
	supports: {
		align: true,
	},
	edit: Edit,
	save,
});
