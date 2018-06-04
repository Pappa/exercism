module HelloWorld exposing (helloWorld)

helloWorld : Maybe String -> String
helloWorld name =
    let outputName = Maybe.withDefault "World" name
    in
        "Hello, " ++ outputName ++ "!"