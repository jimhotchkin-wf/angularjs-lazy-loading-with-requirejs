# BUILD PACKAGES
  include_recipe "nodejs"
####

# npm packages
bash "npm" do
  user "root"
  code <<-EOH
    npm install -g grunt-cli
    npm install -g karma
    cd /vagrant
    npm install grunt --save-dev
    npm install
  EOH
end
####