define(function (
    require
) {

    "use strict";

    var userAuthorizedApp  = function userAuthorizedAppF() {
        var UserAuthorizedRouter = require('router/UserAuthorizedRouter');
        var PubSub = require('libs/pubSub');
        var self = this;
        this.userAuthorizedRouter = new UserAuthorizedRouter();
        PubSub.listenTo(self.userAuthorizedRouter, 'route:generalinfo', self.stateGeneralInfo);
        PubSub.listenTo(self.userAuthorizedRouter, 'route:dashboard', self.stateDashBoard);
    };

    userAuthorizedApp.prototype.stateGeneralInfo = function () {
        require(['views/generalInformation-view', 'libs/pubSub'], function (GeneralInformationView, PubSub) {
            PubSub.trigger('remove:bodyView', 'old body view deleted');
            PubSub.trigger('remove:customerView', 'old customer information view deleted');
            window.activeView = new GeneralInformationView();
        });

    };

    userAuthorizedApp.prototype.stateDashBoard = function () {
        require(['views/Dashboard-view', 'libs/pubSub'], function (DashboardView, PubSub) {
            PubSub.trigger('remove:bodyView', 'old body view deleted');
            PubSub.trigger('remove:customerView', 'old customer information view deleted');
            PubSub.trigger('remove:generalInformationView', 'old customer information view deleted');
            window.activeView = new DashboardView();
        });
    };

    return userAuthorizedApp;

});