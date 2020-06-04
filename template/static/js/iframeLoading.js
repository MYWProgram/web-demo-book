import nProgress from 'nprogress';

export function setIframeLoadingEvent() {
  const iframe = document.getElementById("iframe-box");
  if (iframe.attachEvent) {
    iframe.attachEvent("onload", function () {
      nProgress.done()
    });
  } else {
    iframe.onload = function () {
      nProgress.done()
    };
  }
}
