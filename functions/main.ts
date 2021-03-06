## 2012-10-06 nebojsa
 # HACKATON
 # REF_URL: url
 ####################

@func XMLNode.gfx_flip(Text %name){
	# Set attributes
	attribute("gfx_type", "gfx_flip")
	attribute("gfx_flip_item", %name)
	
	# Generate and insert script on page
	$("/html/head") {
		insert_bottom("script", type: "text/javascript"){
			attribute("charset", "utf-8")
				inner("jQuery(function($) {$('[gfx_flip_item=" + %name + "]').gfxFlip();});")
		}
	}
}

@func XMLNode.gfx_flip_button(Text %name){

	# Set attributes
	attribute("gfx_type", "gfx_flip_button")
	$("//*[@gfx_type='gfx_flip_button']") {
		attribute("gfx_flip_button_item", index())
	}	
	%selector = fetch("./@gfx_flip_button_item")

	$("/html/head") {
		insert_bottom("script", type: "text/javascript"){
			attribute("charset", "utf-8")
			inner("jQuery(function($) {$('[gfx_flip_button_item=" + %selector + "]').click(function() { return $('[gfx_flip_item=" + %name + "]').trigger('flip');});});")
		}
	}
}

@func XMLNode.gfx_cube(Text %name){
	
	# Set attributes
	attribute("gfx_type", "gfx_cube")
	attribute("gfx_cube_item", %name)
	
	# Generate and insert script on page
	$("/html/head") {
		insert_bottom("script", type: "text/javascript"){
			attribute("charset", "utf-8")
			inner("
			jQuery(function($) {
			var source = 	$('[gfx_cube_item=" + %name + "]');
			var cube_width = source.css('width').slice(0,-2);
			var cube_height = source.css('height').slice(0,-2);
			
			$('[gfx_cube_item=" + %name + "]').gfxCube({
				width: cube_width, 
				height: cube_height
				});
			});")
		}
	}
	
}

@func XMLNode.gfx_cube_button(Text %name, Text %side){
	# Set attributes
	attribute("gfx_type", "gfx_cube_button")
	attribute("gfx_cube_button", %side)
	attribute("gfx_cube_item", %name)
	
	# Generate and insert script on page	
	$("/html/head") {
		insert_bottom("script", type: "text/javascript"){
			attribute("charset", "utf-8")
			inner("jQuery(function($) {$('[gfx_cube_button=" + %side + "][gfx_cube_item=" + %name + "]').click(function() { return $('[gfx_cube_item=" + %name + "]').trigger('cube', '" + %side + "');});});")
		}
	}
		
}

@func XMLNode.gfx_overlay_button(Text %name){
	
	# Set attributes
	attribute("gfx_type", "gfx_overlay")
	attribute("gfx_overlay_button", %name)

	# Generate and insert script on page	
	$("/html/head") {
		insert_bottom("script", type: "text/javascript"){
			attribute("charset", "utf-8")
			inner("jQuery(function($) {$('[gfx_overlay_button=" + %name + "]').click(function() { return $.gfxOverlay('[gfx_overlay_content=" + %name + "]');});});")
		}
	}	
	
}

@func XMLNode.gfx_overlay_content(Text %name){
	# Set attributes
	attribute("gfx_type", "gfx_overlay")
	attribute("gfx_overlay_content", %name)
}

####################
### Site Functions
####################

# BTN DELEGATE
# 
# EXAMPLE CSS
# .mw_hide2 {
#   visibility: hidden!important;
#   position: absolute!important;
#   left: -99999px!important;
# }

#  EXAMPLE TS
#
#  $(".//input[@type='submit']") {
#    attributes(id: "mw_id", alt: "mw_alt")
#
#    btn_delegate() {
#      add_class("mw_btn_500000000050")
#      // in a pinch you can do other scoping in here
#    }
#  }

@func XMLNode.btn_delegate() {
  %class = fetch("./@class")
  %mw_id = concat("mw_", name(), "_", fetch("./@id"))
  %text = fetch("./@alt")

  %text {
    replace(/_/, " ")
  }

  insert_before("div", %text, class: %class) {
    attributes(onclick: concat("var event=arguments[0]||window.event;event.preventDefault;event.stopPropagation;x$('[data-mw-btn-id=\"", %mw_id, "\"]').click()"))

    yield()
  }

  attributes(data-mw-btn-id: %mw_id)
  add_class("mw_hide2")
}


# A compendium of ways to "dump" tables
#
#
# EXAMPLE::
# 
# table_dump(".//table") {
#   $("./div[class='some_class']") {
#     add_class("mw_more_scopes")
#   }
# }
#
#
@func XMLNode.table_dump(Text %xpath){
  $(%xpath) {
    name("div")
    add_class("mw_was_table")

    $(".//table | .//tr | .//td | .//th | .//thead | .//tfoot | .//tbody | .//col | .//colgroup | .//caption") {
      %i = index()
      %n = name()
      name("div")
      attributes(data-mw-id: concat("mw_dump_", %n, %i), width: "")
      add_class(concat("mw_was_", %n))
    }

    yield()
  }
}



# Remove Styles Functions
@func XMLNode.remove_external_styles() {
  remove(".//link[@rel='stylesheet']")
}
@func XMLNode.remove_internal_styles() {
  remove(".//style")
}
@func XMLNode.remove_all_styles() {
  remove(".//link[@rel='stylesheet']|.//style")
}

# Remove Scripts
@func XMLNode.remove_external_scripts() {
  remove(".//script[@src]")
}
@func XMLNode.remove_internal_scripts() {
  remove(".//script[not(@src)]")
}
@func XMLNode.remove_scripts() {
  remove(".//script")
}
@func XMLNode.remove_desktop_js() {
  remove("//script[@src and (not(@data-keep) or @data-keep='false')]")
}

# Remove HTML Comment Tags
@func XMLNode.remove_html_comments() {
  remove(".//comment()")
}

# Clean Meta Tags
@func XMLNode.insert_mobile_meta_tags() {
  # Remove only existing meta tags for which we will add our own
  remove(".//meta[@name='viewport']|.//meta[@name='format-detection']")

  # Add our meta tags
  $("/html/head") {
    insert("meta", http-equiv: "Content-Type", content: "text/html")
    insert("meta", name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0")
    insert("meta", name: "format-detection", content: "telephone=no")

    # Inject a canonical link as long as there isn't already one. 
    $canonical_found = "false"
    $(".//link[@rel='canonical']") {
      $canonical_found = "true"
    }
    match($canonical_found) {
      with(/false/) {
        insert("link", rel: "canonical", href: concat("http://", $source_host, $path))
      }
    }
  }
}

# Add in our Assets
@func XMLNode.add_assets() {
  $("./head") {
    insert("link", rel: "stylesheet", type: "text/css", href: sass($device_stylesheet))
    insert("link", rel: "shortcut icon", href: asset("images/favicon.ico"))
    # The images below are placeholders, get real ones from the client
    # Change to -precomposed to not have the glass effect on the icons
    insert("link", rel: "apple-touch-icon", href: asset("images/apple-touch-icon-57x57.png"))
    insert("link", rel: "apple-touch-icon", href: asset("images/apple-touch-icon-114x114.png"))
    insert_top("script", data-keep: "true", type: "text/javascript", src: asset("javascript/main.js"))
  }
}

# Rewrite items
@func XMLNode.rewrite_links() {
  $rewriter_url = "false"
  $("./head") {
    # Add AJAX rewrite config to rewrite items via JS (need passthrough_ajax.js)
    insert_top("meta") {
      attribute("id", "mw_link_passthrough_config")
      attribute("rewrite_link_matcher", $rewrite_link_matcher)
      attribute("rewrite_link_replacement", $rewrite_link_replacement)
    }
  }
  $("./body") {
    # Rewrite links
    $(".//a") {
      attribute("href") {
        value() {
          rewrite("link")
        }
      }
    }
    $("/html/head/base[@href]") {
      $rewriter_url = fetch("./@href")
      $rewriter_url {
        replace(/.*(\/\/[\w\.]+\/).*/, "\\1")
      }
      attribute("href") {
        value() {
          rewrite("link")
        }
      }
    }
    # Rewrite form actions
    $(".//form") {
      attribute("action") {
        value() {
          rewrite("link")
        }
      }
    }
  }
}

# Absolutize Items 
@func XMLNode.absolutize_srcs() {
  # Absolutize IMG and SCRIPT SRCs
  var("slash_path") {
    # the 'slash_path' is the path of this page without anything following it's last slash
    set($path)
    replace(/[^\/]+$/, "")
    # turn empty string into a single slash because this is the only thing separating the host from the path relative path
    replace(/^$/, "/")
  }
  # Find images and scripts that link to an external host
  $(".//img|.//script[@src]") {
    # GOTCHAS :: Watch out for captcha images, they most likely should
    # not be absolutized
    $src = fetch("./@src")
    match($rewriter_url) {
      not(/false/) {
        # Do nothing :: Use base tag value
      }
      else() {
        $rewriter_url = $source_host
      }
    }
    # skip URLs which: are empty, have a host (//www.example.com), or have a protocol (http:// or mailto:)
    match($src, /^(?![a-z]+\:)(?!\/\/)(?!$)/) {
      attribute("src") {
        value() {
          match($src) {
            with(/^\//) {
              # host-relative URL: just add the host
              prepend(concat("//", $rewriter_url))
            }
            else() {
              # path-relative URL: add the host and the path
              prepend(concat("//", $rewriter_url, $slash_path))
            }
          }
        }
      }
    }
  }
}

@func XMLNode.relocate_scripts() {
  $("/html/body/script") {
    move_to("/html/body", "bottom")
  }
}

# This function lateloads all images and moves scripts to the bottom of the body, place function at end of html.ts
@func XMLNode.lateload() {
  $(".//script") {
    move_to("//html/body")
  }
  $(".//img") {
    attribute("src") {
      name("data-ur-ll-src")
    }
  }
}
