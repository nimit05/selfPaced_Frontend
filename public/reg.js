$(() => {
	$('.form').find('input, textarea').on('keyup blur focus', function(e) {
		var $this = $(this),
			label = $this.prev('label');

		if (e.type === 'keyup') {
			if ($this.val() === '') {
				label.removeClass('active highlight');
			} else {
				label.addClass('active highlight');
			}
		} else if (e.type === 'blur') {
			if ($this.val() === '') {
				label.removeClass('active highlight');
			} else {
				label.removeClass('highlight');
			}
		} else if (e.type === 'focus') {
			if ($this.val() === '') {
				label.removeClass('highlight');
			} else if ($this.val() !== '') {
				label.addClass('highlight');
			}
		}
	});

	let isActive = true;
	$('.tabc').on('click' , function(e) {
		e.preventDefault();

		
			$('.tabn').removeClass('active');
        
		$('.tabp a').parent().addClass('active');


		$(this).parent().siblings().removeClass('active');

		if(isActive){
			$('.tabn').removeClass('active');
			isActive = false;
		}else{
			isActive = true;

		}
	})

	$('.tab a').on('click', function(e) {
		e.preventDefault();

		$(this).parent().addClass('active');
		$('.tabn a').parent().addClass('active');
		

		$(this).parent().siblings().removeClass('active');

		if (isActive) {
			$('.tabp').removeClass('active');
			// $('.tabn').removeClass('active');
			isActive = false;
		} else {
			isActive = true;
		}

		target = $(this).attr('href');

		$('.tab-content > div').not(target).hide();

		$(target).fadeIn(500);
	});
//    isActive = true;
	

	$('#submit_btn')[0].onclick = () => {
		if ($('#pass')[0].value == $('#conPass')[0].value) {
		} else {
			alert('Confirm Password should not be same as Password ');
		}
	};
});

function onSuccess(googleUser) {
	console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
}
function onFailure(error) {
	console.log(error);
}
function renderButton() {
	gapi.signin2.render('my-signin2', {
		scope: 'profile email',
		width: 220,
		height: 50,
		longtitle: true,
		theme: 'dark',
		onsuccess: onSuccess,
		onfailure: onFailure
	});
}

var isthere = true
function Validation(){
var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

	if( !$('#wrong_pass').val().match(decimal) ){
		if(isthere){
		$('#warning').append($('<p>').text('Password must be of minimum 8 letters and contains a small letter a Capital letter , a special character and numeric digit'))
		isthere = false
		}
	}
	else{
		if(!isthere){
		$('#warning').empty()
		isthere = true
		}
	}
}


function Pass_Validation(){
	var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if($('#name').val().length == 0){
		$('#below_name').append($('<p>')).text('Enter your name')
	}else{
		$('#below_name').empty()
	}
	if(!$('#email').val().match(mailformat) ){
		$('#below_email').append($('<p>')).text('Enter correct email id')
	}else{
		$('#below_email').empty()
	}
	if($('#username').val().length == 0){
		$('#below_username').append($('<p>')).text('Enter your username')
	}else{
		$('#below_username').empty()
	}
	if($('#phone_Number').val().length == 0 ){
		$('#below_number').append($('<p>')).text('Enter your phone number')
	}else{
		$('#below_number').empty()
	}

	if( !$('#pass').val().match(decimal) ){
		if(isthere){
		$('#warning').append($('<p>').text('Password must be of minimum 8 letters and contains a small letter a Capital letter , a special character and numeric digit'))
		isthere = false
		}
	}
	else{
		if(!isthere){
		$('#warning').empty()
		isthere = true
		}
	}
}

function Linker(){
	if(isthere){
	window.location.href = "/email-verify.html";
	}
}


