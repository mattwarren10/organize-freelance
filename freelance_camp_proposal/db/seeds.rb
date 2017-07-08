10.times do |proposal| 
	Proposal.create!(customer: "Customer#{proposal}",
					 portfolio_url: 'http://mattwarren.us',
					 tools: 'Ruby on Rails, Angular 2, and Postgres',
					 estimated_hours: (80 + proposal),
					 hourly_rate: 27,
					 weeks_to_complete: 12,
					 client_email: 'mwarren@harding.edu'
					 )
end

