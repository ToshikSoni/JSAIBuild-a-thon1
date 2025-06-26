# Login to Azure
az login

# Set the correct subscription
az account set --subscription "8ff006f0-42bb-47fe-a5bc-8930eb72c518"

# Initialize azd with the environment
azd init --subscription "8ff006f0-42bb-47fe-a5bc-8930eb72c518"

# Create environment if it doesn't exist
if (-not (Test-Path -Path ".\.azure\vish-ai")) {
    Write-Host "Creating new AZD environment 'vish-ai'..."
    azd env new vish-ai
}

# Set subscription ID
azd env set AZURE_SUBSCRIPTION_ID "8ff006f0-42bb-47fe-a5bc-8930eb72c518"

# Set deployment location - this is critical for subscription-level deployments
azd env set AZURE_LOCATION "eastus2"

# Set resource group name
azd env set AZURE_RESOURCE_GROUP_NAME "rg-vish-ai"

Write-Host "Environment configured successfully! You can now run 'azd up'"
