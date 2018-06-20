$(function() {
	
	
	// 上一页下一页
	var page = 1;
	var pageSize = 5;
	var totalPage = 0;
	getData();
	$('#next').on('click',function() {
		page++;
		if(page > totalPage) {
			page = totalPage;
			alert('没有更多数据了');
			return;
		}
		getData();
	});
	$('#prev').on('click',function() {
		page--;
		if(page < 1) {
			page = 1;
			alert('没有更多数据了');
			return;
		}
		getData();
	});
	
	

	// 添加分类
	$('#addBtn').on('click',function() {
		var categoryName = $.trim($('#addValue').val());
		if(!value) {
			alert('情输入分类名称');
			return;
		}
		$.ajax({
			type: 'post',
			url: `${App.baseUrl}/category/addTopCategory`,
			data: {
				categoryName: categoryName
			},
			success: function(data) {
				console.log(data);
				if(data.success) {
					location.reload();
				}else {
					alert(data.massage);
				}
			}
		});
});

// 查询一级分类	
function getData () {
		$.ajax({
			type: 'get',
			url: `${App.baseUrl}/category/queryTopCategoryPaging`,
			data: {
				page: page,
				pageSize: pageSize
			},
			success: function(data) {
				if(data.error) {
					location.href = 'login.html';
				}else {
					var html = template('cateTpl',data);
					$('#cateBox').html(html);	
				}
				totalPage = Math.ceil(data.total / pageSize);
			}
		});
	}
})