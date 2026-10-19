"use strict";
jQuery(document).ready(function($){
    
    var topHeader = 0;
    
    if( $('.single').find('#top-header').length > 0 ){
        topHeader   = parseFloat( $('#top-header').innerHeight() );
    }
    
    var mainHeader  = parseFloat( $('#main-header').innerHeight() );
    
    var totalHeight = 0;
    
    if( $('body').hasClass('el-single-template') ){
        if( $('.el-single-post-template-classic.et_pb_pagebuilder_layout.et_full_width_page.et_transparent_nav').find('.container > .el-post-header:first-child').length > 0 ){
            totalHeight = ( topHeader + mainHeader ) + 50 + 'px';
            $('.el-single-post-template-classic.et_pb_pagebuilder_layout.et_full_width_page.et_transparent_nav').find('.container > .el-post-header:first-child').css('padding-top', totalHeight);
        }
        
        if( $('.el-single-post-template-classic.et_pb_pagebuilder_layout.et_full_width_page.et_transparent_nav').find('.container > .el-single-top-code').length > 0 ){
            totalHeight = ( topHeader + mainHeader ) + 50 + 'px';
            $('.el-single-post-template-classic.et_pb_pagebuilder_layout.et_full_width_page.et_transparent_nav').find('.container > .el-single-top-code').css('padding-top', totalHeight);
        }
        
        if( $('.el-single-post-template-prime.et_pb_pagebuilder_layout.et_full_width_page.et_transparent_nav').find('.container > .el-post-author:first-child').length > 0 ){
            totalHeight = ( topHeader + mainHeader ) + 15 + 'px';
            $('.el-single-post-template-prime.et_pb_pagebuilder_layout.et_full_width_page.et_transparent_nav').find('.container > .el-post-author:first-child').css('padding-top', totalHeight);
        }
        
        if( $('.el-single-post-template-prime.et_pb_pagebuilder_layout.et_full_width_page.et_transparent_nav').find('.container > .el-single-top-code').length > 0 ){
            totalHeight = ( topHeader + mainHeader ) + 50 + 'px';
            $('.el-single-post-template-prime.et_pb_pagebuilder_layout.et_full_width_page.et_transparent_nav').find('.container > .el-single-top-code').css('padding-top', totalHeight);
        }
        
        if( $('.el-single-post-template-stellar.et_pb_pagebuilder_layout.et_full_width_page.et_transparent_nav').find('.container > .el-template-stellar:first-child .el-single-top-code').length > 0 ){
            totalHeight = ( topHeader + mainHeader ) + 50 + 'px';
            $('.el-single-post-template-stellar.et_pb_pagebuilder_layout.et_full_width_page.et_transparent_nav').find('.container > .el-template-stellar:first-child .el-single-top-code').css('padding-top', totalHeight);
        }

        if( $('.el-single-post-template-lush.et_pb_pagebuilder_layout.et_full_width_page.et_transparent_nav').find('.container > .el-post-header:first-child').length > 0 ){
            totalHeight = ( topHeader + mainHeader ) + 'px';
            $('.el-single-post-template-lush.et_pb_pagebuilder_layout.et_full_width_page.et_transparent_nav').find('.container > .el-post-header:first-child').css('padding-top', totalHeight);
        }

        if( $('.el-single-post-template-lush.et_pb_pagebuilder_layout.et_full_width_page.et_transparent_nav').find('.container > .el-single-top-code').length > 0 ){
            totalHeight = ( topHeader + mainHeader ) + 50 + 'px';
            $('.el-single-post-template-lush.et_pb_pagebuilder_layout.et_full_width_page.et_transparent_nav').find('.container > .el-single-top-code').css('padding-top', totalHeight);
        }

        if( $('.el-single-post-template-valiant.et_pb_pagebuilder_layout.et_full_width_page.et_transparent_nav').find('.container > .el-post-header:first-child').length > 0 ){
            totalHeight = ( topHeader + mainHeader ) + 50 + 'px';
            $('.el-single-post-template-valiant.et_pb_pagebuilder_layout.et_full_width_page.et_transparent_nav').find('.container > .el-post-header:first-child').css('padding-top', totalHeight);
        }
    }
    
    /* Play & Pause for Video */
    $('body').on('click', '.et_main_video_container.el-no-background .mejs-overlay-play .mejs-overlay-button', function(){
        $(this).parents('.et_main_video_container').css('z-index', '9999');
        $(this).parents('.et_main_video_container').find('.mejs-controls').css('z-index', '2');
    });
    
    $('body').on('click', '.et_main_video_container.el-no-background .mejs-overlay-play', function(){
        if( $(this).parents('.et_main_video_container').find('.mejs-playpause-button.mejs-pause').length > 0 ){
            $(this).parents('.et_main_video_container').css('z-index', '1');
            $(this).parents('.et_main_video_container').find('.mejs-controls').css('z-index', '0');
        }else{
            $(this).parents('.et_main_video_container').css('z-index', '9999');
        }
    });
    
    $('body').on('click', '.et_main_video_container.el-no-background .mejs-mediaelement', function(){
        if( $(this).parents('.et_main_video_container').find('.mejs-playpause-button.mejs-pause').length > 0 ){
            $(this).parents('.et_main_video_container').css('z-index', '1');
            $(this).parents('.et_main_video_container').find('.mejs-controls').css('z-index', '0');
        }else{
            $(this).parents('.et_main_video_container').css('z-index', '9999');
        }
    });
    
    $('body').on('click', '.et_main_video_container.el-no-background .mejs-playpause-button.mejs-play', function(){
        $(this).parents('.et_main_video_container').css('z-index', '9999');
    });
    
    $('body').on('click', '.et_main_video_container.el-no-background .mejs-playpause-button.mejs-pause', function(){
        $(this).parents('.et_main_video_container').css('z-index', '1');
        $(this).parents('.et_main_video_container').find('.mejs-controls').css('z-index', '0');
    });
    
    $('body').on('click', '.et_main_video_container.el-no-background .fluid-width-video-wrapper iframe', function(){
        $(this).parents('.et_main_video_container').css('z-index', '9999');
    });
    
    
    /* Play & Pause for Audio */
    $('body').on('click', '.el-post-header .et_audio_content .mejs-playpause-button.mejs-play', function(){
        $(this).parents('.et_audio_content').css('z-index', '9999');
    });
    
    $('body').on('click', '.el-post-header .et_audio_content .mejs-playpause-button.mejs-pause', function(){
        $(this).parents('.et_audio_content').css('z-index', '1');
    });
    
    
    /* Enable/Disable Audio/Video player option */
    $('.el-post-header .el-player-button').on('click', function(){
        var $this = $(this);
        $this.parent('div').addClass('active-player');
        $this.fadeOut('300', function(){
            if( $this.next('div').find('.el-player-close-button').length <= 0 ){
                $this.next('div').prepend('<span class="el-player-close-button"></span>');
            }
            $this.next('div').fadeIn('fast');
        });
    });
    
    $('body').on('click', '.el-post-header .el-player-close-button', function(){
            $(this).parent('div').fadeOut('300', function(){
            if( $(this).parent('div').find('video').length > 0 || $(this).parent('div').find('audio').length > 0 ){
                $('.mejs-playpause-button.mejs-pause').trigger('click');
            }
            if( $(this).parent('div').find('iframe').length > 0 ){
                 var src = $(this).parent('div').find('iframe').attr('src');
                 $(this).parent('div').find('iframe').attr('src', '');
                 $(this).parent('div').find('iframe').attr('src', src);
            }
            $(this).parents('.el-post-header').find('.active-player').removeClass('active-player');
            $(this).parents('.el-post-header').find('.el-player-button').fadeIn('fast');
        });
    });
});