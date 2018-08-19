(function() {
    
    angular
        .module('app')
        .service('sharedService', sharedService);

    function sharedService() {
        var hashtable = {};
        
        this.put = function put(k, v) {
            hashtable[k] = v;
        }

        this.get = function get(k) {
            return hashtable[k];
        }
    
    }
})()