var url = (window.location.href.indexOf('wonderlanddev') !== -1 || window.location.href.indexOf('laurence.local') !== -1) ? '/punch-remastered/' : '/';
var require = ({
    baseUrl: url + "wordpress/wp-content/themes/basic-theme/script",
    waitSeconds: 30,
    urlArgs: "v=21",
    paths: {
        jquery: "lib/jquery/jquery",
        knockout: "lib/knockout/knockout",
        TweenMax: "lib/gsap/TweenMax",
        InstantClick: 'lib/instantClick/instantclick',
        ObjectFit: 'lib/modernizr/modernizr-object-fit'
    },
    map: {},
    shim: {knockout: ["jquery"]}
});