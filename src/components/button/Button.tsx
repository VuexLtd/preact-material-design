import { h, Component } from 'preact';

import { Ripple } from '../ripple/Ripple';

export interface ButtonProps {
    type?: 'button' | 'submit';
    dense?: boolean;
    flat?: boolean;
    disabled?: boolean;

    onClick?: JSX.MouseEventHandler;
}

export class Button extends Component<ButtonProps, {}> {
    static defaultProps: ButtonProps = {
        type: 'button',
        dense: false,
        flat: false,
        disabled: false,
    };

    public render() {
        const {
            children,
            type,
            dense,
            flat,
            disabled,

            onClick,
        } = this.props;

        const btnClasses = ['pmd-button'];

        if (dense) {
            btnClasses.push('pmd-button--dense');
        }

        if (flat) {
            btnClasses.push('pmd-button--flat');
        }

        if (disabled) {
            btnClasses.push('pmd-button--disabled');
        }

        return (
            <button
                class={btnClasses.join(' ')}
                type={type}
                onClick={onClick}>
                <div class="pmd-button__inner">
                    {children}
                    <Ripple />
                </div>
            </button>
        )
    }
}
