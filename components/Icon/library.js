import { library } from '@fortawesome/fontawesome-svg-core';

import {} from '@fortawesome/pro-solid-svg-icons';

import {
  faLongArrowRight,
  faLongArrowLeft
} from '@fortawesome/pro-regular-svg-icons';

import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

import {
  faTimes,
  faCalendarPlus,
  faBalanceScale,
  faArchive,
  faCheck
} from '@fortawesome/pro-light-svg-icons';

library.add(
  // light
  faTimes,
  faCalendarPlus,
  faBalanceScale,
  faArchive,
  faCheck,

  // regular
  faLongArrowRight,
  faLongArrowLeft,

  // brands
  faTwitter,
  faFacebookF,
  faInstagram,
  faLinkedinIn
);

export default library;
