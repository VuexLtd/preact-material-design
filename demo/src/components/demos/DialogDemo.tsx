import { h, Component } from 'preact';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from 'preact-material-design';

export class DialogDemo extends Component<{}, {}> {
    dialog: Dialog;

    public render() {
        return <div>
            <h2 class="pmd-type--display-1">Dialogs</h2>
            <div>
                <Button onClick={() => this.dialog.show()}>Show Dialog</Button>
                <Dialog ref={dialog => this.dialog = dialog}>
                    <DialogTitle>Dialog Title</DialogTitle>
                    <DialogContent>This is the dialog's content</DialogContent>
                    <DialogActions>
                        <Button flat onClick={() => this.dialog.hide()}>Cancel</Button>
                        <Button flat>Ok</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    }
}
