SystemJS.config({
  paths: {
    'github:': 'jspm_packages/github/',
    'npm:': 'jspm_packages/npm/',
    'quick-tutorial/': 'modules/client/'
  },
  browserConfig: {
    'baseURL': '/',
    'bundles': {
      'public/client/javascripts/main.js': [
        'quick-tutorial/main.ts',
        'quick-tutorial/app/app.client.component.ts',
        'quick-tutorial/app/components/categories/categories.state.ts',
        'github:frankwallis/plugin-typescript@5.0.9.json',
        'quick-tutorial/app/app.client.store.ts',
        'quick-tutorial/app/app.client.component.css',
        'quick-tutorial/app/app.client.component.html',
        'quick-tutorial/app/components/components.ts',
        'quick-tutorial/app/components/categories/categories.ts',
        'quick-tutorial/app/components/categories/categories.css',
        'quick-tutorial/app/components/categories/categories.html',
        'quick-tutorial/app/components/categories/category-item/category-item.ts',
        'quick-tutorial/app/components/categories/category-item/category-item.css',
        'quick-tutorial/app/components/categories/category-item/category-item.html',
        'github:angular/bower-angular@1.5.8/angular.js',
        'github:angular/bower-angular@1.5.8.json',
        'quick-tutorial/app/components/bookmarks/bookmarks.ts',
        'quick-tutorial/app/components/bookmarks/bookmarks.css',
        'quick-tutorial/app/components/bookmarks/bookmarks.html',
        'quick-tutorial/app/components/bookmarks/save-bookmark/save-bookmark.ts',
        'quick-tutorial/app/components/bookmarks/save-bookmark/save-bookmark.css',
        'quick-tutorial/app/components/bookmarks/save-bookmark/save-bookmark.html',
        'quick-tutorial/app/common/common.ts',
        'quick-tutorial/app/common/models/categories.model.ts',
        'quick-tutorial/app/common/models/bookmarks.model.ts',
        'npm:lodash@4.16.4/lodash.js',
        'npm:lodash@4.16.4.json'
      ]
    }
  },
  devConfig: {
    'map': {
      'plugin-typescript': 'github:frankwallis/plugin-typescript@5.0.9',
      'child_process': 'npm:jspm-nodelibs-child_process@0.2.0',
      'systemjs-hot-reloader': 'github:capaj/systemjs-hot-reloader@0.6.0'
    },
    'packages': {
      'github:frankwallis/plugin-typescript@5.0.9': {
        'map': {
          'typescript': 'npm:typescript@2.0.0'
        }
      },
      'github:capaj/systemjs-hot-reloader@0.6.0': {
        'map': {
          'debug': 'npm:debug@2.2.0',
          'weakee': 'npm:weakee@1.0.0',
          'socket.io-client': 'github:socketio/socket.io-client@1.4.8'
        }
      },
      'npm:debug@2.2.0': {
        'map': {
          'ms': 'npm:ms@0.7.1'
        }
      }
    }
  },
  transpiler: 'plugin-typescript',
  typescriptOptions: {
    'tsconfig': true
  },
  packages: {
    'quick-tutorial': {
      'defaultExtension': 'ts',
      'main': 'main.ts',
      'meta': {
        '*.ts': {
          'loader': 'plugin-typescript'
        },
        '*.css': {
          'loader': 'css'
        },
        '*.html': {
          'loader': 'text'
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    'github:*/*.json',
    'npm:@*/*.json',
    'npm:*.json'
  ],
  map: {
    'angular': 'github:angular/bower-angular@1.5.8',
    'angular-animate': 'github:angular/bower-angular-animate@1.5.8',
    'angular-ui-router': 'github:angular-ui/angular-ui-router-bower@0.3.1',
    'assert': 'npm:jspm-nodelibs-assert@0.2.0',
    'buffer': 'npm:jspm-nodelibs-buffer@0.2.0',
    'constants': 'npm:jspm-nodelibs-constants@0.2.0',
    'crypto': 'npm:jspm-nodelibs-crypto@0.2.0',
    'css': 'github:systemjs/plugin-css@0.1.32',
    'events': 'npm:jspm-nodelibs-events@0.2.0',
    'fs': 'npm:jspm-nodelibs-fs@0.2.0',
    'lodash': 'npm:lodash@4.16.4',
    'ng-redux': 'npm:ng-redux@3.4.0-beta.1',
    'normalize.scss': 'npm:normalize.scss@0.1.0',
    'os': 'npm:jspm-nodelibs-os@0.2.0',
    'path': 'npm:jspm-nodelibs-path@0.2.0',
    'process': 'npm:jspm-nodelibs-process@0.2.0',
    'redux': 'npm:redux@3.6.0',
    'redux-thunk': 'npm:redux-thunk@2.1.0',
    'stream': 'npm:jspm-nodelibs-stream@0.2.0',
    'string_decoder': 'npm:jspm-nodelibs-string_decoder@0.2.0',
    'text': 'github:systemjs/plugin-text@0.0.9',
    'util': 'npm:jspm-nodelibs-util@0.2.0',
    'vm': 'npm:jspm-nodelibs-vm@0.2.0'
  },
  packages: {
    'npm:crypto-browserify@3.11.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'public-encrypt': 'npm:public-encrypt@4.0.0',
        'randombytes': 'npm:randombytes@2.0.3',
        'pbkdf2': 'npm:pbkdf2@3.0.9',
        'diffie-hellman': 'npm:diffie-hellman@5.0.2',
        'browserify-cipher': 'npm:browserify-cipher@1.0.0',
        'browserify-sign': 'npm:browserify-sign@4.0.0',
        'create-hmac': 'npm:create-hmac@1.1.4',
        'create-ecdh': 'npm:create-ecdh@4.0.0',
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:public-encrypt@4.0.0': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.3',
        'create-hash': 'npm:create-hash@1.1.2',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'parse-asn1': 'npm:parse-asn1@5.0.0',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:browserify-sign@4.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'create-hmac': 'npm:create-hmac@1.1.4',
        'inherits': 'npm:inherits@2.0.3',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'parse-asn1': 'npm:parse-asn1@5.0.0',
        'elliptic': 'npm:elliptic@6.3.2',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:create-hmac@1.1.4': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:diffie-hellman@5.0.2': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.3',
        'miller-rabin': 'npm:miller-rabin@4.0.0',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:create-hash@1.1.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'cipher-base': 'npm:cipher-base@1.0.3',
        'ripemd160': 'npm:ripemd160@1.0.1',
        'sha.js': 'npm:sha.js@2.4.5'
      }
    },
    'npm:browserify-cipher@1.0.0': {
      'map': {
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'browserify-des': 'npm:browserify-des@1.0.0',
        'browserify-aes': 'npm:browserify-aes@1.0.6'
      }
    },
    'npm:sha.js@2.4.5': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:browserify-rsa@4.0.1': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.3',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:create-ecdh@4.0.0': {
      'map': {
        'elliptic': 'npm:elliptic@6.3.2',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:parse-asn1@5.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'pbkdf2': 'npm:pbkdf2@3.0.9',
        'browserify-aes': 'npm:browserify-aes@1.0.6',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'asn1.js': 'npm:asn1.js@4.8.1'
      }
    },
    'npm:evp_bytestokey@1.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2'
      }
    },
    'npm:browserify-des@1.0.0': {
      'map': {
        'cipher-base': 'npm:cipher-base@1.0.3',
        'inherits': 'npm:inherits@2.0.3',
        'des.js': 'npm:des.js@1.0.0'
      }
    },
    'npm:browserify-aes@1.0.6': {
      'map': {
        'cipher-base': 'npm:cipher-base@1.0.3',
        'create-hash': 'npm:create-hash@1.1.2',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'inherits': 'npm:inherits@2.0.3',
        'buffer-xor': 'npm:buffer-xor@1.0.3'
      }
    },
    'npm:miller-rabin@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'brorand': 'npm:brorand@1.0.6'
      }
    },
    'npm:des.js@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:hash.js@1.0.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:stream-browserify@2.0.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'readable-stream': 'npm:readable-stream@2.1.5'
      }
    },
    'npm:jspm-nodelibs-crypto@0.2.0': {
      'map': {
        'crypto-browserify': 'npm:crypto-browserify@3.11.0'
      }
    },
    'npm:jspm-nodelibs-stream@0.2.0': {
      'map': {
        'stream-browserify': 'npm:stream-browserify@2.0.1'
      }
    },
    'npm:jspm-nodelibs-os@0.2.0': {
      'map': {
        'os-browserify': 'npm:os-browserify@0.2.1'
      }
    },
    'npm:jspm-nodelibs-buffer@0.2.0': {
      'map': {
        'buffer-browserify': 'npm:buffer@4.9.1'
      }
    },
    'npm:jspm-nodelibs-string_decoder@0.2.0': {
      'map': {
        'string_decoder-browserify': 'npm:string_decoder@0.10.31'
      }
    },
    'npm:ng-redux@3.4.0-beta.1': {
      'map': {
        'invariant': 'npm:invariant@2.2.1',
        'lodash.isobject': 'npm:lodash.isobject@3.0.2',
        'lodash.isarray': 'npm:lodash.isarray@3.0.4',
        'lodash.isplainobject': 'npm:lodash.isplainobject@3.2.0',
        'lodash.map': 'npm:lodash.map@4.6.0',
        'lodash.isfunction': 'npm:lodash.isfunction@3.0.8',
        'lodash.assign': 'npm:lodash.assign@3.2.0',
        'lodash.curry': 'npm:lodash.curry@4.1.1'
      }
    },
    'npm:invariant@2.2.1': {
      'map': {
        'loose-envify': 'npm:loose-envify@1.3.0'
      }
    },
    'npm:redux@3.6.0': {
      'map': {
        'lodash': 'npm:lodash@4.16.4',
        'loose-envify': 'npm:loose-envify@1.3.0',
        'symbol-observable': 'npm:symbol-observable@1.0.4',
        'lodash-es': 'npm:lodash-es@4.16.4'
      }
    },
    'npm:lodash.isplainobject@3.2.0': {
      'map': {
        'lodash._basefor': 'npm:lodash._basefor@3.0.3',
        'lodash.isarguments': 'npm:lodash.isarguments@3.1.0',
        'lodash.keysin': 'npm:lodash.keysin@3.0.8'
      }
    },
    'npm:lodash.assign@3.2.0': {
      'map': {
        'lodash._baseassign': 'npm:lodash._baseassign@3.2.0',
        'lodash._createassigner': 'npm:lodash._createassigner@3.1.1',
        'lodash.keys': 'npm:lodash.keys@3.1.2'
      }
    },
    'npm:lodash.keysin@3.0.8': {
      'map': {
        'lodash.isarguments': 'npm:lodash.isarguments@3.1.0',
        'lodash.isarray': 'npm:lodash.isarray@3.0.4'
      }
    },
    'npm:loose-envify@1.3.0': {
      'map': {
        'js-tokens': 'npm:js-tokens@2.0.0'
      }
    },
    'npm:lodash._baseassign@3.2.0': {
      'map': {
        'lodash.keys': 'npm:lodash.keys@3.1.2',
        'lodash._basecopy': 'npm:lodash._basecopy@3.0.1'
      }
    },
    'npm:lodash.keys@3.1.2': {
      'map': {
        'lodash.isarguments': 'npm:lodash.isarguments@3.1.0',
        'lodash.isarray': 'npm:lodash.isarray@3.0.4',
        'lodash._getnative': 'npm:lodash._getnative@3.9.1'
      }
    },
    'npm:lodash._createassigner@3.1.1': {
      'map': {
        'lodash._bindcallback': 'npm:lodash._bindcallback@3.0.1',
        'lodash.restparam': 'npm:lodash.restparam@3.6.1',
        'lodash._isiterateecall': 'npm:lodash._isiterateecall@3.0.9'
      }
    },
    'npm:readable-stream@2.1.5': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'util-deprecate': 'npm:util-deprecate@1.0.2',
        'isarray': 'npm:isarray@1.0.0',
        'string_decoder': 'npm:string_decoder@0.10.31',
        'buffer-shims': 'npm:buffer-shims@1.0.0',
        'core-util-is': 'npm:core-util-is@1.0.2',
        'process-nextick-args': 'npm:process-nextick-args@1.0.7'
      }
    },
    'npm:buffer@4.9.1': {
      'map': {
        'isarray': 'npm:isarray@1.0.0',
        'base64-js': 'npm:base64-js@1.2.0',
        'ieee754': 'npm:ieee754@1.1.8'
      }
    },
    'github:angular-ui/angular-ui-router-bower@0.3.1': {
      'map': {
        'angular': 'github:angular/bower-angular@1.5.8'
      }
    },
    'github:angular/bower-angular-animate@1.5.8': {
      'map': {
        'angular': 'github:angular/bower-angular@1.5.8'
      }
    },
    'npm:pbkdf2@3.0.9': {
      'map': {
        'create-hmac': 'npm:create-hmac@1.1.4'
      }
    },
    'npm:cipher-base@1.0.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:elliptic@6.3.2': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'inherits': 'npm:inherits@2.0.3',
        'brorand': 'npm:brorand@1.0.6',
        'hash.js': 'npm:hash.js@1.0.3'
      }
    },
    'npm:asn1.js@4.8.1': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    }
  }
});
