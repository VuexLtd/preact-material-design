import { h, Component } from 'preact';

export interface CardHeaderProps {
    avatar?: string;
    title: string;
    subtitle: string;
}

export class CardHeader extends Component<CardHeaderProps, {}> {
    public render() {
        const {
            avatar,
            title,
            subtitle,
        } = this.props;
        return <div class="pmd-card-header pmd-card--includes-padding">
            {avatar && <img class="pmd-card-header__avatar" src={avatar} />}
            <div class="pmd-card-header__titles">
                <h1>{ title }</h1>
                <h2>{ subtitle }</h2>
            </div>
        </div>;
    }
}
