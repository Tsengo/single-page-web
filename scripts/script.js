let slide = tns({
    container: '.slider',
    "slideby" : '1',
    'nav': false,
    controlsContainer : "#controls",
    'items': 2,
    'center':true,
    'startIndex':2,
    "responsive": {
        "2000": {
          "items": 1,
          "controls": true,
          "edgePadding": 30,
        },
    }
})


