
$.fn.retinafy = function() {
    var elm = this;
    var images = {},
        key = 0;

    function setFixedWidth() {
        $(elm).find('*').each(function () {
            var _this = $(this);
            if (_this.css('max-width') != "none") {
                _this.css({
                    width: _this.css('max-width'),
                    whiteSpace: 'nowrap'
                });
                _this.find('> *').css('whiteSpace', 'normal');
            }
        });
        createImageWaitList();
    }

    function createImageWaitList() {
        $('img').each(function () {
            var _this = $(this),
                sizes = [],
                data = {},
                image;

            if (_this[0].naturalWidth / 3 > 1) {
                data['@3x'] = {
                    width: _this.width() * 3,
                    height: _this.height() * 3
                };
            }

            if (_this[0].naturalWidth / 2 > 1) {
                data['@2x'] = {
                    width: _this.width() * 2,
                    height: _this.height() * 2
                };
            }

            data['@1x'] = {
                width: _this.width(),
                height: _this.height()
            };

            image = {
                sizes: data,
                src: _this[0].src
            };

            images[key] = image;

            key++;
        });
        createImage();
    }

    function createImage() {
        $.ajax({
            type: 'post',
            url: 'core/imageCreator.php',
            dataType: 'json',
            data: images,
            success: function (res) {
                console.log(res);
            }
        })
    }

    setFixedWidth();
};