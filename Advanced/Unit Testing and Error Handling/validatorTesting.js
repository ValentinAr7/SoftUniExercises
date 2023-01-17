function requestValidator(obj){

    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1,',, 'HTTP/2.0'];
    let uriRegex = /^[\w.]+$/

    if(!(obj.method && validMethods.includes(obj.method))) {
        throw new Error ('Invalid request header: Invalid Method')
    }
}