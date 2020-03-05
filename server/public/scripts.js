
    
    $('.btnementa').on('click', function() {
      $('#changeContent').load('ementa.html').hide().fadeIn(500);
    });

    $('.btnabout').on('click', function() {
      $('#changeContent').load('about.html').hide().fadeIn(500);
      $('#changePic').html('<img class="doctor-pic" src="img/drpedro_perfil.png">');
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
        })
        return;
      }
      window.location.href = 'home.html';
    });