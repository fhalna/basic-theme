///<reference path="definitions.d.ts" />
define([
    'jquery',
    'knockout',
    'TweenMax',
    'lib/instantClick/instantclick',
    'lib/modernizr/modernizr-object-fit',
    'https://maps.googleapis.com/maps/api/js?key=AIzaSyA8vp8cZIonzEWUxgV3L4akTH1YwsTuq4g'
], ($, ko, TweenMax, tm) => {
    window['ko'] = ko;
    window['$'] = $;
    window['TweenMax'] = TweenMax;
});