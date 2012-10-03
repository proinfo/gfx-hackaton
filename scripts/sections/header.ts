$('./body') {

	$("./div[@id='content']") {
		$("./div[@id='content-inner']") {
			$("./div[@id='breadcrumbs']/div/div/div/div[2]/a/img") {
				attribute("src", asset("images/chatAvailable.png"))
			}
		}
	}

	$("./div[@id='nav']") {
		attribute("data-ur-set", "tabs")
		attribute("data-ur-closeable", "true")
		
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
					attribute("data-ur-tabs-component", "button")
					attribute("data-ur-tab-id", "mw_menu")
				}
				insert("a", class: "mw_search-icon"){
					attribute("data-ur-tabs-component", "button")
					attribute("data-ur-tab-id", "mw_search")
				}
			}
						
		}
		insert_bottom("div", class: "mw_nav-menu"){
			wrap("div", class: "mw_nav-menu-wrapper"){
				attribute("data-ur-tabs-component", "content")
				attribute("data-ur-tab-id", "mw_menu")
			}
				
			move_here("../../div[@id='nav-inner']/ul", "top"){
				attribute("class", "mw_main-menu")
				add_class("mw_display_none")
			}
			
			insert("div", id: "container"){
				
				/*** Mens ***/
				insert("div", class: "db"){
					insert("div", id: "nav-mens"){
						attribute("class", "block")
						insert("div", class: "front side"){
							attribute("onclick", "changeClass('nav-mens')")
							insert("div", class: "wrapper"){
							}
						}
						insert("div", class: "back side"){
							insert("div", class: "wrapper"){
								insert("div", class: "wrapper"){
									insert("div", class: "mw_col1"){
										insert("a", class: "mw_title"){
											insert("span", class: "white"){
												inner("SHOP BY")
											}
											insert("span", class: "dark"){
												inner("MENS'")
											}
										}
										
										insert("a", class: "mw_tile-button"){
											inner("NEW ARRIVALS")
										}
										insert("a", class: "mw_tile-button"){
											inner("BEST SELLERS")
										}
										insert("a", class: "mw_tile-button"){
											inner("ATHLETE PICKS")
										}
										insert("a", class: "mw_tile-button"){
											inner("GIFT CARDS")
										}
										
									}
									insert("div", class: "mw_col2"){
										insert("a"){
											attribute("href", "http://mlocal.thenorthface.com/catalog/sc-gear/men-s-jackets-vests.html")
											inner("JACKETS & VESTS")
										}
										insert("a"){
											inner("SHIRTS & SWEATERS")
										}
										insert("a"){
											inner("PANTS & SHORTS")
										}
										insert("a"){
											inner("FOOTWARE")
										}
										insert("a"){
											inner("ACCESSORIES")
										}
									}
									insert("div", class: "mw_col3"){
										insert("a"){
											inner("ACTIVITY")
										}
										insert("a"){
											inner("COLLECTIONS")
										}
									}
									
								}
								insert("a", class: "goback"){
									attribute("onclick", "changeClass('nav-mens')")
									inner("See details")
								}
							}
						}
					}
				}
				
				/*** Womens ***/
				insert("div", class: "db"){
					insert("div", id: "nav-womens"){
						attribute("class", "block")
						insert("div", class: "front side"){
							attribute("onclick", "changeClass('nav-womens')")
							insert("div", class: "wrapper"){
							}
						}
						insert("div", class: "back side"){
							insert("div", class: "wrapper"){
								insert("a", class: "goback"){
									attribute("onclick", "changeClass('nav-womens')")
									inner("See details")
								}
							}
						}
					}
				}
				
				/*** Kids ***/
				insert("div", class: "db"){
					insert("div", id: "nav-kids"){
						attribute("class", "block")
						insert("div", class: "front side"){
							attribute("onclick", "changeClass('nav-kids')")
							insert("div", class: "wrapper"){
							}
						}
						insert("div", class: "back side"){
							insert("div", class: "wrapper"){
								insert("a", class: "goback"){
									attribute("onclick", "changeClass('nav-kids')")
									inner("See details")
								}
							}
						}
					}
				}
								
				/*** Equipment ***/
				insert("div", class: "db"){
					insert("div", id: "nav-equipment"){
						attribute("class", "block")
						insert("div", class: "front side"){
							attribute("onclick", "changeClass('nav-equipment')")
							insert("div", class: "wrapper"){
							}
						}
						insert("div", class: "back side"){
							insert("div", class: "wrapper"){
								insert("a", class: "goback"){
									attribute("onclick", "changeClass('nav-equipment')")
									inner("See details")
								}
							}
						}
					}
				}
				
				/*** ShopBy ***/
				insert("div", class: "db"){
					insert("div", id: "nav-shopby"){
						attribute("class", "block")
						insert("div", class: "front side"){
							attribute("onclick", "changeClass('nav-shopby')")
							insert("div", class: "wrapper"){
							}
						}
						insert("div", class: "back side"){
							insert("div", class: "wrapper"){
								insert("a", class: "goback"){
									attribute("onclick", "changeClass('nav-shopby')")
									inner("See details")
								}
							}
						}
					}
				}
				
				/*** Exploration ***/
				insert("div", class: "db"){
					insert("div", id: "nav-exploration"){
						attribute("class", "block")
						insert("div", class: "front side"){
							attribute("onclick", "changeClass('nav-exploration')")
							insert("div", class: "wrapper"){
							}
						}
						insert("div", class: "back side"){
							insert("div", class: "wrapper"){
								insert("a", class: "goback"){
									attribute("onclick", "changeClass('nav-exploration')")
									inner("See details")
								}
							}
						}
					}
				}
				
				/*** Innovation ***/
				insert("div", class: "db"){
					insert("div", id: "nav-innovation"){
						attribute("class", "block")
						insert("div", class: "front side"){
							attribute("onclick", "changeClass('nav-innovation')")
							insert("div", class: "wrapper"){
							}
						}
						insert("div", class: "back side"){
							insert("div", class: "wrapper"){
								insert("a", class: "goback"){
									attribute("onclick", "changeClass('nav-innovation')")
									inner("See details")
								}
							}
						}
					}
				}
				
				/*** Getoutdoors ***/
				insert("div", class: "db"){
					insert("div", id: "nav-getoutdoors"){
						attribute("class", "block")
						insert("div", class: "front side"){
							attribute("onclick", "changeClass('nav-getoutdoors')")
							insert("div", class: "wrapper"){
							}
						}
						insert("div", class: "back side"){						
							insert("a", class: "goback"){
								attribute("onclick", "changeClass('nav-getoutdoors')")
								inner("Back")
							}
						}						
					}
				}							
				
			}
		}
		insert_bottom("div", class: "mw_search"){
			wrap("div", class: "mw_nav-menu-wrapper"){
				attribute("data-ur-tab-id", "mw_search")
				attribute("data-ur-tabs-component", "content")
			}
			move_here("../../div[@id='nav-inner']/div[@class='search-box']", "top")
		}
	}
}