/**
 * @file MediaElement Playlist Feature (plugin).
 * @author Andrew Berezovsky <andrew.berezovsky@gmail.com>
 * Twitter handle: duozersk
 * @author Original author: Junaid Qadir Baloch <shekhanzai.baloch@gmail.com>
 * Twitter handle: jeykeu
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */

(function($) {
  $.extend(mejs.MepDefaults, {
    nextText: 'Next Track',
    prevText: 'Previous Track'
      //, playlistText: 'Show/Hide Playlist'
  });

  $.extend(MediaElementPlayer.prototype, {
    // LOOP TOGGLE
    buildloop: function(player, controls, layers, media) {
      var t = this;

      var loop = $('<div class="mejs-button mejs-loop-button ' + ((player.options.loop) ? 'mejs-loop-on' : 'mejs-loop-off') + '">' +
        '<button type="button" aria-controls="' + player.id + '" title="' + player.options.loopText + '" ></button>' +
        '</div>')
        // append it to the toolbar
        .appendTo(controls)
        // add a click toggle event
        .click(function(e) {
          player.options.loop = !player.options.loop;
          $(media).trigger('mep-looptoggle', [player.options.loop]);
          if (player.options.loop) {
            loop.removeClass('mejs-loop-off').addClass('mejs-loop-on');
            //media.setAttribute('loop', 'loop');
          }
          else {
            loop.removeClass('mejs-loop-on').addClass('mejs-loop-off');
            //media.removeAttribute('loop');
          }
        });

      t.loopToggle = t.controls.find('.mejs-loop-button');
    },
    loopToggleClick: function() {
      var t = this;
      t.loopToggle.trigger('click');
    },
    // SHUFFLE TOGGLE
    buildshuffle: function(player, controls, layers, media) {
      var t = this;

      var shuffle = $('<div class="mejs-button mejs-shuffle-button ' + ((player.options.shuffle) ? 'mejs-shuffle-on' : 'mejs-shuffle-off') + '">' +
        '<button type="button" aria-controls="' + player.id + '" title="' + player.options.shuffleText + '" ></button>' +
        '</div>')
        // append it to the toolbar
        .appendTo(controls)
        // add a click toggle event
        .click(function(e) {
          player.options.shuffle = !player.options.shuffle;
          $(media).trigger('mep-shuffletoggle', [player.options.shuffle]);
          if (player.options.shuffle) {
            shuffle.removeClass('mejs-shuffle-off').addClass('mejs-shuffle-on');
          }
          else {
            shuffle.removeClass('mejs-shuffle-on').addClass('mejs-shuffle-off');
          }
        });

      t.shuffleToggle = t.controls.find('.mejs-shuffle-button');
    },
    shuffleToggleClick: function() {
      var t = this;
      t.shuffleToggle.trigger('click');
    },
    // PREVIOUS TRACK BUTTON
    buildprevtrack: function(player, controls, layers, media) {
      var t = this;

      var prevTrack = $('<div class="mejs-button mejs-prevtrack-button mejs-prevtrack">' +
        '<button type="button" aria-controls="' + player.id + '" title="' + player.options.prevText + '" ></button>' +
        '</div>')
        .appendTo(controls)
        .click(function(e){
          $(media).trigger('mep-playprevtrack');
          player.playPrevTrack();
        });

      t.prevTrack = t.controls.find('.mejs-prevtrack-button');
    },
    prevTrackClick: function() {
      var t = this;
      t.prevTrack.trigger('click');
    },
    // NEXT TRACK BUTTON
    buildnexttrack: function(player, controls, layers, media) {
      var t = this;

      var nextTrack = $('<div class="mejs-button mejs-nexttrack-button mejs-nexttrack">' +
        '<button type="button" aria-controls="' + player.id + '" title="' + player.options.nextText + '" ></button>' +
        '</div>')
        .appendTo(controls)
        .click(function(e){
          $(media).trigger('mep-playnexttrack');
          player.playNextTrack();
        });

      t.nextTrack = t.controls.find('.mejs-nexttrack-button');
    },
    nextTrackClick: function() {
      var t = this;
      t.nextTrack.trigger('click');
    },
    // PLAYLIST TOGGLE
    buildplaylist: function(player, controls, layers, media) {
      var t = this;

      var playlistToggle = $('<div class="mejs-button mejs-playlist-button ' + ((player.options.playlist) ? 'mejs-hide-playlist' : 'mejs-show-playlist') + '">' +
        '<button type="button" aria-controls="' + player.id + '" title="' + player.options.playlistText + '" ></button>' +
        '</div>')
        .appendTo(controls)
        .click(function(e) {
          player.options.playlist = !player.options.playlist;
          $(media).trigger('mep-playlisttoggle', [player.options.playlist]);
          if (player.options.playlist) {
            layers.children('.mejs-playlist').show();
            playlistToggle.removeClass('mejs-show-playlist').addClass('mejs-hide-playlist');
          }
          else {
            layers.children('.mejs-playlist').hide();
            playlistToggle.removeClass('mejs-hide-playlist').addClass('mejs-show-playlist');
          }
        });

      t.playlistToggle = t.controls.find('.mejs-playlist-button');
    },
    playlistToggleClick: function() {
      var t = this;
      t.playlistToggle.trigger('click');
    },
    // PLAYLIST WINDOW
    buildplaylistfeature: function(player, controls, layers, media) {
      var playlist = $('<div class="mejs-playlist mejs-layer">' +
        '<ul class="mejs"></ul>' +
        '</div>')
        .appendTo(layers);
      if (!player.options.playlist) {
        playlist.hide();
      }
      if (player.options.playlistposition == 'bottom') {
        playlist.css('top', player.options.audioHeight + 'px');
      }
      else {
        playlist.css('bottom', player.options.audioHeight + 'px');
      }
      var getTrackName = function(trackUrl) {
        var trackUrlParts = trackUrl.split("/");
        if (trackUrlParts.length > 0) {
          return decodeURIComponent(trackUrlParts[trackUrlParts.length-1]);
        }
        else {
          return '';
        }
      };

      // calculate tracks and build playlist
      var tracks = [];
      //$(media).children('source').each(function(index, element) { // doesn't work in Opera 12.12
      $('#'+player.id).find('.mejs-mediaelement source').each(function(index, element) {
        if ($.trim(this.src) != '') {
          var track = {};
          track.source = $.trim(this.src);
          if ($.trim(this.title) != '') {
            track.name = $.trim(this.title);
          }
          else {
            track.name = getTrackName(track.source);
          }

          //Genere Added to source
          if($(this).attr('datagener') != ''){
              track.genr =  $.trim($(this).attr('datagener'));
          }
    //Datacat added to source
        if($(this).attr('datacat') != ''){
        track.caat =  $.trim($(this).attr('datacat'));
      }
        //datatag added to source
      if($(this).attr('datatag') != ''){
        track.tagg =  $.trim($(this).attr('datatag'));
      }
      //post ID added to source
      if($(this).attr('databid') != ''){
        track.dabid =  $.trim($(this).attr('databid'));
      }
      //Dataprice added to source
      if($(this).attr('dataprice') != ''){
        track.pri =  $.trim($(this).attr('dataprice'));
      }

          tracks.push(track);
        }
      });

         var bars =  '<div id="bars" class="vizhidden"> <div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div> <div class="bar"></div> <div class="bar"></div> <div class="bar"></div> <div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div> <div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div></div>';

      for (var track in tracks) {
        layers.find('.mejs-playlist > ul').append('<li  databid="'+tracks[track].dabid+'" dataprice="'+tracks[track].pri+'" data-tag="'+tracks[track].tagg+'" data-cat="'+tracks[track].caat+'" data-genr="'+tracks[track].genr+'" data-url="' + tracks[track].source + '" title="' + tracks[track].name + '">' + tracks[track].name + bars + '</li>');
      }

      // set the first track as current
      layers.find('li:first').addClass('current played');
      // play track from playlist when clicking it
      layers.find('.mejs-playlist > ul li').click(function(e) {
        if (!$(this).hasClass('current')) {
          $(this).addClass('played');
           var pid = $(this).attr('databid');
          player.playTrack($(this));
           updateCount(pid);
        }
        else {
            player.play();
            var pid = $(this).attr('databid');
            updateCount(pid);

        }
      });

      // when current track ends - play the next one
      media.addEventListener('ended', function(e) {
        player.playNextTrack();
      }, false);
    },
    playNextTrack: function() {
      var t = this;
      var tracks = t.layers.find('.mejs-playlist > ul > li');
      var current = tracks.filter('.current');
      var notplayed = tracks.not('.played');
      if (notplayed.length < 1) {
        current.removeClass('played').siblings().removeClass('played');
        notplayed = tracks.not('.current');
      }
      if (t.options.shuffle) {
        var random = Math.floor(Math.random()*notplayed.length);
        var nxt = notplayed.eq(random);
      }
      else {
        //var nxt = current.next();
/*Updated From here*/
       if (!$('#filterLielm').hasClass('hide')) {
                    var nxt = current.nextAll('li:not(.hide)').first();

                } else {
                    if (notOther != 1) {
                        var nxt = current.next();
                    } else {
                        var nxt = current.nextAll('li:not(.hide)').first();
                    }
                }

    /*Updated To here*/
      var pid = nxt.attr("databid");
      updateCount(pid);
        if (nxt.length < 1 && t.options.loop) {
          /*Updated From here*/
                    if (!$('#filterLielm').hasClass('hide')) {
                        nxt = current.siblings('li:not(.hide)').first();
                    } else {

                        if (notOther != 1) {
                            nxt = current.siblings().first();
                        } else {
                            nxt = current.siblings('li:not(.hide)').first();
                        }

                    }

                    /*Updated To  here*/
        }
      }
      if (nxt.length == 1) {
        nxt.addClass('played');
        t.playTrack(nxt);
      }
    },
    playPrevTrack: function() {
      var t = this;
      var tracks = t.layers.find('.mejs-playlist > ul > li');
      var current = tracks.filter('.current');
      var played = tracks.filter('.played').not('.current');
      if (played.length < 1) {
        current.removeClass('played');
        played = tracks.not('.current');
      }
      if (t.options.shuffle) {
        var random = Math.floor(Math.random()*played.length);
        var prev = played.eq(random);
      }
      else {
        /* Update  From  Here*/
        if (!$('#filterLielm').hasClass('hide')) {
                    var prev = current.prevAll('li:not(.hide)').first();
                } else {
                    if (notOther != 1) {
                        var prev = current.prev();
                    } else {
                        var prev = current.prevAll('li:not(.hide)').first();
                    }

                }
        /* Update  To  Here*/
           var pid = prev.attr("databid");
      updateCount(pid);
        if (prev.length < 1 && t.options.loop) {
         // prev = current.siblings().last();
        /* Update  From  Here*/

                    if (!$('#filterLielm').hasClass('hide')) {
                        prev = current.siblings('li:not(.hide)').last();
                    } else {
                        if (notOther != 1) {
                            prev = current.siblings().last();
                        } else {
                            prev = current.siblings('li:not(.hide)').last();

                        }
                    }
                    /* Update  To  Here*/
        }
      }
      if (prev.length == 1) {
        current.removeClass('played');
        t.playTrack(prev);
      }
    },
    playTrack: function(track) {
      var t = this;
      t.pause();
      t.setSrc(track.attr('data-url'));
      t.load();
      t.play();
      track.addClass('current').siblings().removeClass('current');
      track.siblings().removeClass('currentTrack');
      track.find('#bars').removeClass("vizhidden");
      track.siblings().find("#bars").addClass('vizhidden');
    },
    playTrackURL: function(url) {
      var t = this;
      var tracks = t.layers.find('.mejs-playlist > ul > li');
      var track = tracks.filter('[data-url="'+url+'"]');
      t.playTrack(track);
    }
  });

})(mejs.$);
