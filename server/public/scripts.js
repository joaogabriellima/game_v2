
    
    $('.btnementa').on('click', function() {
      $('#changeContent').load('ementa.html').hide().fadeIn(600);
      $('#background').css('background', 'rgba(0, 0, 0, 0.75)');
    });

    $('.btnabout').on('click', function() {
      $('#changeContent').load('about.html').hide().fadeIn(600);
      $('#background').css('background', 'rgba(0, 0, 0, 0.75)');
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
      window.location.href = "course_choices.html";
    });

    $('.paradaCardiaca').on('click', function() {
      $('body').html('<video src="videos/4 - Atletas.mp4" autoplay controls class="videoCourse successChoiceVideo"></video>');
      redirectSuccess();
    });

    $('.desmaio').on('click', function() {
      $('body').html('<video src="videos/3 - Insuficiência Cardíaca.mp4" autoplay controls class="videoCourse errorChoiceVideo"></video>');
      redirectError();
    });

    $('.convulsao').on('click', function() {
      $('body').html('<video src="videos/2 - Arritmia.mp4" autoplay controls class="videoCourse errorChoiceVideo"></video>');
      redirectError();
    });

    $('.undefined').on('click', function() {
      $('body').html('<video src="videos/1 - Parada Cardiaca.mp4" autoplay controls class="videoCourse errorChoiceVideo"></video>');
      redirectError();
    });

    function redirectError() {
      $('.errorChoiceVideo').on('ended', function() {
        window.location.href = 'course_choices.html';
      });  
    }

    function redirectSuccess() {
      $('.successChoiceVideo').on('ended', function() {
        window.location.href = 'success.html';
      });
    }



