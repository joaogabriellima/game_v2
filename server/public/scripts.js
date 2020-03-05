
    
    $('.btnementa').on('click', function() {
      $('#changeContent').load('ementa.html').hide().fadeIn(500);
    });

    $('.btnabout').on('click', function() {
      $('#changeContent').load('about.html').hide().fadeIn(500);
      $('#changePic').html('<img class="doctor-pic" src="img/drpedro_perfil.png">');
    });

