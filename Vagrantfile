# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant::Config.run do |config|

  # All Vagrant configuration is done here. The most common configuration
  # options are documented and commented below. For a complete reference,
  # please see the online documentation at vagrantup.com.

  # Every Vagrant virtual environment requires a box to build off of.
  config.vm.box_url = "http://files.vagrantup.com/lucid32.box"
  config.vm.box = "lucid32"
  
  config.vm.forward_port 80, 4567

  # Alter this to fit the amount of RAM you require for your computer
  config.vm.customize ["modifyvm", :id, "--memory", "512"]
  
  # Chef solo configuration
  config.vm.provision :chef_solo do |chef|
    
    chef.recipe_url = "http://files.vagrantup.com/getting_started/cookbooks.tar.gz"
   
	chef.add_recipe('vagrant_main')
    
  end

end
