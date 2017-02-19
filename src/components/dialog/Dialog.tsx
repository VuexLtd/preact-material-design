import { h, Component, PreactHTMLAttributes } from 'preact';
import Portal from 'preact-portal';

export interface DialogProps {
}

export class Dialog extends Component<DialogProps, { visible?: boolean; }> {
    private container: Element;

    public show() {
        this.setState({ visible: true });
    }

    public hide() {
        this.setState({ visible: false });
    }

    private hideIfContainer = (evt: MouseEvent) => {
        if (evt.target === this.container) {
            this.hide();
        }
    }

    public render() {
        const {
            children
        } = this.props;

        const {
            visible
        } = this.state;

        return (
            <Portal into="body">
                { visible && <div ref={container => this.container = container}
                    class="pmd-dialog-container"
                    onClick={this.hideIfContainer}>
                    <div class="pmd-dialog">
                        {children}
                    </div>
                </div> }
            </Portal>
        )
    }
}

export class DialogTitle extends Component<{}, {}> {
    public render() {
        const { children } = this.props;
        return <div class="pmd-dialog-title pmd-dialog--includes-padding">{children}</div>;
    }
}

export class DialogContent extends Component<{}, {}> {
    public render() {
        const { children } = this.props;
        return <div class="pmd-dialog-content pmd-dialog--includes-padding">{children}</div>;
    }
}


export class DialogActions extends Component<{ vertical?: boolean }, {}> {
    public render() {
        const { children, vertical } = this.props;
        const classes = ['pmd-dialog-actions'];

        if (vertical) {
            classes.push('pmd-dialog-actions--vertical');
        }

        return <div class={classes.join(' ')}>{children}</div>;
    }
}
