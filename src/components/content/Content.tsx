import { h, Component } from 'preact';

export class Content extends Component<{}, {}> {
    public render() {
        const { children } = this.props;
        return <div class="pmd-content">{children}</div>;
    }
}
