---
title: "TIL: DataLoaders"
date: "2022-11-07"
description: "DataLoaders are a way to reduce requests to the database via batching and caching."
---

Saw it initially in [gqlgen#Dataloaders](https://gqlgen.com/reference/dataloaders/) but I believe the idea comes from [engineering.fb.com](https://engineering.fb.com/2014/06/10/web/open-sourcing-haxl-a-library-for-haskell/).

This dataloader sits between the application layer, e.g. a GraphQL resolver, and the datasource, providing an abstraction to the later where a single request can represent a batch of multiples.


## Why does it matter?
Having a dataloader:
* avoids redundant fetching of data, as subsequent requests with the same parameters will use the cached result.
* avoids leaking datasource-specific logic, as it abstracts away their interface. One may be dealing with a database, a third-party service, or any other.
