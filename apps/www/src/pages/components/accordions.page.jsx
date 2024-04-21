import { ComponentPresentation } from "$views/component-presentation";
import { ComponentPreview } from "$views/component-preview.view";
import { GroupAccordionExample } from "$views/examples/accordions.example";
import { MainLayout } from "src/layouts/main.layout";

/**
 * Accordions page props
 * @param {import("$components/page.component").PageContext<{}>} props 
 * @returns {string}
 */
export function AccordionsPage(props) {
	return (
		<MainLayout {...props}>
			<ComponentPresentation>
				<section class="text-center">
					<h1>Accordions</h1>
				</section>
				<section>
					<h2>
						Overview Accordions are great way to compact content blocs and
						display required ones by clicking on it.
					</h2>
				</section>

				<section>
					<h2>Solo Accordion Enables accordion feature individually</h2>
				</section>

				<section>
					<h2>
						Group Accordion Groups accordions and display only one (closing
						previous opened one).
					</h2>
					<ComponentPreview>
                        <GroupAccordionExample />
                    </ComponentPreview>
				</section>
			</ComponentPresentation>
		</MainLayout>
	);
}
