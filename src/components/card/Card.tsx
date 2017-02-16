import { h, Component } from 'preact';

export class Card extends Component<{ style?: string | { [key: string]: any } }, {}> {
    public render() {
        const { children, style } = this.props;
        return <div class="pmd-card" style={style}>{children}</div>;
    }
}

export class CardText extends Component<{}, {}> {
    public render() {
        const { children } = this.props;
        return <div class="pmd-card-text pmd-card--includes-padding">{children}</div>;
    }
}

export class CardMedia extends Component<{}, {}> {
    public render() {
        const { children } = this.props;
        return <div class="pmd-card-media">{children}</div>;
    }
}

export class CardTitle extends Component<{}, {}> {
    public render() {
        const { children } = this.props;
        return <div class="pmd-card-title pmd-card--includes-padding">{children}</div>;
    }
}

export class CardSubtitle extends Component<{}, {}> {
    public render() {
        const { children } = this.props;
        return <div class="pmd-card-subtitle pmd-card--includes-padding">{children}</div>;
    }
}

export class CardActions extends Component<{ vertical?: boolean }, {}> {
    public render() {
        const { children, vertical } = this.props;
        const classes = ['pmd-card-actions'];

        if (vertical) {
            classes.push('pmd-card-actions--vertical');
        }

        return <div class={classes.join(' ')}>{children}</div>;
    }
}

export class CardMediaArea extends Component<{ media: JSX.Element }, {}> {
    public render() {
        const { children, media } = this.props;
        return <div class="pmd-card-media-area">
            <div class="pmd-card-media-area__content">{children}</div>
            <div class="pmd-card-media-area__media">{media}</div>
        </div>;
    }
}

export * from './CardHeader';
