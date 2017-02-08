import { h, Component } from 'preact';

import { ButtonDemo } from './demos/ButtonDemo';

export class App extends Component<{}, {}> {
    public render() {
        return (
            <div>
                <header>
                    <h1>Preact Material Design</h1>
                    <p>A set of components for Preact that conform to the material design guidlines.</p>
                </header>
                <ButtonDemo />
            </div>
        )
    }
}
