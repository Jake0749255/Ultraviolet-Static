self.__uv$config = {
    prefix: '/uv/service/',
    bare: 'http://212.227.65.132:14976/bare/', 
    encodeUrl: JavaScriptObfuscator.encode,
    decodeUrl: JavaScriptObfuscator.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
