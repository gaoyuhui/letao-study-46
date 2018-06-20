$(function() {
	$.ajax({
		type: 'get',
		url: `${App.baseUrl}/category/querySecondCategoryPaging`,
		data: {
			page: 1,
			pageSize: 10
		},
		success: function(data) {
			var html = template('secondTlp',data);
			console.log(html);
			$('#secondBox').html(html);
		}
	})
})