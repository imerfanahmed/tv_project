$(document).ready(function () {
    var player = videojs('video');

    player.playlist([
	   {
            name: 'Channel 1',
            sources: [
                {src: 'http://103.102.27.173/live/tvfeed1001/index.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: 'Channel 2',
            sources: [
                {src: 'http://103.102.27.173/live/tvfeed1002/index.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: 'Channel 3',
            sources: [
                {src: 'http://103.102.27.173/live/tvfeed1003/index.m3u8', type: 'application/x-mpegURL'},
            ]
		},
		{
            name: 'Channel 4',
            sources: [
                {src: 'http://103.102.27.173/live/tvfeed1004/index.m3u8', type: 'application/x-mpegURL'},
            ]
        	},
		 {
            name: 'Channel 5',
            sources: [
                {src: 'http://103.102.27.173/live/tvfeed1005/index.m3u8', type: 'application/x-mpegURL'},
            ]
        	},
                {
            name: 'Channel 6',
            sources: [
                {src: 'http://103.102.27.173/live/tvfeed1006/index.m3u8', type: 'application/x-mpegURL'},
            ]
                }
		 ]);

// Initialize the playlist-ui plugin with no option (i.e. the defaults).
    player.playlistUi();
});
