let slide = tns({
    container: '.slider',
    "slideby" : 'page',
    'nav': false,
    controlsContainer : "#controls",
    'items': 2,
    'center':true,
    'startIndex':2,
    "responsive": {
        "800": {
          "items": 1,
          "controls": true,
          "edgePadding": 30,
        },
    }
})