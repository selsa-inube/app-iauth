interface IStyledMask {
    $zIndex: string;
    $isModal: boolean;
    $maskModalWarning?: React.RefObject<HTMLDivElement>;
    $direction?: string;
};

export type { IStyledMask };