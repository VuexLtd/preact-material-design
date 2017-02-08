import { h, Component } from 'preact';
import { Toolbar } from 'preact-material-design';

import { ButtonDemo } from './demos/ButtonDemo';
import { TextFieldDemo } from './demos/TextFieldDemo';
import { ToolbarDemo } from './demos/ToolbarDemo';

export class App extends Component<{}, {}> {
    public render() {
        return (
            <div>
                <Toolbar>Preact Material Design</Toolbar>
                <section>
                    <p>A set of components for Preact that conform to the material design guidlines.</p>
                    <ButtonDemo />
                    <TextFieldDemo />
                    <ToolbarDemo />
                </section>
            </div>
        )
    }
}
