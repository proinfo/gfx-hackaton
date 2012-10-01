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
										
										$("./div[@class='tertiary content-box filters tr br']") {
											$("./div[contains(@class, 'filterBar')]") {
												add_class("mw_filterno-" + index())
											}
											$("./ul[contains(@class, 'filterCategories')]") {
												add_class("mw_filterno-" + index())
											}
											
											$("./ul[contains(@class, 'filterCategories')]") {
												
											}
											
										}										
										/* Filter items */
										insert_bottom("div", class: "mw_filters"){
											insert_top("h2", class: "title alt reverse"){
												inner("Filters")
											}
										
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	
}