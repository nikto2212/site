
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var player;
            
    $(document).on('click', '.player', function () {
        $(this).children('.play-btn').css({'z-index':'-1'});
        player = new YT.Player(this, {
            height: '100%',
            width: '100%',
            videoId: $(this).data('id'),
            events: {
                'onReady': onPlayerReady,
              }
        });
        function onPlayerReady(event) {
            event.target.playVideo();
          }
    });