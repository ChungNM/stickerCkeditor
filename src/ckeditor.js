/**
 * @license Copyright (c) 2014-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder.js';
import CKFinderUploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed';
import InsertImage from './insertImage.js';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Autoformat,
	BlockQuote,
	Bold,
	CKFinder,
	CKFinderUploadAdapter,
	Essentials,
	Heading,
	Image,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Italic,
	Link,
	LinkImage,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,
	HtmlEmbed,
	InsertImage
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'|',
			'indent',
			'outdent',
			'|',
			'imageUpload',
			'htmlEmbed',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'undo',
			'redo',
			'insertImage',
			''
		]
	},
	image: {
		styles: [
			'alignLeft', 'alignCenter', 'alignRight'
		],
		resizeOptions: [
			{
				name: 'imageResize:original',
				label: '元のサイズ',
				value: null
			},
			{
				name: 'imageResize:25',
				label: '25%',
				value: '25'
			},
			{
				name: 'imageResize:50',
				label: '50%',
				value: '50'
			},
			{
				name: 'imageResize:75',
				label: '75%',
				value: '75'
			},
			{
				name: 'imageResize:100',
				label: '100%',
				value: '100'
			}
		],
		toolbar: [
			'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight',
			'|',
			'imageResize',
			'|',
			'linkImage'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'jp'
};

const stickerModel = document.getElementsByClassName('modal-content')[0];
if (window.innerWidth <= 768) {
	stickerModel.style.width = '90%';
	stickerModel.style.height = '90%';
} else
{
	stickerModel.style.width = '50%';
	stickerModel.style.height = '60%';
}

let onionTable = [
	'Onion--1.gif','Onion--10.gif','Onion--100.gif','Onion--101.gif','Onion--102.gif','Onion--103.gif',
	'Onion--104.gif','Onion--105.gif','Onion--106.gif','Onion--107.gif','Onion--108.gif','Onion--109.gif',
	'Onion--11.gif','Onion--110.gif','Onion--111.gif','Onion--112.gif','Onion--12.gif','Onion--13.gif',
	'Onion--14.gif','Onion--15.gif','Onion--16.gif','Onion--17.gif','Onion--18.gif','Onion--19.gif','Onion--2.gif',
	'Onion--20.gif','Onion--21.gif','Onion--22.gif','Onion--23.gif','Onion--24.gif','Onion--25.gif','Onion--26.gif',
	'Onion--27.gif','Onion--28.gif','Onion--29.gif','Onion--3.gif','Onion--30.gif','Onion--31.gif','Onion--32.gif',
	'Onion--33.gif','Onion--34.gif','Onion--35.gif','Onion--36.gif','Onion--37.gif','Onion--38.gif','Onion--39.gif',
	'Onion--4.gif','Onion--40.gif','Onion--41.gif','Onion--42.gif','Onion--43.gif','Onion--44.gif','Onion--45.gif',
	'Onion--46.gif','Onion--47.gif','Onion--48.gif','Onion--49.gif','Onion--5.gif','Onion--50.gif','Onion--51.gif',
	'Onion--52.gif','Onion--53.gif','Onion--54.gif','Onion--55.gif','Onion--56.gif','Onion--57.gif','Onion--58.gif',
	'Onion--59.gif','Onion--6.gif','Onion--60.gif','Onion--61.gif','Onion--62.gif','Onion--63.gif','Onion--64.gif',
	'Onion--65.gif','Onion--66.gif','Onion--67.gif','Onion--68.gif','Onion--69.gif','Onion--7.gif','Onion--70.gif',
	'Onion--71.gif','Onion--72.gif','Onion--73.gif','Onion--74.gif','Onion--75.gif','Onion--76.gif','Onion--77.gif',
	'Onion--78.gif','Onion--79.gif','Onion--8.gif','Onion--80.gif','Onion--81.gif','Onion--82.gif','Onion--83.gif',
	'Onion--84.gif','Onion--85.gif','Onion--86.gif','Onion--87.gif','Onion--88.gif','Onion--89.gif','Onion--9.gif',
	'Onion--90.gif','Onion--91.gif','Onion--92.gif','Onion--93.gif','Onion--94.gif','Onion--95.gif','Onion--96.gif',
	'Onion--97.gif','Onion--98.gif','Onion--99.gif'
]
let redTable = [
	'Animaux-Crabe-1.gif','Animaux-Crabe-10.gif','Animaux-Crabe-11.gif','Animaux-Crabe-12.gif','Animaux-Crabe-2.gif',
	'Animaux-Crabe-3.gif','Animaux-Crabe-4.gif','Animaux-Crabe-5.gif','Animaux-Crabe-6.gif','Animaux-Crabe-7.gif',
	'Animaux-Crabe-8.gif','Animaux-Crabe-9.gif','Animaux-Renard 2-1.gif','Animaux-Renard 2-2.gif','Animaux-Renard 2-3.gif',
	'Animaux-Renard 2-4.gif','Animaux-Renard 2-5.gif','Animaux-Renard 2-6.gif','Animaux-Renard 2-7.gif',
	'Animaux-Renard 2-8.gif','Animaux-Renard 2-9.gif'

]
let milkbottleTable = [
	'Milk%20Bottle--1.gif','Milk%20Bottle--10.gif','Milk%20Bottle--11.gif','Milk%20Bottle--12.gif','Milk%20Bottle--13.gif',
	'Milk%20Bottle--14.gif','Milk%20Bottle--15.gif','Milk%20Bottle--16.gif','Milk%20Bottle--17.gif','Milk%20Bottle--18.gif',
	'Milk%20Bottle--19.gif','Milk%20Bottle--2.gif','Milk%20Bottle--20.gif','Milk%20Bottle--21.gif','Milk%20Bottle--22.gif',
	'Milk%20Bottle--23.gif','Milk%20Bottle--24.gif','Milk%20Bottle--25.gif','Milk%20Bottle--26.gif','Milk%20Bottle--27.gif',
	'Milk%20Bottle--28.gif','Milk%20Bottle--29.gif','Milk%20Bottle--3.gif','Milk%20Bottle--30.gif','Milk%20Bottle--31.gif',
	'Milk%20Bottle--32.gif','Milk%20Bottle--33.gif','Milk%20Bottle--34.gif','Milk%20Bottle--35.gif','Milk%20Bottle--36.gif',
	'Milk%20Bottle--37.gif','Milk%20Bottle--38.gif','Milk%20Bottle--39.gif','Milk%20Bottle--4.gif','Milk%20Bottle--40.gif',
	'Milk%20Bottle--41.gif','Milk%20Bottle--42.gif','Milk%20Bottle--43.gif','Milk%20Bottle--44.gif','Milk%20Bottle--45.gif',
	'Milk%20Bottle--46.gif','Milk%20Bottle--47.gif','Milk%20Bottle--5.gif','Milk%20Bottle--6.gif','Milk%20Bottle--7.gif',
	'Milk%20Bottle--8.gif','Milk%20Bottle--9.gif'
]
let facebookTable = [
	'angry-face_1f620.png','anguished-face_1f627.png','astonished-face_1f632.png','cat-face-with-tears-of-joy_1f639.png',
	'cat-face-with-wry-smile_1f63c.png','clown-face_1f921.png','confounded-face_1f616.png','confused-face_1f615.png',
	'crying-cat-face_1f63f.png','crying-face_1f622.png','disappointed-but-relieved-face_1f625.png','disappointed-face_1f61e.png',
	'dizzy-face_1f635.png','drooling-face_1f924.png','expressionless-face_1f611.png','face-savouring-delicious-food_1f60b.png',
	'face-screaming-in-fear_1f631.png','face-throwing-a-kiss_1f618.png','face-with-cold-sweat_1f613.png','face-with-cowboy-hat_1f920.png',
	'face-with-finger-covering-closed-lips_1f92b.png','face-with-head-bandage_1f915.png','face-with-look-of-triumph_1f624.png',
	'face-with-medical-mask_1f637.png','face-with-monocle_1f9d0.png','face-with-one-eyebrow-raised_1f928.png','face-with-open-mouth-and-cold-sweat_1f630.png',
	'face-with-open-mouth-vomiting_1f92e.png','face-with-open-mouth_1f62e.png','face-with-rolling-eyes_1f644.png',
	'face-with-stuck-out-tongue-and-tightly-closed-eyes_1f61d.png','face-with-stuck-out-tongue-and-winking-eye_1f61c.png',
	'face-with-stuck-out-tongue_1f61b.png','face-with-tears-of-joy_1f602.png','face-with-thermometer_1f912.png','face-without-mouth_1f636.png',
	'fearful-face_1f628.png','flushed-face_1f633.png','frowning-face-with-open-mouth_1f626.png','ghost_1f47b.png','grimacing-face_1f62c.png',
	'grinning-cat-face-with-smiling-eyes_1f638.png','grinning-face-with-one-large-and-one-small-eye_1f92a.png','grinning-face-with-smiling-eyes_1f601.png',
	'grinning-face-with-star-eyes_1f929.png','grinning-face_1f600.png','hugging-face_1f917.png','hushed-face_1f62f.png','imp_1f47f.png',
	'japanese-goblin_1f47a.png','japanese-ogre_1f479.png','kissing-cat-face-with-closed-eyes_1f63d.png','kissing-face-with-closed-eyes_1f61a.png',
	'kissing-face-with-smiling-eyes_1f619.png','kissing-face_1f617.png','loudly-crying-face_1f62d.png','lying-face_1f925.png',
	'money-mouth-face_1f911.png','nauseated-face_1f922.png','nerd-face_1f913.png','neutral-face_1f610.png','pensive-face_1f614.png',
	'persevering-face_1f623.png','pouting-cat-face_1f63e.png','pouting-face_1f621.png','relieved-face_1f60c.png','rolling-on-the-floor-laughing_1f923.png',
	'serious-face-with-symbols-covering-mouth_1f92c.png','shocked-face-with-exploding-head_1f92f.png','sleeping-face_1f634.png',
	'sleepy-face_1f62a.png','slightly-frowning-face_1f641.png','slightly-smiling-face_1f642.png','smiling-cat-face-with-heart-shaped-eyes_1f63b.png',
	'smiling-cat-face-with-open-mouth_1f63a.png','smiling-face-with-halo_1f607.png','smiling-face-with-heart-shaped-eyes_1f60d.png',
	'smiling-face-with-horns_1f608.png','smiling-face-with-open-mouth-and-cold-sweat_1f605.png','smiling-face-with-open-mouth-and-smiling-eyes_1f604.png',
	'smiling-face-with-open-mouth-and-tightly-closed-eyes_1f606.png','smiling-face-with-open-mouth_1f603.png','smiling-face-with-smiling-eyes-and-hand-covering-mouth_1f92d.png',
	'smiling-face-with-smiling-eyes_1f60a.png','smiling-face-with-sunglasses_1f60e.png','smirking-face_1f60f.png','sneezing-face_1f927.png',
	'thinking-face_1f914.png','tired-face_1f62b.png','unamused-face_1f612.png','upside-down-face_1f643.png','weary-cat-face_1f640.png','weary-face_1f629.png',
	'white-frowning-face_2639.png','white-smiling-face_263a.png','winking-face_1f609.png','worried-face_1f61f.png','zipper-mouth-face_1f910.png'
]

let tabArray = {
	onion: ['Onion', onionTable],
	red: ['Red FCrab', redTable],
	milkbottle: ['Milk Bottle', milkbottleTable],
	facebook: ['Facebook', facebookTable]
}
for (const [key, value] of Object.entries(tabArray)) {
	var list = document.getElementById("tab-modal");
	var tabModal = document.createElement('button');
	tabModal.className = 'tab-image';
	tabModal.id = key+'tab';
	tabModal.innerHTML = value[0];
	createTable(key, value);
	tabModal.onclick = function () {
		showImage(key);
	}
	var tableModel = document.getElementById(key);
	tableModel.style.display = 'none';
	list.appendChild(tabModal);
}

function createTable($key, $value) {
	var listTable = document.getElementById("listTable");
	var tableModel = document.createElement("div");
	tableModel.className = "table-modal";
	tableModel.id = $key;
	for (var index = 0; index < $value[1].length; index++) {
		var sticker = document.createElement('span');
		var imgSticker = document.createElement('img');
		imgSticker.className = 'img-sticker';
		imgSticker.src = '../src/sticker/' + $key + '/' + $value[1][index];
		sticker.appendChild(imgSticker);
		sticker.className = 'sticker';
		tableModel.appendChild(sticker)
	}
	listTable.appendChild(tableModel);
}

function showImage($key) {
	for (const [key, value] of Object.entries(tabArray)) {
		var tableTabs = document.getElementById(key);
		var tabs = document.getElementById(key + 'tab')
		tabs.className = 'tab-image';
		tableTabs.style.display = 'none';
	}
	var tableModel = document.getElementById($key);
	tableModel.style.display = 'block';
	var tab = document.getElementById($key + 'tab')
	tab.className = tab.className + ' active';
}

showImage('onion');
