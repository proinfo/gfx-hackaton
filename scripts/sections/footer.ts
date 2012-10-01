$('./body') {
	$("./div[@id='footer']") {
		$("./div") {
			add_class("mw_footer" + index())
		}
		$("./div[@class='row mw_footer1']") {
			$("./div") {
				add_class("mw_row1" + index())
			}
		}
		$("./div[@class='row'][2]") {
			add_class("mw_sitemap")
		}
	}
}