var userAgent = navigator.userAgent || navigator.vendor || window.opera;

if (/android/i.test(userAgent)) {
    window.location.href = androidUrl;
} else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    window.location.href = iOSUrl;
} else {
    window.location.href = undetectedUrl;
}
