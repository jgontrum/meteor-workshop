angular
    .module('App')
    .config(config);

function config($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: 'client/templates/tabs.html'
        })
        .state('tab.home', {
            url: '/home',
            views: {
                'tab-home': {
                    templateUrl: 'client/templates/home.html',
                    controller: 'HomeCtrl as home'
                }
            }
        })
        .state('tab.settings', {
            url: '/settings',
            views: {
                'tab-settings': {
                    templateUrl: 'client/templates/settings.html',
                    controller: 'SettingsCtrl as settings'
                }
            }
        });

    $urlRouterProvider.otherwise('tab/home');
}
