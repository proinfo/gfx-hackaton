# HTML Transformations go here

$("/html") {
  add_assets()

  rewrite_links()
  absolutize_srcs()

	$("./head") {
  	insert("meta", http-equiv: "Content-Type", content: "text/html")
    insert("meta", name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0")
    insert("meta", name: "format-detection", content: "telephone=no")
		insert("link", rel: "stylesheet", type: "text/css", media:"all and (min-width: 960px)", href: asset("stylesheets/tabland.css"))   
  }
  

  @import sections/header.ts
  @import sections/footer.ts

  @import mappings.ts
}

