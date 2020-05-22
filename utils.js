function isNode()
{
    return ((typeof process !== 'undefined') && (process.release.name === 'node'))
}

exports.isNode = isNode