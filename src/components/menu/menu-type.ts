export type ActivationTrigger = "pointer" | "other";

export type MenuState = {
	__isDemo: boolean;

	isOpen: boolean;
	buttonRef: HTMLButtonElement | null; // TODO: Need PoC about ref
	itemsData: {
		contents: Array<{
			id: string;
			ref: {
				isDisable: boolean;
				textValue?: string;
				ref: HTMLElement | null; // TODO: Need PoC about ref
			};
		}>;
		activeIndex: number | null;
		ref: HTMLDivElement | null; // TODO: Need PoC about ref
	};
	searchQuery: string;
	activationTrigger: ActivationTrigger;
};

// TODO: Need to implement the `Props`
export type MenuProps = Partial<Pick<MenuState, "__isDemo">>;
