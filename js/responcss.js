/*! ResponCSS - create and initialize an object to check for current screen size. Author & copyright (c) 2012: Adam Draper. Dual MIT/BSD license */
(function (win) {
    
    win.ResponCSS = {};

    ResponCSS.size = '';

    ResponCSS.documentWidth = function() {
        var documentWidth;

        if(document.clientWidth) {
            documentWidth = document.clientWidth;
        } else if(document.documentElement.clientWidth) {
            documentWidth = document.documentElement.clientWidth;
        } else if(document.body.clientWidth) {
            documentWidth = document.body.clientWidth
        }

        return documentWidth;
    };
    
    var dispatchChange = function() {
        if (document.createEvent) {
            // all browsers except IE before version 9
            var changeEvent = document.createEvent("Event");
            changeEvent.initEvent("ResponCSSSizeChanged", true, false);
            document.dispatchEvent(changeEvent);
        }
    },    

    init = function() {
        updateSize();
    },

    updateSize = function() {
        var documentWidth = ResponCSS.documentWidth(), currentSize = ResponCSS.size;

        if (documentWidth < 767) {
            ResponCSS.size = 's';            
        } else if(documentWidth >= 768 && documentWidth < 979) {
            ResponCSS.size = 'm';
        } else if(documentWidth >= 980 && documentWidth < 1209) {
            ResponCSS.size = 'l';
        } else if(documentWidth >= 1210) {
            ResponCSS.size = 'xl';
        }
        
        if(currentSize != ResponCSS.size) {
            dispatchChange();
        }
    }; 

    init();

    if(document.addEventListener) {
        win.addEventListener('resize', updateSize);
    } else if(document.attachEvent) {
        win.attachEvent('onresize', updateSize);
    }
        
}(this));