import { h } from 'preact';
import { Icon } from 'preact-material-design';

export function IconDemo() {
    return <div>
        <h2 class="pmd-type--display-1">Icons</h2>
        <div>
            <h3 class="pmd-type--headline">Regular</h3>
            <Icon icon="add" />
            <Icon icon="send" />
            <Icon noClearance icon="face" />
            <Icon noClearance icon="create" />
        </div>
        <div>
            <h3 class="pmd-type--headline">Dense</h3>
            <Icon size="dense" icon="add" />
            <Icon size="dense" icon="send" />
            <Icon noClearance size="dense" icon="face" />
            <Icon noClearance size="dense" icon="create" />
        </div>
    </div>
}
