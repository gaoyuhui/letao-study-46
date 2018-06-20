	$.ajax({
		type: 'get',
		async: false,
		url: `${App.baseUrl}/employee/checkRootLogin`,
		success: function(data) {
			// console.log(data);
			if(data.error) {
				location.href = 'login.html';
			}
		}
	});
$(function() {
	// 登出
	$('#outBtn').on('click',function() {
		$.ajax({
			type: 'get',
			url: `${App.baseUrl}/employee/employeeLogout`,
			date: '',
			success: function(data) {
				console.log(data);
				if(data.success) {
					location.href = 'login.html';
				}
			}
		})	
	})

	// 查询展示用户
	fun();
	
	// 修改状态
	$('#userBox').on('click','.changeStatus',function() {
		var id = $(this).data('user-id');
		var isDelete = $(this).data('user-isdelete');
		var This = $(this);
		$.ajax({
			type: 'post',
			url: `${App.baseUrl}/user/updateUser`,
			data: {
				id: id,
				isDelete: isDelete == 1? 0: 1
			},
			success: function(data) {
				if(data.success) {
					console.log(This);
					if(This.hasClass('btn-danger')) {
						This.removeClass('btn-danger');
						This.addClass('btn-success');
						This.html('启用');
					}else {
						This.removeClass('btn-success');
						This.addClass('btn-danger');
						This.html('禁用');	
					}
					// location.reload();
				}else {
					alert(data.message);
				}
			}
		})
	})
});
function fun() {
	$.ajax({
		type: 'get',
		url: `${App.baseUrl}/user/queryUser`,
		data: {
			page: 1,
			pageSize: 100
		},
		success: function(data) {
			var html = template('userTlp',data);
			$('#userBox').append(html);
		}
	})
}