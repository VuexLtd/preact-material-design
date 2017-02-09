import { h } from 'preact';
import { Button } from 'preact-material-design';

export function ButtonDemo() {
    return <div>
        <h2 class="pmd-type--display-1">Buttons</h2>
        <div>
            <h3 class="pmd-type--headline">Primary</h3>
            <Button>Primary Button</Button>
            <Button disabled>Primary Button</Button>
        </div>
        <div>
            <h3 class="pmd-type--headline">Dense</h3>
            <Button dense>Dense Button</Button>
            <Button dense disabled>Dense Button</Button>
        </div>
        <div>
            <h3 class="pmd-type--headline">Flat</h3>
            <Button flat>Flat Button</Button>
            <Button flat disabled>Flat Button</Button>
        </div>
    </div>
}
