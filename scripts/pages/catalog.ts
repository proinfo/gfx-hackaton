$("./body") {
	add_class("mw_catalog")
	
	$("./div[@id='content']") {
		$("./div[@id='content-inner']") {
			$("./div[@class='content-box']") {
				$("./div[@class='row']") {
					
					$("./div[@class='col-06']") {
						$("./div[@class='row']") {
							$("./div[@class='parametricNav']") {
								$("./div") {
									add_class("mw_sidecol-" + index())
								}
								$("./div[@class='gutter-01 mw_sidecol-2']") {
									$("./div[@class='col-06']") {
										attribute("data-ur-set", "tabs")
										
										/* Filter items */
										insert_bottom("div", class: "mw_filters tertiary content-box"){
											insert_top("h2", class: "title alt reverse"){
												inner("Narrow Items By")
											}
										
										}
										
										
										$("./div[@class='tertiary content-box filters tr br']") {
											
											$("./div[contains(@class, 'filterBar')][1]") {
												attribute("data-ur-state", "enabled")
											}
											
											$("./div[contains(@class, 'filterBar')]") {
												add_class("mw_filterno-" + index())
												attribute("data-ur-tabs-component", "button")
												attribute("data-ur-tab-id", "mw_tabno" + index())
												copy_to("../../div[@class='mw_filters tertiary content-box']", "bottom")
											}
											
											$("./ul[contains(@class, 'filterCategories')]") {
												add_class("mw_filterno-" + index())																																			
												attribute("name", "value")
												
												attribute("data-ur-tabs-component", "content")
												attribute("data-ur-tab-id", "mw_tabno" + index())												
											}																										
											
											$("./ul[contains(@class, 'filterCategories')][1]") {
												attribute("data-ur-state", "enabled")
											}	
																																																
										}																														
										
									}
								}
							}
						}
					}
					
					$("./div[@class='col-18']") {
						$("./div[@id='grid']") {
							$("./div[@id='results']") {
								$(".//a[contains(@href, 'http://www.thenorthface.com')]") {
								}
							}
						}
					}
					
				}
			}
		}
	}
		
}