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
			
				insert_top("a", id: "WC_LogonLogoffLink"){						
				}
				
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
						gfx_flip("mens")
						attribute("class", "block")
						insert("div", class: "front side"){
							gfx_flip_button("mens")
						}
						insert("div", class: "back side"){
							insert("div", class: "wrapper"){
								insert("div", class: "mw_col1"){
									insert("div", class: "mw_title"){
										insert("span", class: "white"){
											inner("BUY")
										}
										insert("span", class: "dark"){
											inner("MEN")
										}
									}
									insert("a", class: "mw_tile-button"){
										inner("New arivals")
									}
									insert("a", class: "mw_tile-button"){
										inner("Best sellers")
									}
									insert("a", class: "mw_tile-button"){
										inner("Gift Cards")
									}									
								}
								insert("div", class: "mw_col2"){
									insert("a", href: "http://mlocal.thenorthface.com/catalog/sc-gear/men-s-jackets-vests.html"){
										inner("JACKETS & VESTS")										
									}
									insert("a", "SHIRTS & SWEATERS")
									insert("a", "PANTS & SHORTS")
									insert("a", "FOOTWEAR")
									insert("a", "ACCESSORIES")
								}
								insert("div", class: "mw_col3"){
									insert("a", "ACTIVITY")
									insert("a", "COLLECTIONS")
									insert("a", class: "goback"){
										gfx_flip_button("mens")
									}
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
							gfx_overlay_button("women")
						}
						insert("div", class: "back side"){
							gfx_overlay_content("women")
								insert("div", class: "wrapper"){
									insert("div", class: "mw_col1"){
										insert("div", class: "mw_title"){
											insert("span", class: "white"){
												inner("BUY")
											}
											insert("span", class: "dark"){
												inner("WOMEN")
											}
										}
										insert("a", class: "mw_tile-button"){
											inner("New arivals")
										}
										insert("a", class: "mw_tile-button"){
											inner("Best sellers")
										}
										insert("a", class: "mw_tile-button"){
											inner("Gift Cards")
										}									
									}
									insert("div", class: "mw_col2"){
										insert("a", href: "http://mlocal.thenorthface.com/catalog/sc-gear/men-s-jackets-vests.html"){
											inner("JACKETS & VESTS")										
										}
										insert("a", "SHIRTS & SWEATERS")
										insert("a", "PANTS & SHORTS")
										insert("a", "FOOTWEAR")
										insert("a", "ACCESSORIES")
									}
									insert("div", class: "mw_col3"){
										insert("a", "ACTIVITY")
										insert("a", "COLLECTIONS")
									}
								}
						}
					}
				}
				
				/*** Kids ***/
				insert("div", class: "db"){
					gfx_cube("mw_cube")
					attribute("id", "nav-kids")

					insert("div"){
						attribute("class", "front")		
						add_class("side")	
						gfx_cube_button("mw_cube", "right")					
					}
					
					insert("div"){
						attribute("class", "right")
						add_class("side")				
						
						insert("div", class: "wrapper"){
							insert("div", class: "mw_col1"){
								insert("div", class: "mw_title"){
									insert("span", class: "white"){
										inner("BUY")
									}
									insert("span", class: "dark"){
										inner("KIDS")
									}
								}
								insert("a", class: "mw_tile-button"){
									inner("New arivals")
								}
								insert("a", class: "mw_tile-button"){
									inner("Best sellers")
								}
								insert("a", class: "mw_tile-button"){
									inner("Gift Cards")
								}									
							}
							insert("div", class: "mw_col2"){
								insert("a", href: "http://mlocal.thenorthface.com/catalog/sc-gear/men-s-jackets-vests.html"){
									inner("JACKETS & VESTS")										
								}
								insert("a", "SHIRTS & SWEATERS")
								insert("a", "PANTS & SHORTS")
								insert("a", "FOOTWEAR")
								insert("a", "ACCESSORIES")
							}
							insert("div", class: "mw_col3"){
								insert("a", "ACTIVITY")
								insert("a", "COLLECTIONS")
								insert("a", class: "goback"){
									gfx_cube_button("mw_cube", "left")	
									inner("GO BACK")
								}
							}
						}
																
					}
					insert("div", class: "left"){
						add_class("side")
						
						insert_top("p", "Search 'Kids'")
						insert("form"){
							insert("input", type: "text")
							insert("input", type: "submit"){
								attribute("value", "Search")
							}
						}
						insert("a", class: "goback"){
							gfx_cube_button("mw_cube", "front")	
							inner("GO BACK")
						}
					}					
					
				}

			
				
				
								
				# /*** Equipment ***/
				# 			insert("div", class: "db"){
				# 				insert("div", id: "nav-equipment"){
				# 					attribute("class", "block")
				# 					insert("div", class: "front side"){
				# 						attribute("onclick", "changeClass('nav-equipment')")
				# 						insert("div", class: "wrapper"){
				# 						}
				# 					}
				# 					insert("div", class: "back side"){
				# 						insert("div", class: "wrapper"){
				# 							insert("a", class: "goback"){
				# 								attribute("onclick", "changeClass('nav-equipment')")
				# 								inner("See details")
				# 							}
				# 						}
				# 					}
				# 				}
				# 			}
				# 			
				# 			/*** ShopBy ***/
				# 			insert("div", class: "db"){
				# 				insert("div", id: "nav-shopby"){
				# 					attribute("class", "block")
				# 					insert("div", class: "front side"){
				# 						attribute("onclick", "changeClass('nav-shopby')")
				# 						insert("div", class: "wrapper"){
				# 						}
				# 					}
				# 					insert("div", class: "back side"){
				# 						insert("div", class: "wrapper"){
				# 							insert("a", class: "goback"){
				# 								attribute("onclick", "changeClass('nav-shopby')")
				# 								inner("See details")
				# 							}
				# 						}
				# 					}
				# 				}
				# 			}
				# 			
				# 			/*** Exploration ***/
				# 			insert("div", class: "db"){
				# 				insert("div", id: "nav-exploration"){
				# 					attribute("class", "block")
				# 					insert("div", class: "front side"){
				# 						attribute("onclick", "changeClass('nav-exploration')")
				# 						insert("div", class: "wrapper"){
				# 						}
				# 					}
				# 					insert("div", class: "back side"){
				# 						insert("div", class: "wrapper"){
				# 							insert("a", class: "goback"){
				# 								attribute("onclick", "changeClass('nav-exploration')")
				# 								inner("See details")
				# 							}
				# 						}
				# 					}
				# 				}
				# 			}
				# 			
				# 			/*** Innovation ***/
				# 			insert("div", class: "db"){
				# 				insert("div", id: "nav-innovation"){
				# 					attribute("class", "block")
				# 					insert("div", class: "front side"){
				# 						attribute("onclick", "changeClass('nav-innovation')")
				# 						insert("div", class: "wrapper"){
				# 						}
				# 					}
				# 					insert("div", class: "back side"){
				# 						insert("div", class: "wrapper"){
				# 							insert("a", class: "goback"){
				# 								attribute("onclick", "changeClass('nav-innovation')")
				# 								inner("See details")
				# 							}
				# 						}
				# 					}
				# 				}
				# 			}
				# 			
				# 			/*** Getoutdoors ***/
				# 			insert("div", class: "db"){
				# 				insert("div", id: "nav-getoutdoors"){
				# 					attribute("class", "block")
				# 					insert("div", class: "front side"){
				# 						attribute("onclick", "changeClass('nav-getoutdoors')")
				# 						insert("div", class: "wrapper"){
				# 						}
				# 					}
				# 					insert("div", class: "back side"){						
				# 						insert("a", class: "goback"){
				# 							attribute("onclick", "changeClass('nav-getoutdoors')")
				# 							inner("Back")
				# 						}
				# 					}						
				# 				}
				# 			}							
				
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