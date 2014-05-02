// closure to avoid namespace collision
(function(){
    // creates the plugin

    tinymce.create('tinymce.plugins.groupdocs_dotnet', {
        init : function(ed,url) {
            ed.addButton('groupdocs_dotnet_button', {
                title : 'GroupDocs.Viewer for .NET',
                image : url + '/../images/grpdocs-dotnet-button.png',
                onclick : function() {
                    // triggers the thickbox

                    var width = jQuery(window).width(), H = jQuery(window).height(), W = ( 720 < width ) ? 720 : width;

                    tb_show( 'GroupDocs.Viewer for .NET Shortcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=groupdocs_dotnet-form' );
                }
            });
        }
    });

    // registers the plugin. DON'T MISS THIS STEP!!!
    tinymce.PluginManager.add('groupdocs_dotnet', tinymce.plugins.groupdocs_dotnet);

    // executes this when the DOM is ready
    jQuery(function(){
        // creates a form to be displayed everytime the button is clicked
        // you should achieve this using AJAX instead of direct html code like this
        var form = jQuery("<center><div id=\"groupdocs_dotnet-form\" style=\"margin-left:80px\" ><table id=\"groupdocs_dotnet-table\" class=\"form-table\" style=\"margin-left:120px\">\
			<tr >\
                <td style=\"margin-top:20px\"  class=\"mceActionPanel\"><strong>Url to installed GroupDocs Viewer .NET</strong></td>\
            </tr>\
            <tr>\
                <td valign=\"top\" style=\"margin-left:20px\"><input name=\"gd_dotnet_viewer\" type=\"text\"  id=\"groupdocs_dotnet-url\" style=\"width:300px;\" value=\"\"/><br/><span id=\"uri-note\"></span></td>\
            </tr>\
            <tr style=\"margin-top:20px\">\
                <td valign=\"top\" style=\"width:200px;\"><strong>Height </strong><input name=\"height\" type=\"text\" class=\"opt dwl\" id=\"groupdocs_dotnet-height\" size=\"6\" style=\"text-align:left\" />px <span style='font-style: italic'>(Default value: 1400)</span><br/></td>\
            </tr>\
            <tr >\
                <td valign=\"top\"><strong>Width </strong><input name=\"width\" type=\"text\" class=\"opt dwl\" id=\"groupdocs_dotnet-width\" size=\"6\" style=\"text-align:left\" />px  <span style='font-style: italic'>(Default value: 1000)</span><br/></td>\
            </tr>\
		</table>\
		<p class=\"submit\">\
			<input type=\"button\" id=\"groupdocs_dotnet-submit\" class=\"button-primary\" value=\"Insert Shortcode\" name=\"submit\" style=\"margin-left:120px\"/>\
		</p>\
		</div></center>");

        var table = form.find('table');
        form.appendTo('body').hide();

        // handles the click event of the submit button
        form.find('#groupdocs_dotnet-submit').click(function(){
            // defines the options and their default values
            // again, this is not the most elegant way to do this
            // but well, this gets the job done nonetheless
            var options = {
                'url'      : '',
                'width'    : '1050',
                'height'   : '650'
            };
            var shortcode = '[grpdocs_dotnet_viewer';

            for( var index in options) {

                var value = table.find('#groupdocs_dotnet-' + index).val();


                // attaches the attribute to the shortcode only if it's different from the default value
                if ( value !== options[index] )
                    shortcode += ' ' + index + '="' + value + '"';
            }

            shortcode += ']';

            // inserts the shortcode into the active editor
            tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);

            // closes Thickbox
            tb_remove();
        });
    });
})()