export const TEST_1_CONTENT = `
<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
    </body>
</html>
`

export const TEST_1_EXPECTED = [
    "DOCTYPE",
    "html",
    "head",
    "title",
    "Page",
    "Title",
    "body",
    "h1",
    "This",
    "is",
    "a",
    "Heading",
    "paragraph"
]
