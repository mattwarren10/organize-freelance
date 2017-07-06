
10.times do |d|
	FreelanceDocument.create!(
		title: "Document #{d}", 
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore numquam a eius aut incidunt impedit, dolor temporibus corporis, sapiente, necessitatibus, maiores!", 
		file_url: "http://www.pragtob.info/rails-beginner-cheatsheet/RailsBeginnerCheatSheetSinglePage.pdf",
		image_url: "https://s3.amazonaws.com/devcamp-static/images/freelance-img.jpg"
	)
end

