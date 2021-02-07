
//////////////////// CONFIG APP

import Constants from 'expo-constants';

const isStandAloneApp = Constants.appOwnership == "standalone";

const ConfigApp = {

    // backend url
    URL: "https://dp8staging.com/dev/gofit_apps/",

    // facebook page url
    FACEBOOK: "https://facebook.com",

    // youtube page url
    YOUTUBE: "https://youtube.com",

    // twitter page url
    TWITTER: "https://twitter.com",

    // twitter page url
    INSTAGRAM: "https://instagram.com",

    // banner admob unit id
    BANNER_ID: "ca-app-pub-3940256099942544/6300978111",

    // interstitial admob unit id
    INTERSTITIAL_ID: "ca-app-pub-3940256099942544/1033173712",

    // testdevice id, DON'T CHANGE IT
    TESTDEVICE_ID : isStandAloneApp?"EMULATOR" : "EMULATOR"
};

export default ConfigApp;
