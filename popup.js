

  $(function() {
      console.log( "ready!" );

      // 'somewhat' random videos
      var arr = ['https://www.youtube.com/watch?v=sQgd6MccwZc',
                'https://www.youtube.com/watch?v=k4YRWT_Aldo',
                'https://www.youtube.com/watch?v=NiF6-0UTqtc',
                'https://www.youtube.com/watch?v=sQgd6MccwZc',
                'https://www.youtube.com/watch?v=IyYnnUcgeMc',
                'https://www.youtube.com/watch?v=ViwtNLUqkMY',
                'https://www.youtube.com/watch?v=4m1EFMoRFvY',
                'https://www.youtube.com/watch?v=VBmMU_iwe6U',
                'https://www.youtube.com/watch?v=jcF5HtGvX5I',
                'https://www.youtube.com/watch?v=3xUfCUFPL-8',
                'https://www.youtube.com/watch?v=aY9vZv7HCvo',
                'https://www.youtube.com/watch?v=y3MjxWn5W9M',
              ];

      var randomNum = Math.floor(Math.random() * 11) + 0;

      $( "#do-beyonce" ).click(function() {
            chrome.tabs.create({url: arr[randomNum]});
            return false;
      });

      // Just closes the popup window. Might fix it to exit out of chrome
      // to beef up the shittiness factor.
      $( "#dont-beyonce" ).click(function() {
        window.close();
      });

  });
