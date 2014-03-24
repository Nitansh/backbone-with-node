define(function (
    require
) {

    "use strict";

    var BaseApp = function BaseAppF() {

        var BaseRouter = require('router/baseRouter');
        var PubSub = require('libs/pubSub');
        var self = this;
        this.baseRouter = new BaseRouter();
        PubSub.listenTo(self.baseRouter, 'route:init', self.StateLogin);
        PubSub.listenTo(self.baseRouter, 'route:userLoggedIn', self.UserAuthorized);
        PubSub.on('render:ActiveView', self.renderActiveView);
    };

    BaseApp.prototype.UserAuthorized = function () {
        var _this = this;


        require(['views/customer-view', 'libs/pubSub', 'views/header-view-userAuthorized', 'apps/UserAuthorizedApp'], function (CustomerView, PubSub, HeaderUserAuthorized, UserAuthorizedApp) {
            PubSub.trigger('remove:bodyView', 'old body view deleted');
            PubSub.trigger('remove:generalInformationView', 'old general information view deleted');
            var customerView = new CustomerView();
            window.activeView = customerView;
            if (_this.headerUserAuthorized === undefined) {
                PubSub.trigger('remove:headerView', 'old header view deleted');
                _this.headerUserAuthorized = new HeaderUserAuthorized();
                new UserAuthorizedApp();
            }

        });
    };

    BaseApp.prototype.StateLogin = function () {

        require(['views/header-view', 'libs/pubSub', 'views/footer-view', 'views/body-view'], function (HeaderView, PubSub, FooterView, BodyView) {
            PubSub.trigger('remove:customerView', 'customer body view deleted');
            PubSub.trigger('remove:headerViewUserAuthorized', 'old header view deleted');
            PubSub.trigger('remove:generalInformationView', 'old general information view deleted');
            new HeaderView();
            new FooterView();
            window.activeView = new BodyView();
        });
        this.headerUserAuthorized = undefined;

    };

    BaseApp.prototype.renderActiveView = function () {
        window.activeView.render();
    };

    return BaseApp;
});