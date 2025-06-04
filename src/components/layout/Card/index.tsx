import type { ICard } from '../../../types/ICard';

const Card = (porps: ICard) => {
    const { children } = porps;

    return (
        <div>
            {children}
        </div>
    );
}


export { Card };