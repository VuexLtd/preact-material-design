import { h, Component } from 'preact';

import { Coord2d } from '../../core/types';

export interface RippleProps {
}

export interface RippleState {
    position?: Coord2d;
    scale?: number;
    active?: boolean;
    opacity?: number;
}

export class Ripple extends Component<RippleProps, RippleState> {
    static defaultProps: Partial<RippleProps> = {
    };

    public state: RippleState = {
        position: {
            x: 0,
            y: 0,
        },
        scale: 0,
        active: false,
        opacity: 0,
    }

    public componentDidMount(): void {
        const parent = this.base.parentElement;

        parent.style.overflow = 'hidden';
        if (!parent.style.position) {
            parent.style.position = 'relative';
        }

        parent.addEventListener('click', evt => {
            this.setState({
                position: {
                    x: evt.layerX,
                    y: evt.layerY,
                },
                opacity: 1,
                scale: 0,
                active: false,
            });
            const { width, height } = parent.getBoundingClientRect();
            const scaleX = Math.max(evt.layerX * 2, (width - evt.layerX) * 2);
            const scaleY = Math.max(evt.layerY * 2, (height - evt.layerY) * 2);
            const scale = Math.max(scaleX, scaleY);
            requestAnimationFrame(() => {
                this.setState({ active: true, scale: scale * 1.5 });
            })
        });
        this.base.addEventListener('transitionend', () => {
            if (this.state.opacity === 0) {
                this.setState({
                    position: {
                        x: 0,
                        y: 0,
                    },
                    scale: 0,
                    opacity: 1,
                    active: false,
                });
            }

            if (this.state.scale !== 0) {
                this.setState({ opacity: 0 });
            }
        });
    }

    public render() {
        const {
            position,
            scale,
            active,
            opacity,
        } = this.state;

        const classes = [
            'pmd-ripple',
        ];

        const styles = {
            position: 'absolute',
            top: 0,
            left: 0,
            width: 1,
            height: 1,
            background: 'rgba(0, 0, 0, .1)',
            borderRadius: '50%',
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transition: active ? '0.3s transform ease-in, 0.2s opacity ease-out' : '',
            opacity,
            willChange: 'transform',
        }

        return <div style={styles} class={classes.join(' ')}></div>;
    }
}
