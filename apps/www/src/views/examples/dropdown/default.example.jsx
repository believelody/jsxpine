import {
	Dropdown,
	DropdownTrigger,
	DropdownContent
} from "$components/dropdown.component";

export function DefaultDropdownExample() {
	return (
		<Dropdown>
			<DropdownTrigger class="inline-flex items-center justify-center h-12 py-2 pl-3 pr-12 text-sm font-medium transition-colors bg-white border rounded-md text-neutral-700 hover:bg-neutral-100 active:bg-white focus:bg-white focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
				<img
					src="https://cdn.devdojo.com/images/may2023/adam.jpeg"
					class="object-cover w-8 h-8 border rounded-full border-neutral-200"
				/>
				<span class="flex flex-col items-start flex-shrink-0 h-full ml-2 leading-none translate-y-px">
					<span>Adam Wathan</span>
					<span class="text-xs font-light text-neutral-400">@adamwathan</span>
				</span>
				<svg
					class="absolute right-0 w-5 h-5 mr-3"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
					></path>
				</svg>
			</DropdownTrigger>
			<DropdownContent>
				<div class="p-1 w-64 my-1 bg-white border rounded-md shadow-md border-neutral-200/70 text-neutral-700">
					<div class="px-2 py-1.5 text-sm font-semibold">My Account</div>
					<div class="h-px my-1 -mx-1 bg-neutral-200"></div>
					<a
						href="#_"
						class="relative flex cursor-default select-none hover:bg-neutral-100 items-center rounded px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="w-4 h-4 mr-2"
						>
							<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
							<circle cx="12" cy="7" r="4"></circle>
						</svg>
						<span>Profile</span>
						<span class="ml-auto text-xs tracking-widest opacity-60">⇧⌘P</span>
					</a>
					<a
						href="#_"
						class="relative flex cursor-default select-none hover:bg-neutral-100 items-center rounded px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="w-4 h-4 mr-2"
						>
							<rect width="20" height="14" x="2" y="5" rx="2"></rect>
							<line x1="2" x2="22" y1="10" y2="10"></line>
						</svg>
						<span>Billing</span>
						<span class="ml-auto text-xs tracking-widest opacity-60">⌘B</span>
					</a>
					<a
						href="#_"
						class="relative flex cursor-default select-none hover:bg-neutral-100 items-center rounded px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="w-4 h-4 mr-2"
						>
							<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
							<circle cx="12" cy="12" r="3"></circle>
						</svg>
						<span>Settings</span>
						<span class="ml-auto text-xs tracking-widest opacity-60">⌘S</span>
					</a>
					<a
						href="#_"
						class="relative flex cursor-default select-none hover:bg-neutral-100 items-center rounded px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="w-4 h-4 mr-2"
						>
							<rect width="20" height="16" x="2" y="4" rx="2" ry="2"></rect>
							<path d="M6 8h.001"></path>
							<path d="M10 8h.001"></path>
							<path d="M14 8h.001"></path>
							<path d="M18 8h.001"></path>
							<path d="M8 12h.001"></path>
							<path d="M12 12h.001"></path>
							<path d="M16 12h.001"></path>
							<path d="M7 16h10"></path>
						</svg>
						<span>Keyboard shortcuts</span>
						<span class="ml-auto text-xs tracking-widest opacity-60">⌘K</span>
					</a>
					<div class="h-px my-1 -mx-1 bg-neutral-200"></div>
					<div class="relative flex cursor-default select-none hover:bg-neutral-100 items-center rounded px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="w-4 h-4 mr-2"
						>
							<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
							<circle cx="9" cy="7" r="4"></circle>
							<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
							<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
						</svg>
						<span>Team</span>
					</div>
					<Dropdown position="right">
						<DropdownTrigger class="relative flex select-none hover:bg-neutral-100 items-center rounded px-2 py-1.5 text-sm w-full">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="w-4 h-4 mr-2"
							>
								<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
								<circle cx="9" cy="7" r="4"></circle>
								<line x1="19" x2="19" y1="8" y2="14"></line>
								<line x1="22" x2="16" y1="11" y2="11"></line>
							</svg>
							<span>Invite users</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="w-4 h-4 ml-auto"
							>
								<polyline points="9 18 15 12 9 6"></polyline>
							</svg>
						</DropdownTrigger>
						<DropdownContent>
							<div class="z-50 min-w-[8rem] rounded-md border bg-white p-1 shadow-md w-40">
								<div
									x-bind="closer"
									class="relative flex cursor-default select-none items-center rounded px-2 py-1.5 hover:bg-neutral-100 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
								>
									<svg
										class="w-4 h-4 mr-2"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<rect width="20" height="16" x="2" y="4" rx="2"></rect>
										<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
									</svg>
									<span>Email</span>
								</div>
								<div
									x-bind="closer"
									class="relative flex cursor-default select-none items-center rounded px-2 py-1.5 hover:bg-neutral-100 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
								>
									<svg
										class="w-4 h-4 mr-2"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
									</svg>
									<span>Message</span>
								</div>
								<div class="h-px my-1 -mx-1 bg-neutral-200"></div>
								<div
									x-on:click="dropdownOpen=false"
									class="relative flex cursor-default select-none items-center rounded px-2 py-1.5 hover:bg-neutral-100 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
								>
									<svg
										class="w-4 h-4 mr-2"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<circle cx="12" cy="12" r="10"></circle>
										<line x1="12" x2="12" y1="8" y2="16"></line>
										<line x1="8" x2="16" y1="12" y2="12"></line>
									</svg>
									<span>More...</span>
								</div>
							</div>
						</DropdownContent>
					</Dropdown>
					<div class="relative flex cursor-default select-none hover:bg-neutral-100 items-center rounded px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="w-4 h-4 mr-2"
						>
							<line x1="12" x2="12" y1="5" y2="19"></line>
							<line x1="5" x2="19" y1="12" y2="12"></line>
						</svg>
						<span>New Team</span>
						<span class="ml-auto text-xs tracking-widest opacity-60">⌘+T</span>
					</div>
					<div class="h-px my-1 -mx-1 bg-neutral-200"></div>
					<a
						href="#_"
						class="relative flex cursor-default select-none hover:bg-neutral-100 items-center rounded px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="w-4 h-4 mr-2"
						>
							<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
							<path d="M9 18c-4.51 2-5-2-7-2"></path>
						</svg>
						<span>GitHub</span>
					</a>
					<a
						href="#_"
						class="relative flex cursor-default select-none hover:bg-neutral-100 items-center rounded px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="w-4 h-4 mr-2"
						>
							<circle cx="12" cy="12" r="10"></circle>
							<circle cx="12" cy="12" r="4"></circle>
							<line x1="4.93" x2="9.17" y1="4.93" y2="9.17"></line>
							<line x1="14.83" x2="19.07" y1="14.83" y2="19.07"></line>
							<line x1="14.83" x2="19.07" y1="9.17" y2="4.93"></line>
							<line x1="14.83" x2="18.36" y1="9.17" y2="5.64"></line>
							<line x1="4.93" x2="9.17" y1="19.07" y2="14.83"></line>
						</svg>
						<span>Support</span>
					</a>
					<a
						href="#_"
						class="relative flex cursor-default select-none hover:bg-neutral-100 items-center rounded px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
						data-disabled
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="w-4 h-4 mr-2"
						>
							<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
						</svg>
						<span>API</span>
					</a>
					<div class="h-px my-1 -mx-1 bg-neutral-200"></div>
					<a
						href="#_"
						class="relative flex cursor-default select-none hover:bg-neutral-100 items-center rounded px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="w-4 h-4 mr-2"
						>
							<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
							<polyline points="16 17 21 12 16 7"></polyline>
							<line x1="21" x2="9" y1="12" y2="12"></line>
						</svg>
						<span>Log out</span>
						<span class="ml-auto text-xs tracking-widest opacity-60">⇧⌘Q</span>
					</a>
				</div>
			</DropdownContent>
		</Dropdown>
	);
}
