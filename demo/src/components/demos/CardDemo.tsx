import { h } from 'preact';
import {
    Button,
    Card,
    CardHeader,
    CardText,
    CardMedia,
    CardMediaArea,
    CardTitle,
    CardSubtitle,
    CardActions
} from 'preact-material-design';

export function CardDemo() {
    return <div>
        <h2 class="pmd-type--display-1">Cards</h2>
        <div>
            <h3 class="pmd-type--headline">Simple</h3>
            <Card>
                <CardTitle>Title goes here</CardTitle>
                <CardSubtitle>Subtitle here</CardSubtitle>
                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et nisl sit amet tellus fermentum iaculis.</CardText>
            </Card>
        </div>
        <div>
            <h3 class="pmd-type--headline">Header</h3>
            <Card>
                <CardHeader avatar="http://placehold.it/128x128" title="Title" subtitle="Subhead" />
                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et nisl sit amet tellus fermentum iaculis.</CardText>
            </Card>
        </div>
        <div>
            <h3 class="pmd-type--headline">Actions</h3>
            <div style="display: flex; align-items: flex-start;">
                <Card style="margin-right: 16px;">
                    <CardTitle>Title goes here</CardTitle>
                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et nisl sit amet tellus fermentum iaculis.</CardText>
                    <CardActions>
                        <Button flat>Action 1</Button>
                        <Button flat>Action 2</Button>
                    </CardActions>
                </Card>
                <Card>
                    <CardTitle>Title goes here</CardTitle>
                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et nisl sit amet tellus fermentum iaculis.</CardText>
                    <CardActions vertical>
                        <Button flat>Action 1</Button>
                        <Button flat>Action 2</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
        <div>
            <h3 class="pmd-type--headline">Media</h3>
            <Card>
                <CardMedia>
                    <img src="http://placehold.it/640x360" />
                </CardMedia>
                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et nisl sit amet tellus fermentum iaculis.</CardText>
            </Card>
        </div>
        <div>
            <h3 class="pmd-type--headline">Media Area</h3>
            <Card>
                <CardMediaArea media={<img src="http://placehold.it/120x120" />}>
                    <CardTitle>Title here</CardTitle>
                    <CardSubtitle>Subtitle here</CardSubtitle>
                </CardMediaArea>
                <CardActions>
                    <Button flat>Action 1</Button>
                    <Button flat>Action 2</Button>
                </CardActions>
            </Card>
        </div>
    </div>
}
