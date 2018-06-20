	var page = 1;
	var pageSize = 5;
	var totalPage = 0;
	var brandLogo;
$(function() {
	getData();
	$('#nextBtn').on('click',function() {
		console.log(1);
		page++;
		if(page > totalPage) {
			page = totalPage;
			alert('没有更多数据了');
			return;
		}
		getData();
	});
	$('#prevBtn').on('click',function() {
		page--;
		if(page < 1) {
			page = 1;
			alert('没有更多数据了');
			return;
		}
		getData();
	});
	$.ajax({
		url: `${App.baseUrl}/category/queryTopCategoryPaging`,
		type: 'get',
		data: {
			page: 1,
			pageSize: 100
		},
		success: function(data) {
			// console.log(data);
			var html = template('fidstTpl',data);
			$('#fidstBox').html(html);
		}
	});
	// 上传图片
	$('#fileUpload').fileupload({
		dataType: 'json',
		done: function(e, data){
			brandLogo = data._response.result.picAddr;
			var imgUrl = App.baseUrl + brandLogo;
			console.log(imgUrl);
			$('#imgUrl').attr('src',imgUrl);
		}

	});
	// 添加二级分类
	$('#secondBtn').on('click',function() {
		var brandName = $('#name').val();
		var categoryId = $('#fidstBox').val();
		var hot = 1;
		$.ajax({
			type: 'post',
			url: `${App.baseUrl}/category/addSecondCategory`,
			data: {
				brandName,
				categoryId,
				brandLogo,
				hot
			},
			success: function(data) {
				console.log(data);
				if(data.success) {
					location.reload();
				}else {
					alert(data.massage)
				}
			}
		})
	});

});

// 查询二级分类
function getData() {
	$.ajax({
		type: 'get',
		url: `${App.baseUrl}/category/querySecondCategoryPaging`,
		data: {
			page: page,
			pageSize: pageSize
		},
		success: function(data) {
			// console.log(data);
			var html = template('secondTlp',{
				list: data,
				api: App.baseUrl
			});
			$('#secondBox').html(html);
			totalPage = Math.ceil(data.total / pageSize);
		}
	})
}