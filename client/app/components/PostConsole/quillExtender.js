import { Quill } from 'react-quill';

const Image = Quill.import('formats/image');
Image.className = 'img-responsive';
Quill.register(Image, true);

const Audio = Quill.import('formats/audio');
Audio.className = 'editor-audio';
Quill.register(Audio, true);

const icons = Quill.import('ui/icons');
icons.audio = '<i class="fas fa-volume-up"/>';
