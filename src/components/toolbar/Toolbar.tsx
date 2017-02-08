import { h, Component } from 'preact';

export interface ToolbarProps {
    type?: 'app',
}

export class Toolbar extends Component<ToolbarProps, {}> {
    static defaultProps: ToolbarProps = {
        type: 'app',
    };

    public render() {
        const {
            children,
            type,
        } = this.props;

        const toolbarClasses = [
            'pmd-toolbar',
            `pmd-toolbar--${type}`
        ];

        return (
            <div class={toolbarClasses.join(' ')}>
                {children}
            </div>
        )
    }
}
