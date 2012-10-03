$("./body") {
	add_class("mw_product")
	$("./img") {
		remove()
	}
	$("./div[@id='content']") {
		$("./div[@id='content-inner']") {
			$("./div[@class='content-box tertiary']") {
				$("./div[@id='pdpContainer']") {
					insert_top("div", class: "mw_top-content"){
						insert_top("div", class: "mw_left")
						insert_bottom("div", class: "mw_right")
					}
					
					$("./div[@class='col-13']") {
						$("./div[@class='displayView']") {
							$("./div[@class='productViews']") {
								move_to("..", "bottom")
							}
							$("./div[@class='embedFix']") {
								$("./div[@id='displayContainer']") {
									$("./img") {
										attribute("width", "600")
										attribute("height", "600")
									}
								}
							}
						}
					}
					insert_bottom("ul", class: "mw_bottom")
					$("./div[@class='col-11']") {
						
						$("./div[1]") {							
							$("./ul[@id='AMVY']") {
								$("./li[@class='productName']") {
									move_to("../../../../div[@class='mw_top-content']/div[@class='mw_left']", "top")
									name("div")
								}
								$("./li[@class='productPrice']") {
									move_to("../../../../div[@class='mw_top-content']/div[@class='mw_left']", "bottom")
									name("div")
								}
								$("./li[@class='productBadgeSm']") {
									move_to("../../../../div[@class='mw_top-content']/div[@class='mw_left']", "bottom")
									name("div")
								}
								$("./li[@class='productStyle']") {
									move_to("../../../../div[@class='mw_top-content']/div[@class='mw_right']", "bottom")
									name("div")
								}
								$("./li[@class='productRatings']") {
									move_to("../../../../div[@class='mw_top-content']/div[@class='mw_right']", "bottom")
									name("div")
								}
								$("./li[@class='productSocial']") {
									move_to("..", "bottom")
								}
								$("./li[@class='productColors']") {
									insert_top("span", class: "mw_colors"){
										inner("16 Colors:")
									}
									insert_top("span", class: "mw_title"){
										inner("1")
									}									
									$("./span[@class='title']") {
										remove_text_nodes()
									}
								}
								$("./li[@class='productSize']") {
									insert_top("span", class: "mw_title"){
										inner("2")
									}
								}
								$("./li[@class='productQuantity']") {
									insert_top("span", class: "mw_title"){
										inner("3")
									}
								}				
								$("./li[@class='productButtons']") {
									insert_top("span", class: "mw_title"){
										inner("4")
									}
								}					
								$("./li[@id='in-store-link']") {
									move_to("../../../../ul[@class='mw_bottom']", "top")
								}		
								$("./li[@class='productSocial']") {
									move_to("../../../../ul[@class='mw_bottom']", "top")
								}																					
							}
						}
					}
				}
			}
		}
	}
	
}