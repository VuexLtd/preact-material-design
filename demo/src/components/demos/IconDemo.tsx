import { h } from 'preact';
import { Icon } from 'preact-material-design';

export function IconDemo() {
    return <div>
        <h2>Icons</h2>
        <div>
            <h3>Regular</h3>
            <Icon icon="add" />
            <Icon icon="send" />
            <Icon noClearance icon="face" />
            <Icon noClearance icon="create" />
        </div>
        <div>
            <h3>Dense</h3>
            <Icon size="dense" icon="add" />
            <Icon size="dense" icon="send" />
            <Icon noClearance size="dense" icon="face" />
            <Icon noClearance size="dense" icon="create" />
        </div>
    </div>
}
