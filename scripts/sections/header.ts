$('./body') {
	$("./div[@id='nav']") {
		attribute("data-ur-set", "toggler")
		$("./div[@id='nav-inner']") {
			
			insert_bottom("div", class: "mw_header-box"){
			
				move_here("../../../div[@id='toolbar']/div/div/ul/li[1]/a", "bottom")

				move_here("../../../div[@id='toolbar']/div/div/div[@class='pellet cool']", "bottom"){
					attribute("class", "mw_cart")
				}
				
				move_here("../../../div[@id='toolbar']/div/div/div[@class='pellet hot']", "bottom"){
					attribute("class", "mw_checkout")
				}
				
			}
			
			/*** Menu & Search switch ***/
			insert_top("div", class: "mw_navicons"){
				insert("a", class: "mw_menu-icon"){
					attribute("data-ur-toggler-component", "button")
					attribute("data-ur-id", "mw_menu")
				}
				insert("a", class: "mw_search-icon"){
 					attribute("data-ur-toggler-component", "button")
					attribute("data-ur-id", "mw_search")
				}
			}
						
		}
		insert_bottom("div", class: "mw_nav-menu"){
			wrap("div", class: "mw_nav-menu-wrapper"){
				attribute("data-ur-toggler-component", "content")
				attribute("data-ur-id", "mw_menu")
			}
			
			
			move_here("../../div[@id='nav-inner']/ul", "top"){
				attribute("class", "mw_main-menu")
			}
		}
		insert_bottom("div", class: "mw_search"){
			attribute("data-ur-id", "mw_search")
			attribute("data-ur-toggler-component", "content")
			move_here("../div[@id='nav-inner']/div[@class='search-box']", "top")
		}
	}
}