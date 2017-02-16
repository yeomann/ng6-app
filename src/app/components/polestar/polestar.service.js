export default class polestarService {
    /*
      The below annotation will be processes by ngAnnotate, which
      will annotate the constructor after compiling for minification.
    */
    /*@ngInject;*/
    constructor($http, $q, $log) {
        "ngInject";
        this.$log = $log;
        this.$q = $q;
        this.$http = $http;
    }
    getData() {
        let config = {
            method: 'GET',
            url : 'api/screenings.json',
            headers : {
                'Accept' : 'application/json',
                'Content-Type': 'application/json; charset=utf-8'
            }
        };
        return this.$http(config)
        .then(function(response){
            // this.$log.log('response = ', response);
            return response.data;
        }, function(error){
            // this.$log.log('error = ', error );
            return error; 
        });
    }
}
