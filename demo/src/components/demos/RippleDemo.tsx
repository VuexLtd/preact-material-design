import { h } from 'preact';
import { Ripple } from 'preact-material-design';

export function RippleDemo() {
    return <div>
        <h2 class="pmd-type--display-1">Ripple</h2>
        <div style={{width: 200, height: 100, background: '#00ccff'}}>
            <Ripple />
        </div>
        <div style={{width: 100, height: 200, background: '#cc00ff'}}>
            <Ripple colour="rgba(255, 255, 255, .3)" />
        </div>
        <div style={{width: 200, height: 200, background: '#ccff00'}}>
            <Ripple />
        </div>
    </div>
}
