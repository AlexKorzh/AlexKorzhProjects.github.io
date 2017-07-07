$(document).ready(function(){
	var App = {};

	// Sandwich
	$('.sandwich').click(function(){
		$(this).toggleClass('active');
		$('body').css({'overflow-y':'hidden'});
		$('.nav').toggleClass('active');
		if (!$('.nav').hasClass('active')) {
			$('body').css({'overflow-y':'auto'});
		}
	});

	var $categoriesHead = $('.categories-head'),
	$categoriesList = $('.categories-list');

	//Categories-head
	$categoriesHead.click(function(){
		// $(this).toggleClass('active');
		$('.categories__head').toggleClass('active');


		$categoriesList.slideToggle();
	});

	// Slider-Range
	$( "#slider-range" ).slider({
	      // orientation: "vertical",
	      // step: 15,
	      range: true,
	      min: 5000,
	      max: 350000,
	      values: [ 0, 170000 ],
	      slide: function( event, ui ) {
	      	$( "#amount" ).val( ui.values[ 0 ] );
	      	$( "#amount_1" ).val( ui.values[ 1 ] );
	      }
	  });
	$( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) );
	$( "#amount_1" ).val( $( "#slider-range" ).slider( "values", 1 ) );

	// Изменение местоположения ползунка при вводе данных в первый  input
	$("input#amount").change(function(){

		var value1 = $("input#amount").val();
		var value2 = $("input#amount_1").val();

		if( parseInt(value1) > parseInt(value2) ) {
			value1 = value2;
			$("input#amount").val(value1);
		}
		$("#slider-range").slider("values",0,value1);	
	});
		  // Изменение местоположения ползунка при вводе данных в второй  input 	
		  $("input#amount_1").change(function(){

		  	var value1 = $("input#amount").val();
		  	var value2 = $("input#amount_1").val();

		  	if( parseInt(value1) > parseInt(value2) ){
		  		value2 = value1;
		  		$("input#amount_1").val(value2);
		  	}
		  	$("#slider-range").slider("values",1,value2);
		  });
		  // фильтрация ввода в поля
		  // jQuery('#amount, #amount_1').keypress(function(event){
		  // 	var key, keyChar;

		  // 	if(!event) var event = window.event;

		  // 	if (event.keyCode) key = event.keyCode;
		  // 	else if(event.which) key = event.which;

		  // 	if(key === null || key === 0 || key === 8 || key === 13 || key === 9 || key === 46 || key === 37 || key === 39 ) return true;
		  // 	keyChar = String.fromCharCode(key);
		  // 	if(!/\d/.test(keyChar))	return false;
		  // });

	//PROJECT SLIDER
	var projectSlider = $('.project-slider');

	initializeProjectSlider();

	function initializeProjectSlider() {

		if (($(window).width()) > 1199) {
			projectSlider.bxSlider({
				speed: 800,
				slideWidth: 132,
				touchEnabled:false,
				slideMargin: 20,
				minSlides: 5,
				maxSlides: 5,
				moveSlides: 1
			});
		}

		if ((($(window).width()) < 1200) && (($(window).width()) > 720))  {
			projectSlider.bxSlider({
				speed: 800,
				slideWidth: 132,
				touchEnabled:false,
				slideMargin: 20,
				minSlides: 3,
				maxSlides: 3,
				moveSlides: 1
			});
		}
		if ((($(window).width()) < 720) && (($(window).width()) > 640)) {
			projectSlider.bxSlider({
				speed: 800,
				slideWidth: 132,
				touchEnabled:false,
				slideMargin: 20,
				minSlides: 2,
				maxSlides: 2,
				moveSlides: 1
			});
		}
		if (($(window).width()) < 640) {
			projectSlider.bxSlider({
				speed: 800,
				slideWidth: 132,
				touchEnabled:false,
				slideMargin: 20,
				minSlides: 1,
				maxSlides: 1,
				moveSlides: 1
			});
		}
	}

	$('select').each(function(){
		$('select').selectBox({
			mobile: true,
		});
	});

	/*- SPA -*/
	// DataStorage

	var products = [],
	results = [];

	var filter = {
		'data': {},
		'add': function (category, value) {
			if (!this.data[category]) this.data[category] = [];

			if (!(this.data[category].indexOf(value) > -1)) {
				this.data[category].push(value);
			}
		},
		'remove': function (category, value) {
			if (this.data[category]) {
				this.data[category].forEach(function (item, i) {
					if (value === item) {
						this.data[category].splice(i, 1);
						return;
					}
				}.bind(this));

				if (!this.data[category].length) {
					delete this.data[category];
				}
			}
		},
		'getCatagoriesNumber': function (category) {
			var result = 0;

			if (this.data[category]) result = this.data[category].length;

			return result;
		},
		'reset': function () {
			return this.data = {};
		}
	};

	var checkboxes = $('.categories__list-row input[type=checkbox]'),
	selectBoxProjectStage = $('.select__project-stage .selectBox'),
	selectBoxCity = $('.select__city .selectBox'),
	reset = $('.button-filter'),
	ok = $('.range-slider .ok');



	(function generateAllProjectsHTML (data) {
		var list = $('.all-projects .projects-wrap');

		var theTemplateScript = $('#projects-template').html(),
		theTemplate = Handlebars.compile(theTemplateScript);

		list.append(theTemplate(data));

		list.find('.project').on('click', function () {
			var productIndex = $(this).data('index');

			window.location.hash = 'project/' + productIndex;
		});
	})(data);
	// render(decodeHash());
	goToLocation();
	// Listeners

	$(window).on('hashchange', goToLocation);
	checkboxes.on('click', filterResults);
	selectBoxProjectStage.on('change', applyFilters);
	selectBoxCity.on('change', applyCityFilters);
	reset.on('click', resetFilter);
	ok.on('click', applyPriceRage);

	function applyPriceRage () {
		var values = {
			'from': valueFrom = $('.range-slider #amount').val(),
			'to': valueTo = $('.range-slider #amount_1').val()
		},
		type = 'priceRange',
		output = [];

		$.each(App.Projects, function (index, project) {
			var budget = project.budget.replace(/ /g, '');

			budget = Number(budget);

			if (budget >= values.from && budget <= values.to) output.push(project);
		});

		return renderProjectsPage(output);
	}

	function applyFilters () {
		var projectStatus = $('.select__project-stage .selectBox-label').text(),
		type = 'projectStatus'; 

		if (filter.data[type]) filter.data[type] = [];
		filter.add(type, projectStatus);
		generateQueryHash(filter);
	}

	function applyCityFilters () {
		var city = $('.select__city .selectBox-label').text(),
		type = 'city';

		if (filter.data[type]) filter.data[type] = [];
		filter.add(type, city);
		generateQueryHash(filter);
	}

	function filterResults () {
		var current = $(this),
		isChecked = $(this).prop('checked'),
		value = current.val(),
		type = 'category';

		if (isChecked) filter.add(type, value);
		if (!isChecked) filter.remove(type, value);

		generateQueryHash(filter);
		countCategories(filter, type);
	}

	function resetFilter () {
		var hash = window.location.hash = '#';

		resetValues();

		return hash;
	}

	function resetValues () {
		filter.reset();
		checkboxes.prop('checked', false);
		selectBoxProjectStage.selectBox('value', ['Оберіть стан проекту...']);
		selectBoxCity.selectBox('value', ['Місто \ Район']);
		var	$slider = $("#slider-range");
		$slider.slider("values", 0, 5000);
		$slider.slider("values", 1, 170000);

		var rangeSliderAmounts = {
			'from': 5000,
			'to': 170000
		},
		amountFrom = $('.range-slider #amount').val(rangeSliderAmounts.from),
		amountTo = $('.range-slider #amount_1').val(rangeSliderAmounts.to);

		countCategories(filter);
	}

	function goToLocation () {
		var location = decodeHash();

		render(location);
	}

	function generateQueryHash (filter) {
		var location = function (hash) {
			return window.location.hash = hash;
		},
		isEmpty = $.isEmptyObject(filter.data),
		dataJson = JSON.stringify(filter.data);

		return !isEmpty ? location('#filter/' + dataJson)  : location('#');
	}

	function countCategories (filter, category) {
		var numContainer = $('.categories__numbers'),
		number = filter.getCatagoriesNumber(category);

		numContainer.html(number);
	}

	// Helpers functions

	function decodeHash () {
		return decodeURI(window.location.hash);
	}

	// Navigation

	function render (url) {
		var singleProject = $('.main-content .single-project'),
		mainPage = $('.main-content .main-page'),
		route = url.split('/')[0];

		mainPage.removeClass('visible');
		singleProject.removeClass('visible');

		var	routes = {
			'': function() {
				resetValues();

				renderProjectsPage(data);
			},
			'#project': function() {
				var index = url.split('#project/')[1].trim();

				renderSingleProjectPage(index, data);
			},
			'#filter': function() {
				var index = url.split('#filter/')[1].trim(),
				filters;

				try {
					filters = JSON.parse(index);
				} catch(error) {
					window.location.hash = '#';

					return;
				}

				renderFilterResults(filters, data);
			},
			'errorPage': function () {
				renderErrorPage();
			}
		};

		return (routes[route] || routes['errorPage'])();
	}

	function renderProjectsPage (projects) {
		var allProjects = $('.all-projects .projects-wrap .project'),
		page = $('.all-projects');

		allProjects.addClass('disabled');

		$.each(allProjects, function (i, item) {
			var current = $(this),
			id = $(this).data('index');

			$.each(projects, function (i, project) {
				if (project.id === id) current.removeClass('disabled');
			});
		});

		App.Projects = projects;

		page.addClass('visible');
	}

	function renderSingleProjectPage (index, data) {
		var container = $('.single-project__container'),
		page = $('.single-project');

		if (data.length) {
			data.forEach(function (item) {
				if(item.id === Number(index)) {
					container.find('.template__title').text(item.projectTile);
					container.find('.template__status_sale').text(item.projectStatusSale);
					container.find('.template__project-avtor-name').text(item.avtorName);
					container.find('.template__project__avtor-img img').attr('src','img/person-icons/' + item.avtorImg);
					container.find('.project-budget__number').text(item.budget);

					page.find('.vote').text(item.vote);

					container.find('.project-limits .project-info-text').text(item.projectText);
					container.find('.category__text').text(item.head);
					container.find('.bg-ico-color').attr('class', 'template__project-ico-wrap bg-ico-color ' + item.headColor);
					container.find('.template__project-ico use').attr('xlink:href', '#' + item.headIco);
					container.find('.template__status').text(item.projectStatus);

					var tmp = container.find('.template__status').attr('class'),
					tmp2 = tmp.split(' ')[1].slice(0, tmp.indexOf('participated')).replace('participated', item.projectStatusColor);

					container.find('.template__status').attr('class', 'template__status ' + tmp2);
				}
			});
		}

		page.addClass('visible');

		projectSlider.destroySlider();

		initializeProjectSlider();
	}

	function renderFilterResults (filters, projects) {
		var criteria = ['projectStatus', 'category', 'city'];

		var _tmp = projects;

		$.each(filters, function (filterIndex, filterValue) { // Object {category: Array(2), projectStatus: Array(1)}
			//filterIndex ---> category 
			//filterValue ---> 2) ["sport", "community"]

			//filterIndex ---> projectStatus 
			//filterValue ---> ["Реалізований"]

			// tmp = _tmp.map(function (project) { // Object {id: 1, head: "Спорт", headColor: "orange"...

			//filterValueValue ---> sport, community, Реалізований
			_tmp = _tmp.map(function (project) {
				var value;

				$.each(filterValue, function (filterValueIndex, filterValueValue) {
					if (project[filterIndex] === filterValueValue) {
						value = project;
					}
				});

				return value;
			}).filter(function (value){return value});
		});

		// console.log(_tmp);

		// if (_tmp.length < projects.length) {
		// 	$.each(_tmp, function (index, item) {
		// 		$('input[name='+item.category+'][value='+item.category+']').prop('checked', true);
		// 	});
		// }

		return renderProjectsPage(_tmp);
	}

	// Social Share

	var google = $('.social-sprite__ico-wrap.google'),
		facebook = $('.social-sprite__ico-wrap.facebook'),
		twitter = $('.social-sprite__ico-wrap.twitter'),
		vk = $('.social-sprite__ico-wrap.vk');

	google.on('click', function(e) {
		e.preventDefault();

		window.open('https://plus.google.com/share?url=' + window.location.href, '_blank');
	});

	facebook.on('click', function(e) {
		e.preventDefault();

		window.open('https://www.facebook.com/sharer/sharer.php?u=' + window.location.href, '_blank');
	});
	
	twitter.on('click', function(e) {
		var title = $('.template__title').text();

		e.preventDefault();

		window.open('http://twitter.com/share?text=' + title + '&url=' + window.location.href, '_blank');
	});

	vk.on('click', function(e) {
		var title = $('.template__title').text();

		e.preventDefault();

		window.open('https://vk.com/share.php?url=' + window.location.href, '_blank');
	});
});	