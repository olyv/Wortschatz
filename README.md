1. Install angular dependencies using command `bower install`
2. Create DB with `rake db:create`
3. Populate database using command `rake db:seed`
4. Install ruby dependencies with `bundle install`
5. Start application with `rails server`

rhc app create openshiftapp ruby-2.0 mysql-5.5 --from-code=https://github.com/olyv/wortschatz.git
