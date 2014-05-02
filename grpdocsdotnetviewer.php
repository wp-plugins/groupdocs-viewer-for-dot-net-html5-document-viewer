<?php

/*
Plugin Name: GroupDocs Viewer for .NET | HTML5 Document Viewer
Plugin URI: http://www.groupdocs.com/
Description: This plugin is developed based on the GroupDocs HTML5 document viewer for .NET library, which enables you to display over 45 different types of documents right on your WordPress website.
Author: GroupDocs Team <support@groupdocs.com>
Author URI: http://www.groupdocs.com/
Version: 1.0.0
License: GPLv2
*/

include_once('grpdocs-functions.php');


function groupdocs_viewer_dotnet_getdocument($atts)
{
    extract(shortcode_atts(array(
        'url' => '',
        'width' => '',
        'height' => ''
    ), $atts));


    return "<iframe src='{$url}?referer=silverstripe-dotnet-viewer/1.0.0' frameborder='0' width='" . $width . "' height='" . $height ."'></iframe>";

}

//activate shortcode
add_shortcode('grpdocs_dotnet_viewer', 'groupdocs_viewer_dotnet_getdocument');

// add quicktag
add_action('admin_print_scripts', 'groupdocs_viewer_dotnet_admin_print_scripts');

// add tinymce button
add_action('admin_init', 'groupdocs_viewer_dotnet_mce_addbuttons');






