import { h } from 'preact';
import { Chip } from 'preact-material-design';

export function ChipDemo() {
    return <div>
        <h2 class="pmd-type--display-1">Chips</h2>
        <div style="display: flex">
            <Chip>Example Chip</Chip>
            <Chip image="http://placehold.it/64x64">James Birtles</Chip>
        </div>
    </div>
}
