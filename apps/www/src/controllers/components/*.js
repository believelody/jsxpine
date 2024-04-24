import { accordionsController } from "$controllers/components/accordions.controller";
import { alertsController } from "$controllers/components/alerts.controller";
import { avatarController } from "$controllers/components/avatar.controller";
import { badgesController } from "$controllers/components/badges.controller";
import { buttonsController } from "$controllers/components/buttons.controller";
import { cardController } from "$controllers/components/card.controller";
import { carouselController } from "$controllers/components/carousel.controller";
import { checkboxController } from "$controllers/components/checkbox.controller";
import { dropdownController } from "$controllers/components/dropdown.controller";
import { galleriesController } from "$controllers/components/galleries.controller";
import { imagePickerController } from "$controllers/components/imagepicker.controller";
import { inputsController } from "$controllers/components/inputs.controller";
import { radioController } from "$controllers/components/radio.controller";
import { selectController } from "$controllers/components/select.controller";
import { tabsController } from "$controllers/components/tabs.controller";
import { tooltipsController } from "$controllers/components/tooltips.controller";
import { treesController } from "$controllers/components/trees.controller";
import { Hono } from "hono";

export const componentsController = new Hono()
	.get((ctx) => {
		return ctx.redirect("/components/accordions");
	})
	.route("/accordions", accordionsController)
	.route("/alerts", alertsController)
	.route("/avatar", avatarController)
	.route("/badges", badgesController)
	.route("/buttons", buttonsController)
	.route("/card", cardController)
	.route("/carousel", carouselController)
	.route("/checkbox", checkboxController)
	.route("/dropdown", dropdownController)
	.route("/imagepicker", imagePickerController)
	.route("/inputs", inputsController)
	.route("/galleries", galleriesController)
	.route("/radio", radioController)
	// .route("/range-slider", rangeSliderController)
	.route("/select", selectController)
	.route("/tabs", tabsController)
	.route("/tooltips", tooltipsController)
	.route("/trees", treesController);
