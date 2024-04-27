import { MainLayout } from "$views/layouts.view";
import { ComponentPresentation } from "$views/component-presentation.view";
import { ComponentPreview } from "$views/component-preview.view";

/**
 * Alerts page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export async function AlertsPage(props) {
	return (
		<MainLayout {...props}>
			<ComponentPresentation>
				<section class="text-center">
					<h1>Alerts</h1>
				</section>
				
				{[
					"Default",
					"Primary",
					"Secondary",
					"Success",
					"Danger",
					"Info",
					"Warning"
				].map(async (type) => {
					const lowerType = type.toLowerCase();
					const Component = await import(
						`$views/examples/alerts/${lowerType}.example`
					).then((m) => m[`${type}AlertExample`]);
					return (
						<section id={`${lowerType}-alert`}>
							<h2>{type} Alert</h2>
							<ComponentPreview filename={`alerts/${lowerType}`} />
						</section>
					);
				})}
			</ComponentPresentation>
		</MainLayout>
	);
}
