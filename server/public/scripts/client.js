const app = angular.module('myApp', ['angularUtils.directives.dirPagination']);

const randomController = app.controller('RandomController', ['$http', function($http){
    let self = this;
    const key = '&api_key=E7TO2O1LpPCE4vO8irCzKRWuufas0vyZ';
    self.randomGif = [];

    self.randomClick = function(){
        $http({
            method: 'GET',
            url: `http://api.giphy.com/v1/gifs/random?${key}`
        })
        .then( function (response){
            console.log(response.data.data.images.downsized.url);
            self.randomGif = response.data.data.images.downsized.url;
            console.log(response);
            console.log(self.randomGif);
        })
        .catch( function(error){
            console.log(error);
        })
    }
}]) // end random controller

const searchController = app.controller('SearchController', ['$http', function($http){
    let self = this;
    // const key = '&api_key=E7TO2O1LpPCE4vO8irCzKRWuufas0vyZ';
    // const url = 'http://api.giphy.com/v1/gifs/search?q='
    // const limit = '&limit=20';
    self.searchGif = [];


    self.searchClick = function (search){
        console.log('Search', search);
    $http({
        method: 'GET',
        url: `/giphy`,
        data: search
    }).then(function (response){
        console.log(response);
        self.searchGif = response.data.data;
        console.log(self.searchGif.length);
        
    }).catch(function (error) {
        console.log(error);
    })}
}])