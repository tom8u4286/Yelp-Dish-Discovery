function btn_setting() {
	var overview_btn = document.getElementById('overview_id'),
		overview_page = document.getElementById('overview_page_id');

	var data_btn = document.getElementById('data_id'),
		data_page = document.getElementById('data_page_id');

	var about_btn = document.getElementById('about_id'),
		about_page = document.getElementById('about_page_id');

	var system_btn = document.getElementById('system_id');

	var page_arary = [overview_page, data_page, about_page];


	overview_btn.onclick = function() {
		setting_back(page_arary, 1);

		overview_page.style.zIndex = 5;
		overview_page.style.opacity = 1;
	};
	data_btn.onclick = function() {
		setting_back(page_arary, 1);

		data_page.style.zIndex = 5;
		data_page.style.opacity = 1;
	};
	about_btn.onclick = function() {
		setting_back(page_arary, 1);

		about_page.style.zIndex = 5;
		about_page.style.opacity = 1;
	};
	system_btn.onclick = function() {
		setting_back(page_arary, 1);
	}

	/* beginning of popular_title_btn */
	var score_avg_btn = document.getElementById('score_avg_btn'),
		score_min_btn = document.getElementById('score_min_btn'),
		frequent_btn = document.getElementById('frequent_btn');

	var score_list_avg = document.getElementsByClassName('score_list_avg')[0],
		score_list_min = document.getElementsByClassName('score_list_min')[0],
		count_list = document.getElementsByClassName('count_list')[0];

	var popular_list_array = [score_list_avg, score_list_min, count_list];

	score_avg_btn.onclick = function() {
		setting_back(popular_list_array, 2);
		score_list_avg.style.height = "80vh";
		picked_dom_array[0].onclick.apply(picked_dom_array[0]);
	}
	score_min_btn.onclick = function() {
		setting_back(popular_list_array, 2);
		score_list_min.style.height = "80vh";

		picked_dom_array[5].onclick.apply(picked_dom_array[5]);
	}
	frequent_btn.onclick = function() {
		setting_back(popular_list_array, 2);
		count_list.style.height = "80vh";

		picked_dom_array[10].onclick.apply(picked_dom_array[10]);
	}

	setTimeout(function() {
		score_avg_btn.onclick.apply(score_avg_btn);
	}, 800);
	/* ending of  popular_title_btn */

}

function setting_back(array, num) {
	if (num == 1) {
		for (var i = 0; i < array.length; i++) {
			array[i].style.zIndex = -3;
			array[i].style.opacity = 0;
		}
	} else if (num == 2) {
		for (var i = 0; i < array.length; i++) {
			array[i].style.height = "5.5vh";
		}
	}
}