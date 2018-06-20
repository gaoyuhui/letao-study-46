$(function() {
	$.ajax({
		type: 'get',
		url: `${App.baseUrl}/category/queryTopCategoryPaging`,
		data: {
			page: 1,
			pageSize: 10
		},
		success: function(data) {
			console.log(data);
			var html = template('cateTpl',data);
			$('#cateBox').html(html);
		}
	});
})