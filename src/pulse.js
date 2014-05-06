// Appends an iOS event to a window object

// Example of use

// Pulse.listen('mapKit.didSelectAnnotationView', function(res) {
//     console.log('mapKit.didSelectAnnotationView callback');
// });


var Pulse = (function () {

    var cordovaRef = window.PhoneGap || window.Cordova || window.cordova;

    return {

        listen: function(str, cb){


            var splittedStr = str.split('.');
            var key = splittedStr[0];
            var callbackName = splittedStr[1];

            if(str.length === 0 || key.length === 0 || callbackName === 0) { return; }

            if(!window[key]) {
                window[key] = {};
            }

            if( typeof window[key][callbackName] !== "undefined"){
                console.log('# Pulse: callback already registered');
                return;
            }

            window[key][callbackName] = cb;
        },

        beat: function(str, params, success, error) { // params is an object

            if(str.length === 0) { return; }

            var splittedStr = str.split('.');
            cordovaRef.exec(success, error, splittedStr[0], splittedStr[1], [params]);
        },

    };

})();
