---
title: "TIL: Swift GraphQL"
date: "2022-11-28"
description: "Could we use Swift for defining a server's GraphQL schema?"
---

GraphQL is increasingly considered an industry standard and allows for creating a server-client API contract with a common language and a progressively adoption of the API by the frontends.

While building a complete product using Swift (iOS and Backend), I came to the realization that we could leverage GraphQL for easily describing our API, but generate our code to Swift on both ends of the system.

I could easily have gone with a different approach of Shared Swift Types but the flexibility of describring especialized queries/mutations and the knowledge built around GraphQL does already outweight the simplicity of having a shared Swift module.

### Enter Graphiti

Using [Graphiti](https://github.com/GraphQLSwift/Graphiti), we're able to easily create a GraphQL resolver, directly in Swift. The syntax is straightforward, your API types are simple Swift types conforming to Codable. It's one of those cases where magic appears to happen. We then create a GraphQL schema with Swift syntax.

But this is only used in our server-side Swift world. It would be great to reuse this GraphQL Swift schema on our client-side Swift application.

Unfortunately, this is not *yet* possible and can't be reused in the client-side to generate the GraphQL Models.

### Enter the "workarounds"

* On the server side, run locally apollo-cli to generate a schema.json
* On the client side, use [Apollo](https://www.apollographql.com/docs/ios/) to generate the models, based on a local contract and the server schema.
