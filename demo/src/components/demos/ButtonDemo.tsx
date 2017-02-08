import { h } from 'preact';
import { Button } from 'preact-material-design';

export function ButtonDemo() {
    return <div>
        <h2>Buttons</h2>
        <div>
            <h3>Primary</h3>
            <Button>Primary Button</Button>
            <Button disabled>Primary Button</Button>
        </div>
        <div>
            <h3>Dense</h3>
            <Button dense>Dense Button</Button>
            <Button dense disabled>Dense Button</Button>
        </div>
        <div>
            <h3>Flat</h3>
            <Button flat>Flat Button</Button>
            <Button flat disabled>Flat Button</Button>
        </div>
    </div>
}
