import "./index.css";

const openWindow = (url, windowName, width, height) => {
  var x = parseInt(screen.width / 2.0) - width / 2.0;
  var y = parseInt(screen.height / 2.0) - height / 2.0;
  var isMSIE = navigator.appName == "Microsoft Internet Explorer";
  if (isMSIE) {
    var p = "resizable=1,location=no,scrollbars=no,width=";
    p = p + width;
    p = p + ",height=";
    p = p + height;
    p = p + ",left=";
    p = p + x;
    p = p + ",top=";
    p = p + y;
    window.open(url, windowName, p);
  } else {
    var win = window.open(
      url,
      "ZyiisPopup",
      "top=" +
        y +
        ",left=" +
        x +
        ",scrollbars=" +
        scrollbars +
        ",dialog=yes,modal=yes,width=" +
        width +
        ",height=" +
        height +
        ",resizable=no"
    );
    eval("try { win.resizeTo(width, height); } catch(e) { }");
    win.focus();
  }
};
document.querySelector("button").addEventListener("click", () => {
  const windowUrl = document.querySelector('input[id="url"]').value,
    windowName = document.querySelector('input[id="name"]').value,
    windowWidth = document.querySelector('input[id="width"]').value,
    widowHeight = document.querySelector('input[id="height"]').value;
  openWindow(
    windowUrl.indexOf("https://") !== -1 ? windowUrl : `https://${windowUrl}`,
    windowName,
    windowWidth,
    widowHeight
  );
});
