'use strict';

angular.module('myApp').controller('SecurityCtrl', function($scope, $rootScope, SeatMapSecurity){
	
	SeatMapSecurity.option();
        
    $rootScope.loc = "Security";
    $rootScope.locA=true;
    
    $rootScope.seat = "Avion";
    $rootScope.logo = "icon-af icon-af-B-digital-avionenvol";
    $rootScope.lien = "/#/pnc/service";

    
});