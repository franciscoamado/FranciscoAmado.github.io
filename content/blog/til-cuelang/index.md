---
title: "TIL: CUE"
date: "2024-01-04"
description: "CUE, a programming language for enhanced configuration and data validation"
---

[CUE](https://cuelang.org/) has been on my radar for the last year. I got the chance to use it for configuring
deployments with multiple environments.

Its' syntax is straightforward and with its [cli](https://pkg.go.dev/cuelang.org/go/cmd) one can just use it without
much hassle.

But I've recently thought that it would be good to properly learn it, go through its documentation and use
[cuetorials](https://cuetorials.com/) to better understand its tool.

Here's some notes I took from the cuetorials:

- Superset of JSON, with additional schemas, constraints and data validation.
- immutable values
- irrelevant order
- define schemas with `#<Definition>`
- union of values or schemas with `val: #Def1 & #Def2`
- disjunction of values or schemas with `hello: "world" | "bob" | "mary"`
- required, optional and default fields
  - required: `s: { val1!: _ }`
  - optional: `s: { val1?: int }`
  - default: `s: { val1: string | *"value" }`

## Why does it matter?

CUE provides a simple way to validate your data, helping to ensure that configurations adhere to the specified
constraints. It helps catch errors early in the deployment process, reducing the risk of misconfigurations. It's
designed to be concise and allows you to express complex configurations in a more straightforward and composable manner.

It helps putting the C in Infrastructure as Code.
