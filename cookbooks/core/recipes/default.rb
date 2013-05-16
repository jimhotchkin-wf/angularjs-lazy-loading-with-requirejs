# BUILD PACKAGES
  include_recipe "nodejs"
  chef_gem "compass"
####

# npm packages
bash "npm" do
  user "root"
  code <<-EOH
    npm install -g grunt-cli
    npm install -g karma
    cd /vagrant
    npm install
  EOH
end
####