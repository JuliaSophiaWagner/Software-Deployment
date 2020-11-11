# Software Deployment - Lab 1

The ARM Template creates an azure storage account and an azure web-app for node.js (version 10.14).

To use the template, the azure CLI must first be installed. For further information see https://docs.microsoft.com/en-us/cli/azure/install-azure-cli.

Next you have to log in to your azure account with following command:

```
az login
```

Or update it to the latest version with: 

```
az upgrade
```


To execute the template the following command must be executed.

```
az deployment group create --name firstLab --resource-group lab1 --template-file "azuredeploy.json" --parameters "azuredeployment.parameters.json"
```

If there is no resource-group you have to create one first with following: 
```
az group create \
  --name [myResourceGroup] \  #add resource group name here
  --location "West Europe"
```

Now the webapp is under the following link: 
https://lab1wagnerjuliasophia.azurewebsites.net

