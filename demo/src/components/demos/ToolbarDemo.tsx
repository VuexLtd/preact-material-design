import { h } from 'preact';
import { Toolbar } from 'preact-material-design';

export function ToolbarDemo() {
    return <div>
        <h2 class="pmd-type--display-1">Toolbars</h2>
        <div>
            <h3 class="pmd-type--headline">App</h3>
            <Toolbar>App Toolbar</Toolbar>
        </div>
    </div>
}
