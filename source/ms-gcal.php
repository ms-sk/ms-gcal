<?php
/**
 * @package ms-gcal
 */
/*
Plugin Name: MS GCal
Plugin URI: https://github.com/ms-sk
Description: The solution for g calendar integration in wp.
Version: 2.1.40
Author: ms-sk
Author URI: https://github.com/ms-sk
License: MIT
Text Domain: ms gcal
*/

function ms_gcal_enqueue_scripts() {

    wp_enqueue_style( 'cal-style', plugin_dir_url( __FILE__ ) . 'style/cal.css', false );

    wp_enqueue_script( 'uribuilder-js', plugin_dir_url( __FILE__ ) . 'js/uriBuilder.js', array('jquery'), false );

    wp_enqueue_script( 'divbuilder-js', plugin_dir_url( __FILE__ ) . 'js/divBuilder.js', array('jquery'), false );


    wp_enqueue_script( 'calendar-js', plugin_dir_url( __FILE__ ) . 'js/calendar.js', array('jquery'), false );

    wp_enqueue_script( 'main-js', plugin_dir_url( __FILE__ ) . 'js/main.js', array('jquery'), false );
}

add_action( 'wp_enqueue_scripts', 'ms_gcal_enqueue_scripts' );

function ms_cal_lv($attr) {

    $randdiv = 'a'.substr(md5(microtime()),rand(0,26),10);

    $a = shortcode_atts( array(
        'apikey' => 'AIzaSyARemaTKFpdMdOQWmuAJXAr8jToBO2qark',
        'calendarid' => 'ms.sk.git@gmail.com',
    ), $attr );

    $script = "<div id='$randdiv'></div>
    <script>load(\"{$a['apikey']}\",\"{$a['calendarid']}\",\"$randdiv\");</script>";

    return $script;
}

add_shortcode( 'ms_cal_lv', 'ms_cal_lv' );