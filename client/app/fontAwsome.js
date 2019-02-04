import { dom, library } from '@fortawesome/fontawesome-svg-core';

import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons/faVolumeUp';
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons/faLongArrowAltDown';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons/faLongArrowAltLeft';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons/faTrashAlt';

library.add(
  faFacebook,
  faVolumeUp,
  faLongArrowAltDown,
  faLongArrowAltLeft,
  faTrashAlt,
);

dom.watch();
