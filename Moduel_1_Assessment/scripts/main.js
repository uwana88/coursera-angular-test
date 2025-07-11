// Define the AngularJS module
let app = angular.module('myApp', []);

// Define the controller for the Lunch Checker
app.controller('myCtrl', function ($scope) {

    // Initialize input and output variables
    $scope.input = "";
    $scope.message = "";
    $scope.showMessage = false;

    // Function to process the input string and set the message
    $scope.countString = function () {

        // Split input string into array by commas
        $scope.arr = $scope.input.split(',');
        
        $scope.count = $scope.arr.length; // Initial count of items in the array
        $scope.errorCount = 0; // Identify empty items
        $scope.color ="#000000"; // Default color

        // if input is empty, set count to 0
        if($scope.count === 1 && $scope.arr[0].trim() === "") {
            $scope.count = 0;
        } else {
            // Loop through each item and check for empty strings
            $scope.arr.forEach(element => {
                // If item is empty, decrement count and increment errorCount
                if (element.trim() === "") {
                    $scope.errorCount++;
                    $scope.count--;
                }
            });
        }

        // Set message and color based on count
        if ($scope.count <= 3 && $scope.count > 0) {
            $scope.message = "Enjoy!";
            $scope.color = "#009900";
        } else if ($scope.count > 3) {
            $scope.message = "Too much!";
            $scope.color = "#009900";
        } else if ($scope.count === 0 || $scope.input.trim() === "") {
            $scope.message = "Please enter data first";
            $scope.color = "#aa0000";
        } 

        // If there were empty items, append info message
        if ($scope.errorCount > 0) {
            $scope.message += ` (x${$scope.errorCount} Empty items like ",," not considered)`;
        }

        // Show the message in the UI
        $scope.showMessage = true;
    }
});