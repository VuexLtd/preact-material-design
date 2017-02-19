import { h, Component } from 'preact';

import { Coord2d } from '../../core/types';

export interface RippleProps {
    colour?: string;
    color?: string;
}

export class Ripple extends Component<RippleProps, {}> {
    static defaultProps: RippleProps = {
        colour: 'rgba(0, 0, 0, .1)',
    };

    private ripples = new Set<RippleRef>();

    constructor(props?: RippleProps) {
        super(props);

        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
    }

    public render() {
        return <div class="pmd-ripple-container"></div>;
    }

    public shouldComponentUpdate() {
        return false;
    }

    public componentDidMount(): void {
        const parent = this.base.parentElement;
        parent.style.position = 'relative';
        parent.style.overflow = 'hidden';

        parent.addEventListener('mousedown', this.onMouseDown);
        document.addEventListener('mouseup', this.onMouseUp);
    }

    public componentWillUnmount(): void {
        const parent = this.base.parentElement;
        parent.style.position = '';
        parent.style.overflow = '';

        parent.removeEventListener('mousedown', this.onMouseDown);
        document.removeEventListener('mouseup', this.onMouseUp);

        this.ripples.forEach(ripple => ripple.remove());
    }

    private activeRipple: RippleRef;
    private onMouseDown(evt: MouseEvent) {
        const parent = this.base.parentElement;
        this.activeRipple = this.add(Coord2d.fromMouseEvent(evt, 'offset', parent), this.props.color || this.props.colour);
        this.activeRipple.trigger(true);

        this.ripples.add(this.activeRipple);
        this.activeRipple.onDestroy = ripple => this.ripples.delete(ripple);
    }

    private onMouseUp() {
        if (this.activeRipple) {
            this.activeRipple.unlock();
        }
    }

    public add(pos: Coord2d, colour: string): RippleRef {
        const ripple = new RippleRef(pos, colour);
        ripple.attach(this.base);
        return ripple;
    }
}

export class RippleRef {
    public element = document.createElement('div');
    public parent: HTMLElement;
    public locked: boolean = false;
    public done: boolean = false;
    public onDestroy: (ripple: RippleRef) => void = () => undefined;

    constructor(
        public position: Coord2d,
        public colour: string,
    ) {
        this.element.classList.add('pmd-ripple');
        this.setStyles({
            position: 'absolute',
            top: `${position.y}px`,
            left: `${position.x}px`,
            width: '1px',
            height: '1px',
            background: colour,
            transform: 'translate(-50%, -50%) scale(0)',
            'border-radius': '50%',
            'pointer-events': 'none',
            transition: '0.55s all cubic-bezier(0.0, 0.0, 0.2, 1)',
        });

        this.element.addEventListener('transitionend', () => {
            if (this.done) {
                this.remove();
                return;
            }

            this.done = true;
            if (!this.locked) {
                this.out();
            }
        })
    }

    public attach(container: HTMLElement, parent: HTMLElement = container.parentElement) {
        container.appendChild(this.element);
        this.parent = parent;
    }

    public trigger(lock: boolean = false) {
        this.locked = lock;
        const size = this.distanceToCorner(this.parent.getBoundingClientRect()) * 2
        this.setStyles({ transform: `translate(-50%, -50%) scale(${size})` }, true);
    }

    public unlock() {
        this.out();
    }

    public remove() {
        this.element.parentElement.removeChild(this.element);
        this.onDestroy(this);
    }

    private out() {
        this.setStyles({ opacity: 0 }, true);
    }

    private distanceToCorner(rect: ClientRect) {
        const distX = Math.max(this.position.x, rect.width - this.position.x);
        const distY = Math.max(this.position.y, rect.height - this.position.y);
        return Math.sqrt(distX * distX + distY * distY);
    }

    private setStyles(styles: { [index: string]: any }, defer: boolean = false) {
        if (defer) {
            requestAnimationFrame(() => this.setStyles(styles, false));
            return;
        }

        Object.assign(this.element.style, styles);
    }
}
