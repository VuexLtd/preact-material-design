export type MousePositionStrategy = 'layer' | 'client' | 'page' | 'offset' | 'screen';

export class Coord2d {
    public static fromXY(x: number, y: number) {
        return new Coord2d(x, y);
    }

    public static fromMouseEvent(evt: MouseEvent, strategy: MousePositionStrategy = 'offset', target?: HTMLElement) {
        if (strategy === 'offset' && target) {
            const offset = calculateOffset(evt, target);
            return new Coord2d(offset.x, offset.y);
        }

        return new Coord2d(evt[`${strategy}X`], evt[`${strategy}Y`]);
    }

    constructor(public x: number, public y: number) {
    }
}

function calculateOffset(evt: MouseEvent, target: HTMLElement) {
    const offset = {
        x: evt.offsetX,
        y: evt.offsetY,
    };

    if (evt.target === target) {
        return offset;
    }

    let element = <HTMLElement> evt.target;
    let guard = 0;
    while (element !== target) {
        guard++;

        offset.x += element.offsetLeft;
        offset.y += element.offsetTop;
        element = <HTMLElement> element.offsetParent;

        if (guard > 20) {
            // Prevent infinite looping
            break;
        }
    }

    return offset;
}
