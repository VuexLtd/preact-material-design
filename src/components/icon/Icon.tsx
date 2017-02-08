import { h, Component } from 'preact';

export interface IconProps {
    /**
     * The name of the icon.
     * A list of supported icons can be found here: https://material.io/icons/
     */
    icon: string;

    /**
     * If true, the icon will not have any padding applied.
     */
    noClearance?: boolean;

    size?: 'normal' | 'dense';
}

export class Icon extends Component<IconProps, {}> {
    static defaultProps: Partial<IconProps> = {
        size: 'normal',
    };

    public render() {
        const {
            icon,
            noClearance,
            size,
        } = this.props;

        const iconClasses = [
            'pmd-icon',
            `pmd-icon--size-${size}`
        ];

        if (noClearance) {
            iconClasses.push('pmd-icon--no-clearance');
        }

        return <i class={iconClasses.join(' ')}>{icon}</i>;
    }
}
