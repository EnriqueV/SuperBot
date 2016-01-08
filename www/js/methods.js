bot.controller('Initialconfig',function($scope, $http){

  $scope.Config = function(){
  var to=$scope.token;
 var user= $scope.botUser;
  localStorage.token=to;
  localStorage.botUser=user;

  }


//function for gell all updates in bot
$scope.GetAll=function(){
  var token=localStorage.token;
  var formData = {
    token: token

  };
  var postData = JSON.stringify(formData);


  $http({
    method : 'POST',
    url : 'http://dev2.mirebate.com/mobile/botServer/getall.php',
    data: postData,
    headers : {'Content-Type': 'application/x-www-form-urlencoded'}
  }).success(function(result){
   var a= JSON.stringify(result);
   console.log(a);
   $scope.items=a;
  document.getElementById("result").value =a;
  }).error(function(error){
    console.log("NO furula");
  });


}






});
