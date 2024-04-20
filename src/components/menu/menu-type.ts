export enum MenuStates {
	Open = 0,
	Closed = 1,
}

export enum ActivationTrigger {
	Pointer = 0,
	Other = 1,
}

// TODO: Need PoC about ref
type MenuItemDataRef = {
	textValue?: string;
	disabled: boolean;
	domRef: HTMLElement | null;
};

export type StateDefinition = {
	__demoMode: boolean;
	menuState: MenuStates;
	buttonRef: HTMLButtonElement | null; // TODO: Need PoC about ref
	itemsRef: HTMLDivElement | null; // TODO: Need PoC about ref
	items: { id: string; dataRef: MenuItemDataRef }[];
	searchQuery: string;
	activeItemIndex: number | null;
	activationTrigger: ActivationTrigger;
};

// TODO: Need to implement the `Props`
export type MenuProps = {
	__demoMode?: boolean;
};
