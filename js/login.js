$(function() {
	$('#loginBtn').on('click',function() {
		var result = $('#loginForm').serializeToJson();
		if(!$.trim(result.username)) {
			alert('情输入用户名');
			return;
		}
		if(!$.trim(result.password)) {
			alert('情输入密码');
			return;
		}

		$.ajax({
			type: 'post',
			url: `${App.baseUrl}/employee/employeeLogin`,
			data: result,
			success:function(response) {
				console.log();
				if(response.success) {
					// alert('登陆成功');
					location.href = 'user.html';
				}else {
					alert(response.message);
				}
			}
		})

	})
		console.log(`${App.baseUrl}/employee/employeeLogin`);
})