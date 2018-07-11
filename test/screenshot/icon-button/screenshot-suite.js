import ScreenshotSuite from '../screenshot-suite';
import Screenshot from '../screenshot';

const screenshots = [
  new Screenshot('icon-button/index.html'),
];

const screenshotSuite = new ScreenshotSuite('IconButton', screenshots);

export default screenshotSuite;