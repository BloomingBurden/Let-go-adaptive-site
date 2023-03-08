ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 8,
            controls: [],
        }),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/map/icon_map.png',
            // Размеры метки.
            iconImageSize: [41, 41],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
        });


    myMap.geoObjects.add(myPlacemark)
});