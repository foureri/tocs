'use strict';

angular.module('myApp').controller('ServiceCtrl', function($scope, $rootScope, SeatMapService){
	
	SeatMapService.option();

	$rootScope.loc = "Service";
    $rootScope.locA = false;
    
    $rootScope.seat = "Avion";
    $rootScope.logo = "icon-af icon-af-B-digital-avionenvol";
    $rootScope.lien = "/#/pnc/service";
    
     
    
  
    
});