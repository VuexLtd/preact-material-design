import { h } from 'preact';
import { Icon } from 'preact-material-design';

export function TypographyDemo() {
    return <div>
        <h2 class="pmd-type--display-1">Typography</h2>
        <div>
            <div class="pmd-type--display-4">Display 4</div>
            <div class="pmd-type--display-3">Display 3</div>
            <div class="pmd-type--display-2">Display 2</div>
            <div class="pmd-type--display-1">Display 1</div>
            <div class="pmd-type--headline">Headline</div>
            <div class="pmd-type--title">Title</div>
            <div class="pmd-type--subheading">Subheading</div>
            <div class="pmd-type--body-2">Body 2</div>
            <div class="pmd-type--body-1">Body 1</div>
            <div class="pmd-type--caption">Caption</div>
        </div>
    </div>
}
