
    
    $('.btnementa').on('click', function() {
      $('#changeContent').load('ementa.html').hide().fadeIn(500);
    });

    $('.btnabout').on('click', function() {
      $('#changeContent').load('about.html').hide().fadeIn(500);
      $('#changePic').html('<img class="doctor-pic" src="img/drpedro_perfil.png">');
    });

    $('.btncourse').on('click', function() {
      window.location.href = 'course.html';
    });
    
    $('.logout').on('click', function() {
      window.location = 'index.html';
    });
    
    $('.loginbtn').on('click', function(e) {
      e.preventDefault();
      var username = $('#username').val();
      var password = $('#password').val();

      if (username == '' || password == '') {
        Swal.fire({
          title: 'Atenção!',
          text: 'Por favor preencha os campos corretamente!',
          icon: 'warning',
          confirmButtonText: 'Ok'
        })
        return;
      }

      if (username != 'admin' || password != 'admin') {
        Swal.fire({
          title: 'Erro!',
          text: 'Não foi possível realizar login, cheque os dados e tente novamente',
          icon: 'error',
          confirmButtonText: 'Ok'
        }).then((result) => {
          setTimeout(function() {
            $('#username').focus();
            $('#password').val('');
          }, 11);
        })

        return;
      }
      window.location.href = 'home.html';
    });


    $('#videoCourse').on('ended', function() {
      $('#courseContent').load('course_choices.html');
    });

    $('.paradaCardiaca').on('click', function() {
      $('body').html('<video src="videos/4 - Atletas.mp4" autoplay controls class="videoCourse successChoiceVideo"></video>');
      setTimeout(function() {
        $('.successChoiceVideo').on('ended', function() {
          window.location.href = 'success.html';
        });
      }, 100);
    });

    $('.desmaio').on('click', function() {
      $('body').html('<video src="videos/3 - Insuficiência Cardíaca.mp4" autoplay controls class="videoCourse errorChoiceVideo"></video>');
      setTimeout(function() {
        $('.errorChoiceVideo').on('ended', function() {
          window.location.href = 'error.html';
        });
      }, 100);
  
    });

    $('.convulsao').on('click', function() {
      $('body').html('<video src="videos/2 - Arritmia.mp4" autoplay controls class="videoCourse errorChoiceVideo"></video>');
      setTimeout(function() {
        $('.errorChoiceVideo').on('ended', function() {
          window.location.href = 'error.html';
        });
      }, 100);
  
    });

    $('.undefined').on('click', function() {
      $('body').html('<video src="videos/1 - Parada Cardiaca.mp4" autoplay controls class="videoCourse errorChoiceVideo"></video>');
      setTimeout(function() {
        $('.errorChoiceVideo').on('ended', function() {
          window.location.href = 'error.html';
        });
      }, 100);
  
    });



