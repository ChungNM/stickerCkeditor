import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

import imageIcon from '../src/Giggle.svg';

export default class InsertImage extends Plugin {
    init() {
        const editor = this.editor;

        editor.ui.componentFactory.add( 'insertImage', locale => {
            const view = new ButtonView( locale );

            view.set( {
                label: 'Insert image',
                icon: imageIcon,
                tooltip: true
            } );

            // Callback executed once the image is clicked.
            view.on( 'execute', () => {
                const modal = document.getElementById("myModal");
                modal.style.display = "block";
                const closeBtns = document.getElementsByClassName("close")[0];

                closeBtns.onclick = function(event, a) {
                    console.log(event, a)
                    modal.style.display = "none";
                }

                const imgTable = document.getElementsByClassName('img-sticker');
                for (let btn of imgTable) {
                    btn.onclick = function (event, a) {
                        modal.style.display = "none";
                        editor.model.change(writer => {

                            const content = "<img src='" + event.path[0].currentSrc +"'>";
                            const viewFragment = editor.data.processor.toView( content );
                            const modelFragment = editor.data.toModel( viewFragment );

                            const imageElement = writer.createElement('image', {
                                src: event.path[0].currentSrc
                            });
                            editor.model.insertContent(modelFragment, editor.model.document.selection);

                            // const insertPosition = editor.model.document.selection.getFirstPosition();
                            // writer.insertText( ' ', { backgroundImage: "url('../sticker/onion/Onion--8.gif')", width: '50px', height: '50px' }, insertPosition );
                        });
                    }
                }
            } );
            return view;
        } );
    }
}