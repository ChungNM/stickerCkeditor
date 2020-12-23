import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import { toWidgetEditable } from '@ckeditor/ckeditor5-widget/src/utils';
import imageIcon from '../src/Giggle.svg';

export default class InsertImage extends Plugin {
    init() {
        const editor = this.editor;

        this._defineSchema();
        this._defineConverters();

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

                closeBtns.onclick = function() {
                    modal.style.display = "none";
                }

                const imgTable = document.getElementsByClassName('img-sticker');
                for (let btn of imgTable) {
                    btn.onclick = function (event) {
                        modal.style.display = "none";
                        editor.model.change(writer => {
                            const ckSpanImage = writer.createElement( 'ckSpanImage' );
                            const ckImageIcon = writer.createElement( 'ckImageIcon', {src: event.path[0].currentSrc});

                            writer.append( ckImageIcon, ckSpanImage );
                            // });
                            editor.model.insertContent(ckSpanImage, editor.model.document.selection);
                        });
                    }
                }
            } );
            return view;
        } );
    }
    _defineSchema() {
        const schema = this.editor.model.schema;
        schema.register('ckSpanImage', {
            isInline: true,
            allowWhere: '$block',
            allowContentOf: '$block',
            isLimit: true,
        });
        schema.register('ckImageIcon', {
            isLimit: true,
            allowIn: 'ckSpanImage',
            allowContentOf: '$block',
            isInline: true,
            allowAttributes: [ 'src' ]
        });
    }
    _defineConverters() {
        const conversion = this.editor.conversion;
        conversion.for( 'editingDowncast' ).elementToElement( {
            model: 'ckSpanImage',
            view: ( modelElement, { writer: viewWriter } ) => {
                const span = viewWriter.createContainerElement( 'span', { class: 'span-image' } );
                return toWidgetEditable( span, viewWriter);
            }
        } );

        conversion.for( 'editingDowncast' ).elementToElement( {
            model: 'ckImageIcon',
            view: ( modelValue, { writer: viewWriter } ) => {
                const srcImg = modelValue._attrs.entries().next().value[1];
                const img = viewWriter.createContainerElement( 'img', { src: srcImg } );
                return toWidgetEditable( img, viewWriter );
            },
        } );
    }
}