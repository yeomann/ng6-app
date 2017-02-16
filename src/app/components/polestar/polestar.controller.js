class PolestarController {
    constructor($scope, polestarService, ngDialog) {
        "ngInject";
        this.sortType = 'name'; // set the default sort type
        this.sortReverse = false; // set the default sort order
        this.$scope = $scope;
        this.ngDialog = ngDialog;

        polestarService.getData().then(data => {
            this.count = data.count;
            this.next = data.next;
            this.previous = data.previous;
            this.screening_results = data.results;
        });
    };

    openTheDialog(x, event) {
        this.ngDialog.open({
            templateUrl: 'templateId',
            controller: ['$scope', function($scope) {
                $scope.x = x;
                let clickedOn = event.currentTarget;
                let WhichElem = clickedOn.attributes['data-which'].value;
                $scope.show = WhichElem;
            }],
            className: 'ngdialog-theme-default',
            scope: this.$scope
        });
    }

}

export default PolestarController;
