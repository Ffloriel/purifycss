class DefaultExtracter {
    extract(content) {
        return content.split(/[^a-z]/g)
    }
}

export default DefaultExtracter
