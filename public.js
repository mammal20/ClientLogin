function Toast(msg, duration) {
    duration = isNaN(duration) ? 3000 : duration;
    var m = document.createElement('div');
    var h = document.createElement('div');
    m.appendChild(h)
        // h.style.cssText = 
    h.innerHTML = msg;
    // m.style.cssText =
    //     "width:70%;padding:0 14px;color: #00B7A4;padding:10px;text-align: center;border-radius: 4px;position: fixed;bottom: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 28, 29, 0.85);font-size: 14px;border:2px solid #00B7A4;";
    m.style.cssText =
        "width:80%;padding:0 14px;color: #00B7A4;padding:2px;text-align: center;border-radius: 4px;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 28, 29, 0.85);font-size: 14px;border:2px solid #00B7A4;"
    h.style.cssText = 'border:1px solid #00B7A4;padding: 15px 5px;'
    m.appendChild(h)
    document.body.appendChild(m);
    setTimeout(function() {
        var d = 0.5;
        m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
        m.style.opacity = '0';
        setTimeout(function() {
            document.body.removeChild(m)
        }, d * 1000);
    }, duration);

}