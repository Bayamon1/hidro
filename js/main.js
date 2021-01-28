$(document).ready(function(){

	// Slider
	if(window.location.href.indexOf('index') > -1){
	  
	  $('.galeria').bxSlider({
	    mode: 'fade',
	    captions: false,
	    slideWidth: 1200,
	    responsive: true,
	    pager: true
	  });

	}


	// Posts
	if(window.location.href.indexOf('index') > -1){
		var posts = [
			{
				title: 'Historia',
				date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'Las plantas absorben los minerales esenciales por medio de iones inorgánicos disueltos en el agua y minerales que se encuentran dentro de ellas. En condiciones naturales, el suelo actúa como reserva de nutrientes minerales, pero el suelo en sí no es esencial para que la planta crezca. Cuando los nutrientes minerales de la tierra se disuelven en agua, las raíces de la planta son capaces de absorberlos. Cuando los nutrientes minerales son introducidos dentro del suministro de agua de la planta, ya no se requiere el suelo para que la planta prospere. Casi cualquier planta terrestre puede crecer con la hidroponia, aunque algunas pueden hacerlo mejor que otras. La hidroponía es también una técnica estándar en la investigación biológica y en la educación, y un popular pasatiempo..'
			},
			{
				title: 'Concepto',
				date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'La hidroponía o cultivo sin suelo ha conseguido estándares comerciales, y que algunos alimentos, plantas ornamentales y jóvenes plantas de tabaco se cultivan de esta manera por diversas razones que tienen que ver con la falta de suelos adecuados; por suelos contaminados por microorganismos que producen enfermedades a las plantas o por usar aguas subterráneas que degradaron la calidad de esos suelos..'
			},
			
			
		];

		posts.forEach((item, index) => {
			var post = `
				<article class="post">
					<h2>${item.title}</h2>
					<span class="date">${item.date}</span>
					<p>
						${item.content}
					</p>
					<a href="#" class="button-more">Leer más</a>
				</article>
			`;

			$("#posts").append(post);
		});
	}


	// Selector de tema
	var theme = $("#theme");

	$("#to-green").click(function(){
		theme.attr("href", "css/green.css");
	});
	
	$("#to-red").click(function(){
		theme.attr("href", "css/red.css");
	});
	
	$("#to-blue").click(function(){
		theme.attr("href", "css/blue.css");
	});

	
	// Scroll arriba de la web
	$('.subir').click(function(e){
		e.preventDefault();

		$('html, body').animate({
			scrollTop: 0
		}, 500);

		return false;
	});

	// Login falso

	$("#login form").submit(function(){
		var form_name = $("#form_name").val();

		localStorage.setItem("form_name", form_name);

	});

	var form_name = localStorage.getItem("form_name");

	if(form_name != null && form_name != "undefined"){
		var about_parrafo = $("#about p");

		about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong> ");
		about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

		$("#login").hide();

		$("#logout").click(function(){
			localStorage.clear();
			location.reload();
		});

	}


	// Acordeon

	if(window.location.href.indexOf('about') > -1){
		$("#acordeon").accordion();
	}


	// Reloj
	if(window.location.href.indexOf('reloj') > -1){

		setInterval(function(){
				var reloj = moment().format("hh:mm:ss");
				$('#reloj').html(reloj);
		}, 1000);
		
	
	}

	// Validación
	if(window.location.href.indexOf('contact') > -1){
	
		$("form input[name='date']").datepicker({
			dateFormat: 'dd-mm-yy'
		});

		$.validate({
		    lang: 'es',
		    errorMessagePosition: 'top',
		    scrollToTopOnError: true
		});

	}

	

});