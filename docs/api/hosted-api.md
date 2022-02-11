
# Hosted API

The core team runs a production-ready instance of the Reservoir API, which is free to access. It currently supports Ethereum Mainnet and Rinkeby. You can view the reference docs and start playing with the API here:

https://mainnet-api-v4.reservoir.tools/documentation  
https://rinkeby-api-v4.reservoir.tools/documentation

## API Keys 

The hosted API is designed to have as few limits as possible, while also putting basic protections in place to prevent abuse. In a nutshell, there's no use-case that it should not support, and if you're running into rate limits, we will work closely with you to either improve your querying pattern or increase your limit.

You can use the API in 3 modes:

1) No API Key > Immediately start playing with the API, with basic limits
2) Instant API Key > Self-register a key for an immediately higher limit and no waiting
3) Verified API Key > After reviewing your App, we will set an even higher limit

Beyond higher limits, the main reason for using an API Key is so that we can reach out to you to provide support, such as if you're using an old version and need to upgrade.

Once you've registered an API key below, pass the following header in all requests:

```
x-api-key: {myKey}
```

## Versioning

In order to ensure backwards compatibility, any changes to API endpoints are deployed as new versions. We will strive to keep old versions available for as long as possible, while also working closely with you to help upgrade.

