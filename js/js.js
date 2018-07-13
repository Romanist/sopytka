var Modules = (function(self){

	self.haveFilters = function(filters){
		if ($('.filters').length){
			return true;
		}
		else{
			return false;
		}
	}

	self.isMobail = function(winwidth) {
        if(!winwidth) winwidth = 768;
        var check = true;
        if($(window).width() > 768) check = false;

        return check;
    };

    return self; 
    
}(Modules || {}));


Modules.UltravioletTheme = (function(self,$){

	var _classNames = {
		startThemeClass: '',
		closeThemeClass: '',
		themeClass: '',
		startThemeTogle: '',
		closeThemeTogle: ''
	}
	var _$classNames = {
		themeClass: '',
		startThemeTogle: '',
		closeThemeTogle: '',
		document: ''
	}
	var _docHeight;
	var _animationEnd = 'animationEnd transitionEnd transitionend';
	// var _clickEvent = 'mousedown touchstart';
	var _clickEvent = 'click';


	self._construct = function(params){

		$.extend(_classNames, params);

		_$classNames.themeClass = $(_classNames.themeClass);
		_$classNames.startThemeTogle = $(_classNames.startThemeTogle);
		_$classNames.closeThemeTogle = $(_classNames.closeThemeTogle);
		_$classNames.document = $(document);		
		
		_$classNames.startThemeTogle.on(_clickEvent, function(e) {
			e.preventDefault();
			self._makeScreenDark();
		});

		_$classNames.closeThemeTogle.on(_clickEvent, function(e) {
			e.preventDefault();
			self._makeScreenWhiteAgain();
		});

		return self;

	}

	self._makeScreenDark = function(){
	
		_$classNames.themeClass.addClass(_classNames.startThemeClass);
		_docHeight = _$classNames.document.height();
		_$classNames.themeClass.height(_docHeight);	

		return self;
	}

	self._makeScreenWhiteAgain = function(){

		_$classNames.themeClass.removeClass(_classNames.startThemeClass);
		_$classNames.themeClass.addClass(_classNames.closeThemeClass);
		_$classNames.themeClass.on(_animationEnd, function(){
			_$classNames.themeClass.removeClass(_classNames.closeThemeClass);
		});

		return self;
	}

	return {

        init: function(params){

            self._construct(params);

            return self;

        }

    }

}(Modules.UltravioletTheme || {}, jQuery));


Modules.ToggleFilters = (function(self,$){
	var _classNames = {
		toggleItem: '',
		parentWrapper: '',
		openFiltersClass: '',
		filters: ''
	}
	var _$classNames = {
		toggleItem: '',
		parentWrapper: '',
		filters: '',
		window: ''
	}
	var _thisPage;
	// var _clickEvent = 'mousedown touchstart';
	var _clickEvent = 'click';
	var _mobile;
	var _windowWidth;


	self._construct = function(params){

        $.extend(_classNames, params);
        _$classNames.toggleItem = $(_classNames.toggleItem);
        _$classNames.parentWrapper = $(_classNames.parentWrapper);
        _$classNames.filters = $(_classNames.filters);
        _$classNames.window = $(window);
        _thisPage = Modules.haveFilters(_$classNames.filters);


        _$classNames.toggleItem.on(_clickEvent, function(e){
        	e.preventDefault();
        	// _windowWidth = _$classNames.window.width();
        	// _mobile = Modules.isMobail(_windowWidth);
        	self._checkCondition();
        	return false;
        });        

        return self;

    }

    self._checkCondition = function(){
    	if (_$classNames.parentWrapper.hasClass(_classNames.openFiltersClass)){
    		self._hideFilters();
            if ($(window).width()<=1023){
                $('html, body').toggleClass('overflow');
            }
    	}
    	else{
    		self._showFilters();
            if ($(window).width()<=1023){
                $('html, body').toggleClass('overflow');
            }
    	}

    	return self;
    }

    self._hideFilters = function(){
    	_$classNames.parentWrapper.removeClass(_classNames.openFiltersClass);

    	return self;
    }

    self._showFilters = function(){
    	_$classNames.parentWrapper.addClass(_classNames.openFiltersClass);

    	return self;
    }

    return {

        init: function(params){

            self._construct(params);

            return self;

        }

    }

}(Modules.ToggleFilters || {}, jQuery));


Modules.PossibleSlider = (function(self,$){

	var _classNames = {
		sliderWrapper: '',
		sliderItem: '',
		sliderItemWrapper: '',
		sliderInit: '',
		owl: ''
	}
	var _$classNames = {
		sliderWrapper: '',
		sliderItem: '',
		sliderItemWrapper: '',
		owl: ''
	}

	self._construct = function(params){

        $.extend(_classNames, params);
        _$classNames.sliderWrapper = $(_classNames.sliderWrapper);
        _$classNames.sliderItem = $(_classNames.sliderItem);
        _$classNames.sliderItemWrapper = $(_classNames.sliderItemWrapper);
        _$classNames.owl = $(_classNames.owl);

        self._checkNumberOfItems();  

        return self;

    }

    self._checkNumberOfItems = function(){

    	if ((_$classNames.sliderItem.length)>=6){
    		self._sliderInit();
    	}

    	return self;

    }

    self._sliderInit = function(){

		var owl = _$classNames.owl.owlCarousel({
			items: 5,
			loop: true,
			dots: false,
		  	nav: false,
		  	autoplay: true,
		  	autoplayTimeout: 2000,
		  	autoplayHoverPause: true,
		  	autoplaySpeed: 2000,
		  	responsive:{
		  		1025:{
		  			items:5
		  		},
                768:{
                    items:3
                },
		  		0:{
		  			items:1,
		  			autoplayTimeout: 5000
		  		}
		  	}
		});

		_$classNames.owl.addClass(_classNames.sliderInit);

    	return self;
    }

    return {

        init: function(params){

            self._construct(params);

            return self;

        }

    }

}(Modules.PossibleSlider || {}, jQuery));


Modules.PossibleSliderExamples = (function(self,$){

    var _classNames = {
        sliderWrapper: '',
        sliderItem: '',
        owl: ''
    }
    var _$classNames = {
        sliderWrapper: '',
        sliderItem: '',
        owl: ''
    }

    self._construct = function(params){

        $.extend(_classNames, params);
        _$classNames.sliderWrapper = $(_classNames.sliderWrapper);
        _$classNames.sliderItem = $(_classNames.sliderItem);
        _$classNames.owl = $(_classNames.owl);

        self._checkNumber();  

        return self;

    }

    self._checkNumber = function(){

        if ((_$classNames.sliderItem.length)>=2){
            self._sliderInit();
        }

        return self;

    }

    self._sliderInit = function(){

        var owl = _$classNames.owl.owlCarousel({
            loop: false,
            dots: false,
            nav: false,
            autoplay: false,
            items: 1
        });

        return self;
    }

    return {

        init: function(params){

            self._construct(params);

            return self;

        }

    }

}(Modules.PossibleSliderExamples || {}, jQuery));


Modules.ImageMechanics = (function(self,$){

	var _classNames = {
		bigImage: '',
        smallImg: '',
        smallImgWrapper: '',
        imgPopUp: '',
        closeImg: '',
        bigImageWrapper: '',
        active: '',
        imgOpen: ''
	}
	var _$classNames = {
		bigImage: '',
        smallImg: '',
        smallImgWrapper: '',
        imgPopUp: '',
        closeImg: '',
        bigImageWrapper: '',
        imgOpen: ''
	}
	var dataGetAttr;
	var dataPath;
	var dataAttr;
	var _clickEvent = 'click';
	var clickedElem;
	var _this;
	var $imgToUp;
	var bigImgWrHeight;

	self._construct = function(params){

        $.extend(_classNames, params);
        _$classNames.bigImage = $(_classNames.bigImage);
        _$classNames.smallImg = $(_classNames.smallImg);
        _$classNames.smallImgWrapper = $(_classNames.smallImgWrapper);
        _$classNames.imgPopUp = $(_classNames.imgPopUp);
        _$classNames.closeImg = $(_classNames.closeImg);
        _$classNames.bigImageWrapper = $(_classNames.bigImageWrapper);
        _$classNames.imgOpen = $(_classNames.imgOpen);

        _$classNames.smallImg.on(_clickEvent, function(){
        	_this = this;
        	dataAttr = 'id';
        	self._getDataAttr(_this, dataAttr);
        	self._changeBigImage();
        });

        _$classNames.bigImage.on(_clickEvent, function(){        	
        	_this = this;
        	dataAttr = 'path';
        	self._getDataAttr(_this, dataAttr);
        	self._mobileCheck();
        });

        return self;

    }

    self._mobileCheck = function(){

        if ($(window).width()>=768) {
            self._openBigImage();
        }

        return self;

    }

    self._changeBigImage = function(){

    	$imgToUp = _$classNames.bigImageWrapper.find('[data-id="' + dataGetAttr + '"]');

    	bigImgWrHeight = _$classNames.bigImageWrapper.outerHeight();

    	_$classNames.bigImage.removeClass(_classNames.active);
    	$imgToUp.addClass(_classNames.active);

    	if(bigImgWrHeight>_$classNames.bigImageWrapper.height())
    		_$classNames.bigImageWrapper.height(bigImgWrHeight);

    	return self;

    }

    self._getDataAttr = function(_this, dataAttr){
    	console.log(dataAttr)

    	dataGetAttr = $(_this).data(dataAttr);
    	console.log(dataGetAttr)

    	return self;

    }

    self._openBigImage = function(){

    	_$classNames.imgPopUp.addClass(_classNames.active)
    	_$classNames.imgOpen.attr('src', dataGetAttr )

		_$classNames.closeImg.on(_clickEvent, function(e){
			e.preventDefault();
			self._closeBigImage();
		});	

    	return self;

    }

    self._closeBigImage = function(){

    	_$classNames.imgPopUp.removeClass(_classNames.active)

    	return self;

    }

    return {

        init: function(params){

            self._construct(params);

            return self;

        }

    }

}(Modules.ImageMechanics || {}, jQuery));


(function($){
	$(function(){
    	var possibleSlider = new Modules.PossibleSlider.init({
            sliderWrapper: '.similiar_prods',
            sliderItem: '.sim__prod',
            sliderItemWrapper: '.similiar_prods li',
            sliderInit: 'owled',
            owl: '.owl-carousel'
    	});
    });
    $(function(){
        var possibleSliderExamples = new Modules.PossibleSliderExamples.init({
            sliderWrapper: '.examples_wr',
            sliderItem: '.examples_wr img',
            owl: '.examples_wr'
        });
    });
    $(function(){
    	var ultravioletTheme = new Modules.UltravioletTheme.init({
            startThemeClass: 'dark-on',
            closeThemeClass: 'dark-off',
            themeClass: '.dark',
            startThemeTogle: '.ultraviolet',
            closeThemeTogle: '.dark_off'
    	});
    });
    $(function(){
    	var toggleFilters = new Modules.ToggleFilters.init({
            toggleItem: '.toggle_filters',
            parentWrapper: '.deal_with_filters',
            openFiltersClass: 'filters_opened',
            filters: '.filters'
    	});
    });
    $(function(){
    	var imageMechanics = new Modules.ImageMechanics.init({
            bigImage: '.big_img_wr img',
            bigImageWrapper: '.big_img_wr',
            smallImg: '.small_img_wr img',
            smallImgWrapper: '.small_img_wr',
            imgPopUp: '.img_pop_up',
            imgOpen: '.img_pop_up img',
            closeImg: '.img_pop_up__close',
            active: 'active'
    	});
    });
})(jQuery);


$(document).ready(function(){

	$(document).on("click", ".burgerbutton", function (e) {
		e.preventDefault();
		$(this).toggleClass('active');
        $(this).closest('.head').toggleClass('open');
		$('html, body').toggleClass('overflow');
	});

	function footerSizing() {
		var footerHeight = $('.footer').height();
        if ($(window).width()>=1024){
		  $('section').last().css('margin-bottom', footerHeight + 'px');
        }
	}

    $('.about__desc-title').click(function(){
        if ($(window).width()<=560){
            $(this).closest('.desc_wr').toggleClass('opened');
        }
    });

	$(window).resize(footerSizing);
	footerSizing();

	// $('a').click(function(e){
	// 	e.preventDefault();
	// })

});